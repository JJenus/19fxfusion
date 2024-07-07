export const useHighSetup = () => {
	function getNewPoint(i, data) {
		const lastPoint = data[data.length - 1];
		const secondLastPoint = data[data.length - 2];

		// Helper function to calculate EMA
		function calculateEMA(data, period, key) {
			let ema = data[0][key];
			const k = 2 / (period + 1);
			for (let j = 1; j < data.length; j++) {
				ema = data[j][key] * k + ema * (1 - k);
			}
			return ema;
		}

		// Calculate daily volatility based on recent high-low ranges
		const dailyPoints = data.slice(-5); // Use last 5 daily points for smoothing
		const averageRange =
			dailyPoints.reduce((acc, point) => acc + (point[2] - point[3]), 0) /
			dailyPoints.length;
		const dailyVolatility = Math.max(0.0005, averageRange * 0.1); // Ensure minimum volatility

		// Calculate EMA for daily closing prices
		const emaShort = calculateEMA(data.slice(-10), 5, 4); // Short-term EMA
		const emaLong = calculateEMA(data.slice(-20), 10, 4); // Long-term EMA
		const dailyTrend = emaShort - emaLong;

		// Function to generate a realistic random price change
		function randomPriceChange(volatility) {
			const unexpected =
				Math.random() < 0.02 ? (Math.random() - 0.5) * 0.05 : 0; // 2% chance of a larger change in the range -0.025 to 0.025
			return (Math.random() - 0.5) * volatility + unexpected;
		}

		// Simulate minute-by-minute changes
		const minuteVolatility = dailyVolatility / 1440; // Approximate minutes in a day
		const baseChange = randomPriceChange(minuteVolatility);
		const trendInfluence = (dailyTrend * 0.001) / 1440; // Smaller influence of the daily trend per minute
		const newClose = Highcharts.correctFloat(
			lastPoint[4] + baseChange + trendInfluence,
			4
		);

		// Check if the close value has changed significantly
		const closeChangeThreshold = 0.0001; // Adjust as needed
		const closeChange = Math.abs(newClose - lastPoint[4]);

		// If close change is below threshold, do not add a new point
		if (closeChange < closeChangeThreshold) {
			return null;
		}

		// Add new point every 10 iterations or on the first iteration
		if (i === 0 || i % 10 === 0) {
			const newTimestamp = lastPoint[0] + 60000; // New timestamp (1 minute later)

			return [
				newTimestamp,
				newClose, // Open
				newClose, // High
				newClose, // Low
				newClose, // Close
			];
		}

		// Modify last data point
		const updatedLastPoint = [
			lastPoint[0], // Keep the same timestamp
			secondLastPoint[4], // Open remains the same as the previous close
			Math.max(lastPoint[2], newClose), // High
			Math.min(lastPoint[3], newClose), // Low
			newClose, // Close
		];

		return updatedLastPoint;
	}

	return {
		title: {
			text: "USDEUR",
		},
		xAxis: {
			overscroll: 500000,
			range: 4 * 200000,
			gridLineWidth: 1,
		},
		rangeSelector: {
			buttons: [
				{
					type: "minute",
					count: 15,
					text: "15m",
				},
				{
					type: "hour",
					count: 1,
					text: "1h",
				},
				{
					type: "all",
					count: 1,
					text: "All",
				},
			],
			selected: 1,
			inputEnabled: false,
		},
		series: [
			{
				type: "candlestick",
				lastPrice: {
					enabled: true,
					label: {
						enabled: true,
					},
				},
			},
		],
		stockTools: {
			gui: {
				enabled: true,
			},
		},
		navigator: {
			enabled: true,
		},
		chart: {
			events: {
				load() {
					const chart = this,
						series = chart.series[0];

					let i = 0;

					setInterval(() => {
						const data = series.options.data;
						const newPoint = getNewPoint(i, data);
						const lastPoint = data[data.length - 1];

						try {
							if (lastPoint[0] !== newPoint[0]) {
								series.addPoint(newPoint);
							} else {
								series.options.data[data.length - 1] = newPoint;
								series.setData(data);
							}
						} catch (er) {}
						i++;
					}, 10);
				},
			},
		},
	};
};
