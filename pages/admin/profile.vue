<script setup>
	// /assets/media/svg/avatars/blank.svg
	const route = useRoute();
	console.log();
	const currentRoute = ref("overview");
	const user = userData().data;

	onMounted(() => {
		if (route.path.split("/")[2])
			currentRoute.value = route.path.split("/")[2];
	});
</script>

<template>
	<div class="card mb-5 mb-xl-8">
		<!--begin::Card body-->
		<div class="card-body pt-15">
			<!--begin::Summary-->
			<div class="d-flex flex-center flex-column mb-5">
				<!--begin::Avatar-->
				<div class="symbol symbol-100px symbol-circle mb-7">
					<img :src="user.imgUrl" alt="image" />
				</div>
				<!--end::Avatar-->

				<!--begin::Name-->
				<a
					href="#"
					class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
				>
					{{ user.name }}
				</a>
				<!--end::Name-->

				<!--begin::Position-->
				<div class="fs-5 fw-semibold text-muted mb-6"></div>
				<!--end::Position-->

				<!--begin::Info-->
				<div class="d-flex flex-wriap flex-center d-noine">
					<!--begin::Stats-->
					<NuxtLink
						to="/admin/profile"
						@click="currentRoute = 'overview'"
						:class="currentRoute == 'overview' ? 'active' : ''"
						class="btn btn-active-light-primary border border-gray-300 border-dashed rounded py-3 px-3 mb-3"
					>
						<i class="ki-duotone ki-note-2 fs-3 me-1">
							<i class="path1"></i>
							<i class="path2"></i>
							<i class="path3"></i>
							<i class="path4"></i>
						</i>
						Overview
					</NuxtLink>
					<!--end::Stats-->

					<!--begin::Stats-->
					<NuxtLink
						to="/admin/profile/edit"
						@click="currentRoute = 'edit'"
						:class="currentRoute == 'edit' ? 'active' : ''"
						class="btn btn-active-light-primary border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3"
					>
						<i class="ki-outline ki-notepad-edit fs-3 me-1"></i>
						<span class="w-50px">Edit</span>
					</NuxtLink>
					<!--end::Stats-->
				</div>
				<!--end::Info-->
			</div>
			<!--end::Summary-->
			<div class="separator separator-dashed my-3"></div>
			<NuxtPage />
		</div>
		<!--end::Card body-->
	</div>
</template>
