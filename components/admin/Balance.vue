<script setup>
	import currency from "currency.js";

	const balance = userData().account;

	const getBalance = () => {
		let cAmount = balance.value.amount || 0;

		const amount = currency(cAmount, {
			symbol: "",
		}).format();
		return amount;
	};

	onBeforeMount(() => {
		if (!balance.value.amount) {
			userData().fetchBalance();
		}
	});
</script>

<template>
	<div>
		<!--begin::Title-->
		<div class="card-title mb-7 d-none d-lg-block">
			<span class="widget-title fw-bold fs-4">
				My Balance
				<i class="ki-outline ki-question-2 fs-3 text-primary ms-1"></i>
			</span>
		</div>
		<!--end::Title-->

		<!--begin::Info-->
		<div class="d-flex align-items-center mb-8">
			<!--begin::Currency-->
			<span class="fs-3 fw-semibold text-gray-400 me-1 align-self-start"
				>$</span
			>
			<!--end::Currency-->

			<!--begin::Amount-->
			<span
				v-if="balance.amount !== null"
				class="page-title fs-2tx fw-bold me-2 lh-1 ls-n2"
				>{{ getBalance() }}</span
			>
			<span
				v-else
				class="spinner-border spinner-border-sm text-muted"
			></span>

			<!--end::Amount-->
		</div>
		<!--end::Info-->

		<!--begin::Text-->
		<div class="widget-desc fw-bold mb-8 d-none">
			<a href="#" class="text-success me-2">+6.72%</a>
			$835.32 vs Last Week
		</div>
		<!--end::Text-->

		<!--begin::Action-->
		<div class="mb-2 d-flex">
			<a
				role="button"
				class="btn btn-sm btn-danger fw-semibold me-2"
				style="background-color: #ff5d53"
				data-bs-toggle="modal"
				data-bs-target="#kt_modal_topup_admin"
			>
				Top Up Balance
			</a>
		</div>

		<!-- data-bs-toggle="modal"
				data-bs-target="#kt_modal_upgrade_plan" -->
		<!--end::Action-->
	</div>
</template>
