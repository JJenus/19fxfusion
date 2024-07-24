// import Stomp from "stompjs";

export const useWebsocket = () => {
	const fxApp = useFxApp();
	const CONFIG = useRuntimeConfig().public;
	const stompClient = useState("stomp-client", () => {});
	const newPoint = useState("fx-live", () => ({
		volume: 0,
		volumeWeighted: 0,
		open: 0,
		close: 0,
		high: 0,
		low: 0,
		timestamp: 0,
		transactions: 0,
	}));
	const newBalance = useState("live-balance", () => "");
	const newNotification = useState("live-notification", () => {});
	const newTransaction = useState("live-transaction", () => {});

	function connect() {
		// URL to connect to the WebSocket endpoint
		var socket = new SockJS(`${CONFIG.BE_API}/ws`);
		stompClient.value = Stomp.over(socket);

		stompClient.value.connect({}, function (frame) {
			console.log("Connected: " + frame);

			// Subscribe to general notifications
			stompClient.value.subscribe(
				"/topic/notifications",
				function (notification) {
					showNotification(notification.body);
					newNotification.value = JSON.parse(notification.body);
				}
			);

			if (useAuth().isAuthenticated()) {
				stompClient.value.subscribe("/topic/fx", function (message) {
					showNotification(message.body);
					newPoint.value = JSON.parse(message.body);
					fxApp.currentMarket.value = newPoint.value;
					// console.log(newPoint.value);
				});

				// Subscribe to user-specific notifications
				var userId = userData().data.value.id;

				stompClient.value.subscribe(
					"/queue/notifications/" + userId,
					function (notification) {
						showUserNotification(notification.body);
						try {
							newNotification.value = JSON.parse(
								notification.body
							);
						} catch (error) {}
					}
				);

				stompClient.value.subscribe(
					"/queue/balance/" + userId,
					function (notification) {
						showUserNotification(notification.body);
						try {
							newBalance.value = JSON.parse(notification.body);
						} catch (error) {}
					}
				);

				stompClient.value.subscribe(
					"/queue/transaction/" + userId,
					function (notification) {
						showUserNotification(notification.body);
						try {
							newTransaction.value = JSON.parse(
								notification.body
							);
						} catch (error) {}
					}
				);
			}
		});
	}

	const disconnect = () => {
		// subscriptions.forEach(subscription => subscription.unsubscribe());
		if (stompClient.value !== null) stompClient.value.disconnect();
	};

	function sendNotification() {
		var message = "document.getElementById('message').value";
		stompClient.value.send("/app/notify", {}, message);
	}

	function showNotification(message) {
		// console.log(message);
	}

	function showUserNotification(message) {
		// console.log(message);
	}

	return {
		connect,
		sendNotification,
		disconnect,
		newPoint,
		newNotification,
		newBalance,
		newTransaction,
	};
};
