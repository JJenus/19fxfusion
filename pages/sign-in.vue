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

	useSeoMeta({
		title: `Sign in - ${useRuntimeConfig().public.APP}`,
	});

	useHead({
		script: [
			{ src: "/assets/js/custom/authentication/sign-in/general.js" },
		],
	});

	const appConfig = useRuntimeConfig();
	const auth = useAuth();
	const forgot = useState<boolean>("forgot", () => false);

	const submitButton = ref();
	const isInvalidCredentials = ref();

	const axiosConfig = ref<AxiosRequestConfig>({
		method: "post",
		data: {},
		url: `${appConfig.public.BE_API}/auth/login`,
		timeout: 15000,
	});
	const form = ref({
		email: null,
		password: null,
	});

	const submitForm = () => {
		console.log("logging...");
		isInvalidCredentials.value;
		if (!form.value.email || !form.value.password) {
			errorAlert(null);
			return;
		}

		console.log("Passed");

		const { email, password } = form.value;

		axiosConfig.value.data = { email, password };

		axios
			.request(axiosConfig.value)
			.then((response: AxiosResponse<AuthToken, any>) => {
				console.log("status: ", response.data);
				// successAlert("Signing in...");

				auth.login(response.data);
			})
			.catch((err: AxiosError<any, any>) => {
				const errRes = err.response;
				console.log("Status: ", errRes?.status);
				if (
					errRes?.status !== null &&
					(errRes?.status === 401 || errRes?.status === 404) &&
					!errRes.data.message.includes("/")
				) {
					isInvalidCredentials.value = errRes.data.message;
					console.log(err.message);
				} else errorAlert(null);
				console.log(errRes);
			})
			.finally(() => {
				submitButton.value.removeAttribute("data-kt-indicator");
			});
	};

	onMounted(() => {
		if (auth.isAuthenticated()) {
			auth.login(auth.userData.value!);
		}
	});
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
					<NFTexLogo :classes="'h-60px'"/>
					<!--end::Logo-->

					<!--begin::Image-->
					<img
						class="d-none d-lg-block mx-auto w-300px w-lg-75 w-xl-250px mb-10 mb-lg-20 mt-15"
						src="/assets/media/illustrations/misc/credit-card.png"
						alt=""
					/>
					<!--end::Image-->

					<!--begin::Title-->
					<h1
						class="d-none d-lg-block text-white fs-2qx fw-bold text-center mb-7"
					>
						Welcome Back
					</h1>
					<!--end::Title-->
				</div>
				<!--end::Content-->
			</div>
			<!--begin::Aside-->

			<!--begin::Body-->
			<div
				v-if="!forgot"
				class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10"
			>
				<!--begin::Form-->
				<div class="d-flex flex-center flex-column flex-lg-row-fluid">
					<!--begin::Wrapper-->
					<div class="card w-lg-500px p-md-10">
						<div class="card-body">
							<!--begin::Form-->
							<form
								@submit.prevent="submitForm"
								class="form w-100"
								novalidate
								id="kt_sign_in_form"
							>
								<!--begin::Heading-->
								<div class="text-center mb-11">
									<!--begin::Title-->
									<h1 class="text-dark fw-bolder mb-3">
										Sign In
									</h1>
									<!--end::Title-->
								</div>
								<!--begin::Heading-->

								<!--begin::Separator-->
								<div
									class="separator separator-content my-14"
								></div>
								<!--end::Separator-->

								<!--begin::Input group--->
								<div class="fv-row mb-8">
									<!--begin::Email-->
									<input
										type="text"
										placeholder="Email"
										name="email"
										autocomplete="on"
										class="form-control bg-transparent"
										required
										v-model="form.email"
									/>
									<!--end::Email-->
								</div>

								<!--end::Input group--->
								<div class="fv-row mb-3">
									<!--begin::Password-->
									<input
										type="password"
										placeholder="Password"
										name="password"
										autocomplete="on"
										class="form-control bg-transparent"
										v-model="form.password"
										required
									/>
									<!--end::Password-->
								</div>
								<div
									v-if="isInvalidCredentials"
									class="text-danger fs-sm mt-3 mb-3"
								>
									{{ isInvalidCredentials }}
								</div>
								<!--end::Input group--->

								<!--begin::Wrapper-->
								<div
									class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8"
								>
									<div></div>

									<!--begin::Link-->
									<a
										@click="forgot = true"
										role="button"
										class="link-primary"
									>
										Forgot Password ?
									</a>
									<!--end::Link-->
								</div>
								<!--end::Wrapper-->

								<!--begin::Submit button-->
								<div class="d-grid mb-10">
									<button
										ref="submitButton"
										type="submit"
										id="kt_sign_in_submit"
										class="btn btn-primary"
									>
										<!--begin::Indicator label-->
										<span class="indicator-label">
											Sign In</span
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
									Not a Member yet?

									<NuxtLink
										to="/sign-up"
										class="link-primary"
									>
										Sign up
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

				<!--end::Footer-->
			</div>
			<ForgotPassword v-else />
			<!--end::Body-->
		</div>
		<!--end::Authentication - Sign-in-->
	</div>
	<!--end::Root-->
</template>
