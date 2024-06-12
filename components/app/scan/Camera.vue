<script setup lang="ts">
	import { Html5Qrcode } from "html5-qrcode";

	const html5QrCode = ref();

	const startCamera = () => {
		html5QrCode.value = new Html5Qrcode("reader", /* verbose= */ false);
		html5QrCode.value
			.start(
				{ facingMode: "environment" },
				{ fps: 10, qrbox: { width: 250, height: 250 } },
				(text: any, result: any) => {
					console.log(text, result);
				},
				(errorMessage: any) => {
					// parse error, ignore it.
					if (errorMessage.includes("streaming"))
						console.log(errorMessage);
					// html5QrCode.value = null;
				}
			)
			.catch((err: any) => {
				console.log("Error on catch");
				console.log(err);
			});
	};

	const stopCamera = () => {
		if (html5QrCode.value)
			html5QrCode.value
				.stop()
				.then((ignore: any) => {
					// QR Code scanning is stopped.
					html5QrCode.value = null;
				})
				.catch((err: any) => {
					// Stop failed, handle it.
				});
	};

	onBeforeUnmount(() => {
		stopCamera();
	});
</script>

<template>
	<div
		class="d-flex flex-column align-items-center justify-content-center w-100"
	>
		<div
			class="bg-light overflow-hidden mb-5 border border-secondary position-relative rounded-3 min-h-200px min-w-300px"
		>
			<div id="reader" class="wh-200px w-300px"></div>
			<div v-if="html5QrCode" class="scanner position-absolute"></div>
		</div>
		<div class="d-flex flex-row justify-content-center mt-6">
			<button
				@click="stopCamera"
				v-if="html5QrCode"
				class="btn btn-danger me-3"
			>
				Stop
			</button>
			<button @click="startCamera" v-else class="btn btn-primary">
				Start
			</button>
		</div>
	</div>
</template>

<style>
	#qr-video {
		display: none;
	}
	#reader video {
		border-radius: 1.5rem !important;
		/* width: 250px;
		height: 250px; */
		position: relative;
	}
	.scanner {
		z-index: 20;
		opacity: 0.1;
		width: 100%;
		height: 1px;
		background-color: rgb(0, 255, 85);
		opacity: 0.7;
		position: relative;
		box-shadow: 0px 0px 8px 10px rgb(5, 133, 47);
		top: 50%;
		animation-name: scan;
		animation-duration: 4s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
	@keyframes scan {
		0%,
		100% {
			box-shadow: 0px 0px 8px 10px rgba(30, 170, 11, 0.295);
			top: 0%;
		}
		10% {
			box-shadow: 0px 0px 8px 10px rgba(11, 170, 30, 0.295);
			top: 10%;
		}
		20% {
			box-shadow: 0px 0px 8px 10px rgba(11, 30, 170, 0.295);
			top: 20%;
		}
		30% {
			box-shadow: 0px 0px 8px 10px rgba(11, 170, 30, 0.295);
			top: 30%;
		}
		40% {
			box-shadow: 0px 0px 8px 10px rgba(30, 11, 170, 0.295);
			top: 40%;
		}
		50% {
			box-shadow: 0px 0px 8px 10px rgba(30, 170, 11, 0.295);
			top: 50%;
		}
		60% {
			box-shadow: 0px 0px 8px 10px rgba(11, 170, 30, 0.295);
			top: 60%;
		}
		70% {
			box-shadow: 0px 0px 8px 10px rgba(11, 30, 170, 0.295);
			top: 70%;
		}
		80% {
			box-shadow: 0px 0px 8px 10px rgba(30, 11, 170, 0.295);
			top: 80%;
		}
		90% {
			box-shadow: 0px 0px 8px 10px rgba(11, 170, 30, 0.295);
			top: 90%;
		}
		/* 100% {
			box-shadow: 0px 0px 8px 10px rgba(11, 170, 11, 0.295);
			top: 100%;
		}
		110% {
			box-shadow: 0px 0px 8px 10px rgba(30, 170, 11, 0.295);
			top: 110%;
		}

		120% {
			box-shadow: 0px 0px 8px 10px rgba(30, 170, 11, 0.295);
			top: 110%;
		} */
	}
</style>
