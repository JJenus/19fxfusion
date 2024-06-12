<script setup lang="ts">
	import moment from "moment";

	const user = userData().data;
	const disabled = ref({
		sl: false,
		tp: false,
	});
</script>

<template>
	<div class="mt-n13 mt-lg-n10 mx-n8 mx-lg-n10">
		<!--begin::Engage widget 12 mx-n5 -->
		<div class="position-relative mb-7">
			<ChartHighchart />
			<!-- <ChartLiteChart class="h-150px"/> -->
		</div>
		<!--end::Engage widget 12-->

		<!--begin::Chart widget 36-->
		<div class="card card-flush overflow-hidden mx-4 mx-md-0">
			<!--begin::Card body-->
			<div
				class="card-body d-flex align-items-end justify-content-center p-4"
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
									!disabled.sl ? 'text-muted' : 'text-danger'
								"
								class="fw-bold"
								>Stop Loss</span
							>

							<div
								class="form-check form-switch form-check-custom form-check-solid"
							>
								<input
									v-model="disabled.sl"
									class="form-check-input h-15px w-30px"
									type="checkbox"
								/>
							</div>
						</div>
						<div class="position-relative my-1">
							<button
								:disabled="!disabled.sl"
								type="button"
								class="btn p-0 btn-active-icon-primary btn-sm position-absolute top-50 translate-middle-y ms-4"
							>
								<i class="ki-outline fs-2 ki-minus-square"></i>
							</button>

							<input
								:disabled="!disabled.sl"
								type="text"
								class="form-control text-center w-150px fs-7 px-12"
								placeholder="1.849"
							/>

							<button
								:disabled="!disabled.sl"
								type="button"
								class="btn p-0 btn-active-icon-primary btn-sm position-absolute end-0 top-50 translate-middle-y me-3"
							>
								<i class="ki-outline ki-plus-square fs-2"></i>
							</button>
						</div>
					</div>

					<div class="order-1 order-md-2 w-100 w-md-25">
						<div
							class="d-flex align-items-end justify-content-between gap-5"
						>
							<span class="text-danger fw-bold">1.8930</span>
							<span class="text-success fw-bold">1.8930</span>
						</div>
						<div
							class="d-flex align-items-end justify-content-center gap-7"
						>
							<div>
								<button class="btn btn-danger">Sell</button>
							</div>
							<div class="position-relative my-1">
								<button
									type="button"
									class="btn p-0 btn-active-icon-primary btn-sm position-absolute top-50 translate-middle-y ms-4"
								>
									<i
										class="ki-outline fs-2 ki-minus-square"
									></i>
								</button>

								<input
									type="text"
									class="form-control text-center w-150px fs-7 px-12"
									placeholder="1.849"
								/>

								<button
									type="button"
									class="btn p-0 btn-active-icon-primary btn-sm position-absolute end-0 top-50 translate-middle-y me-3"
								>
									<i
										class="ki-outline ki-plus-square fs-2"
									></i>
								</button>
							</div>
							<div>
								<button class="btn btn-success">Buy</button>
							</div>
						</div>
					</div>

					<div class="order-3">
						<div
							class="d-flex justify-content-between align-items-end"
						>
							<span
								:class="
									!disabled.tp ? 'text-muted' : 'text-success'
								"
								class="fw-bold"
								>Take profit</span
							>

							<div
								class="form-check form-switch form-check-custom form-check-solid"
							>
								<input
									v-model="disabled.tp"
									class="form-check-input h-15px w-30px"
									type="checkbox"
								/>
							</div>
						</div>
						<div class="position-relative my-1">
							<button
								:disabled="!disabled.tp"
								type="button"
								class="btn p-0 btn-active-icon-primary btn-sm position-absolute top-50 translate-middle-y ms-4"
							>
								<i class="ki-outline fs-2 ki-minus-square"></i>
							</button>

							<input
								:disabled="!disabled.tp"
								type="text"
								class="form-control text-center w-150px fs-7 px-12"
								placeholder="1.849"
							/>

							<button
								:disabled="!disabled.tp"
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
