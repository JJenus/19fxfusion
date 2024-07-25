<script setup>
	const useUserData = userData();
	const newNotification = useUserData.newNotification;

	
</script>

<template>
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
					<AppUserBalance />
				</h1>
				<!--end::Title-->

				<!--begin::Breadcrumb-->
				<ul
					class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1"
				>
					<!--begin::Item-->
					<li class="breadcrumb-item text-muted">
						<a role="button" class="text-muted text-hover-primary">
							Balance
						</a>
					</li>
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
				<div class="d-flex" bis_skin_checked="1">
					<a
						@click="userData().showNotifications()"
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
</template>
