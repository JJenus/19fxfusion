<script setup lang="ts">
	import { TradeStatus } from "~/utils/interfaces/Trade";

	const fxApp = useFxApp();
	const orders = fxApp.orders;
	const filterOrder = ref(TradeStatus.ALL);

	const filterOrderBtn = (cond: TradeStatus) => {
		filterOrder.value = cond;
	};

	const renderOrders = () => {
		return orders.value.filter((order) => {
			if (filterOrder.value == TradeStatus.ALL) return order;
			return order.status === filterOrder.value;
		});
	};
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
								class="ki-outline ki-brifecase-timer fs-2x text-danger"
							></i>
						</div>
					</div>
					<!--end::Icon-->

					<!--begin::Title-->
					<div class="d-flex flex-column">
						<h2 class="mb-1">Orders</h2>
						<div class="text-muted fw-bold d-noine">
							<span
								@click="filterOrderBtn(TradeStatus.ALL)"
								:class="
									filterOrder === TradeStatus.ALL
										? 'text-info'
										: ''
								"
								class="cursor-pointer"
								>All</span
							>
							<span class="mx-3">|</span>
							<span
								@click="filterOrderBtn(TradeStatus.OPEN)"
								:class="
									filterOrder === TradeStatus.OPEN
										? 'text-info'
										: ''
								"
								class="cursor-pointer"
								>Open</span
							>
							<span class="mx-3">|</span>
							<span
								@click="filterOrderBtn(TradeStatus.CLOSED)"
								:class="
									filterOrder === TradeStatus.CLOSED
										? 'text-info'
										: ''
								"
								href="#"
								class="cursor-pointer"
								>Closed</span
							>
						</div>
					</div>
					<!--end::Title-->
				</div>
			</div>
		</div>

		<!-- PREFERENCES -->
		<div class="row row-cols-1 row-cols-lg-2">
			<div
				v-for="order in renderOrders()"
				:key="order.id"
				class="col mb-5 h-100"
			>
				<AppTradeOrder :order="order" />
			</div>
		</div>
	</div>
</template>
