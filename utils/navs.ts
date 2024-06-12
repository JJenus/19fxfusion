

export const navs = ref([
	{
		name: "Trade",
		dir: "/app",
		icon: "ki-outline ki-chart-simple",
		paths: [],
	},
	{
		name: "Orders",
		dir: "/app/orders",
		icon: "ki-outline ki-brifecase-tick",
		paths: [],
	},
	{
		name: "Withdraw",
		dir: "/app/withdraw",
		icon: "ki-outline ki-two-credit-cart",
		paths: [],
	},
	{
		name: "Transaction History",
		dir: "/app/transactions",
		icon: "ki-outline ki-arrows-loop",
		paths: [],
	},
	{
		name: "Settings",
		dir: "/app/settings",
		icon: "ki-outline ki-gear", //app/ki-outline
		paths: [],
	},
]);

export const adminNavs = ref([
	{
		name: "Dashboard",
		dir: "/admin",
		icon: "ki-duotone ki-element-equal",
		paths: ["path1", "path2", "path3", "path4", ],
	},
	{
		name: "Users",
		dir: "/admin/users",
		icon: "ki-duotone ki-profile-user",
		paths: ["path1", "path2", "path3", "path4"],
	},
	
	// {
	// 	name: "Transfer",
	// 	dir: "/admin/transfer",
	// 	icon: "ki-solid ki-send",
	// 	paths: [],
	// },
	{
		name: "Settings",
		dir: "/admin/settings",
		icon: "ki-outline ki-gear", //app/ki-outline
		paths: [],
	},
]);

export const closeDrawer = () => {
	// console.log("Clicked");
	const body = document.querySelector(".drawer-overlay") as HTMLElement;
	if (body !== null) body.click();
	// console.log(body); 

	// body?.removeAttribute("data-kt-drawer");
	// body?.removeAttribute("data-kt-drawer-app-aside");
	// body?.removeAttribute("data-kt-drawer-activities");
};
