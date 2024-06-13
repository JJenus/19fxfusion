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
			url: `${appConfig.public.BE_API}/transactions/${userId}`,
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
	<!--begin::Engage widget 12-->
	<div class="card card-custom border-0 min-h-450px h-md-100 mb-5 mb-lg-10">
		<!--begin::Body-->
		<div class="card-body ps-xl-15">
			<h1 class="text-center h1 pt-4 fw-bold mb-8">Transactions</h1>

			<div v-if="transactions.length == 0" class="text-muted text-center fw-bold">
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
</template>
