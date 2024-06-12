<script setup lang="ts">
	import currency from "currency.js";

	const user = userData().data;
	const accountLevel = userData().account.value.accountLevel;
	const tiers = useAppSettings().accountLevels;

	const money = (amount: string | number) => {
		return currency(amount, { symbol: "" }).format();
	};
</script>
<template>
	<div>
		<!--begin::Engage widget 12-->
		<div class="card card-custom border-0 h-md-100 mb-5 mb-lg-10">
			<div
				class="card-header border-0 text-center d-flex flex-column fs-6 justify-content-center p-4"
			>
				<h1 class="text-center h2 pt-4 fw-bold">Account Information</h1>
				<div class="text-muted">View your transaction limits</div>
				<div
					class="d-flex align-items-center justify-content-center mt-5"
				>
					<button
						class="btn btn-primary"
						data-bs-toggle="modal"
						data-bs-target="#upgrade-account"
					>
						Upgrade account
					</button>
				</div>
			</div>
			<!--begin::Body-->
			<div class="card-body ps-xl-15 min-h-400px">
				<div class="row g-5 row-cols-1">
					<div v-for="tier in tiers" class="col">
						<div
							:class="
								accountLevel === tier.accountLevel
									? 'card-custom bg-light-primary'
									: ''
							"
							class="card"
						>
							<div class="card-header py-0 m-0">
								<div class="d-flex align-items-center m-0">
									<i
										:class="
											accountLevel === tier.accountLevel
												? 'text-success'
												: 'text-info'
										"
										class="ki-solid ki-medal-star fs-3x me-2"
									>
									</i>
									<h3 class="h3 p-0 m-0">{{ tier.title }}</h3>
									<span
										v-if="
											accountLevel === tier.accountLevel
										"
										class="badge bg-success ms-3"
										>active</span
									>
								</div>
							</div>
							<div class="card-body m-0">
								<div
									class="mb-4 d-flex justify-content-between"
								>
									<div class="text-muted">
										Daily Transaction Limit
									</div>
									<div class="fw-bold ms-auto text-end">
										{{ money(tier.dailyLimit) }}
									</div>
								</div>
								<div class="d-flex justify-content-between">
									<div class="text-muted">
										Maximum Account Balance
									</div>
									<div class="fw-bold ms-auto text-end">
										{{ money(tier.maxBalanceLimit) }}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--end::Body-->
		</div>
		<!--end::Engage widget 12-->
		<AppUpgradeAccount />
	</div>
</template>
