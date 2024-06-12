<script setup lang="ts">
	import axios, { AxiosRequestConfig } from "axios";

	definePageMeta({
		layout: "auth",
	});
	useHead({
		script: [
			{
				src: "/assets/js/custom/authentication/reset-password/new-password.js",
			},
		],
	});

	const appConfig = useRuntimeConfig();
	const submitButton = ref();

	const id = useRoute().query["token"];
	const form = ref({
		id: id,
		password: "",
		cPassword: "",
	});
	console.log(id);
	const loading = ref(false);

	const save = () => {
		if (
			!form.value.password ||
			form.value.password !== form.value.cPassword
		) {
			return errorAlert("Errors detected in the form!");
		}
		if (!form.value.id) {
			infoAlert(
				"Please follow the link on your email or request for password reset again!"
			);
			navigateTo("/sign-in");
			return;
		}
		const { cPassword, ...userData } = form.value;

		const axiosConfig: AxiosRequestConfig = {
			method: "post",
			data: userData,
			url: `${appConfig.public.BE_API}/auth/reset-password`,
			timeout: 15000,
		};
        console.log("Saving...")
		axios
			.request(axiosConfig)
			.then((response) => {
				const data = response.data;
				console.log(data);
				successAlert("Success. Proceed to sign in.");
			})
			.catch((error) => {
				console.log(error);
				const data = error.response.data;
                errorAlert("Unable to set new password. Try again.")
			})
			.finally(() => {
				console.log("Done...")
				submitButton.value.removeAttribute("data-kt-indicator");
			});
	};
</script>
<template>
	<!--begin::Root-->
	<div class="d-flex card flex-column flex-root border">
		<!--begin::Authentication - Sign-in -->
		<div class="d-flex card-body flex-column flex-lg-row flex-column-fluid">
			<!--begin::Aside-->
			<div
				class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center"
			>
				<!-- style="background-image: url(/assets/media/misc/auth-bg.png)" -->
				<!--begin::Content-->
				<div class="d-flex flex-column flex-center p-6 p-lg-10 w-100">
					<!--begin::Logo-->
					<ZipayLogo
						:classes="'h-40px h-lg-60px'"
						:app-class="'logo-color d-block'"
					/>
					<!--end::Logo-->

					<!--begin::Image-->
					<img
						class="d-none d-lg-block mx-auto w-300px w-lg-75 w-xl-500px mb-10 mb-lg-20"
						src="/assets/media/auth/password-changed.png"
						alt=""
					/>
					<!--end::Image-->

					<!--begin::Title-->
					<h1
						class="d-none d-lg-block text-white fs-2qx fw-bold text-center mb-7"
					>
						Forgot your password? No worries!
					</h1>
					<!--end::Title-->
				</div>
				<!--end::Content-->
			</div>
			<!--begin::Aside-->

			<!--begin::Body-->
			<div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
				<!--begin::Form-->
				<div class="d-flex flex-center flex-column flex-lg-row-fluid">
					<!--begin::Wrapper-->
					<div class="card w-lg-500px p-md-10">
						<div class="card-body">
							<!--begin::Form-->
							<form
								class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
								novalidate
								id="kt_new_password_form"
								@submit.prevent="save()"
							>
								<!--begin::Heading-->
								<div
									class="text-center mb-10"
									bis_skin_checked="1"
								>
									<!--begin::Title-->
									<h1 class="text-dark fw-bolder mb-3">
										Setup New Password
									</h1>
									<!--end::Title-->

									<!--begin::Link-->
									<div
										class="text-gray-500 fw-semibold fs-6"
										bis_skin_checked="1"
									>
										Have you already reset the password ?

										<NuxtLink
											to="/sign-in"
											class="link-primary fw-bold"
											bis_skin_checked="1"
										>
											Sign in
										</NuxtLink>
									</div>
									<!--end::Link-->
								</div>
								<!--begin::Heading-->

								<!--begin::Input group-->
								<div
									class="fv-row mb-8 fv-plugins-icon-container"
									data-kt-password-meter="true"
									bis_skin_checked="1"
								>
									<!--begin::Wrapper-->
									<div class="mb-1" bis_skin_checked="1">
										<!--begin::Input wrapper-->
										<div
											class="position-relative mb-3"
											bis_skin_checked="1"
										>
											<input
												class="form-control bg-transparent"
												type="password"
												placeholder="Password"
												name="password"
												autocomplete="off"
												v-model="form.password"
											/>

											<span
												class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
												data-kt-password-meter-control="visibility"
											>
												<i
													class="ki-outline ki-eye-slash fs-2"
												></i>
												<i
													class="ki-outline ki-eye fs-2 d-none"
												></i>
											</span>
										</div>
										<!--end::Input wrapper-->

										<!--begin::Meter-->
										<div
											class="d-flex align-items-center mb-3"
											data-kt-password-meter-control="highlight"
											bis_skin_checked="1"
										>
											<div
												class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
												bis_skin_checked="1"
											></div>
											<div
												class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
												bis_skin_checked="1"
											></div>
											<div
												class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
												bis_skin_checked="1"
											></div>
											<div
												class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"
												bis_skin_checked="1"
											></div>
										</div>
										<!--end::Meter-->
									</div>
									<!--end::Wrapper-->

									<!--begin::Hint-->
									<div
										class="text-muted"
										bis_skin_checked="1"
									>
										Use 8 or more characters with a mix of
										letters, numbers &amp; symbols.
									</div>
									<!--end::Hint-->
									<div
										class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
										bis_skin_checked="1"
									></div>
								</div>
								<!--end::Input group--->

								<!--end::Input group--->
								<div
									class="fv-row mb-8 fv-plugins-icon-container"
									bis_skin_checked="1"
								>
									<!--begin::Repeat Password-->
									<input
										type="password"
										placeholder="Repeat Password"
										name="confirm-password"
										autocomplete="off"
										class="form-control bg-transparent"
										v-model="form.cPassword"
									/>
									<!--end::Repeat Password-->
									<div
										class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
										bis_skin_checked="1"
									></div>
								</div>
								<!--end::Input group--->

								<!--begin::Input group--->
								<div
									class="fv-row d-none mb-8 fv-plugins-icon-container"
									bis_skin_checked="1"
								>
									<label class="form-check form-check-inline">
										<input
											class="form-check-input"
											type="checkbox"
											name="toc"
											value="1"
                                            checked
										/>

										<span
											class="form-check-label fw-semibold text-gray-700 fs-6 ms-1"
										>
											I Agree &amp;
											<a
												href="#"
												class="ms-1 link-primary"
												>Terms and conditions</a
											>.
										</span>
									</label>
									<div
										class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
										bis_skin_checked="1"
									></div>
								</div>
								<!--end::Input group--->

								<!--begin::Action-->
								<div class="d-grid mb-10" bis_skin_checked="1">
									<button
										type="submit"
										id="kt_new_password_submit"
										class="btn btn-primary"
										ref="submitButton"
									>
										<!--begin::Indicator label-->
										<span class="indicator-label">
											Submit</span
										>
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
								</div>
								<!--end::Action-->
							</form>
							<!--end::Form-->
						</div>
					</div>
					<!--end::Wrapper-->
				</div>
				<!--end::Form-->

				<!--begin::Footer-->

				<!--end::Footer-->
			</div>
			<!--end::Body-->
		</div>
		<!--end::Authentication - Sign-in-->
	</div>
	<!--end::Root-->
</template>
