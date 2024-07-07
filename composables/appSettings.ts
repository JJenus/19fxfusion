import { AccountLevel } from "utils/interfaces/AccountLevel";
import { AppSettings } from "utils/interfaces/AppSettings";
import moment from "moment";

export const useAppSettings = () => {

	const init: AppSettings = {
		id: 0,
		defaultLanguage: "",
		defaultBaseCurrency: "",
		createdAt: "",
		updatedAt: "",
	};

	const activeNav = useState<string>("active-nav", () => "Trade");

	const settings = useState<AppSettings>("app-settings", () => init);
	const isPageLoading = useState("load-page", () => true);
	const accountLevels = useState<AccountLevel[]>("account-levels", () => []);

	const load = (obj: any, url: string) => {
		const axiosConfig: any = {
			method: "get",
			url: `${useRuntimeConfig().public.BE_API}/${url}`,
			timeout: 20000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		// axios
		// 	.request(axiosConfig)
		// 	.then((response) => {
		// 		obj.value = response.data;
		// 		// console.log(settings.value);
		// 	})
		// 	.catch((error): void => {
		// 		console.log(error);
		// 	});
	};

	const setActiveNav = (active: string) => {
		activeNav.value = active;
	};

	const time = (data:string) => {
		const now = moment();
		const inputTime = moment(data);

		console.log("Time diff: ", now.diff(inputTime, "hours"));

		if (now.diff(inputTime, "hours") <= 1) {
			return inputTime.fromNow();
		} else if (now.isSame(inputTime, "day")) {
			return inputTime.format("hh:mm A");
		} else {
			return inputTime.format("DD/MM/YYYY hh:mm A");
		}
	};

	load(settings, "app-settings");
	load(accountLevels, "account-levels");

	return {
		settings,
		isPageLoading,
		accountLevels,
		activeNav,
		time,
		setActiveNav,
		load,
	};
};
