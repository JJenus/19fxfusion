<script setup lang="ts">
	import { IUser } from "utils/interfaces/IUser";
	import axios, {
		AxiosError,
		AxiosRequestConfig,
		AxiosResponse,
	} from "axios";

	const props = defineProps<{ user: IUser }>();
	const form = ref({
		title: "",
		userId: props.user.id,
		message: "",
		type: "info",
		status: "unread",
	});

	const appConfig = useRuntimeConfig();
	const submitButton = ref();

	const notify = () => {
		const user = props.user;
		// console.log(user);
		console.log(form.value);
		if (!form.value.title || !form.value.message) {
			errorAlert("Fill form correctly");
			return;
		}

		const axiosConfig: AxiosRequestConfig = {
			method: "post",
			data: form.value,
			url: `${appConfig.public.BE_API}/notifications`,
			timeout: 20000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		submitButton.value.setAttribute("data-kt-indicator", "on");
		// return;
		axios
			.request(axiosConfig)
			.then((response: AxiosResponse<IUser, any>) => {
				console.log("Yes ", response.data);
				successAlert("Sent!");
			})
			.catch((err: AxiosError<any, any>) => {
				const errRes = err.response;
				console.log("Status: ", errRes?.status);
				errorAlert("Failed!");
				console.log(errRes);
			})
			.finally(() => {
				submitButton.value.removeAttribute("data-kt-indicator");
			});
	};
</script>

<template>
	<div class="card mb-5 mb-xl-10" bis_skin_checked="1">
		<!--begin::Card header-->
		<div
			class="card-header border-0 cursor-pointer"
			role="button"
			data-bs-toggle="collapse"
			data-bs-target="#kt_account_profile_details"
			aria-expanded="true"
			aria-controls="kt_account_profile_details"
			bis_skin_checked="1"
		>
			<!--begin::Card title-->
			<div class="card-title m-0" bis_skin_checked="1">
				<h3 class="fw-bold m-0">Send Notification</h3>
			</div>
			<!--end::Card title-->
		</div>
		<!--begin::Card header-->

		<!--begin::Content-->
		<div
			id="kt_account_settings_profile_details"
			class="collapse show"
			bis_skin_checked="1"
		>
			<!--begin::Form-->
			<form
				@submit.prevent="notify()"
				class="form fv-plugins-bootstrap5 fv-plugins-framework"
				novalidate
			>
				<!--begin::Card body-->
				<div class="card-body border-top p-9" bis_skin_checked="1">
					<!--begin::Input group-->
					<div class="row mb-6" bis_skin_checked="1">
						<!--begin::Label-->
						<label
							class="col-lg-4 col-form-label required fw-semibold fs-6"
							>Title</label
						>
						<!--end::Label-->

						<!--begin::Col-->
						<div
							class="col-lg-8 fv-row fv-plugins-icon-container"
							bis_skin_checked="1"
						>
							<input
								type="text"
								name="title"
								class="form-control form-control-lg form-control-solid"
								placeholder="Title"
								required
								v-model="form.title"
							/>
							<div
								class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
								bis_skin_checked="1"
							></div>
						</div>
						<!--end::Col-->
					</div>
					<!--end::Input group-->

					<!--begin::Input group-->
					<div class="row mb-6" bis_skin_checked="1">
						<!--begin::Label-->
						<label class="col-lg-4 col-form-label fw-semibold fs-6">
							<span class="required">Message</span>

							<span
								class="ms-1"
								data-bs-toggle="tooltip"
								aria-label="message is required"
								data-bs-original-title="message is required"
								data-kt-initialized="1"
							>
								<i
									class="ki-outline ki-information-5 text-gray-500 fs-6"
								></i
							></span>
						</label>
						<!--end::Label-->

						<!--begin::Col-->
						<div
							class="col-lg-8 fv-row fv-plugins-icon-container"
							bis_skin_checked="1"
						>
							<textarea
								class="form-control form-control-lg form-control-solid"
								rows="4"
								placeholder="Type a message"
								required
								v-model="form.message"
							>
							</textarea>
							<div
								class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
								bis_skin_checked="1"
							></div>
						</div>
						<!--end::Col-->
					</div>
					<!--end::Input group-->
				</div>
				<!--end::Card body-->

				<!--begin::Actions-->
				<div
					class="card-footer d-flex justify-content-end py-6 px-9"
					bis_skin_checked="1"
				>
					<button
						type="reset"
						class="btn btn-light btn-active-light-primary me-2"
					>
						Discard
					</button>
					<button
						type="submit"
						ref="submitButton"
						class="btn btn-primary"
					>
						<span class="indicator-label">
							<i class="ki-duotone ki-user-tick fs-3">
								<span class="path1"></span>
								<span class="path2"></span>
								<span class="path3"></span>
							</i>
							Send
						</span>
						<!--end::Indicator label-->

						<!--begin::Indicator progress-->
						<span class="indicator-progress">
							Please wait...
							<span
								class="spinner-border spinner-border-sm align-middle ms-2"
							></span>
						</span>
					</button>
				</div>
				<!--end::Actions-->
				<input type="hidden" />
			</form>
			<!--end::Form-->
		</div>
		<!--end::Content-->
	</div>
</template>
