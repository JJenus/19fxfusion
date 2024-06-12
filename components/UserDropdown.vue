<script setup lang="ts">
	const auth = useAuth();
	const logout = () => {
		auth.logout();
	};
</script>
<template>
	<div
		class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
		data-kt-menu="true"
	>
		<!--begin::Menu separator-->
		<!--end::Menu separator-->

		<!--begin::Menu item-->
		<div class="menu-item px-5">
			<a href="/account/" class="menu-link px-5">
				My Profile <i class="ki-solid ki-user ms-auto fs-2"></i>
			</a>
		</div>
		<!--end::Menu item-->

		<!--begin::Menu item-->
		<div class="menu-item px-5">
			<a href="/studio/create" class="menu-link px-5">
				Create <i class="ki-solid ki-element-plus ms-auto fs-2"></i>
			</a>
		</div>
		<!--end::Menu item-->

		<div class="separator my-2"></div>

		<!--begin::Menu item-->
		<div class="menu-item px-5">
			<a href="/account/" class="menu-link px-5">
				Collections <i class="ki-solid ki-element-7 ms-auto fs-2"></i>
			</a>
		</div>
		<!--end::Menu item-->

		<!--begin::Menu item-->
		<div class="menu-item px-5">
			<a href="/account/created" class="menu-link px-5">
				Created <i class="ki-solid ki-element-equal ms-auto fs-2"></i>
			</a>
		</div>
		<!--end::Menu item-->

		<!--begin::Menu separator-->
		<div class="separator my-2"></div>
		<!--end::Menu separator-->

		<!--begin::Menu item-->
		<div
			class="menu-item px-5"
			data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
			data-kt-menu-placement="left-start"
			data-kt-menu-offset="-15px, 0"
		>
			<a href="#" class="menu-link px-5">
				<span class="menu-title position-relative">
					Mode

					<span
						class="ms-5 position-absolute translate-middle-y top-50 end-0"
					>
						<i
							class="ki-outline ki-night-day theme-light-show fs-2"
						></i>
						<i class="ki-outline ki-moon theme-dark-show fs-2"></i>
					</span>
				</span>
			</a>

			<!--begin::Menu-->
			<div
				class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
				data-kt-menu="true"
				data-kt-element="theme-mode-menu"
			>
				<!--begin::Menu item-->
				<div class="menu-item px-3 my-0">
					<a
						href="#"
						class="menu-link px-3 py-2"
						data-kt-element="mode"
						data-kt-value="light"
					>
						<span class="menu-icon" data-kt-element="icon">
							<i class="ki-outline ki-night-day fs-2"></i>
						</span>
						<span class="menu-title"> Light </span>
					</a>
				</div>
				<!--end::Menu item-->

				<!--begin::Menu item-->
				<div class="menu-item px-3 my-0">
					<a
						href="#"
						class="menu-link px-3 py-2"
						data-kt-element="mode"
						data-kt-value="dark"
					>
						<span class="menu-icon" data-kt-element="icon">
							<i class="ki-outline ki-moon fs-2"></i>
						</span>
						<span class="menu-title"> Dark </span>
					</a>
				</div>
				<!--end::Menu item-->

				<!--begin::Menu item-->
				<div class="menu-item px-3 my-0">
					<a
						href="#"
						class="menu-link px-3 py-2"
						data-kt-element="mode"
						data-kt-value="system"
					>
						<span class="menu-icon" data-kt-element="icon">
							<i class="ki-outline ki-screen fs-2"></i>
						</span>
						<span class="menu-title"> System </span>
					</a>
				</div>
				<!--end::Menu item-->
			</div>
			<!--end::Menu-->
		</div>
		<!--end::Menu item-->

		<!--begin::Menu item-->
		<div
			class="menu-item px-5"
			data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
			data-kt-menu-placement="left-start"
			data-kt-menu-offset="-15px, 0"
		>
			<a href="#" class="menu-link px-5">
				<span class="menu-title position-relative">
					Language

					<span
						class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0"
					>
						English
						<img
							class="w-15px h-15px rounded-1 ms-2"
							src="/assets/media/flags/united-states.svg"
							alt=""
						/>
					</span>
				</span>
			</a>

			<!--begin::Menu sub-->
			<div class="menu-sub menu-sub-dropdown w-175px py-4">
				<!--begin::Menu item-->
				<div class="menu-item px-3">
					<a role="button" class="menu-link d-flex px-5 active">
						<span class="symbol symbol-20px me-4">
							<img
								class="rounded-1"
								src="/assets/media/flags/united-states.svg"
								alt=""
							/>
						</span>
						English
					</a>
				</div>
				<!--end::Menu item-->

				<!--begin::Menu item-->
				<div class="menu-item px-3">
					<a role="button" class="menu-link d-flex px-5">
						<span class="symbol symbol-20px me-4">
							<img
								class="rounded-1"
								src="/assets/media/flags/spain.svg"
								alt=""
							/>
						</span>
						Spanish
					</a>
				</div>
				<!--end::Menu item-->

				<!--begin::Menu item-->
				<div class="menu-item px-3">
					<a role="button" class="menu-link d-flex px-5">
						<span class="symbol symbol-20px me-4">
							<img
								class="rounded-1"
								src="/assets/media/flags/germany.svg"
								alt=""
							/>
						</span>
						German
					</a>
				</div>
				<!--end::Menu item-->

				<!--begin::Menu item-->
				<div class="menu-item px-3">
					<a role="button" class="menu-link d-flex px-5">
						<span class="symbol symbol-20px me-4">
							<img
								class="rounded-1"
								src="/assets/media/flags/japan.svg"
								alt=""
							/>
						</span>
						Japanese
					</a>
				</div>
				<!--end::Menu item-->

				<!--begin::Menu item-->
				<div class="menu-item px-3">
					<a role="button" class="menu-link d-flex px-5">
						<span class="symbol symbol-20px me-4">
							<img
								class="rounded-1"
								src="/assets/media/flags/france.svg"
								alt=""
							/>
						</span>
						French
					</a>
				</div>
				<!--end::Menu item-->
			</div>
			<!--end::Menu sub-->
		</div>
		<!--end::Menu item-->

		<!--begin::Menu item-->
		<div class="menu-item px-5 my-1">
			<a role="button" class="menu-link px-5"> Account Settings </a>
		</div>
		<!--end::Menu item-->

		<!--begin::Menu item-->
		<div class="menu-item px-5">
			<a @click="logout()" role="button" class="menu-link px-5">
				Sign Out
			</a>
		</div>
		<!--end::Menu item-->
	</div>
</template>
