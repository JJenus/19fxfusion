<script setup lang="ts">
	const user = userData().data;
	const save = () => {
		// successAlert("Saved!");
	};
</script>

<template>
	<!-- To be used as send money/add modal -->
	<div
		class="modal fade"
		id="kt_modal_upgrade_plan"
		tabindex="-1"
		aria-hidden="true"
	>
		<!--begin::Modal dialog-->
		<div class="modal-dialog modal-xl">
			<!--begin::Modal content-->
			<div class="modal-content rounded">
				<!--begin::Modal header-->
				<div class="modal-header justify-content-end border-0 pb-0">
					<!--begin::Close-->
					<div
						class="btn btn-sm btn-icon btn-active-color-primary"
						data-bs-dismiss="modal"
					>
						<i class="ki-outline ki-cross fs-1"></i>
					</div>
					<!--end::Close-->
				</div>
				<!--end::Modal header-->

				<!--begin::Modal body-->
				<div class="modal-body pt-0 pb-15 px-5 px-xl-20">
					<!--begin::Heading-->
					<div class="mb-13 text-center">
						<h1 class="mb-3">Deposit</h1>

						<div class="text-muted fw-semibold fs-5">
							If you need any assistance, please contact
							<a role="button" class="link-primary fw-bold"
								>support</a
							>.
						</div>
					</div>
					<!--end::Heading-->

					<form
						@submit.prevent="save()"
						id="kt_modal_new_card_form"
						class="form fv-plugins-bootstrap5 fv-plugins-framework"
						action="#"
						data-select2-id="select2-data-kt_modal_new_card_form"
					>
						<!--begin::Input group-->
						<div
							class="d-flex flex-column mb-7 fv-row fv-plugins-icon-container"
						>
							<!--begin::Label-->
							<label
								class="d-flex align-items-center fs-6 fw-semibold form-label mb-2"
							>
								<span class="required">Name On Card</span>

								<span
									class="ms-1"
									data-bs-toggle="tooltip"
									aria-label="Specify a card holder's name"
									data-bs-original-title="Specify a card holder's name"
									data-kt-initialized="1"
								>
									<i
										class="ki-outline ki-information-5 text-gray-500 fs-6"
									></i
								></span>
							</label>
							<!--end::Label-->

							<input
								type="text"
								class="form-control form-control-solid"
								placeholder=""
								name="card_name"
								:value="user.name"
							/>
							<div
								class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
							></div>
						</div>
						<!--end::Input group-->

						<!--begin::Input group-->
						<div
							class="d-flex flex-column mb-7 fv-row fv-plugins-icon-container"
						>
							<!--begin::Label-->
							<label
								class="required fs-6 fw-semibold form-label mb-2"
								>Card Number</label
							>
							<!--end::Label-->

							<!--begin::Input wrapper-->
							<div class="position-relative">
								<!--begin::Input-->
								<input
									type="text"
									class="form-control form-control-solid"
									placeholder="Enter card number"
									name="card_number"
									value=""
								/>
								<!--end::Input-->

								<!--begin::Card logos-->
								<div
									class="position-absolute translate-middle-y top-50 end-0 me-5"
								>
									<img
										src="/assets/media/svg/card-logos/visa.svg"
										alt=""
										class="h-25px"
									/>
									<img
										src="/assets/media/svg/card-logos/mastercard.svg"
										alt=""
										class="h-25px"
									/>
									<img
										src="/assets/media/svg/card-logos/american-express.svg"
										alt=""
										class="h-25px"
									/>
								</div>
								<!--end::Card logos-->
							</div>
							<!--end::Input wrapper-->
							<div
								class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
							></div>
						</div>
						<!--end::Input group-->

						<!--begin::Input group-->
						<div
							class="row mb-10"
							data-select2-id="select2-data-345-k61a"
						>
							<!--begin::Col-->
							<div
								class="col-md-8 fv-row"
								data-select2-id="select2-data-344-xvb5"
							>
								<!--begin::Label-->
								<label
									class="required fs-6 fw-semibold form-label mb-2"
									>Expiration Date</label
								>
								<!--end::Label-->

								<!--begin::Row-->
								<div
									class="row fv-row fv-plugins-icon-container fv-plugins-bootstrap5-row-valid"
								>
									<!--begin::Col-->
									<div class="col-6">
										<input
											type="text"
											class="form-control form-control-solid"
											placeholder=""
											name="card_expiry_month"
										/>
										<div
											class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
										></div>
									</div>
									<!--end::Col-->

									<!--begin::Col-->
									<div
										class="col-6"
										data-select2-id="select2-data-343-x9q5"
									>
										<input
											type="text"
											class="form-control form-control-solid"
											placeholder=""
											name="card_expiry_year"
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

							<!--begin::Col-->
							<div
								class="col-md-4 fv-row fv-plugins-icon-container"
							>
								<!--begin::Label-->
								<label
									class="d-flex align-items-center fs-6 fw-semibold form-label mb-2"
								>
									<span class="required">CVV</span>

									<span
										class="ms-1"
										data-bs-toggle="tooltip"
										aria-label="Enter a card CVV code"
										data-bs-original-title="Enter a card CVV code"
										data-kt-initialized="1"
									>
										<i
											class="ki-outline ki-information-5 text-gray-500 fs-6"
										></i
									></span>
								</label>
								<!--end::Label-->

								<!--begin::Input wrapper-->
								<div class="position-relative">
									<!--begin::Input-->
									<input
										type="text"
										class="form-control form-control-solid"
										minlength="3"
										maxlength="4"
										placeholder="CVV"
										name="card_cvv"
									/>
									<!--end::Input-->

									<!--begin::CVV icon-->
									<div
										class="position-absolute translate-middle-y top-50 end-0 me-3"
									>
										<i
											class="ki-outline ki-credit-cart fs-2hx"
										></i>
									</div>
									<!--end::CVV icon-->
								</div>
								<!--end::Input wrapper-->
								<div
									class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
								></div>
							</div>
							<!--end::Col-->
						</div>
						<!--end::Input group-->

						<!--begin::Input group-->
						<div class="d-flex flex-stack">
							<!--begin::Label-->
							<div class="me-5">
								<label class="fs-6 fw-semibold form-label"
									>Save Card for further billing?</label
								>
								<div class="fs-7 fw-semibold text-muted">
									If you need more info, please check budget
									planning
								</div>
							</div>
							<!--end::Label-->

							<!--begin::Switch-->
							<label
								class="form-check form-switch form-check-custom form-check-solid"
							>
								<input
									class="form-check-input"
									type="checkbox"
									value="1"
									checked
								/>
								<span
									class="form-check-label fw-semibold text-muted"
								>
									Save Card
								</span>
							</label>
							<!--end::Switch-->
						</div>
						<!--end::Input group-->

						<!--begin::Actions-->
						<div class="text-center pt-15">
							<button
								type="reset"
								id="kt_modal_new_card_cancel"
								class="btn btn-light me-3"
							>
								Discard
							</button>

							<button
								type="submit"
								id="kt_modal_new_card_submit"
								class="btn btn-primary"
							>
								<span class="indicator-label"> Submit </span>
								<span class="indicator-progress">
									Please wait...
									<span
										class="spinner-border spinner-border-sm align-middle ms-2"
									></span>
								</span>
							</button>
						</div>
						<!--end::Actions-->
					</form>
				</div>
				<!--end::Modal body-->
			</div>
			<!--end::Modal content-->
		</div>
		<!--end::Modal dialog-->
	</div>
	<!--end::Modal - Upgrade plan-->
</template>
