import { type AuthToken } from "~/utils/interfaces/AuthToken";

export default defineNuxtRouteMiddleware((to, from) => {
	if (
		!useAuth().isAuthenticated() ||
		useAuth().userData.value?.user.userRole !== "user"
	) {
		return useAuth().logout();
	}
});
