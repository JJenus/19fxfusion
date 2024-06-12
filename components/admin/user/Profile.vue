import { log } from 'console'; import { verify } from 'crypto';
<script setup lang="ts">
	import { IUser } from "utils/interfaces/IUser";
	import axios, {
		AxiosError,
		AxiosRequestConfig,
		AxiosResponse,
	} from "axios";

	const props = defineProps<{ user: IUser }>();
	const tiers = useAppSettings().accountLevels;

	const appConfig = useRuntimeConfig();
	const submitButton = ref();
	const newLevel = ref({ newLevel: props.user.account.accountLevel });
	const loading = ref(false);

	function getObject(obj: any): any {
		const newObj: { [key: string]: any } = {};

		for (const key in obj) {
			if (obj[key] !== null && key != "account") {
				newObj[key] = obj[key];
			}
		}

		return newObj;
	}

	const save = (data: any, url: string) => {
		const axiosConfig: AxiosRequestConfig = {
			method: "put",
			data: data,
			url: `${appConfig.public.BE_API}/${url}`,
			timeout: 20000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};
		loading.value = true;
		submitButton.value.setAttribute("data-kt-indicator", "on");
		// return;
		axios
			.request(axiosConfig)
			.then((response: AxiosResponse<IUser, any>) => {
				console.log("Yes ", response.data);
				successAlert("Success!");
				userData();
			})
			.catch((err: AxiosError<any, any>) => {
				const errRes = err.response;
				console.log("Status: ", errRes?.status);
				errorAlert("failed!");
				console.log(errRes);
			})
			.finally(() => {
				loading.value = false;
				submitButton.value.removeAttribute("data-kt-indicator");
			});
	};

	const verify = () => {
		console.log("verifying...");
		const user = props.user;
		const data = getObject(props.user);
		data.verified = true;
		// console.log(user);
		save(data, `users/${data.id}`);
	};

	const upgradeLevel = () => {
		const user = props.user;
		const data = { ...user.account };
		data.accountLevel = newLevel.value.newLevel;
		// console.log(user);
		save(data, "account");
	};
</script>
<template>
	<div
		class="card mb-5 mb-xl-10"
		id="kt_profile_details_view"
		bis_skin_checked="1"
	>
		<!--begin::Card header-->
		<div
			class="card-header cursor-pointer align-items-center"
			bis_skin_checked="1"
		>
			<!--begin::Card title-->
			<div class="card-title m-0" bis_skin_checked="1">
				<h3 class="fw-bold m-0">Profile Details</h3>
			</div>
			<!--end::Card title-->

			<!--begin::Action-->
			<button
				@click="verify()"
				ref="submitButton"
				v-if="!user?.verified"
				class="btn btn-light-primary"
			>
				<!--begin::Indicator label-->
				<span class="indicator-label">
					<i class="ki-duotone ki-user-tick fs-3">
						<span class="path1"></span>
						<span class="path2"></span>
						<span class="path3"></span>
					</i>
					Verify
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
			<div v-else>
				<span class="bullet bullet-dot h-5px w-5px bg-gray-400"></span>
				<span
					class="bullet bullet-dot h-5px w-5px bg-gray-400 mx-2"
				></span>
				<span class="bullet bullet-dot h-5px w-5px bg-gray-400"></span>
			</div>
			<!--end::Action-->
		</div>
		<!--begin::Card header-->

		<!--begin::Card body-->
		<div class="card-body p-9" bis_skin_checked="1">
			<div class="row mb-7 g-5" bis_skin_checked="1">
				<!--begin::Label-->
				<label class="col-lg-4 fw-semibold text-muted"
					>Update Level</label
				>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-lg-8 d-flex" bis_skin_checked="1">
					<select v-model="newLevel.newLevel" class="form-control">
						<option
							v-for="tier in tiers"
							:value="tier.accountLevel"
						>
							{{ tier.title }}
						</option>
					</select>

					<button
						:disabled="loading"
						@click="upgradeLevel()"
						class="btn btn-primary ms-3"
					>
						<span v-if="!loading">Save</span>
						<span
							v-else
							class="spinner-border spinner-border-sm"
						></span>
					</button>
				</div>
				<!--end::Col-->
			</div>
			<!--begin::Row-->
			<div class="row mb-7" bis_skin_checked="1">
				<!--begin::Label-->
				<label class="col-lg-4 fw-semibold text-muted">Full Name</label>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-lg-8" bis_skin_checked="1">
					<span class="fw-bold fs-6 text-gray-800">
						{{ user?.name }}
					</span>
				</div>
				<!--end::Col-->
			</div>

			<div class="row mb-7" bis_skin_checked="1">
				<!--begin::Label-->
				<label class="col-5 col-lg-4 fw-semibold text-muted"
					>Account Level</label
				>
				<!--end::Label-->

				<!--begin::Col-->
				<div
					v-for="tier in tiers"
					class="col-6 col-lg-8"
					bis_skin_checked="1"
					:class="
						tier.accountLevel !== user.account.accountLevel
							? 'd-none'
							: ''
					"
				>
					<span class="badge bg-secondary p-2 px-4 fs-6">
						{{ tier.title }}
					</span>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Row-->

			<!--begin::Input group-->
			<div class="row mb-7" bis_skin_checked="1">
				<!--begin::Label-->
				<label class="col-5 col-lg-4 fw-semibold text-muted">
					Email
				</label>
				<!--end::Label-->

				<!--begin::Col-->
				<div
					class="col-7 col-lg-8 d-flex align-items-center flex-wrap"
					bis_skin_checked="1"
				>
					<span class="fw-semibold text-gray-800 fs-6 me-2">
						{{ user?.email }}</span
					>
					<span v-if="user?.emailVerified" class="badge badge-success"
						>Verified</span
					>
					<span v-else class="badge badge-danger">Not verified</span>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Input group-->
			<div class="row mb-7" bis_skin_checked="1">
				<!--begin::Label-->
				<label class="col-5 col-lg-4 fw-semibold text-muted">
					Contact Phone

					<span
						class="ms-1"
						data-bs-toggle="tooltip"
						aria-label="Phone number must be active"
						data-bs-original-title="Phone number must be active"
						data-kt-initialized="1"
					>
						<i class="ki-outline ki-information fs-7"></i>
					</span>
				</label>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-7 col-lg-8 fv-row" bis_skin_checked="1">
					<span class="fw-bold fs-6 text-gray-800 me-2">{{
						user?.phone
					}}</span>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Input group-->
			<div class="row mb-7" bis_skin_checked="1">
				<!--begin::Label-->
				<label class="col-5 col-lg-4 fw-semibold text-muted"
					>Address</label
				>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-7 col-lg-8" bis_skin_checked="1">
					<a
						role="button"
						class="fw-semibold fs-6 text-gray-800 text-hover-primary"
						>{{ user?.address }}</a
					>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Input group-->
			<div class="row mb-7" bis_skin_checked="1">
				<!--begin::Label-->
				<label class="col-5 col-lg-4 fw-semibold text-muted">
					City

					<span
						class="ms-1"
						data-bs-toggle="tooltip"
						aria-label="Country of origination"
						data-bs-original-title="Country of origination"
						data-kt-initialized="1"
					>
						<i class="ki-outline ki-information fs-7"></i>
					</span>
				</label>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-7 col-lg-8" bis_skin_checked="1">
					<span class="fw-bold fs-6 text-gray-800">{{
						user?.city
					}}</span>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Input group-->
			<div class="row mb-7" bis_skin_checked="1">
				<!--begin::Label-->
				<label class="col-5 col-lg-4 fw-semibold text-muted">
					Country

					<span
						class="ms-1"
						data-bs-toggle="tooltip"
						aria-label="Country of origination"
						data-bs-original-title="Country of origination"
						data-kt-initialized="1"
					>
						<i class="ki-outline ki-information fs-7"></i>
					</span>
				</label>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-7 col-lg-8" bis_skin_checked="1">
					<span class="fw-bold fs-6 text-gray-800">{{
						user?.country
					}}</span>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Notice-->
			<div
				class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"
				bis_skin_checked="1"
			>
				<!--begin::Icon-->
				<i
					class="ki-outline ki-information fs-2tx text-warning me-4"
				></i>
				<!--end::Icon-->

				<!--begin::Wrapper-->
				<div
					v-if="!user?.emailVerified || !user?.verified"
					class="d-flex flex-stack flex-grow-1"
					bis_skin_checked="1"
				>
					<!--begin::Content-->
					<div class="fw-semibold" bis_skin_checked="1">
						<h4 class="text-gray-900 fw-bold">
							We need your attention!
						</h4>

						<div class="fs-6 text-gray-700" bis_skin_checked="1">
							<span v-if="!user?.emailVerified"
								>Email is not verified. <br />
							</span>
							<span v-if="!user?.verified"
								>Account not verified.</span
							>
						</div>
					</div>
					<!--end::Content-->
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Notice-->
		</div>
		<!--end::Card body-->
	</div>
</template>
