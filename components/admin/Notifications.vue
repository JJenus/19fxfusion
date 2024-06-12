<style scoped>
	@media (max-width: 765px) {
		.mobile-aside {
			padding-bottom: 60px !important;
		}
	}
</style>

<script setup>
	const notifications = ref([]);
</script>

<template>
	<!--begin::Activities drawer-->
	<div
		id="kt_activities"
		class="bg-body mobile-aside"
		data-kt-drawer="true"
		data-kt-drawer-name="activities"
		data-kt-drawer-activate="true"
		data-kt-drawer-overlay="true"
		data-kt-drawer-width="{default:'300px', 'lg': '500px'}"
		data-kt-drawer-direction="end"
		data-kt-drawer-toggle="#kt_activities_toggle"
		data-kt-drawer-close="#kt_activities_close"
	>
		<div class="card shadow-none border-0 rounded-0 w-100 mobile-bottom">
			<!--begin::Header-->
			<div class="card-header" id="kt_activities_header">
				<h3 class="card-title fw-bold text-dark">Notifications</h3>

				<div class="card-toolbar">
					<button
						type="button"
						class="btn btn-sm btn-icon btn-active-light-primary me-n5"
						id="kt_activities_close"
					>
						<i class="ki-outline ki-cross fs-1"></i>
					</button>
				</div>
			</div>
			<!--end::Header-->

			<!--begin::Body-->
			<div class="card-body position-relative" id="kt_activities_body">
				<!--begin::Content-->
				<div
					id="kt_activities_scroll"
					class="position-relative scroll-y me-n1 pe-1 ps-0"
					data-kt-scroll="true"
					data-kt-scroll-height="auto"
					data-kt-scroll-wrappers="#kt_activities_body"
					data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
					data-kt-scroll-offset="5px"
				>
					<div
						v-if="notifications.length === 0"
						class="text-center text-muted fw-bold"
					>
						No notification
					</div>
				</div>
				<!--end::Content-->
			</div>
			<!--end::Body-->

			<!--begin::Footer-->
			<div
				class="card-footer py-0 py-lg-5 text-center mt-n8 mt-lg-0"
				id="kt_activities_footer"
			>
				<a role="button" class="btn btn-bg-body text-primary">
					<i
						class="ki-outline ki-arrows-circle fs-5 text-primary"
					></i>
					more...
				</a>
			</div>
			<!--end::Footer-->
		</div>
	</div>
	<!--end::Activities drawer-->
</template>
