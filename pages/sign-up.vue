<script setup lang="ts">
	import axios, {
		AxiosError,
		AxiosRequestConfig,
		AxiosResponse,
	} from "axios";
	import { AuthToken } from "utils/interfaces/AuthToken";

	definePageMeta({
		layout: "auth",
	});

	useHead({
		script: [
			{ src: "/assets/js/custom/authentication/sign-up/general.js" },
		],
	});

	useSeoMeta({
		title: `Sign Up - ${useRuntimeConfig().public.APP}`,
	});

	const appConfig = useRuntimeConfig();
	const auth = useAuth();

	const submitButton = ref();
	const emailExists = ref();

	const axiosConfig = ref<AxiosRequestConfig>({
		method: "post",
		data: {},
		url: `${appConfig.public.BE_API}/auth/register`,
	});

	const form = ref({
		name: null,
		email: null,
		imgUrl: null,
		phone: null,
		address: null,
		city: null,
		country: null,
		dob: null,
		password: null,
		confirmPassword: null,
	});

	const submitForm = (event: Event) => {
		emailExists.value = false;
		const { confirmPassword, dob, imgUrl, ...data } = form.value;
		console.log(data);
		// console.log("API Url: ", appConfig.public.BE_API);
		if (
			!form.value.address ||
			!form.value.city ||
			!form.value.phone ||
			!form.value.country ||
			!form.value.email ||
			!form.value.name ||
			!form.value.password ||
			form.value.confirmPassword !== form.value.password
		) {
			// console.log(form.value);
			errorAlert(null);
			// submitButton.value.removeAttribute("data-kt-indicator");
			return;
		}
		// submitButton.setAttribute("data-kt-indicator", "on");
		// submitButton.value.disabled = true;

		axiosConfig.value.data = data;

		axios
			.request(axiosConfig.value)
			.then((response: AxiosResponse<AuthToken, any>) => {
				console.log("status: ", response.data);
				const userAuth = useCookie<AuthToken>("auth", {
					maxAge: 60 * 60 * 24,
				});
				userAuth.value = response.data;
				auth.login(userAuth.value);
			})
			.catch((err: AxiosError<any, any>) => {
				const errRes = err.response;
				console.log("Status: ", errRes?.status);
				if (errRes?.status !== null && errRes?.status === 409) {
					emailExists.value = errRes.data.message;
					console.log(err.message);
					errorAlert(emailExists.value);
				} else errorAlert(null);
				console.log(errRes);
			})
			.finally(() => {
				submitButton.value.removeAttribute("data-kt-indicator");
			});

		// infoAlert("Note this");
		// axios.request({}).then();
	};
</script>

<template>
	<div class="d-flex flex-column flex-lg-row flex-column-fluid">
		<!--begin::Aside-->
		<div
			class="pt-8 w-lg-50 bgi-size-cover bgi-position-center"
		>
			<!-- style="background-image: url(/assets/media/misc/auth-bg.png)" -->

			<!--begin::Content-->
			<div class="d-flex flex-column flex-center p-6 w-100">
				<!--begin::Logo-->

				<NFTexLogo :classes="'h-60px'"/>
				<!--end::Logo-->

				<!--begin::Image-->
				<img
					class="d-none d-lg-block mx-auto w-300px w-lg-75 w-xl-400px mb-10"
					src="/assets/media/illustrations/sketchy-1/4.png"
					alt=""
				/>
				<!--end::Image-->

				<!--begin::Title-->
				<h1
					class="d-none d-lg-block text-white fs-2qx fw-bold text-center mb-7"
				>
					Welcome To {{ $config.public.APP }}!
				</h1>
				<!--end::Title-->

				<!--end::Text-->
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
							autocomplete="on"
							@submit.prevent="submitForm"
							class="form w-100"
							novalidate
							id="kt_sign_up_form"
						>
							<!--begin::Heading-->
							<div class="text-center mb-11">
								<!--begin::Title-->
								<h1 class="text-dark fw-bolder mb-3">
									Sign Up
								</h1>
								<!--end::Title-->

								<!--begin::Subtitle-->
								<div
									class="text-gray-500 fw-semibold fs-6 d-none"
								>
									Your Social Campaigns
								</div>
								<!--end::Subtitle--->
							</div>
							<!--begin::Heading-->

							<!--begin::Separator-->
							<div
								class="separator separator-content my-14"
							></div>
							<!--end::Separator-->
							<div class="fv-row mb-8">
								<!--begin::Email-->
								<input
									type="text"
									placeholder="Full name"
									name="name"
									class="form-control bg-transparent"
									v-model="form.name"
									required
								/>
								<!--end::Email-->
							</div>
							<!--begin::Input group--->
							<div class="fv-row mb-8">
								<!--begin::Email-->
								<input
									type="email"
									placeholder="Email"
									name="email"
									autocomplete="on"
									class="form-control bg-transparent"
									v-model="form.email"
									required
								/>
								<!--end::Email-->
								<div
									v-if="emailExists"
									class="text-danger fs-sm mt-3"
								>
									{{ emailExists }}
								</div>
							</div>

							<div class="fv-row mb-8">
								<!--begin::Email-->
								<input
									type="text"
									placeholder="Phone"
									name="phone"
									class="form-control bg-transparent"
									required
									v-model="form.phone"
								/>
								<!--end::Email-->
							</div>

							<div class="fv-row mb-8">
								<!--begin::Email-->
								<input
									type="text"
									placeholder="Address"
									name="address"
									class="form-control bg-transparent"
									required
									v-model="form.address"
								/>
								<!--end::Email-->
							</div>

							<div class="fv-row mb-8">
								<!--begin::Email-->
								<input
									type="text"
									placeholder="City"
									name="city"
									class="form-control bg-transparent"
									required
									v-model="form.city"
								/>
								<!--end::Email-->
							</div>

							<div class="fv-row mb-8">
								<!--begin::Email-->
								<input
									type="text"
									placeholder="Country"
									name="country"
									class="form-control bg-transparent"
									required
									v-model="form.country"
								/>
								<!--end::Email-->
							</div>

							<!--begin::Input group-->
							<div
								class="fv-row mb-8"
								data-kt-password-meter="true"
							>
								<!--begin::Wrapper-->
								<div class="mb-1">
									<!--begin::Input wrapper-->
									<div class="position-relative mb-3">
										<input
											class="form-control bg-transparent"
											type="password"
											placeholder="Password"
											name="password"
											autocomplete="off"
											v-model="form.password"
											required
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
									>
										<div
											class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
										></div>
										<div
											class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
										></div>
										<div
											class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
										></div>
										<div
											class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"
										></div>
									</div>
									<!--end::Meter-->
								</div>
								<!--end::Wrapper-->

								<!--begin::Hint-->
								<div class="text-muted">
									Use 8 or more characters with a mix of
									letters, numbers & symbols.
								</div>
								<!--end::Hint-->
							</div>
							<!--end::Input group--->

							<!--end::Input group--->
							<div class="fv-row mb-8">
								<!--begin::Repeat Password-->
								<input
									required
									placeholder="Repeat Password"
									name="confirm-password"
									type="password"
									autocomplete="off"
									class="form-control bg-transparent"
									v-model="form.confirmPassword"
								/>
								<!--end::Repeat Password-->
							</div>
							<!--end::Input group--->

							<!--begin::Accept-->
							<div class="fv-row mb-8">
								<label class="form-check form-check-inline">
									<input
										class="form-check-input"
										type="checkbox"
										name="toc"
										value="1"
										required
									/>
									<span
										class="form-check-label fw-semibold text-gray-700 fs-base ms-1"
									>
										I Accept the
										<a href="#" class="ms-1 link-primary"
											>Terms</a
										>
									</span>
								</label>
							</div>
							<!--end::Accept-->

							<!--begin::Submit button-->
							<div class="d-grid mb-10">
								<button
									ref="submitButton"
									type="submit"
									id="kt_sign_up_submit"
									class="btn btn-primary"
								>
									<!--begin::Indicator label-->
									<span class="indicator-label">
										Sign up</span
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
							<!--end::Submit button-->

							<!--begin::Sign up-->
							<div
								class="text-gray-500 text-center fw-semibold fs-6"
							>
								Already have an Account?

								<NuxtLink
									to="sign-in"
									class="link-primary fw-semibold"
								>
									Sign in
								</NuxtLink>
							</div>
							<!--end::Sign up-->
						</form>
						<!--end::Form-->
					</div>
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Form-->

			<!--begin::Footer-->
			<div class="d-flex flex-center d-none flex-wrap px-5">
				<!--begin::Links-->
				<div class="d-flex fw-semibold text-primary fs-base">
					<a
						href="https://keenthemes.com/"
						class="px-5"
						target="_blank"
						>Terms</a
					>

					<a
						href="https://devs.keenthemes.com/"
						class="px-5"
						target="_blank"
						>Plans</a
					>

					<a
						href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/"
						class="px-5"
						target="_blank"
						>Contact Us</a
					>
				</div>
				<!--end::Links-->
			</div>
			<!--end::Footer-->
		</div>
		<!--end::Body-->
	</div>
</template>
