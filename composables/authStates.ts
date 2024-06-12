import { AuthToken } from "../utils/interfaces/AuthToken";

export const useAuth = () => {
	const appUser = userData();
	const authData = useState<AuthToken | null>("user", () => null);
	const authenticated = useState<boolean>("isAuthenticated", () => false);
	const userAuth = useCookie<AuthToken>("auth", {
		maxAge: 60 * 60 * 24,
	});
	const openAuth = useState<string>("authAction", () => "login");

	const openAuthModal = (action: string) => {
		openAuth.value = action;
	};

	const login = (auth: AuthToken) => {
		//store cookie
		userAuth.value = auth;

		//set essential values
		appUser.data.value = auth.user;
		appUser.account.value = auth.user.account;

		authData.value = auth;
		authenticated.value = true;

		// redirect to appropriate account
		if (auth.user.userType === "admin") {
			// navigateTo("/admin");
			window.location.href = "/admin"
		} else {
			window.location.href = "/app"
		}
	};

	const logout = () => {
		authData.value = null;
		authenticated.value = false;
		// storage().remove();
		useCookie("auth").value = null;
		// navigateTo("/sign-in");
		window.location.href = "/"
	};

	const isAuthenticated = () => {
		if (authenticated.value) {
			return true;
		}

		const auth = useCookie<AuthToken | null>("auth");
		// console.log(auth);
		if (auth.value == null || auth.value == undefined) {
			// console.log("Empty")
			return false;
		}

		authenticated.value = true;
		authData.value = auth.value;

		appUser.data.value = auth.value.user;
		appUser.account.value = auth.value.user.account;

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
