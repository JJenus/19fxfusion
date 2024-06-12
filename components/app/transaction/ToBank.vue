<script setup lang="ts">
	import { Transaction } from "utils/interfaces/Transaction";

	const form = useState<Transaction>("transaction-form");
</script>

<template>
	<div class="row row-cols-1 row-cols-lg-2 g-4">
		<div class="col">
			<input
				v-model="form.beneficiary.bank"
				name="bank_name"
				type="text"
				placeholder="Bank Name"
				class="form-control disabled money-input fs-5 form-control fw-bold form-control-solid"
			/>
		</div>
		<div class="col">
			<input
				required
				v-model="form.beneficiary.name"
				name="account_holder_name"
				type="text"
				placeholder="Account Holder Name"
				class="form-control disabled money-input fs-5 form-control fw-bold form-control-solid"
			/>
		</div>
		<div class="col">
			<input
				required
				v-model="form.beneficiary.destinationAccount"
				name="account_number"
				type="text"
				placeholder="Account Number"
				class="form-control disabled money-input fs-5 form-control fw-bold form-control-solid"
			/>
		</div>
		<div class="col">
			<input
				name="routing_number"
				type="text"
				placeholder="Routing Number (optional)"
				class="form-control disabled money-input fs-5 form-control fw-bold form-control-solid"
			/>
			<div class="text-end d-none pe-3 fs-1">
				<span class="fs-sm text-muted"
					>Required only if the receiving bank requires it</span
				>
			</div>
		</div>
	</div>
</template>
