<script setup>
	const save = () => {
		successAlert("Saved");
	};
</script>

<template>
	<div class="card mb-5 mb-xl-10">
		<!--begin::Card header-->
		<div
			class="card-header border-0 cursor-pointer"
			role="button"
			data-bs-toggle="collapse"
			data-bs-target="#kt_account_email_preferences"
			aria-expanded="true"
			aria-controls="kt_account_email_preferences"
		>
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">Email Preferences</h3>
			</div>
		</div>
		<!--begin::Card header-->

		<!--begin::Content-->
		<div id="kt_account_settings_email_preferences" class="collapse show">
			<!--begin::Form-->
			<form class="form" @submit.prevent="save()">
				<!--begin::Card body-->
				<div class="card-body border-top px-9 py-9">
					<!--begin::Option-->
					<label
						class="form-check form-check-custom form-check-solid align-items-start"
					>
						<!--begin::Input-->
						<input
							class="form-check-input me-3"
							type="checkbox"
							name="email-preferences[]"
							value="1"
						/>
						<!--end::Input-->

						<!--begin::Label-->
						<span
							class="form-check-label d-flex flex-column align-items-start"
						>
							<span class="fw-bold fs-5 mb-0"
								>Successful Payments</span
							>
							<span class="text-muted fs-6"
								>Receive a notification for every successful
								payment.</span
							>
						</span>
						<!--end::Label-->
					</label>
					<!--end::Option-->

					<!--begin::Option-->
					<div class="separator separator-dashed my-6"></div>
					<!--end::Option-->
					<!--begin::Option-->
					<label
						class="form-check form-check-custom form-check-solid align-items-start"
					>
						<!--begin::Input-->
						<input
							class="form-check-input me-3"
							type="checkbox"
							name="email-preferences[]"
							checked
							value="1"
						/>
						<!--end::Input-->

						<!--begin::Label-->
						<span
							class="form-check-label d-flex flex-column align-items-start"
						>
							<span class="fw-bold fs-5 mb-0">Payouts</span>
							<span class="text-muted fs-6"
								>Receive a notification for every initiated
								payout.</span
							>
						</span>
						<!--end::Label-->
					</label>
					<!--end::Option-->

					<!--begin::Option-->
					<div class="separator separator-dashed my-6"></div>
					<!--end::Option-->
					<!--begin::Option-->
					<label
						class="form-check form-check-custom form-check-solid align-items-start"
					>
						<!--begin::Input-->
						<input
							class="form-check-input me-3"
							type="checkbox"
							name="email-preferences[]"
							value="1"
						/>
						<!--end::Input-->

						<!--begin::Label-->
						<span
							class="form-check-label d-flex flex-column align-items-start"
						>
							<span class="fw-bold fs-5 mb-0"
								>Fee Collection</span
							>
							<span class="text-muted fs-6"
								>Receive a notification each time you collect a
								fee from sales</span
							>
						</span>
						<!--end::Label-->
					</label>
					<!--end::Option-->

					<!--begin::Option-->
					<div class="separator separator-dashed my-6"></div>
					<!--end::Option-->
					<!--begin::Option-->
					<label
						class="form-check form-check-custom form-check-solid align-items-start"
					>
						<!--begin::Input-->
						<input
							class="form-check-input me-3"
							type="checkbox"
							name="email-preferences[]"
							checked
							value="1"
						/>
						<!--end::Input-->

						<!--begin::Label-->
						<span
							class="form-check-label d-flex flex-column align-items-start"
						>
							<span class="fw-bold fs-5 mb-0"
								>Customer Payment Dispute</span
							>
							<span class="text-muted fs-6"
								>Receive a notification if a payment is disputed
								by a customer and for dispute purposes.</span
							>
						</span>
						<!--end::Label-->
					</label>
					<!--end::Option-->

					<!--begin::Option-->
					<div class="separator separator-dashed my-6"></div>
					<!--end::Option-->
					<!--begin::Option-->
					<label
						class="form-check form-check-custom form-check-solid align-items-start"
					>
						<!--begin::Input-->
						<input
							class="form-check-input me-3"
							type="checkbox"
							name="email-preferences[]"
							value="1"
						/>
						<!--end::Input-->

						<!--begin::Label-->
						<span
							class="form-check-label d-flex flex-column align-items-start"
						>
							<span class="fw-bold fs-5 mb-0">Refund Alerts</span>
							<span class="text-muted fs-6"
								>Receive a notification if a payment is stated
								as risk by the Finance Department.</span
							>
						</span>
						<!--end::Label-->
					</label>
					<!--end::Option-->

					<!--begin::Option-->
					<div class="separator separator-dashed my-6"></div>
					<!--end::Option-->
					<!--begin::Option-->
					<label
						class="form-check form-check-custom form-check-solid align-items-start"
					>
						<!--begin::Input-->
						<input
							class="form-check-input me-3"
							type="checkbox"
							name="email-preferences[]"
							checked
							value="1"
						/>
						<!--end::Input-->

						<!--begin::Label-->
						<span
							class="form-check-label d-flex flex-column align-items-start"
						>
							<span class="fw-bold fs-5 mb-0"
								>Invoice Payments</span
							>
							<span class="text-muted fs-6"
								>Receive a notification if a customer sends an
								incorrect amount to pay their invoice.</span
							>
						</span>
						<!--end::Label-->
					</label>
					<!--end::Option-->
				</div>
				<!--end::Card body-->

				<!--begin::Card footer-->
				<div class="card-footer d-flex justify-content-end py-6 px-9">
					<button class="btn btn-light btn-active-light-primary me-2">
						Discard
					</button>
					<button class="btn btn-primary px-6">Save Changes</button>
				</div>
				<!--end::Card footer-->
			</form>
			<!--end::Form-->
		</div>
		<!--end::Content-->
	</div>
</template>
