<script setup lang="ts">
	import axios from "axios";
	import currency from "currency.js";

	const props = defineProps({
		amount: {
			type: String,
			required: true,
		},
	});

	const recipient = useState<any>("transfer-recipient");

	const userFound = useState<string | boolean>(
		"transfer-recipient-found",
		() => ""
	);
	const searching = ref(false);

	const getBAmount = () => {
		let cAmount = props.amount || 0;
		const amount = currency(cAmount, {
			symbol: "",
		}).format();
		return amount;
	};

	const requestUser = () => {
		searching.value = true;
		const axiosConfig = {
			method: "post",
			data: {
				email: recipient.value.email,
			},
			url: `${useRuntimeConfig().public.BE_API}/users/find`,
			timeout: 15000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request(axiosConfig)
			.then((response) => {
				const data = response.data;
				console.log("Found", data);
				recipient.value = data;
				// console.log(data);
				userFound.value = data.name;
			})
			.catch((error) => {
				// console.log(error);
				userFound.value = false;
			})
			.finally(() => {
				searching.value = false;
			});
	};

	const searchUser = () => {
		if (searching.value) {
			return;
		}
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!regex.test(recipient.value.email)) return;
		console.log("Valid email");
		requestUser();
	};
</script>

<template>
	<div>
		<div class="mb-5">
			<input
				@input="searchUser()"
				v-model="recipient.email"
				name="email"
				type="text"
				placeholder="Enter email: jon@gmail.com"
				class="form-control disabled money-input fs-5 form-control fw-bold form-control-solid"
			/>
			<div
				:class="!userFound ? 'text-danger' : ''"
				class="text-end pe-3 fs-1"
			>
				<span
					v-if="searching"
					class="spinner-border spinner-border-sm text-muted"
				></span>
				<span class="fs-sm" v-if="userFound === false && !searching"
					>User doesn't exist</span
				>
			</div>
		</div>

		<div v-if="userFound" style="margin-bottom: 15px" bis_skin_checked="1">
			<!--begin:Title-->
			<h3 class="mb-3" style="color: #181c32">Transfer</h3>
			<!--end:Title-->

			<!--begin:Items-->
			<div style="padding-bottom: 9px" bis_skin_checked="1">
				<!--begin:Item-->
				<div
					style="
						display: flex;
						justify-content: space-between;
						color: #7e8299;
						font-size: 14px;
						font-weight: 500;
						margin-bottom: 8px;
					"
					bis_skin_checked="1"
				>
					<!--begin:Description-->
					<div
						style="font-family: Arial, Helvetica, sans-serif"
						bis_skin_checked="1"
					>
						Amount
					</div>
					<!--end:Description-->

					<!--begin:Total-->
					<div
						class="text-end fw-bold"
						style="font-family: Arial, Helvetica, sans-serif"
						bis_skin_checked="1"
					>
						${{ getBAmount() }}
					</div>
					<!--end:Total-->
				</div>
				<!--end:Item-->

				<!--begin:Item-->
				<div
					style="
						display: flex;
						justify-content: space-between;
						color: #7e8299;
						font-size: 14px;
						font-weight: 500;
					"
					bis_skin_checked="1"
				>
					<!--begin:Description-->
					<div
						style="font-family: Arial, Helvetica, sans-serif"
						bis_skin_checked="1"
					>
						To:
					</div>
					<!--end:Description-->

					<!--begin:Total-->
					<div
						class="text-end"
						style="font-family: Arial, Helvetica, sans-serif"
						bis_skin_checked="1"
					>
						{{ recipient.name }}
						<div class="fw-bold">
							{{ recipient.email }}
						</div>
					</div>
					<!--end:Total-->
				</div>
				<!--end:Item-->

				<!--begin::Separator-->
				<div
					class="separator separator-dashed"
					style="margin: 15px 0"
					bis_skin_checked="1"
				></div>
				<!--end::Separator-->
			</div>
			<!--end:Items-->
		</div>
	</div>
</template>
