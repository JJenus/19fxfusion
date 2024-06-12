<script setup>
	definePageMeta({
		middleware: ["auth"],
	});

	// if (process.client) {
	// 	// $crisp.push(["do", "chat:hide"]);

	// 	const interval = setInterval(() => {
	// 		if (window.tidioChatApi) {
	// 			if (window.tidioChatApi) {
	// 				tidioChatApi.hide();
	// 			}
	// 			clearInterval(interval);
	// 		}
	// 	}, 1000);
	// }

	const route = useRoute();
	const path = route.path;

	useAppSettings().setActiveNav(path);

	const appConfig = useRuntimeConfig();
	const newNotification = userData().newNotification;
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
				<AppHeader />
				<!--end::Header-->
				<!--begin::Wrapper-->
				<div
					class="app-wrapper flex-column flex-row-fluid"
					id="kt_app_wrapper"
				>
					<!--begin::Sidebar-->
					<AppSideBar />
					<!--end::Sidebar-->

					<!-- MAIN VIEW -->
					<!--begin::Main-->
					<div
						class="app-main flex-column flex-row-fluid"
						id="kt_app_main"
					>
						<!--begin::Content wrapper-->
						<div class="d-flex flex-column flex-column-fluid pt-8">
							<!--begin::Toolbar-->
							<div
								id="kt_app_toolbar"
								class="app-toolbar d-none d-lg-block"
								bis_skin_checked="1"
							>
								<!--begin::Toolbar container-->
								<div
									id="kt_app_toolbar_container"
									class="app-container container-fluid d-flex flex-stack"
									bis_skin_checked="1"
								>
									<!--begin::Page title-->
									<div
										class="page-title d-flex flex-column justify-content-center me-3 mb-6 mb-lg-0"
										bis_skin_checked="1"
									>
										<!--begin::Title-->
										<h1
											class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center me-3 my-0"
										>
											$20,000
										</h1>
										<!--end::Title-->

										<!--begin::Breadcrumb-->
										<ul
											class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1"
										>
											<!--begin::Item-->
											<li
												class="breadcrumb-item text-muted"
											>
												<a
													role="button"
													class="text-muted text-hover-primary"
												>
													Balance
												</a>
											</li>
											<!--end::Item-->
											<!--begin::Item-->
											<!-- <li class="breadcrumb-item">
												<span
													class="bullet bg-gray-500 w-5px h-2px"
												></span>
											</li> -->
											<!--end::Item-->

											<!--begin::Item-->

											<!--end::Item-->
										</ul>
										<!--end::Breadcrumb-->
									</div>
									<!--end::Page title-->
									<!--begin::Actions-->
									<div
										class="d-flex align-items-center gap-2 gap-lg-3"
										bis_skin_checked="1"
									>
										<!--begin::Filter menu-->
										<div
											class="d-flex"
											bis_skin_checked="1"
										>
											<a
												@click="
													userData().showNotifications()
												"
												role="button"
												class="btn btn-icon bg-body ms-4 flex-shrink-0 h-40px"
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
											</a>

											<a
												href="#"
												class="btn btn-danger d-flex flex-center flex-shrink-0 ms-4 h-40px"
												data-bs-toggle="modal"
												data-bs-target="#kt_modal_create_project"
											>
												Deposit
											</a>
										</div>
										<!--end::Filter menu-->

										<!--begin::Secondary button-->
										<!--end::Secondary button-->

										<!--begin::Primary button-->
										<!--end::Primary button-->
									</div>
									<!--end::Actions-->
								</div>
								<!--end::Toolbar container-->
							</div>
							<!--end::Toolbar-->

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
					<AppAsideBar />
					<!--end::aside-->
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
			<AppMobileNavBar />
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

		<!--begin::Modal - Upgrade plan-->
		<AppTopUp />

		<!--end::Modals-->
	</div>
</template>
