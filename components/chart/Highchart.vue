<script setup>
	// Light and Dark theme options
	const isDarkMode = ref(false);

	const switchMode = () => {
		isDarkMode.value = !isDarkMode.value;
	};

	// Create the chart
	if (process.client && useAuth().isAuthenticated()) {
		const ws = useWebsocket();
		ws.connect();

		watch(ws.newPoint, (newPoint, oldPoint) => {
			// console.log("NEW POINT", newPoint);
		});

		const hData = useLive().formattedData;
		const themes = useHighChartsCustomTheme();
		const options = useHighSetup();

		// hData.value = []

		// console.log(hData.value, "Data")

		options.series[0].data = hData.value;

		const theme = themes.lightTheme;
		theme.stockTools.gui.buttons = [
			"typeChange",
			"indicators",
			"simpleShapes",
			"lines",
			"measure",
			"toggleAnnotations",
			"flags",
			"zoomChange",
			"fullScreen",
			"currentPriceIndicator",
		];

		Highcharts.setOptions(theme);

		setTimeout(() => {
			Highcharts.stockChart("container", options);
		}, 1000);
	}
</script>
<template>
	<div class="rounded overflow-hidden">
		<div id="container"></div>
	</div>
</template>
