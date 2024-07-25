<script setup lang="ts">
	import currency from "currency.js";

	const fxApp = useFxApp();

	const user = userData().data;
	const disabled = fxApp.pnLAction;
	const loadingChat = ref(true);

	enum LotA {
		ADD,
		SUB,
	}

	const slAction = (action: LotA) => {
		const newLot =
			action === LotA.ADD
				? disabled.value.slTp.sl + 0.05
				: disabled.value.slTp.sl - 0.05;
		disabled.value.slTp.sl = currency(
			currency(newLot).format({ symbol: "", precision: 5 })
		).value;
	};

	const tpAction = (action: LotA) => {
		const newLot =
			action === LotA.ADD
				? disabled.value.slTp.tp + 0.05
				: disabled.value.slTp.tp - 0.05;
		disabled.value.slTp.tp = currency(
			currency(newLot).format({ symbol: "", precision: 5 })
		).value;
	};

	onMounted(() => {
		setTimeout(() => {
			loadingChat.value = false;
		}, 2000);
	});
</script>

<template>
	<div class="mt-n13 mt-lg-n10 mx-n8 mx-lg-n10">
		<!--begin::Engage widget 12 mx-n5 -->
		<div class="position-relative mb-7 chat-height">
			<div
				v-if="loadingChat"
				class="h-100 position-absolute h-100 w-100 top-0 start-0 d-flex align-items-center justify-content-center"
			>
				<span
					class="spinner-border spinner-border-smo z-index-3 text-muted"
				></span>
			</div>
			<ChartHighchart class="h-100" />
			<!-- <ChartLiteChart class="h-150px"/> -->
		</div>
		<!--end::Engage widget 12-->

		<!--begin::Chart widget 36-->
		<div class="card card-flush overflow-hidden mx-4 mx-md-0">
			<!--begin::Card body-->
			<div
				class="card-body d-flex align-items-end justify-content-center p-4 py-lg-9"
			>
				<div
					class="d-flex justify-content-between gap-5 flex-wrap"
					action=""
				>
					<div class="order-2 order-md-1">
						<div
							class="d-flex justify-content-between align-items-end"
						>
							<span
								:class="
									!disabled.status.sl
										? 'text-muted'
										: 'text-danger'
								"
								class="fw-bold"
								>Stop Loss</span
							>

							<div
								class="form-check form-switch form-check-custom form-check-solid"
							>
								<input
									v-model="disabled.status.sl"
									class="form-check-input h-15px w-30px"
									type="checkbox"
								/>
							</div>
						</div>
						<div class="position-relative my-1">
							<button
								:disabled="!disabled.status.sl"
								@click="slAction(LotA.SUB)"
								type="button"
								class="btn p-0 btn-active-icon-primary btn-sm position-absolute top-50 translate-middle-y ms-4"
							>
								<i class="ki-outline fs-2 ki-minus-square"></i>
							</button>

							<input
								:disabled="!disabled.status.sl"
								:value="disabled.slTp.sl"
								type="text"
								class="form-control text-center w-150px fs-7 px-12"
							/>

							<button
								:disabled="!disabled.status.sl"
								@click="slAction(LotA.ADD)"
								type="button"
								class="btn p-0 btn-active-icon-primary btn-sm position-absolute end-0 top-50 translate-middle-y me-3"
							>
								<i class="ki-outline ki-plus-square fs-2"></i>
							</button>
						</div>
					</div>

					<div class="order-1 order-md-2 w-100 w-md-25">
						<AppTradeAction></AppTradeAction>
					</div>

					<div class="order-3">
						<div
							class="d-flex justify-content-between align-items-end"
						>
							<span
								:class="
									!disabled.status.tp
										? 'text-muted'
										: 'text-success'
								"
								class="fw-bold"
								>Take profit</span
							>

							<div
								class="form-check form-switch form-check-custom form-check-solid"
							>
								<input
									v-model="disabled.status.tp"
									class="form-check-input h-15px w-30px"
									type="checkbox"
								/>
							</div>
						</div>
						<div class="position-relative my-1">
							<button
								:disabled="!disabled.status.tp"
								@click="tpAction(LotA.SUB)"
								type="button"
								class="btn p-0 btn-active-icon-primary btn-sm position-absolute top-50 translate-middle-y ms-4"
							>
								<i class="ki-outline fs-2 ki-minus-square"></i>
							</button>

							<input
								:disabled="!disabled.status.tp"
								type="text"
								class="form-control text-center w-150px fs-7 px-12"
								:value="disabled.slTp.tp"
							/>

							<button
								:disabled="!disabled.status.tp"
								@click="tpAction(LotA.ADD)"
								type="button"
								class="btn p-0 btn-active-icon-primary btn-sm position-absolute end-0 top-50 translate-middle-y me-3"
							>
								<i class="ki-outline ki-plus-square fs-2"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
			<!--end::Card body-->
		</div>
		<!--end::Chart widget 36-->
	</div>
</template>

<style scoped>
	.chat-height {
		height: 70vh !important;
	}

	@media (min-width: 586) {
		.chat-height {
			height: 75vh !important;
		}
	}
</style>
