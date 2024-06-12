<script setup lang="ts">
	import moment from "moment";
	import { IUser } from "utils/interfaces/IUser";

	const newNotification = userData().newNotification;

	const users = userData().users;
	const range = ref(7);

	const getPreview = (): IUser[] => {
		return users.value.filter((user) => {
			const userDate = moment(user.createdAt);
			const sevenDaysAgo = moment().subtract(range.value, "days");
			// }
			return !userDate.isBefore(sevenDaysAgo);
		});
	};

	onMounted(() => {});
</script>
<template>
	<div
		id="kt_app_aside"
		class="app-aside mobile-aside flex-column z-inde-1"
		style=""
		data-kt-drawer="true"
		data-kt-drawer-name="app-aside"
		data-kt-drawer-activate="{default: true, lg: false}"
		data-kt-drawer-overlay="true"
		data-kt-drawer-width="300px"
		data-kt-drawer-direction="end"
		data-kt-drawer-toggle="#kt_app_aside_mobile_toggle"
	>
		<!--begin::Navbar-->
		<div
			class="app-navbar flex-shrink-0 p-5 p-lg-18"
			id="kt_app_aside_navbar"
		>
			<!--begin::Settings-->
			<div @click="closeDrawer" class="app-navbar-item ms-n3">
				<!--begin::Menu- wrapper-->
				<NuxtLink
					to="/admin/settings"
					class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
					data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
					data-kt-menu-attach="parent"
					data-kt-menu-placement="bottom-end"
				>
					<i class="ki-outline ki-gear fs-2x"></i>
				</NuxtLink>

				<!--end::Menu wrapper-->
			</div>
			<!--end::Settings-->

			<div class="flex-grow-1 ms-1 ms-lg-3 d-lg-none"></div>

			<!--begin::Notifications-->
			<div
				class="app-navbar-item d-lg-flex justify-content-end flex-grow-1 ms-1 ms-lg-3 d-none"
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
					<i v-else class="ki-outline ki-notification-bing fs-2x"></i>
					<div
						v-if="newNotification"
						class="bg-danger blink position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3"
						bis_skin_checked="1"
					></div>
				</div>
				<!--end::Drawer toggle-->
			</div>
			<!--end::Notifications-->

			<!--begin::Edit profile-->
			<div class="app-navbar-item ms-1 ms-lg-3" @click="closeDrawer">
				<!--begin::Menu wrapper-->
				<NuxtLink
					to="/admin/profile/edit"
					class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
					data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
					data-kt-menu-attach="parent"
					data-kt-menu-placement="bottom-end"
				>
					<i class="ki-outline ki-notepad-edit fs-2x"></i>
				</NuxtLink>
				<!--end::Menu wrapper-->
			</div>
			<!--end::Edit profile-->

			<!--begin::User menu-->
			<div
				class="app-navbar-item ms-1 ms-lg-3"
				id="kt_header_user_menu_toggle"
			>
				<AdminUserMenuDropdown />
			</div>
			<!--end::User menu-->
		</div>
		<!--end::Navbar-->

		<!--begin::Content-->
		<div
			id="kt_app_aside_content_wrapper"
			class="app-aside_content-wrapper hover-scroll-overlay-y ps-5 ps-lg-18 pe-3 pe-lg-16 me-2"
			data-kt-scroll="true"
			data-kt-scroll-activate="true"
			data-kt-scroll-height="auto"
			data-kt-scroll-dependencies="#kt_app_aside_navbar"
			data-kt-scroll-wrappers="#kt_app_aside_content"
			data-kt-scroll-offset="5px"
		>
			<!--begin::Card widget 21-->
			<div
				class="card card-custom-2 bg-light-danger border-0 mb-lg-10 d-none d-lg-block"
			>
				<!--begin::Card body-->
				<div class="card-body">
					<!--begin::Title-->
					<AdminBalance />
					<!--end::Action-->
				</div>
				<!--end::Card body-->
			</div>
			<!--end::Card widget 21-->

			<!--begin::List widget 27-->
			<div class="card card-flush card-reset bg-transparent card-p-0">
				<!--begin::Header-->
				<div class="card-header pt-5">
					<!--begin::Title-->
					<h3 class="card-title align-items-start flex-column">
						<span class="card-label text-gray-800 fw-bold mb-2"
							>New Users</span
						>
					</h3>
					<!--end::Title-->

					<!--begin::Toolbar-->
					<div class="card-toolbar">
						<!--begin::Menu-->
						<button
							class="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
							data-kt-menu-trigger="click"
							data-kt-menu-placement="bottom-end"
							data-kt-menu-overflow="true"
						>
							<i
								class="ki-outline ki-dots-square fs-1 text-gray-400 me-n1"
							></i>
						</button>

						<!--begin::Menu 2-->
						<div
							class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
							data-kt-menu="true"
						>
							<!--begin::Menu item-->
							<div class="menu-item px-3">
								<div
									class="menu-content fs-6 text-dark fw-bold px-3 py-4"
								>
									<i
										class="ki-solid ki-setting-4 fs-5 me-2"
									></i>
									Filter
								</div>
							</div>
							<!--end::Menu item-->

							<!--begin::Menu separator-->
							<div class="separator mb-3 opacity-75"></div>
							<!--end::Menu separator-->

							<div class="menu-item px-3">
								<a
									@click="range = 0"
									role="button"
									class="menu-link px-3"
								>
									Today
								</a>
							</div>

							<!--begin::Menu item-->
							<div class="menu-item px-3">
								<a
									@click="range = 1"
									role="button"
									class="menu-link px-3"
								>
									Yesterday
								</a>
							</div>

							<div class="menu-item px-3">
								<a
									@click="range = 7"
									role="button"
									class="menu-link px-3"
								>
									Last 7 days
								</a>
							</div>
							<!--end::Menu item-->

							<!--begin::Menu item-->
							<div class="menu-item px-3">
								<a
									@click="range = 30"
									role="button"
									class="menu-link px-3"
								>
									Last 30 days
								</a>
							</div>
							<!--end::Menu item-->

							<!--begin::Menu separator-->
							<div class="separator mt-3 opacity-75"></div>
							<!--end::Menu separator-->

							<!--begin::Menu item-->
							<div class="menu-item px-3">
								<div class="menu-content px-3 py-3">
									<NuxtLink
										to="/admin/users"
										class="btn btn-primary btn-sm px-4 w-100"
										role="button"
									>
										View All
									</NuxtLink>
								</div>
							</div>
							<!--end::Menu item-->
						</div>
						<!--end::Menu 2-->

						<!--end::Menu-->
					</div>
					<!--end::Toolbar-->
				</div>
				<!--end::Header-->

				<!--begin::Body-->
				<div class="card-body pt-6">
					<div
						v-if="getPreview().length === 0"
						class="text-center fw-bold text-muted"
					>
						No users found
					</div>
					<AdminUsersNewUser
						v-for="user in getPreview()"
						:user="user"
					/>
				</div>
				<!--end::Body-->
			</div>
			<!--end::List widget 27-->
		</div>
		<!--end::Content-->
	</div>
</template>
