<script setup lang="ts">
	const showPreference = ref(true);
</script>
<template>
	<div class="card card-flush pb-0 bgi-position-y-center bgi-no-repeat mb-10">
		<!--begin::Card header-->
		<div class="card-header pt-10 mb-0 pb-0">
			<div class="d-flex align-items-center">
				<!--begin::Icon-->
				<div class="symbol symbol-circle me-5">
					<div
						class="symbol-label bg-transparent text-primary border border-secondary border-dashed"
					>
						<i class="ki-outline ki-gear fs-2x text-primary"></i>
					</div>
				</div>
				<!--end::Icon-->

				<!--begin::Title-->
				<div class="d-flex flex-column">
					<h2 class="mb-1">Settings</h2>
					<div
						v-if="showPreference"
						class="text-muted fw-bold d-noine"
					>
						<span class="text-info">Email</span>
						<span class="mx-3">|</span>
						<span href="#">Notifications</span>
					</div>
					<div v-else class="text-muted fw-bold">
						<span class="text-primary">Session Logs</span>
						<span class="mx-3">|</span>
						<span class="text-danger">Deactivate</span>
					</div>
				</div>
				<!--end::Title-->
			</div>
		</div>
		<!--end::Card header-->

		<!--begin::Card body-->
		<div class="card-body pb-0 mt-0 pt-3">
			<!--begin::Navs-->
			<div class="d-flex overflow-auto h-55px">
				<ul
					class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-semibold flex-nowrap"
				>
					<!--begin::Nav item-->
					<li class="nav-item">
						<NuxtLink
						to="/app/settings"
							@click="showPreference = true"
							:class="showPreference ? 'active' : ''"
							class="nav-link text-active-primary me-6"
							role="button"
						>
							Preferences
						</NuxtLink>
					</li>
					<!--end::Nav item-->

					<!--begin::Nav item-->
					<li class="nav-item">
						<NuxtLink
							@click="showPreference = false"
							to="/app/settings/security"
							:class="showPreference ? '' : 'active'"
							class="nav-link text-active-primary me-6"
							role="button"
						>
							Security
						</NuxtLink>
					</li>
					<!--end::Nav item-->
				</ul>
			</div>
			<!--begin::Navs-->
		</div>
		<!--end::Card body-->
	</div>

	<!-- PREFERENCES -->
	<NuxtPage />
</template>
