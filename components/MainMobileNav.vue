<script setup>
	const route = useRoute();
	const active = ref(route.path);
	const config = useRuntimeConfig().public;
</script>
<template>
	<div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
		<!--begin::Sidebar-->
		<div
			id="kt_app_sidebar"
			class="app-sidebar flex-column"
			data-kt-drawer="true"
			data-kt-drawer-name="app-sidebar"
			data-kt-drawer-activate="{default: true, lg: false}"
			data-kt-drawer-overlay="true"
			data-kt-drawer-width="250px"
			data-kt-drawer-direction="end"
			data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
		>
			<!--begin::Logo-->
			<div
				class="app-sidebar-logo mx-auto pt-7 pt-xl-18 mb-xl-9"
				id="kt_app_sidebar_logo"
			>
				<!--begin::Logo image-->
				<NFTexLogoMini :classes="'h-60px'" />
				<!--end::Logo image-->
			</div>
			<!--end::Logo-->
			<!--begin::sidebar menu-->
			<div class="app-sidebar-menu overflow-hidden flex-column-fluid">
				<!--begin::Menu wrapper-->
				<div
					id="kt_app_sidebar_menu_wrapper"
					class="app-sidebar-wrapper hover-scroll-y my-5 mx-3 mx-xl-11"
					data-kt-scroll="true"
					data-kt-scroll-activate="true"
					data-kt-scroll-height="auto"
					data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
					data-kt-scroll-wrappers="#kt_app_sidebar_menu"
					data-kt-scroll-offset="5px"
				>
					<!--begin::Menu-->
					<div
						class="menu menu-column menu-rounded menu-sub-indention menu-active-bg menu- px-3"
						id="#kt_app_sidebar_menu"
						data-kt-menu="true"
						data-kt-menu-expand="false"
					>
						<!--begin:Menu item-->
						<a href="/app" class="menu-item menu-accordion">
							<!--begin:Menu link--><span class="menu-link"
								><span class="menu-icon">
									<i class="ki-solid fs-2 ki-user"> </i>
								</span>
								<span class="menu-title">Profile</span>
							</span>
						</a>
						<div
							role="button"
							data-bs-toggle="modal"
							data-bs-target="#kt_modal_login"
							@click="useAuth().openAuthModal('register')"
							class="menu-item menu-accordion"
						>
							<!--begin:Menu link--><span class="menu-link"
								><span class="menu-icon">
									<i class="ki-solid fs-2 ki-user-edit"> </i>
								</span>
								<span class="menu-title">Sign up</span></span
							>
						</div>
						<!--end:Menu item--><!--begin:Menu item-->
						<div
							data-kt-menu-trigger="click"
							class="menu-item menu-accordion"
						>
							<!--begin:Menu link--><span class="menu-link"
								><span class="menu-icon">
									<i class="ki-solid fs-2 ki-book"> </i>
								</span>
								<span class="menu-title">Resources</span></span
							>
							<!--end:Menu link--><!--begin:Menu sub-->
							<div class="menu-sub menu-sub-accordion">
								<NuxtLink
									to="/resources/about-us"
									class="menu-item menu-accordion"
								>
									<!--begin:Menu link-->
									<span class="menu-link">
										<span class="menu-bullet">
											<span
												class="bullet bullet-dot"
											></span>
										</span>
										<span class="menu-title">
											About {{ config.app }}
										</span>
									</span>
								</NuxtLink>
								<NuxtLink
									to="/resources/contact-us"
									class="menu-item"
								>
									<!--begin:Menu link--><span
										class="menu-link"
										><span class="menu-bullet"
											><span
												class="bullet bullet-dot"
											></span></span
										><span class="menu-title"
											>Contact Us</span
										>
									</span>
								</NuxtLink>
								<!--end:Menu item-->
							</div>
							<!--end:Menu sub-->
						</div>

						<div
							data-kt-menu-trigger="click"
							class="menu-item menu-accordion"
						>
							<!--begin:Menu link--><span class="menu-link">
								<span class="menu-icon"
									><i class="ki-duotone fs-2 ki-note">
										<span class="path1"></span>
										<span class="path2"></span>
									</i>
								</span>
								<span class="menu-title">Languages</span></span
							>
							<!--end:Menu link--><!--begin:Menu sub-->
							<div class="menu-sub menu-sub-accordion">
								<!--begin:Menu item-->
								<div
									data-kt-menu-trigger="click"
									class="menu-item menu-accordion"
								>
									<!--begin:Menu link--><span
										class="menu-link"
									>
										<span class="menu-bullet">
											<span
												class="bullet bullet-dot"
											></span>
										</span>
										<span class="menu-title">English</span>
									</span>
								</div>
								<div
									data-kt-menu-trigger="click"
									class="menu-item menu-accordion"
								>
									<!--begin:Menu link--><span
										class="menu-link"
									>
										<span class="menu-bullet">
											<span
												class="bullet bullet-dot"
											></span>
										</span>
										<span class="menu-title">French</span>
									</span>
								</div>
							</div>
							<!--end:Menu sub-->
						</div>
					</div>
					<!--end::Menu-->
				</div>
				<!--end::Menu wrapper-->
			</div>
			<!--end::sidebar menu-->
			<!--begin::Footer-->
			<div
				class="app-sidebar-footer overflow-hidden flex-column-auto m-9"
				id="kt_app_sidebar_footer"
			>
				<button
					class="btn btn-light-primary w-100 mb-7"
					data-bs-toggle="modal"
					data-bs-target="#kt_modal_login"
					@click="useAuth().openAuthModal('login')"
				>
					Sign in
				</button>
				<!--begin::Card-->
				<div class="d-flex justify-content-center w-100">
					<NFTexLogoMini :classes="'h-20px'" :app-class="'fs-8'" />
				</div>
				<!--end::Card-->
			</div>

			<!--end::Footer-->
		</div>
		<!--end::Sidebar-->
	</div>
</template>
