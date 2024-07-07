import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Account, AccountStatus } from "../utils/interfaces/Account";
import { IUser } from "../utils/interfaces/IUser";
import {
	INotification,
	NotificationStatus,
} from "../utils/interfaces/Notification";

export const userData = () => {
	const initUser: IUser = {
		name: "",
		email: "",
		ethAddress: "",
		emailVerified: false,
		accountVerified: false,
		balance: "",
		status: "",
		imgUrl: "/assets/media/svg/avatars/blank.svg",
		userRole: "",
	};

	const transactions = useState<any[]>("user-transactions", () => []);
	const notifications = useState<INotification[]>("notifications", () => []);
	const newNotification = useState<boolean>("new-notifications", () => false);
	const data = useState<IUser>("userData", () => initUser);
	const users = useState<IUser[]>("users", () => []);
	const active = useState<IUser | null>("active-user");
	const admins = useState<IUser[]>("admin", () => []);

	const getUsers = () => {
		if (!useAuth().userData.value?.user) {
			navigateTo("/sign-in");
		}
		const axiosConfig: AxiosRequestConfig = {
			method: "get",
			url: `${useRuntimeConfig().public.BE_API}/users`,
			timeout: 20000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request(axiosConfig)
			.then((response: AxiosResponse<IUser[], any>) => {
				users.value = response.data
					.filter((e) => {
						return e.userRole !== "admin";
					})
					.sort(
						(a, b) =>
							new Date(b.createdAt!).getTime() -
							new Date(a.createdAt!).getTime()
					);

				admins.value = response.data
					.filter((e) => {
						return e.userRole === "admin";
					})
					.sort(
						(a, b) =>
							new Date(b.createdAt!).getTime() -
							new Date(a.createdAt!).getTime()
					);

				// console.log(users.value);
			})
			.catch((error) => {
				// console.log(error);
				const data = error.response.data;
				if (
					data.message.includes("Access denied") ||
					error.response.status === 401
				) {
					// console.log("Access denied");
				}
			});
	};

	const getNotifications = () => {
		const axiosConfig = {
			method: "get",
			url: `${useRuntimeConfig().public.BE_API}/notifications/${
				data.value.id
			}`,
			timeout: 15000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request(axiosConfig)
			.then((response: AxiosResponse<INotification[], any>) => {
				notifications.value = response.data.sort(
					(a, b) =>
						new Date(b.createdAt!).getTime() -
						new Date(a.createdAt!).getTime()
				);

				const unreadNotification = notifications.value.find(
					(notice) => notice.status === NotificationStatus.UNREAD
				);
				newNotification.value = !!unreadNotification; // Set to true if an unread notification is found, otherwise false
			})
			.catch((error) => {
				// console.log(error);
			});
	};

	const showNotifications = () => {
		if (!newNotification.value) {
			return;
		}
		newNotification.value = false;

		const unread = notifications.value.filter((e) => () => {
			if (e.status === NotificationStatus.UNREAD) {
				e.status = NotificationStatus.READ;
				return true;
			}
			return false;
		});

		const axiosConfig = {
			method: "put",
			data: unread,
			url: `${useRuntimeConfig().public.BE_API}/notifications/read/all`,
			timeout: 25000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request(axiosConfig)
			.then((response: AxiosResponse<INotification[], any>) => {
				setTimeout(() => {
					notifications.value = response.data;
				}, 3000);
			})
			.catch((error) => {
				console.log(error);
				const data = error.response.data;
			});
	};

	return {
		data,
		users,
		admins,
		active,
		notifications,
		newNotification,
		transactions,
		getUsers,
		getNotifications,
		showNotifications,
	};
};
