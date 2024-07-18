<script setup>
	import { createChart, CrosshairMode } from "lightweight-charts";

	if (process.client) {
		const chartContainer = document.getElementById("light-chart");
		// const chart = createChart(chartVas, { width: 500, height: 400 });

		const chart = createChart(chartContainer, {
			width: chartContainer.clientWidth,
			height: 300,
			layout: {
				backgroundColor: "#000000",
				textColor: "#ffffff",
			},
			grid: {
				vertLines: {
					color: "rgba(42, 46, 57, 0.5)",
				},
				horzLines: {
					color: "rgba(42, 46, 57, 0.5)",
				},
			},
			crosshair: {
				mode: CrosshairMode.Normal,
			},
			rightPriceScale: {
				borderColor: "rgba(197, 203, 206, 0.8)",
			},
			timeScale: {
				borderColor: "rgba(197, 203, 206, 0.8)",
			},
		});

		const candleSeries = chart.addCandlestickSeries({
			upColor: "#4caf50",
			downColor: "#f44336",
			borderVisible: false,
			wickUpColor: "#4caf50",
			wickDownColor: "#f44336",
		});

		const lineSeries = chart.addLineSeries({
			color: "#2196f3",
			lineWidth: 2,
		});

		const volumeSeries = chart.addHistogramSeries({
			color: "#26a69a",
			priceFormat: {
				type: "volume",
			},
			priceScaleId: "",
			scaleMargins: {
				top: 0.8,
				bottom: 0,
			},
		});

		const candleData = [
			{ time: "2023-01-01", open: 100, high: 110, low: 90, close: 105 },
			{ time: "2023-01-02", open: 106, high: 120, low: 101, close: 115 },
		];

		const lineData = candleData.map((d) => ({
			time: d.time,
			value: d.close,
		}));

		const volumeData = [
			{ time: "2023-01-01", value: 1000, color: "#4caf50" },
			{ time: "2023-01-02", value: 1500, color: "#f44336" },
			// ... (more data points)
		];

		candleSeries.setData(candleData);
		lineSeries.setData(lineData);
		volumeSeries.setData(volumeData);

		lineSeries.applyOptions({ visible: false });
	}
</script>

<template>
	<div class="w-100">
		<div class="w-100" id="light-chart"></div>
	</div>
</template>
