<script setup lang="ts">
	import axios from "axios";
	import currency from "currency.js";

	const appConfig = useRuntimeConfig();

	const transactions = userData().transactions;
	const userId = useAuth().userData.value?.userId;
	const received = ref(0);
	const sent = ref(0);

	const calc = () => {
		received.value = 0;
		sent.value = 0;
		transactions.value.forEach((e) => {
			if (e.receiverId === userId) {
				received.value += e.amount;
			} else {
				sent.value += e.amount;
			}
		});
	};

	calc();

	const fetchTransactions = () => {
		const axiosConfig = {
			method: "get",
			url: `${appConfig.public.BE_API}/transactions/user/${userId}`,
			timeout: 15000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request(axiosConfig)
			.then((response) => {
				const data = response.data.sort(
					(a: any, b: any) =>
						new Date(b.createdAt).getTime() -
						new Date(a.createdAt).getTime()
				);
				transactions.value = data;
				calc();
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getAmount = (cAmount: number) => {
		cAmount = cAmount || 0;

		const amount = currency(cAmount, {
			symbol: "",
		}).format();
		return amount;
	};

	onMounted(() => {
		fetchTransactions();
	});
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
								class="ki-solid ki-arrows-loop fs-2x text-danger"
							></i>
						</div>
					</div>
					<!--end::Icon-->

					<!--begin::Title-->
					<div class="d-flex flex-column">
						<h2 class="mb-1">Transactions</h2>
					</div>
					<!--end::Title-->
				</div>
			</div>
		</div>
		<!--begin::Engage widget 12-->
		<div
			class="card card-custom border-0 min-h-600px min-h-lg-700 mb-5 mb-lg-10 shadow"
		>
			<!--begin::Body-->
			<div class="card-body ps-xl-15">
				<div
					v-if="transactions.length == 0"
					class="text-muted text-center fw-bold"
				>
					No transaction
				</div>
				<div class="d-nonie">
					<AppTransactionEntry
						:showDetails="true"
						v-for="transact in transactions"
						:transaction="transact"
					/>
				</div>
			</div>
			<!--end::Body-->
		</div>
		<!--end::Engage widget 12-->
	</div>
</template>
