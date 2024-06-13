<script setup lang="ts">
	const route = useRoute();
	import currency from "currency.js";

	const config = useRuntimeConfig().public;
	const auth = useAuth();
	const user = userData().data;

	const active = ref("all");

	const amount = () => {
		const a: any = user.value.account.amount;
		return currency(a, {
			symbol: "",
		}).format();
	};

	const navs = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "About",
			path: "/resources/about-us",
		},
		{
			name: "Contact-Us",
			path: "/resources/contact-us",
		},
	];

	const setActive = (data: string, theme: string) => {
		const a = active.value.toLocaleLowerCase() === data.toLocaleLowerCase();
		const color =
			theme === "light"
				? "active border-bottom border-info"
				: "active border-bottom border-info";

		return a ? color : "";
	};

	onMounted(() => {
		const paths = route.path.split("/");
		if (paths[2]) {
			active.value = paths[2];
		} else if (!paths[1]) {
			active.value = "home";
		}
	});
</script>

<template>
	<div
	style="z-index: 22;"
		id="kt_app_header"
		class="app-header d-flex border-0 bg-transparent"
		:data-kt-sticky="true"
		data-kt-sticky-name="app-header-sticky"
		data-kt-sticky-offset="{default: 'false', lg: '300px'}"
	>
		<!--begin::Header container-->
		<div
			class="app-container container-fluid d-flex align-items-stretch justify-content-between"
			id="kt_app_header_container"
		>
			<!--begin::Logo-->
			<div class="d-flex d-lg-none align-items-center me-auto">
				<NFTexLogo :classes="'h-40px ms-n3'" />
			</div>

			<div class="d-none d-lg-flex align-items-center">
				<NFTexLogo :classes="'h-40px'" />
			</div>
			<!--end::Logo-->

			<div class="d-none d-lg-flex align-items-center">
				<ul
					class="nav nav-tabs nav-pills d-flex flex-nowrap border-0 fs-6"
				>
					<li
						v-for="nav in navs"
						class="nav-item me-08 mb-md-2i"
						@click="active = nav.name"
					>
						<NuxtLink
							class="nav-link theme-dark-show w-100 bg-transparent btn btn-color-white btn-active-color-white btn-active-light btn-sm"
							:class="setActive(nav.name, 'dark')"
							:to="nav.path"
						>
							<span class="d-flex flex-column align-items-start">
								<span class="fs-4 fw-bold">{{ nav.name }}</span>
							</span>
						</NuxtLink>

						<NuxtLink
							class="nav-link theme-light-show w-100 bg-transparent btn btn-color-info btn-active-color-primary btn-active-light btn-sm"
							:class="setActive(nav.name, 'light')"
							:to="nav.path"
						>
							<span class="d-flex flex-column align-items-start">
								<span class="fs-4 fw-bold">{{ nav.name }}</span>
							</span>
						</NuxtLink>
					</li>
				</ul>
			</div>

			<!--begin::Navbar-->
			<div class="app-navbar flex-shrink-0" id="kt_app_aside_navbar">
				<!--begin::Login-->
				<div class="app-navbar-item ms-n3w">
					<!--begin::Menu- wrapper-->
					<div
						v-if="!auth.isAuthenticated()"
						class="btn btn-secondary btn-custom fw-bold btn-active-light btn-active-color-white btn-color-white d-none"
						data-bs-toggle="modal"
						data-bs-target="#kt_modal_login"
						@click="useAuth().openAuthModal('login')"
					>
						<i class="ki-outline ki-entrance-left fs-2"></i> Sign in
					</div>

					<div v-else>
						<div
							class="d-none btn theme-light-show btn-outline btn-outline-info btn-custom fw-bold"
							data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
							data-kt-menu-attach="parent"
							data-kt-menu-placement="bottom"
						>
							<i class="ki-solid ki-wallet fs-2 me-1"></i>
							<span class="pb-5">
								{{ amount() }}
							</span>
						</div>
						<div
							class="btn btn-secondary theme-dark-show btn-custom fw-bold btn-active-light btn-active-color-white btn-color-white"
							data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
							data-kt-menu-attach="parent"
							data-kt-menu-placement="bottom"
						>
							<i
								class="ki-solid ki-wallet fs-2 text-warning me-1"
							></i>
							<span class="pb-5">
								{{ amount() }}
							</span>
						</div>
						<BalanceDropdown class="d-none" />
					</div>
					<!--end::Menu wrapper-->
				</div>
				<!--end::Login-->

				<!--begin::Search-->

				<!--end::Search-->

				<!--begin::User menu-->
				<div
					class="app-navbar-item mx-3 ms-lg-1"
					id="kt_header_user_menu_toggle"
				>
					<!--begin::Menu wrapper-->

					<a
						href="/app"
						class="cursor-pointer d-nonei d-lg-block symbol symbol-circle ms-2 symbol-35px symbol-lg-50px ms-0 ms-lg-3"
						
						v-if="auth.isAuthenticated()"
					>
						<!--begin::Drawer toggle-->
						<img
							:src="
								user.imgUrl
									? user.imgUrl
									: $config.public.DEFAULT_DP
							"
							alt="user"
							class="border border-info border-2"
						/>
						<!--end::Drawer toggle-->
					</a>

					<!--begin::User account menu-->
					<UserDropdown class="d-none" />
					<!--end::User account menu-->
					<!--end::Menu wrapper-->
				</div>
				<!--end::User menu-->

				<!--begin::Cart-->
				<div
					class="app-navbar-item d-none d-lg-flexi justify-content-end flex-grow-1 ms-1 ms-lg-3"
				>
					<!--begin::Drawer toggle-->
					<div
						class="btn btn-secondary btn-custom fw-bold btn-active-light btn-active-color-white btn-color-white btn-icon w-40px h-40px"
						id="kt_activities_toggle"
					>
						<i class="ki-outline ki-handcart fs-2x"></i>
					</div>
					<!--end::Drawer toggle-->
				</div>
				<!--end::Cart-->

				<!--end::Quick links-->
			</div>
			<!--end::Navbar-->

			<!--begin::Sidebar toggle-->
			<div
				class="d-flex d-lg-none align-items-center me-n1 ms-3"
				title="Show sidebar menu"
			>
				<button
					class="btn btn-icon btn-icon-white btn-active-icon-white btn-active-color-white w-35px h-35px"
					id="kt_app_sidebar_mobile_toggle"
				>
					<i class="ki-solid ki-burger-menu-5 fs-3x"></i>
				</button>
			</div>
			<!--end::Sidebar toggle-->
		</div>
		<!--end::Header container-->
	</div>
</template>

<style>
	.glass-container {
		background: rgba(
			255,
			255,
			255,
			0.2
		); /* Adjust the alpha value for transparency */
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.9); /* Optional: Add a subtle shadow */
	}
</style>
