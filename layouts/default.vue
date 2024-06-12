<script setup>
	import MainMobileNav from "../components/MainMobileNav.vue";

	const config = useRuntimeConfig().public;

	if (process.client) {
		try {
			console.log("Yes")
			const mS = useWebsocket();
			mS.connect();
			setTimeout(() => {
				//mS.sendNotification();
			}, 5000);
		} catch (error) {}
	}

	if (process.client) {
		KTThemeMode.setMode("dark");
	}
	const route = useRoute();
	console.log();
	const user = userData().data;

	const active = ref("all");

	const navs = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "About",
			path: "/resources/about",
		},
		{
			name: "Contact-us",
			path: "/resources/contact-us",
		},
	];

	const loaded = useCookie("reload", { maxAge: 60 * 60 * 24 });
	loaded.value = false;
	const setActive = (data) => {
		const a = active.value.toLocaleLowerCase() === data.toLocaleLowerCase();

		return a ? "active border-bottom border-danger" : "";
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
		id="kt_app_body"
		data-kt-app-header-fixed-mobile="true"
		data-kt-app-sidebar-enabled="true"
		data-kt-app-sidebar-push-header="true"
		data-kt-app-sidebar-push-toolbar="true"
		data-kt-app-sidebar-push-footer="true"
		class="app-default w-100 overflow-hidden"
	>
		<!--begin::App-->
		<div class="d-flex flex-column flex-root app-root" id="kt_app_root">
			<!--begin::Page-->
			<div
				class="app-page flex-column flex-column-fluid"
				id="kt_app_page"
			>
				<!--begin::Header-->
				<Header />
				<!--end::Header-->
				<!--begin::Wrapper-->
				<div
					class="app-wrapper flex-column flex-row-fluid"
					id="kt_app_wrapper"
				>
					<!--begin::Main-->
					<div
						class="app-main flex-column flex-row-fluid"
						id="kt_app_main"
					>
						<!--begin::Content wrapper-->
						<div class="d-flex flex-column flex-column-fluid">
							<!--begin::Content-->
							<div
								id="kt_app_content"
								class="app-content flex-column-fluid"
							>
								<!--begin::Content container-->
								<div
									style="position: relative"
									id="kt_app_content_container"
									class="app-container position-relative"
								>
									<slot />
								</div>
								<!--end::Content container-->
							</div>
							<!--end::Content-->
							<!--begin::Footer-->
							<Footer class="mb-n10" />
							<!--end::Footer-->
						</div>
						<!--end::Content wrapper-->
					</div>
					<!--end:::Main-->
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
		</div>
		<!--end::App-->

		<!--begin::Scrolltop-->
		<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
			<i class="ki-outline ki-arrow-up"></i>
		</div>
		<!--end::Scrolltop-->
		<LoginMenu />

		<!--begin::View component-->
		<MainMobileNav class="d-lg-none" />
		<!--end::View component-->
	</div>
</template>

<style scoped>
	.hide-scrollbar {
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE and Edge */
	}

	.hide-scrollbar::-webkit-scrollbar {
		display: none; /* WebKit (Chrome, Safari, etc.) */
	}
</style>
