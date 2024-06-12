<script setup>
	defineProps({
		mainNavs: {
			type: Array,
			required: true,
		},
	});
	const route = useRoute();
	const active = ref(route.path);
	const config = useRuntimeConfig().public;
</script>
<template>
	<!--begin::Activities drawer-->
	<div
		id="kt_activities"
		class="bg-body"
		data-kt-drawer="true"
		data-kt-drawer-name="activities"
		data-kt-drawer-activate="true"
		data-kt-drawer-overlay="true"
		data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
		data-kt-drawer-direction="end"
		data-kt-drawer-toggle="#kt_activities_toggle"
		data-kt-drawer-close="#kt_activities_close"
	>
		<div class="card shadow-none border-0 rounded-0 w-100">
			<!--begin::Header-->
			<div class="card-header" id="kt_activities_header">
				<div class="d-flex d-lg-none align-items-center me-auto">
					<a href="/">
						<img
							alt="Logo"
							src="/assets/media/logos/zipay-logo.png"
							class="theme-light-show h-25px"
						/>
						<img
							alt="Logo"
							src="/assets/media/logos/zipay-logo.png"
							class="theme-dark-show h-25px"
						/>
					</a>
					<span class="fs-3 mt-1 text-primary ms-3 fw-bold">
						{{ config.APP }}
					</span>
				</div>
			</div>
			<!--end::Header-->

			<!--begin::Body-->
			<div class="card-body position-relative" id="kt_activities_body">
				<!--begin::Menu-->
				<div class="menu menu-column">
					<!--begin::Menu item-->
					<div @click="closeDrawer()" class="menu-item">
						<NuxtLink
							@click="active = nav.path"
							:to="nav.path"
							v-for="nav in mainNavs"
							:class="
								nav.path == active
									? 'text-primary'
									: 'text-dark'
							"
							class="menu-link position-relative"
						>
							<!-- <span class="menu-icon">
								<i class="bi bi-bar-chart fs-3"></i>
							</span> -->
							<span class="menu-title fs-2 fw-bold">
								{{ nav.name }}
							</span>
							<!--begin::Line-->
							<span
								v-if="nav.path == active"
								class="d-inline-block position-absolute h-3px bottom-0 end-0 start-0 bg-danger translate rounded"
							></span>
							<!--end::Line-->
						</NuxtLink>
					</div>
					<!--end::Menu item-->
				</div>
				<!--end::Menu-->
			</div>
			<!--end::Body-->

			<!--begin::Footer-->
			<div class="card-footer py-5 text-center" id="kt_activities_footer">
				<a
					href="user-profile/activity.html"
					class="btn btn-bg-body text-primary"
				>
					View All Activities
					<i class="ki-outline ki-arrow-right fs-3 text-primary"></i>
				</a>
			</div>
			<!--end::Footer-->
		</div>
	</div>
	<!--end::Activities drawer-->
</template>
