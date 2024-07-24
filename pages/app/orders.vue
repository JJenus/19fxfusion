<script setup lang="ts">
	const fxApp = useFxApp();
	const orders = fxApp.orders;
</script>
<template>
	<div>
		<div
			class="card card-flush pb-0 bgi-position-y-center bgi-no-repeat mb-10"
		>
			<!--begin::Card header-->
			<div class="card-body pt-10 mb-0">
				<div class="d-flex align-items-center">
					<!--begin::Icon-->
					<div class="symbol symbol-circle me-5">
						<div
							class="symbol-label bg-transparent text-primary border border-secondary border-dashed"
						>
							<i
								class="ki-outline ki-brifecase-timer fs-2x text-primary"
							></i>
						</div>
					</div>
					<!--end::Icon-->

					<!--begin::Title-->
					<div class="d-flex flex-column">
						<h2 class="mb-1">Orders</h2>
						<div class="text-muted fw-bold d-noine">
							<span class="text-info cursor-pointer">Open</span>
							<span class="mx-3">|</span>
							<span href="#" class="cursor-pointer">Closed</span>
						</div>
					</div>
					<!--end::Title-->
				</div>
			</div>
		</div>

		<!-- PREFERENCES -->
		<div class="d-flex gap-5">
			<AppTradeOrder v-for="order in orders" :order="order" :key="order.id" />
		</div>
	</div>
</template>
