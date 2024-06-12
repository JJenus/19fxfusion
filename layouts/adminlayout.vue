<script setup>
	definePageMeta({
		layout: "app",
		middleware: ["admin-auth"],
	});

	if (process.client) {
		// $crisp.push(["do", "chat:hide"]);
	}
</script>

<template>
	<!--begin::App-->
	<div
		id="kt_app_body"
		data-kt-app-header-fixed-mobile="true"
		data-kt-app-sidebar-enabled="true"
		data-kt-app-sidebar-fixed="true"
		data-kt-app-sidebar-push-header="true"
		data-kt-app-sidebar-push-toolbar="true"
		data-kt-app-sidebar-push-footer="true"
		data-kt-app-aside-enabled="true"
		data-kt-app-aside-fixed="true"
		data-kt-app-aside-push-header="true"
		data-kt-app-aside-push-toolbar="true"
		data-kt-app-aside-push-footer="true"
		data-bs-theme-mode="dark"
		class="app-default"
	>
		<div
			class="d-flex flex-column flex-root app-root position-relative"
			id="kt_app_root"
		>
			<!--begin::Page-->
			<div
				class="app-page flex-column flex-column-fluid"
				id="kt_app_page"
			>
				<!--begin::Header-->
				<AdminHeader />
				<!--end::Header-->
				<!--begin::Wrapper-->
				<div
					class="app-wrapper flex-column flex-row-fluid"
					id="kt_app_wrapper"
				>
					<!--begin::Sidebar-->
					<AdminSideBar />
					<!--end::Sidebar-->

					<!-- MAIN VIEW -->
					<!--begin::Main-->
					<div
						class="app-main flex-column flex-row-fluid"
						id="kt_app_main"
					>
						<!--begin::Content wrapper-->
						<div class="d-flex flex-column flex-column-fluid">
							<!--begin::Content-->
							<div
								id="kt_app_content"
								class="app-content flex-column-fluid"
							>
								<!--begin::Content container-->
								<div
									id="kt_app_content_container"
									class="app-container container-fluid pb-20 pb-lg-10"
								>
									<slot />
								</div>
								<!--end::Content container-->
							</div>
							<!--end::Content-->
						</div>
						<!--end::Content wrapper-->
					</div>

					<!--begin::aside-->
					<AdminAsideBar />
					<!--end::aside-->
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
			<AdminMobileNavBar />
		</div>
		<!--end::App-->
		<AppNotifications />

		<!-- To be USED AS NOTIFICATION -->
		<!--begin::Drawers-->

		<!--end::Drawers-->

		<!--end::Engage toolbar--><!--begin::Scrolltop-->
		<div
			style="margin-bottom: 40px"
			id="kt_scrolltop"
			class="scrolltop"
			data-kt-scrolltop="true"
		>
			<i class="ki-outline ki-arrow-up"></i>
		</div>
		<!--end::Scrolltop-->

		<!--begin::Modals-->
		<AdminTopUpWithEmail />
	</div>
</template>
