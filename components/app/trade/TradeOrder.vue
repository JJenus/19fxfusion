<script setup lang="ts">
	const fxApp = useFxApp();
	const trade = fxApp.currentTrade;
	const placeTrade = () => {};
</script>

<template>
	<div class="d-flex align-items-end justify-content-between gap-5">
		<span class="text-danger fw-bold">{{ trade.entryPrice }}</span>
		<span class="text-success fw-bold">1.8930</span>
	</div>
	<div class="d-flex align-items-end justify-content-center gap-7">
		<div>
			<button class="btn btn-danger">Sell</button>
		</div>
		<div class="position-relative my-1">
			<button
				type="button"
				class="btn p-0 btn-active-icon-primary btn-sm position-absolute top-50 translate-middle-y ms-4"
			>
				<i class="ki-outline fs-2 ki-minus-square"></i>
			</button>

			<input
				type="text"
				class="form-control text-center w-150px fs-7 px-12"
				placeholder="1.849"
			/>

			<button
				type="button"
				class="btn p-0 btn-active-icon-primary btn-sm position-absolute end-0 top-50 translate-middle-y me-2"
			>
				<i class="ki-outline ki-plus-square fs-2"></i>
			</button>
		</div>
		<div>
			<button class="btn btn-success">Buy</button>
		</div>
	</div>
</template>
