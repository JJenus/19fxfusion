<script setup>
	const notifications = userData().notifications;
	let targetElement;
	let container;

	const notification = ref({
		title: "",
		status: "READ",
		createdAt: "Just now",
		message: "Something splendid",
	});

	const showToast = () => {
		const newToast = targetElement.cloneNode(true);
		// Update the new toast content
		const toastHeader = newToast.querySelector(".toast-header");
		const toastTitle = toastHeader.querySelector("strong");
		const toastTime = toastHeader.querySelector("small");
		const toastBody = newToast.querySelector(".toast-body");

		toastTitle.textContent = notification.value.title; // Update the title
		toastTime.textContent = useAppSettings().time(
			notification.value.createdAt
		); // Update the time
		toastBody.textContent = notification.value.message; // Update the body
		container.append(newToast);
		const toast = bootstrap.Toast.getOrCreateInstance(newToast);
		toast.show();
	};

	if (process.client) {
		const ws = useWebsocket();
		// Select elements
		container = document.getElementById("kt_docs_toast_stack_container");
		targetElement = document.querySelector('[data-kt-docs-toast="stack"]'); // Use CSS class or HTML attr to avoid duplicating ids

		// Remove base element markup
		targetElement.parentNode.removeChild(targetElement);

		watch(ws.newNotification, (newNotification, oldPoint) => {
			notification.value = newNotification;
			notifications.value.unshift(newNotification);
			
			userData().newNotification.value = true;
			showToast();
		});
	}

	onMounted(() => {});
</script>

<template>
	<div >
		<!--begin::Toast : class="" style="z-index: 30000" -->
		<div
			id="kt_docs_toast_stack_container"
			class="mt-18 mt-lg-0 toast-container position-fixed top-0 end-0 p-3"
		>
			<div
				class="toast"
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
				data-kt-docs-toast="stack"
			>
				<div class="toast-header">
					<i
						class="ki-solid ki-notification-bing fs-2 text-info me-3"
					>
					</i>

					<strong class="me-auto mw-200px text-truncate pe-3"
						>title</strong
					>
					<small>11 mins ago</small>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
				<div class="toast-body">message body</div>
			</div>
		</div>
		<!--end::Toast-->

		<!--begin::Activities drawer-->
		<div
			id="kt_activities"
			class="bg-body mobile-aside"
			data-kt-drawer="true"
			data-kt-drawer-name="activities"
			data-kt-drawer-activate="true"
			data-kt-drawer-overlay="true"
			data-kt-drawer-width="{default:'300px', 'lg': '350px'}"
			data-kt-drawer-direction="end"
			data-kt-drawer-toggle="#kt_activities_toggle"
			data-kt-drawer-close="#kt_activities_close"
		>
			<div
				class="card shadow-none border-0 rounded-0 w-100 mobile-bottom"
			>
				<!--begin::Header-->
				<div class="card-header" id="kt_activities_header">
					<h3 class="card-title fw-bold text-dark">Notifications</h3>

					<div class="card-toolbar">
						<button
							type="button"
							class="btn btn-sm btn-icon btn-active-light-primary me-n5"
							id="kt_activities_close"
						>
							<i class="ki-outline ki-cross fs-1"></i>
						</button>
					</div>
				</div>
				<!--end::Header-->

				<!--begin::Body-->
				<div
					class="card-body position-relative"
					id="kt_activities_body"
				>
					<!--begin::Content-->
					<div
						id="kt_activities_scroll"
						class="position-relative scroll-y me-n1 pe-1 ps-0"
						data-kt-scroll="true"
						data-kt-scroll-height="auto"
						data-kt-scroll-wrappers="#kt_activities_body"
						data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
						data-kt-scroll-offset="5px"
					>
						<div
							v-if="notifications.length === 0"
							class="text-center text-muted fw-bold"
						>
							No notification
						</div>

						<AppNotificationEntry
							:notification="notify"
							v-for="notify in notifications"
						/>
					</div>
					<!--end::Content-->
				</div>
				<!--end::Body-->

				<!--begin::Footer-->
				<div
					class="card-footer py-0 py-lg-5 text-center mt-n8 mt-lg-0"
					id="kt_activities_footer"
				>
					<a role="button" class="btn btn-bg-body text-primary">
						<i
							class="ki-outline ki-arrows-circle fs-5 text-primary"
						></i>
						more...
					</a>
				</div>
				<!--end::Footer-->
			</div>
		</div>
		<!--end::Activities drawer-->
	</div>
</template>

<style scoped>
	@media (max-width: 765px) {
		.mobile-aside {
			padding-bottom: 60px !important;
		}
	}
</style>
