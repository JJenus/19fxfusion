import { type AuthToken } from "~/utils/interfaces/AuthToken";

export const useAuth = () => {
	const AUTH_KEY: string = "auth-login";
	const appUser = userData();
	const authUserData = useState<AuthToken | null>("user", () => null);
	const authenticated = useState<boolean>("isAuthenticated", () => false);
	const openAuth = useState<string>("authAction", () => "login");

	const userAuth = useCookie<AuthToken | null>(`${AUTH_KEY}`, {
		maxAge: 60 * 60 * 24 * 30,
	});

	const openAuthModal = (action: string) => {
		openAuth.value = action;
	};

	const login = (auth: AuthToken) => {
		//store cookie
		userAuth.value = auth;
		console.log("LOGIN", useCookie(`${AUTH_KEY}`).value, userAuth.value);

		//set essential values
		appUser.data.value = auth.user;

		authUserData.value = auth;
		authenticated.value = true;

		// redirect to appropriate account
		// if (auth.user.userRole === "admin") {
		// 	// navigateTo("/admin");
		// 	window.location.href = "/admin";
		// } else {
		// 	window.location.href = "/app";
		// }
	};

	const logout = () => {
		try {
			useWebsocket().disconnect();
		} catch (error) {}

		authUserData.value = null;
		authenticated.value = false;
		useCookie(AUTH_KEY, { maxAge: -1 });

		// userAuth.value = null;
		// if (process.client) window.location.href = "/";
		// else navigateTo("/");
	};

	const isAuthenticated = () => {
		if (authenticated.value) {
			return true;
		}

		const auth = userAuth;
		console.log("AUTH", auth.value);
		if (auth.value === null || auth.value === undefined) {
			return false;
		}

		authenticated.value = true;
		authUserData.value = auth.value;

		appUser.data.value = auth.value.user;

		return true;
	};

	return {
		isAuthenticated,
		userData: authUserData,
		logout,
		login,
		openAuthModal,
		userAuth,
	};
};
