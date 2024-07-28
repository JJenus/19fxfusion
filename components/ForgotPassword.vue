<script setup lang="ts">
	import axios, { type AxiosRequestConfig } from "axios";

	const appConfig = useRuntimeConfig();

	const loading = ref(false);

	const forgot = useState<boolean>("forgot");
	const form = ref({
		email: "",
	});

	const back = () => {
		forgot.value = false;
	};

	const sendMail = () => {
		if (!form.value.email) {
			return errorAlert(null);
		}
		const axiosConfig: AxiosRequestConfig = {
			method: "post",
			data: form.value,
			url: `${appConfig.public.BE_API}/auth/request-password-reset`,
			timeout: 15000,
		};

		axios
			.request(axiosConfig)
			.then((response) => {
				console.log(response.data);
				successAlert("Sent. Check your email to continue");
			})
			.catch((error) => {
				errorAlert(
					"Account was not found. Check your email and try again."
				);
				console.log(error);
				const data = error.response.data;
			})
			.finally(() => {
				loading.value = false;
			});
	};
</script>
<template>
	<div
		class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10"
		bis_skin_checked="1"
	>
		<!--begin::Form-->
		<div
			class="d-flex flex-center flex-column flex-lg-row-fluid"
			bis_skin_checked="1"
		>
			<!--begin::Wrapper-->
			<div class="w-lg-500px p-10" bis_skin_checked="1">
				<!--begin::Form-->
				<form
					@submit.prevent="sendMail()"
					class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
					novalidate
					id="kt_password_reset_form"
					action="#"
				>
					<!--begin::Heading-->
					<div class="text-center mb-10" bis_skin_checked="1">
						<!--begin::Title-->
						<h1 class="text-dark fw-bolder mb-3">
							Forgot Password ?
						</h1>
						<!--end::Title-->

						<!--begin::Link-->
						<div
							class="text-gray-500 fw-semibold fs-6"
							bis_skin_checked="1"
						>
							Enter your email to reset your password. <br />
						</div>
						<!--end::Link-->
					</div>
					<!--begin::Heading-->

					<!--begin::Input group--->
					<div
						class="fv-row mb-8 fv-plugins-icon-container fv-plugins-bootstrap5-row-invalid"
						bis_skin_checked="1"
					>
						<!--begin::Email-->
						<input
							type="text"
							placeholder="Email"
							name="email"
							class="form-control bg-transparent"
							v-model="form.email"
						/>
						<!--end::Email-->
						<div
							class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
							bis_skin_checked="1"
						>
							<div
								data-field="email"
								data-validator="notEmpty"
								bis_skin_checked="1"
							>
								Email address is required. <br />
								<small class="fs-7 text-info"
									>You'll receive a password reset email if
									your account exists.</small
								>
							</div>
						</div>
					</div>

					<!--begin::Actions-->
					<div
						class="d-flex flex-wrap justify-content-center pb-lg-0"
						bis_skin_checked="1"
					>
						<button
							type="submit"
							id="kt_password_reset_submit"
							class="btn btn-primary me-4"
						>
							<!--begin::Indicator label-->
							<span class="indicator-label"> Submit</span>
							<!--end::Indicator label-->

							<!--begin::Indicator progress-->
							<span class="indicator-progress">
								Please wait...
								<span
									class="spinner-border spinner-border-sm align-middle ms-2"
								></span>
							</span>
							<!--end::Indicator progress-->
						</button>

						<a
							@click="back()"
							role="button"
							class="btn btn-light"
							bis_skin_checked="1"
							>Cancel</a
						>
					</div>
					<!--end::Actions-->
				</form>
				<!--end::Form-->
			</div>
			<!--end::Wrapper-->
		</div>
		<!--end::Form-->
	</div>
</template>
