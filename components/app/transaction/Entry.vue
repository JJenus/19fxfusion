<script setup lang="ts">
	import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
	import moment from "moment";
	import { IUser } from "utils/interfaces/IUser";

	const props = defineProps({
		showDetails: {
			type: Boolean,
			required: false,
			default: false,
		},
		transaction: {
			type: Object,
			required: true,
		},
	});
	const user = ref<any>({
		name: "",
	});

	const appConfig = useRuntimeConfig();

	const getUserData = () => {
		if (!useAuth().userData.value) {
			useAuth().logout();
			infoAlert("Session expired, please login.");
		}

		const axiosConfig: AxiosRequestConfig = {
			method: "get",
			url: `${appConfig.public.BE_API}/users/${props.transaction.receiverId}`,
			timeout: 15000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request<IUser>(axiosConfig)
			.then((response: AxiosResponse<IUser, any>) => {
				user.value = response.data;

				// console.log(data.value);
			})
			.catch((error) => {
				// console.log(error);
				const data = error.response.data;
				if (
					data.message.includes("Access denied") ||
					error.response.status === 401
				) {
					console.log("Access denied");
					useAuth().logout();
				}
			});
	};

	const show = ref(false);

	const getType = () => {
		if (props.transaction.receiverId === userData().data.value.id) {
			getUserData();
			return "Received";
		}
		user.value.name = props.transaction.beneficiary.name;

		return "Sent";
	};

	const statusColor = (val: string) => {
		if (props.transaction.status === "pending") {
			return val + "-warning";
		} else if (props.transaction.status === "failed") {
			return val + "-danger";
		}
		return val + "-success";
	};

	const statusIcon = () => {
		if (props.transaction.status === "pending") {
			return "ki-information-5 text-warning";
		} else if (props.transaction.status === "failed") {
			return "ki-cross-circle text-danger";
		} else return "ki-check-circle text-success";
	};

	const time = () => {
		const now = moment();
		const inputTime = moment(props.transaction.createdAt);

		console.log("Time diff: ", now.diff(inputTime, "hours"));

		if (now.diff(inputTime, "hours") <= 1) {
			return inputTime.fromNow();
		} else if (now.isSame(inputTime, "day")) {
			return inputTime.format("hh:mm A");
		} else {
			return inputTime.format("DD/MM/YYYY hh:mm A");
		}
	};

	const toggleShowData = () => {
		if (props.showDetails) show.value = !show.value;
	};
</script>
<template>
	<div></div>
	<!--begin::Item-->
	<div class="d-flex flex-stack mb-6" @click="toggleShowData">
		<!--begin::Symbol-->
		<div class="symbol symbol-circle symbol-45px me-4">
			<img src="/assets/media/avatars/300-2.jpg" class="d-none" alt="" />
			<i :class="statusIcon()" class="ki-outline fs-1"></i>
		</div>
		<!--end::Symbol-->

		<!--begin::Section-->
		<div class="d-flex align-items-center flex-row-fluid flex-wrap">
			<!--begin:Author-->
			<div class="flex-grow-1 me-2">
				<a
					role="button"
					class="text-hover-primary text-gray-800 fs-5 fw-bolder"
					style="color: #28346c"
					>{{ user.name }}</a
				>

				<span class="text-gray-400 fw-semibold d-block fs-n6">
					<span class="text-primary me-2">{{ getType() }}</span>
					{{ time() }}
				</span>
			</div>
			<!--end:Author-->

			<div class="d-flex flex-column text-end">
				<!--begin::Info-->
				<span class="text-gray-800 fw-bold fs-6"
					>${{ transaction.amount }}</span
				>
				<!--end::Info-->
				<div class="text-gray-400 text-truncate w-80px">
					{{ transaction.beneficiary.bank }}
				</div>
			</div>
			<div v-if="showDetails" class="ms-2">
				<i
					:class="show ? 'ki-up-square' : 'ki-down-square'"
					class="ki-outline mt-5 mt-lg-1 text-primary fs-2x"
				>
				</i>
			</div>
		</div>
		<!--end::Section-->
	</div>
	<!--end::Item-->

	<div
		v-if="show"
		class="mb-10 px-8 rounded-2 border-dashed pt-4 border-2 border-gray-500 px-md-15 px-lg-20"
	>
		<div class="table-responsive w-100">
			<table class="table fs-6">
				<tbody>
					<tr>
						<td class="fw-b6old">Bank</td>
						<td class="text-end">
							{{ user.name }}
						</td>
					</tr>
					<tr>
						<td class="fw-b6old">Name</td>
						<td class="text-end">
							{{ transaction.beneficiary.name }}
						</td>
					</tr>
					<tr>
						<td class="fw-bol6d">Account</td>
						<td class="text-end">
							{{ transaction.beneficiary.destinationAccount }}
						</td>
					</tr>
					<tr>
						<td>
							<span
								class="badge fw-bold pt-1"
								:class="statusColor('bg')"
								>Status</span
							>
						</td>
						<td class="text-end" :class="statusColor('text')">
							{{ transaction.status }}
						</td>
					</tr>
					<tr>
						<td class="fw-bol6d">Time</td>
						<td class="text-end">{{ time() }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
