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
	<a href="/" class="d-flex text-darki align-items-center ps-3 gap-3">
		<img
			alt="Logo"
			src="/assets/media/logos/19logo.png"
			:class="classes"
			class="theme-dark-showi"
		/>
		<span :class="appClass" class="fw-bold fs-3x truculenta-ero text-danger theme-dark-show">19Fx</span>
		<span :class="appClass" class="fw-bold fs-3x truculenta-ero  theme-light-show text-warning">19Fx</span>
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
