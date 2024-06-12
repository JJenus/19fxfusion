<script setup lang="ts">
	import moment from "moment";
	const user = userData().data;

	const greet = () => {
		let userName = user.value.name.split(" ")[0];
		userName = userName.charAt(0).toUpperCase() + userName.slice(1);

		const now = moment();
		const hour = now.hour();

		let timeOfDay;

		// if (!user.value.emailVerified) {
		// 	return "Welcome " + userName;
		// }

		if (hour >= 5 && hour < 12) {
			timeOfDay = "Good morning " + userName;
		} else if (hour >= 12 && hour < 17) {
			timeOfDay = "Good afternoon " + userName;
		} else if (hour >= 17 && hour < 20) {
			timeOfDay = "Good evening " + userName;
		} else {
			timeOfDay = `Hi ${userName}, working late`;
		}

		return timeOfDay + "!";
	};
</script>

<template>
	<!--begin::Engage widget 12-->
	<div
		class="card card-custom bg-light-success border-0 h-md-100 mb-5 mb-lg-10"
	>
		<!--begin::Body-->
		<div
			class="card-body d-flex justify-content-center flex-wrap ps-xl-15 pe-0"
		>
			<!--begin::Wrapper-->
			<div class="flex-grow-1 mt-2 me-9 me-md-0">
				<!--begin::Title-->
				<div
					class="position-relative text-gray-800 fs-1 z-index-2 fw-bold mb-5"
				>
					{{ greet() }}
				</div>
				<!--end::Title-->

				<AdminBalance class="d-lg-none mb-8" />

				<!--begin::Action-->
			</div>
			<!--begin::Wrapper-->

			<!--begin::Illustration-->
			<img
				src="/assets/media/illustrations/misc/credit-card.png"
				class="h-175px me-15"
				alt=""
			/>
			<!--end::Illustration-->
		</div>
		<!--end::Body-->
	</div>
	<!--end::Engage widget 12-->

	<!--begin::Chart widget 36-->
	<div class="card card-flush overflow-hidden"></div>
	<!--end::Chart widget 36-->
</template>
