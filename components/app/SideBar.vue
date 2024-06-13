<script setup>
	// if (process.client) {
	// 	$crisp.push([
	// 		"on",
	// 		"chat:closed",
	// 		(event) => {
	// 			// infoAlert("Chat closed");
	// 			$crisp.push(["do", "chat:hide"]);
	// 		},
	// 	]);
	// }
	const active = useAppSettings().activeNav;
	const setNav = useAppSettings().setActiveNav;

	const startChat = () => {
		const chat = useLiveChat();
		chat.openChat();
	};
</script>

<template>
	<!--begin::Sidebar-->
	<div
		id="kt_app_sidebar"
		class="app-sidebar flex-column"
		data-kt-drawer="true"
		data-kt-drawer-name="app-sidebar"
		data-kt-drawer-activate="{default: true, lg: false}"
		data-kt-drawer-overlay="true"
		data-kt-drawer-width="100px"
		data-kt-drawer-direction="start"
		data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
		style=""
	>
		<!--begin::Logo-->
		<div
			class="app-sidebar-logo d-none d-lg-flex flex-center pt-8 mb-3"
			id="kt_app_sidebar_logo"
			bis_skin_checked="1"
		>
			<!--begin::Logo image-->
			<NFTexLogoMini :classes="'h-50px'" />
			<!--end::Logo image-->
		</div>
		<!--end::Logo-->
		<!--begin::sidebar menu-->
		<div
			class="app-sidebar-menu d-flex flex-center overflow-hidden flex-column-fluid"
			bis_skin_checked="1"
		>
			<!--begin::Menu wrapper-->
			<div
				id="kt_app_sidebar_menu_wrapper"
				class="app-sidebar-wrapper d-flex hover-scroll-overlay-y scroll-ms my-5"
				data-kt-scroll="true"
				data-kt-scroll-activate="true"
				data-kt-scroll-height="auto"
				data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
				data-kt-scroll-wrappers="#kt_app_sidebar_menu, #kt_app_sidebar"
				data-kt-scroll-offset="5px"
				style="height: 328px"
				bis_skin_checked="1"
			>
				<!--begin::Menu-->
				<div
					class="menu menu-column menu-rounded menu-active-bg menu-title-gray-700 menu-arrow-gray-500 menu-icon-gray-500 menu-bullet-gray-500 menu-state-primary my-auto"
					id="#kt_app_sidebar_menu"
					data-kt-menu="true"
					data-kt-menu-expand="false"
					bis_skin_checked="1"
				>
					<!--begin:Menu item-->
					<NuxtLink
						v-for="nav in navs"
						:to="nav.dir"
						data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
						data-kt-menu-placement="right-start"
						class="menu-item herie show py-2"
						:class="nav.dir === active ? 'here' : ''"
						@click="setNav(nav.dir)"
					>
						<!-- class="menu-item here show py-2" -->

						<!--begin:Menu link-->
						<span class="menu-link menu-center">
							<span class="menu-icon me-0">
								<i :class="nav.icon" class="fs-2x"> </i>
							</span>
						</span>
						<!--end:Menu link--><!--begin:Menu sub-->
						<div
							class="menu-sub menu-sub-dropdown px-2 py-4 w-250px mh-75 overflow-auto d-none d-lg-auto"
							bis_skin_checked="1"
						>
							<!--begin:Menu item-->
							<div class="menu-item" bis_skin_checked="1">
								<!--begin:Menu content-->
								<div class="menu-content" bis_skin_checked="1">
									<span
										class="menu-section fs-5 fw-bolder ps-1 py-1"
									>
										{{ nav.name }}
									</span>
								</div>
								<!--end:Menu content-->
							</div>
						</div>
						<!--end:Menu sub-->
					</NuxtLink>
					<!--end:Menu item-->
				</div>
				<!--end::Menu-->
			</div>
			<!--end::Menu wrapper-->
		</div>
		<!--end::sidebar menu-->
		<!--begin::Footer-->
		<div
			class="app-sidebar-footer bg-body d-flex flex-center flex-column-auto pt-6 mb-7"
			id="kt_app_sidebar_footer"
			bis_skin_checked="1"
		>
			<!--begin::Menu-->
			<div class="mb-0 d-lg-none" bis_skin_checked="1">
				<NFTexLogoMini :classes="'h-40px'"/>

			</div>
			<!--end::Menu-->
		</div>
		<!--end::Footer-->
	</div>
	<!--end::Sidebar-->
</template>
