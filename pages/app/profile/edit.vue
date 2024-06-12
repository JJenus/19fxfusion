<script setup lang="ts">
	const user = userData().data;
	const save = () =>{
		successAlert("Saved");
	}
</script>

<template>
	<!--begin::Content-->
	<div id="kt_account_settings_profile_details" class="collapse show">
		<!--begin::Form-->
		<form
			@submit.prevent="save()"
			id="kt_account_profile_details_form"
			class="form fv-plugins-bootstrap5 fv-plugins-framework"
			novalidate
		>
			<!--begin::Card body-->
			<!--begin::Input group-->
			<div class="row mb-6 justify-content-center align-items-center">
				<!--begin::Label-->
				<label class="col-lg-4 col-form-label fw-semibold fs-6"
					>Avatar</label
				>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-lg-8">
					<!--begin::Image input-->
					<div
						class="image-input image-input-outline image-input-empty"
						data-kt-image-input="true"
						:style="`background-image: ${user.imgUrl};`"
					>
						<!--begin::Preview existing avatar-->
						<div
							class="image-input-wrapper w-125px h-125px"
							style="background-image: none"
						></div>
						<!--end::Preview existing avatar-->

						<!--begin::Label-->
						<label
							class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
							data-kt-image-input-action="change"
							data-bs-toggle="tooltip"
							aria-label="Change avatar"
							data-bs-original-title="Change avatar"
							data-kt-initialized="1"
						>
							<i class="ki-outline ki-pencil fs-7"></i>
							<!--begin::Inputs-->
							<input
								type="file"
								name="avatar"
								accept=".png, .jpg, .jpeg"
							/>
							<input
								type="hidden"
								name="avatar_remove"
								value="1"
							/>
							<!--end::Inputs-->
						</label>
						<!--end::Label-->

						<!--begin::Cancel-->
						<span
							class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
							data-kt-image-input-action="cancel"
							data-bs-toggle="tooltip"
							aria-label="Cancel avatar"
							data-bs-original-title="Cancel avatar"
							data-kt-initialized="1"
						>
							<i class="ki-outline ki-cross fs-2"></i>
						</span>
						<!--end::Cancel-->

						<!--begin::Remove-->
						<span
							class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
							data-kt-image-input-action="remove"
							data-bs-toggle="tooltip"
							aria-label="Remove avatar"
							data-bs-original-title="Remove avatar"
							data-kt-initialized="1"
						>
							<i class="ki-outline ki-cross fs-2"></i>
						</span>
						<!--end::Remove-->
					</div>
					<!--end::Image input-->

					<!--begin::Hint-->
					<div class="form-text">
						Allowed file types: png, jpg, jpeg.
					</div>
					<!--end::Hint-->
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Input group-->
			<div class="row mb-6">
				<!--begin::Label-->
				<label class="col-lg-4 col-form-label required fw-semibold fs-6"
					>Full Name</label
				>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-lg-8">
					<!--begin::Row-->
					<div class="row">
						<!--begin::Col-->
						<div class="col fv-row fv-plugins-icon-container">
							<input
								type="text"
								name="name"
								class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
								placeholder="Full name"
								v-model="user.name"
							/>
							<div
								class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
							></div>
						</div>
						<!--end::Col-->
					</div>
					<!--end::Row-->
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Input group-->
			<div class="row mb-6">
				<!--begin::Label-->
				<label class="col-lg-4 col-form-label fw-semibold fs-6">
					<span class="required">Contact Phone</span>

					<span
						class="ms-1"
						data-bs-toggle="tooltip"
						aria-label="Phone number must be active"
						data-bs-original-title="Phone number must be active"
						data-kt-initialized="1"
					>
						<i
							class="ki-outline ki-information-5 text-gray-500 fs-6"
						></i
					></span>
				</label>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-lg-8 fv-row fv-plugins-icon-container">
					<input
						type="tel"
						name="phone"
						class="form-control form-control-lg form-control-solid"
						placeholder="Phone number"
						v-model="user.phone"
					/>
					<div
						class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
					></div>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Input group-->
			<div class="row mb-6">
				<!--begin::Label-->
				<label class="col-lg-4 col-form-label required fw-semibold fs-6"
					>Address</label
				>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-lg-8 fv-row fv-plugins-icon-container">
					<input
						type="text"
						name="address"
						class="form-control form-control-lg form-control-solid"
						placeholder="Address"
						v-model="user.address"
					/>
					<div
						class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
					></div>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Input group-->
			<div class="row mb-6">
				<!--begin::Label-->
				<label class="col-lg-4 col-form-label fw-semibold fs-6"
					>City</label
				>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-lg-8 fv-row">
					<input
						type="text"
						name="city"
						class="form-control form-control-lg form-control-solid"
						placeholder="City"
						v-model="user.city"
					/>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Input group-->
			<div class="row mb-6">
				<!--begin::Label-->
				<label class="col-lg-4 col-form-label fw-semibold fs-6">
					<span class="required">Country</span>

					<span
						class="ms-1"
						data-bs-toggle="tooltip"
						aria-label="Country of origination"
						data-bs-original-title="Country of origination"
						data-kt-initialized="1"
					>
						<i
							class="ki-outline ki-information-5 text-gray-500 fs-6"
						></i
					></span>
				</label>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-lg-8 fv-row fv-plugins-icon-container">
					<input
						type="text"
						name="country"
						class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
						placeholder="Country"
						v-model="user.country"
					/>
					<div
						class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
					></div>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Input group-->
			<div class="row mb-6">
				<!--begin::Label-->
				<label class="col-lg-4 col-form-label required fw-semibold fs-6"
					>Communication</label
				>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-lg-8 fv-row fv-plugins-icon-container">
					<!--begin::Options-->
					<div class="d-flex align-items-center mt-3">
						<!--begin::Option-->
						<label
							class="form-check form-check-custom form-check-inline form-check-solid me-5"
						>
							<input
								class="form-check-input"
								name="communication[]"
								type="checkbox"
								value="1"
							/>
							<span class="fw-semibold ps-2 fs-6"> Email </span>
						</label>
						<!--end::Option-->

						<!--begin::Option-->
						<label
							class="form-check form-check-custom form-check-inline form-check-solid"
						>
							<input
								class="form-check-input"
								name="communication[]"
								type="checkbox"
								value="2"
							/>
							<span class="fw-semibold ps-2 fs-6"> Phone </span>
						</label>
						<!--end::Option-->
					</div>
					<!--end::Options-->
					<div
						class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
					></div>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Input group-->
			<div class="row mb-0">
				<!--begin::Label-->
				<label class="col-lg-4 col-form-label fw-semibold fs-6">
					Receive Notifications
				</label>
				<!--begin::Label-->

				<!--begin::Label-->
				<div class="col-lg-8 d-flex align-items-center">
					<div
						class="form-check form-check-solid form-switch form-check-custom fv-row"
					>
						<input
							class="form-check-input w-45px h-30px"
							type="checkbox"
							id="allowmarketing"
							checked
						/>
						<label
							class="form-check-label"
							for="allowmarketing"
						></label>
					</div>
				</div>
				<!--begin::Label-->
			</div>
			<!--end::Input group-->

			<!--begin::Actions-->
			<div class="d-flex justify-content-end py-6 px-9">
				<button
					type="reset"
					class="btn btn-light btn-active-light-primary me-2"
				>
					Discard
				</button>
				<button
					type="submit"
					class="btn btn-primary"
					id="kt_account_profile_details_submit"
				>
					Save Changes
				</button>
			</div>
			<!--end::Actions-->
			<input type="hidden" />
		</form>
		<!--end::Form-->
	</div>
	<!--end::Content-->
</template>
