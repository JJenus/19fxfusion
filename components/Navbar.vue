<script setup>
	defineProps({
		mainNavs: {
			type: Array,
			required: true,
		},
	});
	const route = useRoute();
	const active = ref(route.path);
</script>

<template>
	<div class="app-navbar d-none d-lg-flex">
		<!--begin::Quick links-->
		<NuxtLink
			:to="nav.path"
			v-for="nav in mainNavs"
			class="app-navbar-item ms-1 ms-lg-3"
		>
			<!--begin::Menu wrapper-->
			<button
				@click="active = nav.path"
				:class="nav.path == active? 'active': ''"
				role="button"
				class="btn btn-custom py-1 btn-active-primary btn-active-color-primaryi"
			>
				<span class="fs-4">{{ nav.name }}</span>
			</button>
		</NuxtLink>
		<!--end::Quick links-->
	</div>
</template>
