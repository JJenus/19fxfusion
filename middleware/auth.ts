import { AuthToken } from "utils/interfaces/AuthToken";

export default defineNuxtRouteMiddleware((to, from) => {
	// const cookie = useCookie<AuthToken | null | undefined>("auth-login");
	// if (cookie.value == null || cookie.value == undefined) {
	// 	console.log("No cookie");
	// 	return useAuth().logout();
	// } else {
	// 	console.log("Yes cookie");
	// }

	if (
		!useAuth().isAuthenticated() ||
		useAuth().userData.value?.user.userRole !== "user"
	) {
		return useAuth().logout();
	} else {
	}
});
