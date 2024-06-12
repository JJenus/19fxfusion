<script setup lang="ts">
	import axios from "axios";
	import Cleave from "cleave.js";
	import currency from "currency.js";
	import { AccountLevel } from "utils/interfaces/AccountLevel";

	const tiers = useAppSettings().accountLevels;
	const loading = ref(false);

	const form = ref<AccountLevel>({
		title: "",
		dailyLimit: 0,
		maxBalanceLimit: 0,
		accountLevel: tiers.value.length + 1,
		createdAt: null,
		updatedAt: null,
		id: undefined,
	});

	const eForm = ref<AccountLevel>({
		title: "",
		dailyLimit: 0,
		maxBalanceLimit: 0,
		accountLevel: tiers.value.length + 1,
		createdAt: null,
		updatedAt: null,
		id: undefined,
	});

	const formElement = ref();

	const editLevel = (level: AccountLevel) => {
		form.value = level;
	};

	const clear = () => {
		form.value = eForm.value;
	};

	const money = (amount: string | number) => {
		return currency(amount, { symbol: "" });
	};

	const save = () => {
		if (!formElement.value.checkValidity()) {
			errorAlert("All fields are required!");
		}

		const vData = { ...form.value };
		vData.dailyLimit = money(vData.dailyLimit).value;
		vData.maxBalanceLimit = money(vData.maxBalanceLimit).value;

		loading.value = true;

		const axiosConfig: any = {
			method: "POST",
			url: `${useRuntimeConfig().public.BE_API}/account-levels`,
			timeout: 20000,
			data: vData,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request(axiosConfig)
			.then((response) => {
				tiers.value.push(response.data);
				successAlert("Saved!");
			})
			.catch((error): void => {
				console.log(error);
				errorAlert("Error occurred");
			})
			.finally(() => (loading.value = false));
	};
</script>

<template>
	<div class="card">
		<div class="card-header">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">Setup Available Tiers</h3>
			</div>
		</div>
		<div class="card-body">
			<div
				v-if="tiers.length < 1"
				class="col-12 border d-flex align-items-center justify-content-center rounded h-100px"
			>
				<span class="fs-2 fw-bold text-muted"> No Tiers Found </span>
			</div>
			<div v-else class="row row-cols-1 row-cols-md-2 mb-8">
				<div v-for="tier in tiers" class="col">
					<div
						class="card shadow-lg"
						:class="
							form.id === tier.id
								? 'border-2 border-primary border-dashed'
								: ''
						"
					>
						<div class="card-header py-0 m-0 position-relative">
							<div class="d-flex align-items-center m-0">
								<i
									class="ki-solid ki-medal-star text-info fs-3x me-2"
								>
								</i>
								<h3 class="h3 p-0 m-0">{{ tier.title }}</h3>
							</div>
							<div class="position-absolute top-0 end-0 m-3">
								<button
									@click="editLevel(tier)"
									class="btn btn-primary btn-icon"
								>
									<i class="ki-solid ki-pencil"></i>
								</button>
							</div>
						</div>
						<div class="card-body m-0">
							<div class="mb-4 d-flex justify-content-between">
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
		<div class="card-footer">
			<div class="card-title mb-8">
				<h3 class="fw-bold m-0">Add New Tier</h3>
			</div>
			<form ref="formElement" @submit.prevent="save()">
				<div class="mb-5">
					<label class="form-label">Title</label>
					<input
						v-model="form.title"
						type="text"
						class="form-control"
						required
					/>
				</div>
				<div class="mb-5">
					<label class="form-label"
						>Tier Level (
						<small class="fs-8 text-warning"
							>this should be in line 1,2,3... where 1 is the
							smallest</small
						>
						)</label
					>
					<input
						v-model="form.accountLevel"
						type="number"
						class="form-control"
						required
					/>
				</div>
				<div class="mb-5">
					<label class="form-label">Daily limit</label>
					<input
						v-model="form.dailyLimit"
						type="text"
						class="form-control"
						required
					/>
				</div>
				<div class="mb-5">
					<label class="form-label">Max balance limit</label>
					<input
						v-model="form.maxBalanceLimit"
						type="text"
						class="form-control"
						required
					/>
				</div>

				<div class="mb-3i d-flex">
					<button
						@click="clear()"
						v-if="form.id"
						type="reset"
						class="btn btn-secondary me-3"
					>
						Clear
					</button>
					<button :disabled="loading" class="btn btn-primary w-100">
						<span v-if="!loading">Submit</span>
						<span
							v-else
							class="spinner-border spinner-border-sm"
						></span>
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
