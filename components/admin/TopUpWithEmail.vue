<script setup lang="ts">
	import axios from "axios";

	const appConfig = useRuntimeConfig();
	const submitButton = ref();

	const form = ref({
		email: "",
		amount: "",
	});

	const save = () => {
		// successAlert("Saved!");
		console.log(form.value);
		if (!form.value.amount || !form.value.email) {
			errorAlert("Fill from correctly");
			return;
		}

		const bal = {
			email: form.value.email,
			amount: Number(form.value.amount),
		};

		const axiosConfig = {
			method: "post",
			data: bal,
			url: `${appConfig.public.BE_API}/account`,
			timeout: 15000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};
		submitButton.value.setAttribute("data-kt-indicator", "on");

		axios
			.request(axiosConfig)
			.then((response) => {
				const data = response.data;
				console.log(data);
				successAlert("Saved! New balance: " + data.amount);
				userData().fetchBalance();
				userData().getUsers();
			})
			.catch((error) => {
				errorAlert("Unable to update balance");
				console.log(error);
			})
			.finally(() => {
				submitButton.value.removeAttribute("data-kt-indicator");
			});
	};
</script>

<template>
	<!-- To be used as send money/add modal -->
	<div
		class="modal fade"
		id="kt_modal_topup_admin"
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
				<div class="modal-body pb-15 px-20">
					<!--begin::Heading-->
					<div class="mb-13 text-center">
						<h1 class="mb-3">Top Up</h1>

						<div class="text-muted fw-semibold fs-5">
							Increase user balance. Only to this with user you
							have login with and transfer to others from that
							user
							<a role="button" class="link-primary fw-bold"
								>(admin)</a
							>.
						</div>
					</div>
					<!--end::Heading-->

					<form
						@submit.prevent="save()"
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
								<span class="required">User Email</span>

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
								placeholder="Enter user email"
								name="email"
								v-model="form.email"
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
								>Amount</label
							>
							<!--end::Label-->

							<!--begin::Input wrapper-->
							<div class="position-relative">
								<!--begin::Input-->
								<input
									type="text"
									class="form-control form-control-solid"
									placeholder="Enter Amount"
									name="amount"
									v-model="form.amount"
								/>
								<!--end::Input-->

								<!--begin::Card logos-->
							</div>
							<!--end::Input wrapper-->
							<div
								class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
							></div>
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
								ref="submitButton"
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
