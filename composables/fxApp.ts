import axios from "axios";
import { FxCurrency } from "~/utils/enums/FxCurrency";
import { MarketData } from "~/utils/interfaces/MarketData";
import { type Trade, TradeStatus, TradeType } from "~/utils/interfaces/Trade";

export const useFxApp = () => {
	const user = userData().data;
	const tradeIni: MarketData = {
		volume: 0,
		volumeWeighted: 0,
		open: 0,
		close: 0,
		high: 0,
		low: 0,
		timestamp: 0,
		transactions: 0,
	};
	const activeCurrency = useState<FxCurrency>(
		"fx-active-currency",
		() => FxCurrency.EURUSD
	);

	const pnLAction = useState("PnLAction", () => ({
		status: {
			sl: false,
			tp: false,
		},
		slTp: {
			sl: 0,
			tp: 0,
		},
	}));
	const orders = useState<Trade[]>("fx-order", () => user.value.trades || []);
	const currentMarket = useState<MarketData>("current-trade", () => tradeIni);

	const tradeAction = (
		method: string,
		data: Trade,
		url: string,
		loader: any
	) => {
		console.log("Trade", data);
		const axiosConfig: any = {
			method: method,
			data: data,
			url: `${useRuntimeConfig().public.BE_API}/${url}`,
			timeout: 20000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		if (loader) {
			loader.value = true;
		}

		axios
			.request(axiosConfig)
			.then((response) => {
				if (method == "post") {
					user.value.trades?.push(response.data);
					orders.value.push(response.data);
				}
				successAlert("Order placed")
			})
			.catch((error): void => {
				console.log(error);
			})
			.finally(() => {
				if (loader) {
					loader.value = false;
				}
			});
	};

	const createMarketData = (data: {
		v: number;
		vw: number;
		o: number;
		c: number;
		h: number;
		l: number;
		t: number;
		n: number;
	}, currencyPair: string): MarketData => {
		return {
			volume: data.v,
			volumeWeighted: data.vw,
			open: data.o,
			close: data.c,
			high: data.h,
			low: data.l,
			timestamp: data.t,
			transactions: data.n,
			currencyPair
		};
	};	

	return {
		orders,
		currentMarket,
		pnLAction,
		createMarketData,
		tradeAction,
	};
};
