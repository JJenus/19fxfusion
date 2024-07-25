<script setup lang="ts">
	import {
		ClosedBy,
		Trade,
		TradeStatus,
		TradeType,
	} from "~/utils/interfaces/Trade";
	import currency from "currency.js";

	const ws = useWebsocket();
	const user = userData().data;
	const fxApp = useFxApp();
	const trade = fxApp.currentMarket;

	const buyLoader = ref(false);
	const sellLoader = ref(false);
	const countDown = ref(10);

	const initTrade: Trade = {
		user: { id: user.value.id! },
		lots: 0,
		tradeType: TradeType.LONG,
		entryPrice: 0,
		profitLoss: 0,
		status: TradeStatus.OPEN,
		closedBy: ClosedBy.OPEN,
	};

	const placeTrade = ref(initTrade);

	const lots = ref(0.02);

	enum LotA {
		ADD,
		SUB,
	}

	const initTradeData = () => {
		trade.value.close = fxApp.currentMarket.value.close;
		trade.value.currencyPair = fxApp.currentMarket.value.currencyPair;
		trade.value.open = fxApp.currentMarket.value.open;
		trade.value.high = fxApp.currentMarket.value.high;
		trade.value.low = fxApp.currentMarket.value.low;
		trade.value.volume = fxApp.currentMarket.value.volume;
		trade.value.timestamp = fxApp.currentMarket.value.timestamp;
		trade.value.volumeWeighted = fxApp.currentMarket.value.volumeWeighted;
	};

	const lotBtn = (action: LotA) => {
		const newLot =
			action === LotA.ADD ? lots.value + 0.01 : lots.value - 0.01;
		lots.value = Number(currency(newLot).format({ symbol: "" }));
	};

	const setTrade = () => {
		placeTrade.value.lots = lots.value;
		placeTrade.value.currencyPair = trade.value.currencyPair;
		if (fxApp.pnLAction.value.status.tp) {
			placeTrade.value.takeProfitPrice = fxApp.pnLAction.value.slTp.tp;
		}
		if (fxApp.pnLAction.value.status.sl) {
			placeTrade.value.stopLossPrice = fxApp.pnLAction.value.slTp.sl;
		}
	};

	const buy = () => {
		placeTrade.value.tradeType = TradeType.LONG;
		placeTrade.value.entryPrice = trade.value.open;
		setTrade();

		fxApp.tradeAction("POST", placeTrade.value, "trades/place", buyLoader);
	};

	const sell = () => {
		placeTrade.value.tradeType = TradeType.SHORT;
		placeTrade.value.entryPrice = trade.value.close;
		setTrade();
		fxApp.tradeAction("POST", placeTrade.value, "trades/place", sellLoader);
	};

	onMounted(() => {
		initTradeData();

		setInterval(() => {
			countDown.value--;
			if (countDown.value <= 0) {
				initTradeData();
				countDown.value = 10;
			}
		}, 1000);
	});
</script>

<template>
	<div class="d-flex align-items-end justify-content-center gap-7">
		<div class="d-flex flex-column">
			<span class="text-danger fw-bold">{{ trade.close }}</span>

			<button
				:disabled="sellLoader || buyLoader"
				@click="sell()"
				class="btn btn-danger"
			>
				<span v-if="!sellLoader">Sell</span>
				<span v-else>
					<span class="spinner-border spinner-border-sm"></span>
				</span>
			</button>
		</div>
		<div class="d-flex flex-column">
			<span class="text-center fw-bold">Lots</span>
			<div class="d-block position-relative my-1">
				<button
					@click="lotBtn(LotA.SUB)"
					type="button"
					class="btn p-0 btn-active-icon-primary btn-sm position-absolute top-50 translate-middle-y ms-4"
				>
					<i class="ki-outline fs-2 ki-minus-square"></i>
				</button>

				<input
					type="text"
					class="form-control text-center w-125px fs-7 px-12"
					v-model="lots"
				/>

				<button
					@click="lotBtn(LotA.ADD)"
					type="button"
					class="btn p-0 btn-active-icon-primary btn-sm position-absolute end-0 top-50 translate-middle-y me-2"
				>
					<i class="ki-outline ki-plus-square fs-2"></i>
				</button>
			</div>
		</div>
		<div class="d-flex flex-column">
			<span class="text-success fw-bold text-end">{{ trade.open }}</span>
			<button
				:disabled="sellLoader || buyLoader"
				@click="buy()"
				class="btn btn-success"
			>
				<span v-if="!buyLoader">Buy</span>
				<span v-else>
					<span class="spinner-border spinner-border-sm"></span>
				</span>
			</button>
		</div>
	</div>
</template>
