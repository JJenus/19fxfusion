<script setup lang="ts">
	import axios, {
		AxiosError,
		AxiosRequestConfig,
		AxiosResponse,
	} from "axios";
	import { IUser } from "utils/interfaces/IUser";

	const user = userData().data;
	user.value.account = userData().account.value;
	const accountLevel = userData().account.value.accountLevel;
	const accountLevels = useAppSettings().accountLevels;

	if (userData().users.value.length === 0) {
		userData().getUsers();
	}
	// const tiers = accountLevels.value.filter(
	// 	(e) => e.accountLevel < accountLevel
	// );

	const tiers = accountLevels.value;

	console.log(user.value.account);

	const newImage = ref(true);
	const CONFIG = useRuntimeConfig().public;

	useSeoMeta({
		title: `${CONFIG.APP} - Deploy Collection`,
	});

	const loading = ref(false);
	const inputSelect = ref();
	const imageUrl = ref();

	const form = ref({ ...user.value });

	const updateUser = () => {
		if (!user.value.idUrl && !imageUrl.value) {
			return errorAlert("Please upload an image");
		}

		const config = {
			url: `${CONFIG.BE_API}/users/${user.value.id}`,
			method: "PUT",
			data: form.value,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		loading.value = true; 

		axios
			.request(config)
			.then((res) => {
				userData().admins.value.forEach((admin) => {
					notify(admin);
				});
				successAlert("Success");
				user.value.idUrl = form.value.idUrl;
			})
			.catch((e) => {
				console.log(e);
				errorAlert("Failed!");
			})
			.finally(() => (loading.value = false));
	};

	const saveFile = () => {
		const file = imageUrl.value;
		if (!file) {
			return errorAlert("Select an image");
		} else if (!newImage.value) {
			return updateUser();
		}
		// console.log(form.value);

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "ml_default");

		loading.value = true;

		axios
			.request({
				method: "post",
				url:
					"https://api.cloudinary.com/v1_1/" +
					CONFIG.CLOUD_NAME +
					"/image/upload",
				data: formData,
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((response) => {
				if (response.data && response.data.secure_url) {
					const imageUrl = response.data.secure_url;
					console.log("Image uploaded successfully:", imageUrl);
					form.value.idUrl = imageUrl;
					// saveCollection();
					successAlert("Upload success");
					newImage.value = false;
					updateUser();
					return imageUrl;
				} else {
					loading.value = false;
					errorAlert("Error uploading ID");
					console.error("Failed to upload image:", response.data);
					return null;
				}
			})
			.catch((error) => {
				console.error("Error uploading image:", error);
				loading.value = false;
				errorAlert("Failed to create collection");
				return null;
			})
			.finally(() => {
				loading.value = false;
			});
	};

	const previewImage = (event: any) => {
		const file = event.target.files[0];

		if (!file) {
			// errorAlert("Select an image");
			return;
		}
		const maxSize = 5 * 1024 * 1024; // 5 MB
		if (file.size > maxSize) {
			return errorAlert("The file size must be less than 5 MB.");
			// Prevent form submission
		}

		const reader = new FileReader();
		reader.onload = (e: any) => {
			imageUrl.value = e.target.result;
			newImage.value = true;
		};
		reader.readAsDataURL(file);
	};

	const notify = (admin: IUser) => {
		// console.log(user);
		console.log(form.value);
		const notification = {
			userId: admin.id,
			title: "Account Upgrade",
			message: `${user.value.name} (${user.value.email}) requests upgrade to level ${form.value.account.accountLevel}.`,
			type: "info",
			status: "unread",
		};

		const axiosConfig: AxiosRequestConfig = {
			method: "post",
			data: notification,
			url: `${CONFIG.BE_API}/notifications`,
			timeout: 20000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		// return;
		axios
			.request(axiosConfig)
			.then((response: AxiosResponse<IUser, any>) => {
				console.log("Yes ", response.data);
				// successAlert("Sent!");
			})
			.catch((err: AxiosError<any, any>) => {
				const errRes = err.response;
				console.log("Status: ", errRes?.status);
				// errorAlert("Failed!");
				console.log(errRes);
			})
			.finally(() => {
				// submitButton.value.removeAttribute("data-kt-indicator");
			});
	};
</script>

<template>
	<div
		class="modal fade"
		id="upgrade-account"
		tabindex="-1"
		aria-labelledby="upgrade-account"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-body position-relative">
					<div class="position-absolute end-0 top-0 m-3">
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>

					<div v-if="!user.idUrl" class="">
						<h1 class="mb-5 text-center">Verify Identity</h1>
						<form @submit.prevent="saveFile()">
							<label for="" class="form-label">Upload ID</label>
							<!--begin::Dropzone-->
							<div
								@click="inputSelect.click()"
								class="dropzone overflow-hidden w-100 min-h-200px d-flex align-items-center justify-content-center"
								id="kt_dropzonejs_nft_collection_studio"
							>
								<input
									ref="inputSelect"
									type="file"
									class="d-none"
									accept="image/*"
									@change="previewImage($event)"
								/>
								<img
									v-if="imageUrl"
									class="w-100"
									:src="imageUrl"
									alt=""
									srcset=""
								/>
								<!--begin::Message-->
								<div
									class="dz-message needsclick position-absolute"
								>
									<i
										class="ki-duotone ki-file-up fs-3x text-primary"
										><span class="path1"></span
										><span class="path2"></span
									></i>

									<!--begin::Info-->
									<div class="ms-4">
										<h3
											class="fs-5 fw-bold text-gray-900 mb-1"
										>
											Click to upload.
										</h3>
										<span
											class="fs-7 fw-semibold text-gray-500"
											>Max size: 5mb</span
										>
									</div>
									<!--end::Info-->
								</div>
							</div>
							<!--end::Dropzone-->
							<button class="btn btn-primary mt-5 w-100">
								<span v-if="!loading">Submit</span>
								<span
									v-else
									class="spinner-border spinner-border-sm"
								></span>
							</button>
						</form>
					</div>
					<div v-else class="text-center">
						<h1 class="mb-10 text-center">Upgrade Account</h1>
						<div
							v-if="form.account"
							class="row row-cpls-1 row-cols-md-2 mb-5"
						>
							<div v-for="tier in tiers" class="col t-parent">
								<input
									:disabled="
										tier.accountLevel <= accountLevel
									"
									type="radio"
									class="btn-check"
									name="tier"
									:id="'radio_buttons_' + tier.id"
									:value="tier.accountLevel"
									v-model="form.account.accountLevel"
								/>
								<label
									class="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center"
									:for="'radio_buttons_' + tier.id"
								>
									<i
										class="ki-solid ki-medal-star fs-4x me-4"
									>
									</i>

									<span
										class="d-block fw-semibold text-start"
									>
										<span
											class="text-gray-900 fw-bold d-block fs-3"
											>{{ tier.title }}</span
										>
										<span
											v-if="
												tier.accountLevel <=
												accountLevel
											"
											class="text-warning fw-semibold fs-6 t-not"
										>
											Not allowed
										</span>
									</span>
								</label>
							</div>
						</div>
						<button
							@click="updateUser()"
							class="btn btn-primary fw-bold"
						>
							<span v-if="!loading" class=""
								>Request upgrade</span
							>
							<span
								v-else
								class="spinner-border spinner-border-sm"
							></span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.t-not {
		display: none;
	}
	.t-parent:hover .t-not {
		display: inline;
	}
</style>
