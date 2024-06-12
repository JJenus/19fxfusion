export const useHighChartsCustomTheme = () => {
	const getCSSVariableValue = (variable) => {
		return window
			.getComputedStyle(document.documentElement)
			.getPropertyValue(variable)
			.trim();
	};

	const lightTheme = {
		chart: {
			backgroundColor: getCSSVariableValue("--bs-body-bg"),
			style: {
				fontFamily: getCSSVariableValue("--bs-body-font-family"),
			},
		},
		title: {
			style: {
				color: getCSSVariableValue("--bs-heading-color"),
			},
		},
		subtitle: {
			style: {
				color: getCSSVariableValue("--bs-secondary-color"),
			},
		},
		xAxis: {
			gridLineColor: getCSSVariableValue("--bs-border-color"),
			labels: {
				style: {
					color: getCSSVariableValue("--bs-body-color"),
				},
			},
			lineColor: getCSSVariableValue("--bs-border-color"),
			minorGridLineColor: getCSSVariableValue("--bs-border-color"),
			tickColor: getCSSVariableValue("--bs-border-color"),
			title: {
				style: {
					color: getCSSVariableValue("--bs-body-color"),
				},
			},
		},
		yAxis: {
			gridLineColor: getCSSVariableValue("--bs-border-color"),
			labels: {
				style: {
					color: getCSSVariableValue("--bs-body-color"),
				},
				formatter: function () {
					return Highcharts.numberFormat(this.value, 4, '.', ',');
				} ,
			},
			lineColor: getCSSVariableValue("--bs-border-color"),
			minorGridLineColor: getCSSVariableValue("--bs-border-color"),
			tickColor: getCSSVariableValue("--bs-border-color"),
			tickWidth: 1,
			title: {
				style: {
					color: getCSSVariableValue("--bs-body-color"),
				},
			},
		},
		tooltip: {
			backgroundColor: getCSSVariableValue("--bs-secondary-bg"),
			style: {
				color: getCSSVariableValue("--bs-body-color"),
			},
		},
		plotOptions: {
			series: {
				dataLabels: {
					color: getCSSVariableValue("--bs-body-color"),
				},
				marker: {
					lineColor: getCSSVariableValue("--bs-border-color"),
				},
			},
			candlestick: {
				upColor: getCSSVariableValue("--bs-green"),
				upLineColor: getCSSVariableValue("--bs-green"),
				lineColor: getCSSVariableValue("--bs-red"),
				color: getCSSVariableValue("--bs-red"),
			},
		},
		legend: {
			backgroundColor: getCSSVariableValue("--bs-body-bg"),
			itemStyle: {
				color: getCSSVariableValue("--bs-body-color"),
			},
			itemHoverStyle: {
				color: getCSSVariableValue("--bs-body-color"),
			},
			itemHiddenStyle: {
				color: getCSSVariableValue("--bs-tertiary-color"),
			},
			title: {
				style: {
					color: getCSSVariableValue("--bs-heading-color"),
				},
			},
		},
		credits: {
			style: {
				color: getCSSVariableValue("--bs-body-color"),
			},
		},
		labels: {
			style: {
				color: getCSSVariableValue("--bs-body-color"),
			},
		},
		drilldown: {
			activeAxisLabelStyle: {
				color: getCSSVariableValue("--bs-body-color"),
			},
			activeDataLabelStyle: {
				color: getCSSVariableValue("--bs-body-color"),
			},
		},
		navigation: {
			buttonOptions: {
				symbolStroke: getCSSVariableValue("--bs-body-color"),
				theme: {
					fill: getCSSVariableValue("--bs-body-bg"),
				},
			},
		},
		rangeSelector: {
			buttonTheme: {
				fill: getCSSVariableValue("--bs-body-bg"),
				stroke: getCSSVariableValue("--bs-border-color"),
				style: {
					color: getCSSVariableValue("--bs-body-color"),
				},
				states: {
					hover: {
						fill: getCSSVariableValue("--bs-secondary-bg"),
						stroke: getCSSVariableValue("--bs-border-color"),
						style: {
							color: getCSSVariableValue("--bs-body-color"),
						},
					},
					select: {
						fill: getCSSVariableValue("--bs-secondary-bg"),
						stroke: getCSSVariableValue("--bs-border-color"),
						style: {
							color: getCSSVariableValue("--bs-body-color"),
						},
					},
				},
			},
			inputBoxBorderColor: getCSSVariableValue("--bs-border-color"),
			inputStyle: {
				backgroundColor: getCSSVariableValue("--bs-body-bg"),
				color: getCSSVariableValue("--bs-body-color"),
			},
			labelStyle: {
				color: getCSSVariableValue("--bs-body-color"),
			},
		},
		navigator: {
			handles: {
				backgroundColor: getCSSVariableValue("--bs-body-color"),
				borderColor: getCSSVariableValue("--bs-border-color"),
			},
			outlineColor: getCSSVariableValue("--bs-border-color"),
			maskFill:
				"rgba(" +
				getCSSVariableValue("--bs-secondary-color-rgb") +
				", 0.75)",
			series: {
				color: getCSSVariableValue("--bs-primary"),
				lineColor: getCSSVariableValue("--bs-primary"),
			},
			xAxis: {
				gridLineColor: getCSSVariableValue("--bs-border-color"),
			},
		},
		scrollbar: {
			barBackgroundColor: getCSSVariableValue("--bs-body-color"),
			barBorderColor: getCSSVariableValue("--bs-border-color"),
			buttonArrowColor: getCSSVariableValue("--bs-body-color"),
			buttonBackgroundColor: getCSSVariableValue("--bs-body-bg"),
			buttonBorderColor: getCSSVariableValue("--bs-border-color"),
			rifleColor: getCSSVariableValue("--bs-body-color"),
			trackBackgroundColor: getCSSVariableValue("--bs-secondary-bg"),
			trackBorderColor: getCSSVariableValue("--bs-border-color"),
		},

		stockTools: {
			gui: {
				toolbarClassName: "btn-body",
				buttons: [
					"indicators",
					"simpleShapes",
					"lines",
					"measure",
					"toggleAnnotations",
					"flags",
					"zoomChange",
					"fullScreen",
					"typeChange",
					"currentPriceIndicator",
					"saveChart",
				],
			},
		},
	};

	// Apply the dark theme

	const darkTheme = {
		chart: {
			backgroundColor: getCSSVariableValue("--bs-body-bg"),
			style: {
				fontFamily: getCSSVariableValue("--bs-body-font-family"),
			},
		},
		title: {
			style: {
				color: getCSSVariableValue("--bs-heading-color"),
			},
		},
		subtitle: {
			style: {
				color: getCSSVariableValue("--bs-secondary-color"),
			},
		},
		xAxis: {
			gridLineColor: getCSSVariableValue("--bs-border-color"),
			labels: {
				style: {
					color: getCSSVariableValue("--bs-body-color"),
				},
			},
			lineColor: getCSSVariableValue("--bs-border-color"),
			minorGridLineColor: getCSSVariableValue("--bs-border-color"),
			tickColor: getCSSVariableValue("--bs-border-color"),
			title: {
				style: {
					color: getCSSVariableValue("--bs-body-color"),
				},
			},
		},
		yAxis: {
			gridLineColor: getCSSVariableValue("--bs-border-color"),
			labels: {
				style: {
					color: getCSSVariableValue("--bs-body-color"),
				},
			},
			lineColor: getCSSVariableValue("--bs-border-color"),
			minorGridLineColor: getCSSVariableValue("--bs-border-color"),
			tickColor: getCSSVariableValue("--bs-border-color"),
			tickWidth: 1,
			title: {
				style: {
					color: getCSSVariableValue("--bs-body-color"),
				},
			},
		},
		tooltip: {
			backgroundColor: getCSSVariableValue("--bs-secondary-bg"),
			style: {
				color: getCSSVariableValue("--bs-body-color"),
			},
		},
		plotOptions: {
			// area: {
			// 	threshold: null,
			// 	color: '#f23644',
			// 	fillColor: {
			// 		linearGradient: [0, 0, 0, 450],
			// 		stops: [
			// 			[0, '#5c0d13'],
			// 			[1, '#000000']
			// 		]
			// 	}
			// },
			series: {
				dataLabels: {
					color: getCSSVariableValue("--bs-body-color"),
				},
				marker: {
					lineColor: getCSSVariableValue("--bs-border-color"),
				},
				fillColor: {
					linearGradient: [0, 0, 0, 450],
					stops: [
						[0, "#5c0d13"],
						[1, "#000000"],
					],
				},
			},
			candlestick: {
				upColor: getCSSVariableValue("--bs-green"),
				upLineColor: getCSSVariableValue("--bs-green"),
				lineColor: getCSSVariableValue("--bs-red"),
				color: getCSSVariableValue("--bs-red"),
			},
		},
		legend: {
			backgroundColor: getCSSVariableValue("--bs-body-bg"),
			itemStyle: {
				color: getCSSVariableValue("--bs-body-color"),
			},
			itemHoverStyle: {
				color: getCSSVariableValue("--bs-body-color"),
			},
			itemHiddenStyle: {
				color: getCSSVariableValue("--bs-tertiary-color"),
			},
			title: {
				style: {
					color: getCSSVariableValue("--bs-heading-color"),
				},
			},
		},
		credits: {
			style: {
				color: getCSSVariableValue("--bs-body-color"),
			},
		},
		labels: {
			style: {
				color: getCSSVariableValue("--bs-body-color"),
			},
		},
		drilldown: {
			activeAxisLabelStyle: {
				color: getCSSVariableValue("--bs-body-color"),
			},
			activeDataLabelStyle: {
				color: getCSSVariableValue("--bs-body-color"),
			},
		},
		navigation: {
			buttonOptions: {
				symbolStroke: getCSSVariableValue("--bs-body-color"),
				theme: {
					fill: getCSSVariableValue("--bs-body-bg"),
				},
			},
		},
		rangeSelector: {
			buttonTheme: {
				fill: getCSSVariableValue("--bs-body-bg"),
				stroke: getCSSVariableValue("--bs-border-color"),
				style: {
					color: getCSSVariableValue("--bs-body-color"),
				},
				states: {
					hover: {
						fill: getCSSVariableValue("--bs-secondary-bg"),
						stroke: getCSSVariableValue("--bs-border-color"),
						style: {
							color: getCSSVariableValue("--bs-body-color"),
						},
					},
					select: {
						fill: getCSSVariableValue("--bs-secondary-bg"),
						stroke: getCSSVariableValue("--bs-border-color"),
						style: {
							color: getCSSVariableValue("--bs-body-color"),
						},
					},
				},
			},
			inputBoxBorderColor: getCSSVariableValue("--bs-border-color"),
			inputStyle: {
				backgroundColor: getCSSVariableValue("--bs-body-bg"),
				color: getCSSVariableValue("--bs-body-color"),
			},
			labelStyle: {
				color: getCSSVariableValue("--bs-body-color"),
			},
		},
		navigator: {
			handles: {
				backgroundColor: getCSSVariableValue("--bs-body-color"),
				borderColor: getCSSVariableValue("--bs-border-color"),
			},
			outlineColor: getCSSVariableValue("--bs-border-color"),
			maskFill:
				"rgba(" +
				getCSSVariableValue("--bs-secondary-color-rgb") +
				", 0.75)",
			series: {
				color: getCSSVariableValue("--bs-primary"),
				lineColor: getCSSVariableValue("--bs-primary"),
			},
			xAxis: {
				gridLineColor: getCSSVariableValue("--bs-border-color"),
			},
		},
		scrollbar: {
			barBackgroundColor: getCSSVariableValue("--bs-body-color"),
			barBorderColor: getCSSVariableValue("--bs-border-color"),
			buttonArrowColor: getCSSVariableValue("--bs-body-color"),
			buttonBackgroundColor: getCSSVariableValue("--bs-body-bg"),
			buttonBorderColor: getCSSVariableValue("--bs-border-color"),
			rifleColor: getCSSVariableValue("--bs-body-color"),
			trackBackgroundColor: getCSSVariableValue("--bs-secondary-bg"),
			trackBorderColor: getCSSVariableValue("--bs-border-color"),
		},

		stockTools: {
			gui: {
				toolbarClassName: "btn-body",
				buttons: [
					"indicators",
					"simpleShapes",
					"lines",
					"measure",
					"toggleAnnotations",
					"flags",
					"zoomChange",
					"fullScreen",
					"typeChange",
					"currentPriceIndicator",
					"saveChart",
				],
			},
		},
	};

	// Apply the dark theme

	return {
		getCSSVariableValue,
		lightTheme,
		darkTheme,
	};
};
