<script setup lang="ts">
	import Cleave from "cleave.js";

	// Variables
	const moneyInput = ref();
	const cleave = ref();

	const form = ref({
		amount: "",
	});
	const buttons = [
		{
			num: 1,
		},
		{
			num: 2,
		},
		{
			num: 3,
		},
		{
			num: 4,
		},
		{
			num: 5,
		},
		{
			num: 6,
		},
		{
			num: 7,
		},
		{
			num: 8,
		},
		{
			num: 9,
		},
		{
			num: ".",
		},
		{
			num: 0,
		},
	];
	const startDelete = ref(false);

	// Functions

	const addAmount = (num: number | string) => {
		const newValue = form.value.amount + num;
		form.value.amount = newValue;

		cleave.value.setRawValue(newValue);
	};

	const delNum = async () => {
		if (startDelete.value) {
			await new Promise((resolve) => setTimeout(resolve, 160));
			console.log("Del");
			form.value.amount = form.value.amount.slice(0, -1);
			cleave.value.setRawValue(form.value.amount);

			requestAnimationFrame(delNum);
		}
	};

	const stopDel = () => {
		console.log("Stopped");
		startDelete.value = false;
	};
	const startDel = () => {
		startDelete.value = true;
		delNum(); // Start the function initially
	};
	const enterAmount = (event: any) => {
		const num: string = moneyInput.value.value.replace(/[a-zA-Z]/g, "");
		if (num.includes(".")) {
			const part: string[] = num.split(".");
			form.value.amount = part[0] + "." + part[1].slice(0, 2);
			console.log(form.value.amount);
		}
	};

	onMounted(() => {
		// console.log("Trying luck they say")
		cleave.value = new Cleave(moneyInput.value, {
			numeral: true,
			numeralThousandsGroupStyle: "thousand",
			numeralDecimalMark: ".",
			numeralDecimalScale: 2, // Number of decimal places
		});
	});
</script>

<template>
	<div class="row flex-row row-cols-3 justify-content-end">
		<div
			v-for="btn in buttons"
			class="col justify-content-center d-flex mb-4"
		>
			<button
				@click="addAmount(btn.num)"
				class="btn btn-active-light-primary p-0 btn-icon fw-bold fs-2"
			>
				{{ btn.num }}
			</button>
		</div>
		<div class="col justify-content-center d-flex mb-4">
			<button
				@mouseup="stopDel"
				@mousedown="startDel"
				class="btn btn-active-light-danger btn-icon-danger btn-icon fw-bold fs-2"
			>
				<i class="ki-solid ki-arrow-left fs-2x fw-bold"></i>
			</button>
		</div>
	</div>
</template>
