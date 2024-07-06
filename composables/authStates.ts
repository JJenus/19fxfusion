import { AuthToken } from "../utils/interfaces/AuthToken";

export const useAuth = () => {
	const AUTH_KEY:string = "auth-login"
	const appUser = userData();
	const authData = useState<AuthToken | null>("user", () => null);
	const authenticated = useState<boolean>("isAuthenticated", () => false);
	const userAuth = useCookie<AuthToken | null>(AUTH_KEY, {
		maxAge: 60 * 60 * 24,
	});
	const openAuth = useState<string>("authAction", () => "login");

	const openAuthModal = (action: string) => {
		openAuth.value = action;
	};

	const login = (auth: AuthToken) => {
		//store cookie
		userAuth.value = auth;
		console.log(auth);

		//set essential values
		appUser.data.value = auth.user;

		authData.value = auth;
		authenticated.value = true;

		// redirect to appropriate account
		if (auth.user.userRole === "admin") {
			// navigateTo("/admin");
			window.location.href = "/admin";
		} else {
			window.location.href = "/app";
		}
	};

	const logout = () => {
		authData.value = null;
		authenticated.value = false;
		useCookie(AUTH_KEY, { maxAge: -1 });

		userAuth.value = null;
		window.location.href = "/";
	};

	const isAuthenticated = () => {
		if (authenticated.value) {
			return true;
		}

		const auth = useCookie<AuthToken>(AUTH_KEY);
		// console.log(auth);
		if (auth.value == null || auth.value == undefined) {
			return false;
		}

		authenticated.value = true;
		authData.value = auth.value;

		appUser.data.value = auth.value.user;

		return true;
	};

	return {
		isAuthenticated,
		userData: authData,
		logout,
		login,
		openAuthModal,
		userAuth,
	};
};
