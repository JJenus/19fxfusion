export const useLiveChat = () => {
	const openChat = () => {
		Chatra("show", true);
		Chatra("openChat", true);
	};

	const closeChat = () => {
		Chatra("hide", true);
	};

	const load = () => {
		if (process.client) {
			const auth = useAuth();

			const interval = setInterval(() => {
				if (auth.isAuthenticated()) {
					const user = auth.userData.value.user;

					window.ChatraIntegration = {
						name: user.name,
						email: user.email,
					};
					clearInterval(interval);
				}
			}, 2000);
		}
	};

	const loadChatraScript = () => {
		window.ChatraID = "Zc7Mk9Zyk8EBqxpYZ";
		window.Chatra =
			window.Chatra ||
			function () {
				(window.Chatra.q = window.Chatra.q || []).push(arguments);
			};
		// const script = document.createElement("script");
		// script.async = true;
		// script.src = "https://call.chatra.io/chatra.js";
		// if (document.head) document.body.appendChild(script);

		// useHead({
		// 	script: [
		// 		{
		// 			src: "https://call.chatra.io/chatra.js",
		// 			async: true,
		// 		},
		// 	],
		// });

		load();
	};

	return {
		loadChatraScript,
		load,
		openChat,
		closeChat,
	};
};
