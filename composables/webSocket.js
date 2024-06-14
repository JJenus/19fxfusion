// import Stomp from "stompjs";

export const useWebsocket = () => {
	const CONFIG = useRuntimeConfig().public;
	let stompClient = null;
	const newPoint = useState("fx-live", () => {});
	const newBalance = useState("live-balance", () => "");
	const newNotification = useState("live-notification", () => {});
	const newTransaction = useState("live-transaction", () => {});

	function connect() {
		// URL to connect to the WebSocket endpoint
		var socket = new SockJS(`${CONFIG.BE_API}/ws`);
		stompClient = Stomp.over(socket);

		stompClient.connect({}, function (frame) {
			console.log("Connected: " + frame);

			// Subscribe to general notifications
			stompClient.subscribe(
				"/topic/notifications",
				function (notification) {
					showNotification(notification.body);
				}
			);

			stompClient.subscribe("/topic/fx", function (message) {
				showNotification("Live", message.body);
				newPoint.value = JSON.parse(message.body);
			});

			// Subscribe to user-specific notifications
			var userId = userData().data.value.id;

			stompClient.subscribe(
				"/queue/notifications/" + userId,
				function (notification) {
					showUserNotification(notification.body);
					try {
						newNotification.value = JSON.parse(notification.body);
					} catch (error) {}
				}
			);

			stompClient.subscribe(
				"/queue/balance/" + userId,
				function (notification) {
					showUserNotification(notification.body);
					try {
						newBalance.value = JSON.parse(notification.body);
					} catch (error) {}
				}
			);

			stompClient.subscribe(
				"/queue/transaction/" + userId,
				function (notification) {
					showUserNotification(notification.body);
					try {
						newTransaction.value = JSON.parse(notification.body);
					} catch (error) {}
				}
			);
		});
	}

	function sendNotification() {
		var message = "document.getElementById('message').value";
		stompClient.send("/app/notify", {}, message);
	}

	function showNotification(message) {
		console.log(message);
	}

	function showUserNotification(message) {
		console.log(message);
	}

	return {
		connect,
		sendNotification,
		newPoint,
		newNotification,
		newBalance,
		newTransaction,
	};
};
