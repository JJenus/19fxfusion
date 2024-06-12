<script setup lang="ts">
	const newNotification = userData().newNotification;
	// newNotification.value = true;

	onMounted(() => {});
</script>
<template>
	<div
		id="kt_app_header"
		class="app-header d-flex d-lg-none"
		data-kt-sticky="true"
		data-kt-sticky-name="app-header-sticky"
		data-kt-sticky-offset="{default: 'false', lg: '300px'}"
	>
		<!--begin::Header container-->
		<div
			class="app-container container-fluid d-flex align-items-stretch justify-content-between"
			id="kt_app_header_container"
		>
			<!--begin::Logo-->
			<div
				class="d-flex align-items-center justify-content-center me-auto position-relative"
			>
				<NFTexLogoMini :classes="'h-20px'" />
				<span class="fw-bold fs-3 mt-3">(ADMIN)</span>
			</div>
			<!--end::Logo-->

			<!--begin::Aside toggle-->
			<div
				class="d-flex align-items-center ms-2 me-n3"
				title="Show header menu"
			>
				<!--begin::Notifications-->
				<div
					class="app-navbar-item d-flex justify-content-end flex-grow-1 me-1 d-lg-none"
				>
					<!--begin::Drawer toggle-->
					<div
						@click="userData().showNotifications()"
						:class="
							newNotification
								? 'btn-color-primary btn-icon-primary'
								: 'btn-color-muted btn-icon-muted'
						"
						class="symbol btn btn-icon btn-custom btn-active-light-primary w-35px h-35px w-md-40px h-md-40px"
						id="kt_activities_toggle"
					>
						<i
							v-if="newNotification"
							class="ki-outline ki-notification-on fs-2x"
						></i>
						<i
							v-else
							class="ki-outline ki-notification-bing fs-2x"
						></i>
						<div
							v-if="newNotification"
							class="bg-danger blink position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3"
							bis_skin_checked="1"
						></div>
					</div>
					<!--end::Drawer toggle-->
				</div>
				<!--end::Notifications-->
				<div
					class="btn btn-icon btn-active-color-primary w-35px h-35px"
					id="kt_app_aside_mobile_toggle"
				>
					<i class="ki-outline ki-text-align-left fs-2 fw-bold"></i>
				</div>
			</div>
			<!--end::Aside toggle-->
		</div>
		<!--end::Header container-->
	</div>
</template>
