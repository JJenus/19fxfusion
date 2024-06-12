<script setup lang="ts"></script>
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
			<div class="card w-100 w-lg-50 h-100 card-stretched">
				<div class="card-body">
					<div
						class="d-flex justify-content-between fw-bold fs-8 mb-5"
					>
						<div class="">Buy 0.03 lots</div>
						<div>
							1.07897
							<i class="ki-solid ki-arrow-right mx-2"> </i>
							1.09877
						</div>
					</div>
					<div
						class="d-flex justify-content-between fw-bold fs-3 mb-3"
					>
						<div class="">EURUSD</div>
						<div class="text-success">$0.24</div>
					</div>
					<div
						class="d-flex justify-content-between fw-bold fs-7 mb-3"
					>
						<div class="">Open time</div>
						<div class="">2024.06.12 19:11</div>
					</div>
					<div
						class="d-flex justify-content-between fw-bold fs-7 mb-3"
					>
						<div class="">Close time</div>
						<div class="">2024.06.12 19:11</div>
					</div>
					<div
						class="d-flex justify-content-between fw-bold fs-7 mb-3"
					>
						<div class="">Order ID</div>
						<div class="">1827849</div>
					</div>
					<div
						class="d-flex justify-content-between fw-bold fs-7 mb-3"
					>
						<div class="">Closed By</div>
						<div class="">Stop Loss</div>
					</div>
				</div>
				<div class="card-footer p-4 d-flex justify-content-end align-items-center">
					<span class="fw-bold me-2">Close</span>
                    <i class="ki-solid ki-cross-square fs-2 cursor-pointer hover-scale text-danger"> </i>
				</div>
			</div>
		</div>
	</div>
</template>
