<script setup lang="ts">
	const route = useRoute();
	const path = route.path;
	console.log(path)
	const active = ref(path);
</script>
<template>
	<div
		style="z-index: 1049"
		class="position-fixed bg-light bottom-0 start-0 w-100 d-lg-none"
	>
		<div
			@click="closeDrawer()"
			data-kt-drawer-dismiss="true"
			class="w-100 d-flex align-items-center justify-content-between p-3"
		>
			<NuxtLink
				@click="active = nav.dir"
				v-for="nav in adminNavs"
				:to="nav.dir"
				:class="active == nav.dir ? 'active' : ''"
				class="btn btn-icon w-35px btn-active-primary btn-outline-dashed hover-scale btn-icon-primary btn-text-primary h-40px w-40px h-md-40px"
			>
				<!-- <NuxtLink ></NuxtLink> -->
				<i :class="nav.icon" class="fs-2x">
					<i v-for="path in nav.paths" :class="path"></i>
				</i>
			</NuxtLink>
		</div>
	</div>
</template>
