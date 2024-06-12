<script setup lang="ts">
	import currency from "currency.js";

	const searchText = ref("");
	const user = userData().active;
	const notify = ref<string | null>(null);

	const balance = () => {
		let cAmount = user.value?.account.amount;
		if (!cAmount) {
			cAmount = 0;
		}
		const amount = currency(cAmount, {
			symbol: "",
		}).format();
		return amount;
	};

	const back = () => {
		user.value = null;
	};
	onMounted(() => {});
</script>

<template>
	<div>
		<div
			class="card card-flush mb-9"
			id="kt_user_profile_panel"
			bis_skin_checked="1"
		>
			<!--begin::Hero nav-->
			<div
				class="card-header rounded-top bgi-size-cover h-200px"
				style="
					background-position: 100% 50%;
					background-image: url('/assets/media/misc/pattern-4.jpg');
				"
				bis_skin_checked="1"
			></div>
			<!--end::Hero nav-->

			<!--begin::Body-->
			<div class="card-body mt-n19" bis_skin_checked="1">
				<!--begin::Details-->
				<div class="m-0" bis_skin_checked="1">
					<!--begin: Pic-->
					<div
						class="d-flex flex-stack align-items-end pb-4 mt-n19"
						bis_skin_checked="1"
					>
						<div
							class="symbol symbol-125px symbol-lg-150px symbol-fixed position-relative mt-n3"
							bis_skin_checked="1"
						>
							<img
								:src="
									user?.imgUrl ||
									'/assets/media/svg/avatars/blank.svg'
								"
								alt="image"
								class="border border-white border-4"
								style="border-radius: 20px"
							/>
							<div
								class="position-absolute translate-middle bottom-0 start-100 ms-n1 mb-9 bg-success rounded-circle h-15px w-15px"
								bis_skin_checked="1"
							></div>
						</div>
					</div>
					<!--end::Pic-->

					<!--begin::Info-->
					<div
						class="d-flex flex-stack flex-wrap align-items-end"
						bis_skin_checked="1"
					>
						<!--begin::User-->
						<div class="d-flex flex-column" bis_skin_checked="1">
							<!--begin::Name-->
							<div
								class="d-flex align-items-center mb-2"
								bis_skin_checked="1"
							>
								<a
									role="button"
									class="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
									>{{ user?.name }}</a
								>
								<a
									role="button"
									class=""
									data-bs-toggle="tooltip"
									data-bs-placement="right"
									aria-label="Account is verified"
									data-bs-original-title="Account is verified"
									data-kt-initialized="1"
								>
									<i
										v-if="user?.verified"
										class="ki-outline ki-verify fs-1 text-primary"
									></i>
									<i
										tooltip="Not verified"
										v-else
										class="ki-outline ki-information fs-1 text-danger"
									></i>
								</a>
							</div>
							<!--end::Name-->

							<!--begin::Info-->
							<div
								class="d-flex align-items-center flex-wrap fw-semibold mb-5 mb-lg-0 fs-7 pe-2"
								bis_skin_checked="1"
							>
								<a
									href="#"
									class="d-flex align-items-center text-gray-400 text-hover-primary"
								>
									{{ user?.city }}
								</a>
								<span
									class="bullet bullet-dot h-5px w-5px bg-gray-400 mx-3"
								></span>
								<a
									href="#"
									class="d-flex align-items-center text-gray-400 text-hover-primary"
								>
									{{ user?.country }}
								</a>
								<span
									class="bullet bullet-dot h-5px w-5px bg-gray-400 mx-3"
								></span>
							</div>
							<!--end::Info-->
						</div>
						<!--end::User-->

						<!--begin::Actions-->
						<div class="d-flex" bis_skin_checked="1">
							<a
								v-if="!notify"
								@click="notify = 'notify'"
								role="button"
								class="btn btn-sm btn-light me-3"
							>
								Send Notification
							</a>

							<a
								v-else
								@click="notify = null"
								role="button"
								class="btn btn-sm btn-light me-3"
							>
								Profile
							</a>

							<button
								@click="back()"
								class="btn btn-sm btn-primary"
							>
								<i class="ki-outline ki-check fs-2 d-none"></i>
								<!--begin::Indicator label-->
								<span class="indicator-label"> Back</span>
								<!--end::Indicator label-->
							</button>
						</div>
						<!--end::Actions-->
					</div>
					<!--end::Info-->
				</div>
				<!--end::Details-->
			</div>
		</div>
		<AdminUserNotify v-if="notify" :user="user!" />
		<AdminUserProfile v-else :user="user!" />
	</div>
</template>
