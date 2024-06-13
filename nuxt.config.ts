// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["nuxt-swiper", "@nuxt/image", "nuxt-tradingview"],
	tradingview: {
		prefix: "TV",
	},
	devtools: { enabled: false },
	ssr: true,
	routeRules: {
		// "/": { redirect: "/about-us" },
	},
	image: {
		format: ["webp", "avif", "jpeg", "jpg", "png", "gif"],
		// The screen sizes predefined by `@nuxt/image`:
		screens: {
			xs: 320,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1200,
			xxl: 1400,
			"2xl": 1536,
		},
	},
	runtimeConfig: {
		BE_API: process.env.BE_API || "https://paycifik.alwaysdata.net/api",
		public: {
			BE_API: process.env.BE_API || "https://paycifik.alwaysdata.net/api",
			APP: "19Fx",
			MOBILE: "+1 (228) 888-8515",
			CLOUD_NAME: "dpangnog4",
			CLOUD_KEY: "232136269489291",
			CLOUD_SECRETE: "B3_WYvhc4C_MSW6RCW-r-O-tiD4",
			DEFAULT_DP: "/assets/media/svg/avatars/blank.svg",
		},
	},
	devServer: {
		// https: {
		// 	key: "./server.key",
		// 	cert: "./server.crt",
		// },
	},
	app: {
		head: {
			meta: [
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					name: "twitter:card",
					content:
						"Top international financial services provided to be accessible to all",
				},
				{
					name: "twitter:title",
					content: "19Fx",
				},
				{
					name: "twitter:description",
					content:
						"Top international financial services provided to be accessible to all",
				},
				{
					name: "twitter:image",
					content: "/assets/media/logos/paycifik.png",
				},
				{
					property: "og:title",
					content: "19Fx",
				},
				{
					property: "og:description",
					content:
						"Top international financial services provided to be accessible to all",
				},
				{
					property: "og:image",
					content: "/assets/media/logos/paycifik.png",
				},
				{
					property: "og:url",
					content: "",
				},
			],
			script: [
				{ src: "/assets/plugins/global/plugins.bundle.js" },
				{ src: "/assets/js/scripts.bundle.js" },
				{ src: "https://code.highcharts.com/stock/highstock.js" },
				{
					src: "https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.6.1/sockjs.min.js",
				},
				{
					src: "https://cdn.jsdelivr.net/npm/stompjs/lib/stomp.min.js",
				},
				{
					src: "https://code.highcharts.com/indicators/indicators-all.js",
				},
				{
					src: "https://code.highcharts.com/modules/drag-panes.js",
				},
				{
					src: "https://code.highcharts.com/modules/annotations-advanced.js",
				},
				{
					src: "https://code.highcharts.com/modules/price-indicator.js",
				},
				{
					src: "https://code.highcharts.com/modules/full-screen.js",
				},
				{
					src: "https://code.highcharts.com/modules/price-indicator.js",
				},
				{
					src: "https://code.highcharts.com/stock/modules/exporting.js",
				},
				{ src: "https://code.highcharts.com/modules/accessibility.js" },
				{
					src: "https://code.highcharts.com/modules/stock-tools.js",
				},
				{
					src: "/assets/plugins/custom/fslightbox/fslightbox.bundle.js",
				},
				// {
				// 	src: "https://call.chatra.io/chatra.js",
				// }
			],

			link: [
				{
					rel: "stylesheet",
					href: "/assets/plugins/global/plugins.bundle.css",
				},
				{
					rel: "stylesheet",
					href: "/assets/css/style.bundle.css",
				},
				{
					rel: "stylesheet",
					href: "https://code.highcharts.com/css/stocktools/gui.css",
				},
				{
					rel: "stylesheet",
					href: "https://code.highcharts.com/css/annotations/popup.css",
				},
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/assets/media/favicon/favicon.ico",
				},
				{
					rel: "icon",
					sizes: "16x16",
					type: "image/png",
					href: "/assets/media/favicon/favicon-16x16.png",
				},
				{
					rel: "icon",
					sizes: "192x192",
					type: "image/png",
					href: "/assets/media/favicon/android-chrome-192x192.png",
				},
				{
					rel: "icon",
					sizes: "512x512",
					type: "image/png",
					href: "/assets/media/favicon/android-chrome-512x512.png",
				},
				{
					rel: "apple-touch-icon",
					href: "/assets/media/favicon/apple-touch-icon.png",
				},
				{
					rel: "manifest",
					href: "/assets/media/favicon/site.webmanifest",
				},
			],

			// please note that this is an area that is likely to change
			style: [
				// <style type="text/css">:root { color: red }</style>
				// { children: ":root { color: red }" },
			],
		},
	},
});
