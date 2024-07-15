import axios from "axios";
import { type Trade, TradeStatus, TradeType } from "~/utils/interfaces/Trade";

export const useFxApp = () => {
	const tradeIni: Trade = {
		lots: 0,
		tradeType: TradeType.LONG,
		entryPrice: 0,
		openTime: "",
		profitLoss: 0,
		status: TradeStatus.OPEN,
	};
	const orders = useState<Trade[]>("fx-order", () => []);
	const currentTrade = useState<Trade>("current-trade", () => tradeIni);

	const tradeAction = (
		method: string,
		data: any,
		url: string,
		loader: any
	) => {
		const axiosConfig: any = {
			method: method,
			data: data.value,
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
				data.value = response.data;
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

	return {
		orders,
        currentTrade,
		tradeAction,
	};
};
