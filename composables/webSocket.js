// import Stomp from "stompjs";

export const useWebsocket = () => {
	let stompClient = null;
	const newPoint = useState("fx-live", () => {});

	function connect() {
		// URL to connect to the WebSocket endpoint
		var socket = new SockJS("https://localhost:8080/ws");
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
				newPoint.value = JSON.parse(message.body)
			});

			// Subscribe to user-specific notifications
			var userId = "1"; // Replace with actual user ID
			stompClient.subscribe(
				"/queue/notifications/" + userId,
				function (notification) {
					showUserNotification(notification.body);
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
		newPoint
	};
};


