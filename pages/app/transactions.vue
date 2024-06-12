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
	<div class="card card-custom border-0 min-h-500px h-md-100 mb-5 mb-lg-10">
		<!--begin::Body-->
		<div class="card-body ps-xl-15">
			<h1 class="text-center h1 pt-4 fw-bold mb-8">Transactions</h1>
			<div class="d-flex flex-row justify-content-between mb-5">
				<div>
					<!--begin::Title-->
					<div class="card-title mb-2">
						<div
							class="widget-title fw-bold fs-4 d-flex align-items-center"
						>
							<span>Received</span>

							<i
								class="ki-duotone ki-double-left fs-1 text-success ms-2"
							>
								<i class="path1"></i>
								<i class="path2"></i>
							</i>
						</div>
					</div>
					<!--end::Title-->

					<!--begin::Info-->
					<div class="d-flex align-items-center mb-8">
						<!--begin::Currency-->
						<span
							class="fs-3 fw-semibold text-gray-400 me-1 align-self-start"
							>$</span
						>
						<!--end::Currency-->

						<!--begin::Amount-->
						<span class="page-title fs-2 fw-bold me-2 lh-1 ls-n2">{{
							getAmount(received)
						}}</span>
						<!--end::Amount-->
					</div>
				</div>
				<div>
					<!--begin::Title-->
					<div class="card-title mb-2">
						<div
							class="widget-title fw-bold fs-4 d-flex align-items-center"
						>
							<i
								class="ki-duotone ki-double-right fs-1 text-danger me-2"
							>
								<i class="path1"></i>
								<i class="path2"></i>
							</i>
							<span>Sent</span>
						</div>
					</div>
					<!--end::Title-->

					<!--begin::Info-->
					<div class="d-flex align-items-center mb-8">
						<!--begin::Currency-->
						<span
							class="fs-3 fw-semibold text-gray-400 me-1 align-self-start"
							>$</span
						>
						<!--end::Currency-->

						<!--begin::Amount-->
						<span class="page-title fs-2 fw-bold me-2 lh-1 ls-n2">{{
							getAmount(sent)
						}}</span>
						<!--end::Amount-->
					</div>
				</div>
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
