<script setup lang="ts">
	import moment from "moment";
	import { ClosedBy, Trade, TradeStatus } from "~/utils/interfaces/Trade";

	const props = defineProps<{ order: Trade }>();

	const formatOrderTime = (datetime: string) => {
		return moment(datetime).format("YYYY.MM.DD HH.mm");
	};

	const closeTrade = () => {
		props.order.status = TradeStatus.CLOSED;
		props.order.closedBy = ClosedBy.TRADER;
	};
</script>

<template>
	<div class="card h-100 card-stretched">
		<div class="card-body h-100">
			<div class="d-flex justify-content-between fw-bold fs-8 mb-5">
				<div class="">{{ order.tradeType }} {{ order.lots }} lots</div>
				<div>
					{{ order.entryPrice }}
					<i class="ki-solid ki-arrow-right mx-2"> </i>
					1.09877
				</div>
			</div>
			<div class="d-flex justify-content-between fw-bold fs-3 mb-3">
				<div class="">{{ order.currencyPair }}</div>
				<div class="text-success">$0.24</div>
			</div>
			<div class="d-flex justify-content-between fw-bold fs-7 mb-3">
				<div class="">Open time</div>
				<div class="">{{ formatOrderTime(order.openTime!) }}</div>
			</div>
			<div
				v-if="order.closeTime && order.status === TradeStatus.CLOSED"
				class="d-flex justify-content-between fw-bold fs-7 mb-3"
			>
				<div class="">Close time</div>
				<div class="">{{ formatOrderTime(order.closeTime) }}</div>
			</div>
			<div class="d-flex justify-content-between fw-bold fs-7 mb-3">
				<div class="">Order ID</div>
				<div class="">{{ order.id }}</div>
			</div>
			<div
				v-if="order.status === TradeStatus.CLOSED"
				class="d-flex justify-content-between fw-bold fs-7 mb-3"
			>
				<div class="">Closed By</div>
				<div class="">{{ order.closedBy }}</div>
			</div>
		</div>
		<div @click="closeTrade()" class="card-footer p-4">
			<div
				class="d-flex justify-content-end align-items-center cursor-pointer hover-raise"
				v-if="order.status === TradeStatus.OPEN"
			>
				<span class="fw-bold me-2">Close</span>
				<i class="ki-solid ki-cross-square fs-2 text-danger"> </i>
			</div>
			<div v-else class="text-center">
				<span class="text-muted fw-bold">Closed</span>
			</div>
		</div>
	</div>
</template>
