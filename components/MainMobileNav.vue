<script setup>
	const route = useRoute();
	const active = ref(route.path);
	const config = useRuntimeConfig().public;
</script>
<template>
	<!--begin::Wrapper-->
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
						<a href="/account" class="menu-item menu-accordion">
							<!--begin:Menu link--><span class="menu-link"
								><span class="menu-icon">
									<i class="ki-solid fs-2 ki-user"> </i>
								</span>
								<span class="menu-title">Profile</span>
							</span>
						</a>
						<a
							href="/studio/create"
							data-kt-menu-trigger="click"
							class="menu-item menu-accordion"
						>
							<!--begin:Menu link--><span class="menu-link"
								><span class="menu-icon">
									<i class="ki-solid fs-2 ki-pencil"> </i>
								</span>
								<span class="menu-title">Create</span></span
							>
						</a>
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
								<!--end:Menu item--><!--begin:Menu item-->
								<div
									data-kt-menu-trigger="click"
									class="menu-item d-none menu-accordion"
								>
									<!--begin:Menu link--><span
										class="menu-link"
										><span class="menu-bullet"
											><span
												class="bullet bullet-dot"
											></span></span
										><span class="menu-title">
											What is NFT
										</span>
									</span>
									<!--end:Menu link--><!--begin:Menu sub-->

									<!--end:Menu sub-->
								</div>
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
				<!--begin::Card-->
				<div class="d-flex justify-content-center w-100">
					<NFTexLogo :classes="'h-30px'" />
				</div>
				<!--end::Card-->
			</div>

			<!--end::Footer-->
		</div>
		<!--end::Sidebar-->
	</div>
	<!--end::Wrapper-->
</template>
