<script setup lang="ts">
	const props = defineProps({
		classes: {
			type: String,
			required: false,
		},
		appClass: {
			type: String,
			required: false,
		},
		appClassDark: {
			type: String,
			required: false,
		},
	});

	const config = useRuntimeConfig().public;
	// const currentPage = "App";
	// useSeoMeta({
	// 	title: `${currentPage} - ${config.APP}`,
	// });
</script>

<template>
	<a href="/" class="d-flex text-dark align-items-end ps-3">
		<img
			alt="Logo"
			src="/assets/media/logos/paycifik.png"
			:class="classes"
			class="theme-dark-showi mb-3 mb-lg-4"
		/>
		<span class="fw-bold fs-3x truculenta-ero theme-dark-show">aycifik</span>
		<span class="fw-bold fs-3x truculenta-ero  theme-light-show text-warning">aycifik</span>
	</a>
</template>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Anta&family=Lobster&family=Truculenta:opsz,wght@12..72,800&display=swap");

	.anta-regular {
		font-family: "Anta", sans-serif;
		font-weight: 400;
		font-style: normal;
	}

	.truculenta-ero {
		font-family: "Truculenta", sans-serif;
		font-optical-sizing: auto;
		font-weight: 800;
		font-style: normal;
		font-variation-settings: "wdth" 100;
	}

	.lobster-regular {
		font-family: "Lobster", sans-serif;
		font-weight: 400;
		font-style: normal;
	}
</style>
