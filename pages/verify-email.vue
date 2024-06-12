<script setup lang="ts">
	import axios, { AxiosRequestConfig } from "axios";

	definePageMeta({
		layout: "auth",
	});
	const appConfig = useRuntimeConfig();

	const id = useRoute().query["id"];
	console.log(id);
	const verified = ref(false);
	const loading = ref(false);

	const verifyEmail = () => {
		const axiosConfig: AxiosRequestConfig = {
			method: "post",
			data: {
				id: id,
			},
			url: `${appConfig.public.BE_API}/auth/verify-email`,
			timeout: 15000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request(axiosConfig)
			.then((response) => {
				const data = response.data;
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
				const data = error.response.data;
			})
			.finally(() => {
				loading.value = false;
			});
	};
	verifyEmail();
</script>

<template>
	<div class="d-flex flex-column flex-root" id="kt_app_root">
		<!--begin::Authentication - Signup Welcome Message -->
		<div class="d-flex flex-column flex-center flex-column-fluid">
			<!--begin::Content-->
			<div class="d-flex flex-column flex-center text-center p-10">
				<!--begin::Wrapper-->
				<div class="card card-flush w-lg-650px py-5">
					<div class="card-body py-15 py-lg-20">
						<!--begin::Logo-->
						<div class="mb-14 text-center d-flex justify-content-center">
							<NFTexLogo :classes="'h-30px'" />
						</div>
						<!--end::Logo-->

						<!--begin::Title-->
						<h1 v-if="!loading" class="fw-bolder text-success mb-5">
							Verification Complete
						</h1>
						<h1 v-else class="fw-bolder text-muted mb-5">
							Verifying...
						</h1>
						<!--end::Title-->

						<!--begin::Action-->
						<div v-if="!loading" class="fs-6 mb-8">
							<span class="fw-semibold text-gray-500"
								>Email verified, proceed to sign in.
							</span>
						</div>
						<!--end::Action-->

						<!--begin::Link-->
						<div class="mb-11">
							<NuxtLink
								v-if="!loading"
								to="/sign-in"
								class="btn btn-sm btn-primary"
							>
								Sign in
							</NuxtLink>
							<span
								v-else
								class="spinner-border spinner-border-lg text-muted"
							></span>
						</div>
						<!--end::Link-->

						<!--begin::Illustration-->
						<div class="mb-0">
							<img
								v-if="!loading"
								src="/assets/media/illustrations/sigma-1/17-dark.png"
								class="mw-100 mh-300px"
								alt=""
							/>
							<img
								v-else
								src="/assets/media/auth/verify-email.png"
								class="mw-100 mh-300px"
								alt=""
							/>
						</div>
						<!--end::Illustration-->
					</div>
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Content-->
		</div>
		<!--end::Authentication - Signup Welcome Message-->
	</div>
</template>

<!--begin::Page bg image-->
<style scoped>
	body {
		background-image: url("/assets/media/auth/bg16.jpg");
	}

	[data-bs-theme="dark"] body {
		background-image: url("/assets/media/auth/bg16-dark.jpg");
	}
</style>
<!--end::Page bg image-->
