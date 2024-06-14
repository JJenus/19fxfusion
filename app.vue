<script setup>
	import Chatra from "@chatra/chatra";

	let config = {
		ID: "Zc7Mk9Zyk8EBqxpYZ",
	};

	
	if (process.client) {
		// Chatra("init", config);
	}
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Truculenta:opsz,wght@12..72,800&display=swap");

	/* 
	font-family: 'Lobster', cursive;
font-family: 'Truculenta', sans-serif;
	 */
	.logo-color {
		columns: #226b8d;
	}
	.zipay-logo-dark {
		color: rgb(255, 93, 83);
	}

	@media (max-width: 765px) {
		.mobile-aside {
			padding-bottom: 60px !important;
		}
	}

	/* Remove up and down arrows (spinners) from number input */
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		appearance: none;
		margin: 0;
	}
</style>
