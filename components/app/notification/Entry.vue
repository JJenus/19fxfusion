<script setup lang="ts">
	import moment from "moment";
	import {
		INotification,
		NotificationStatus,
	} from "../../../utils/interfaces/Notification";

	const props = defineProps<{ notification: INotification }>();
	const nDate = () => {
		return moment(props.notification.createdAt).format(
			"DD/MM/YYYY hh:mm A"
		);
	};
</script>

<template>
	<div class="card card-custom-2 bg-light mb-8 mb-lg-8 p-0 border-0">
		<!--begin::Card body-->
		<div
			:class="
				notification.status === NotificationStatus.UNREAD
					? 'bg-light-primary'
					: ''
			"
			class="card-body p-5 mb-0 rounded"
		>
			<div class="card-title">
				<span
					class="widget-title fw-bold fs-4 d-flex align-items-center"
				>
					<i
						:class="
							notification.status === NotificationStatus.UNREAD
								? 'text-success'
								: 'text-muted'
						"
						class="ki-outline ki-notification-status fs-1 me-2"
					>
						<!-- ki-check-circle (For successful transactions) -->
						<!-- ki-cross-circle (For failed transactions) -->
						<!-- ki-notification-status (For other notifications) -->
					</i>
					{{ notification.title }}
					<!-- Transaction / Transfer -->
				</span>
			</div>
			<div class="px-2 my-2">
				{{ notification.message }}
			</div>
			<div
				class="d-flex m-0 align-items-center justify-content-between px-2"
			>
				<span class="text-muted">{{ nDate() }}</span>
				<a role="button" class="btn btn-bg-body text-primary d-none"
					>view</a
				>
			</div>
		</div>
		<!--end::Card body-->
	</div>
</template>
