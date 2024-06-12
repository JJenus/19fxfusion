<script setup lang="ts">
	import currency from "currency.js";
	import { IUser } from "utils/interfaces/IUser";

	const active = userData().active;

	const props = defineProps<{ user: IUser }>();

	const balance = () => {
		let cAmount = props.user.account.amount;
		if (!cAmount) {
			cAmount = 0;
		}
		const amount = currency(cAmount, {
			symbol: "",
		}).format();
		return amount;
	};
</script>

<template>
	<!--begin::Card-->
	<div class="card user" bis_skin_checked="1">
		<!--begin::Card body-->
		<div
			class="card-body d-flex flex-center flex-column py-9 px-5"
			bis_skin_checked="1"
		>
			<!--begin::Avatar-->
			<div
				class="symbol symbol-65px symbol-circle mb-5"
				bis_skin_checked="1"
			>
				<img
					:src="user.imgUrl || '/assets/media/svg/avatars/blank.svg'"
					alt="image"
				/>
				<div
					class="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-body h-15px w-15px ms-n3 mt-n3"
					bis_skin_checked="1"
				></div>
			</div>
			<!--end::Avatar-->

			<!--begin::Name-->
			<a
				role="button"
				class="fs-4 text-gray-800 text-hover-primary fw-bold mb-0"
			>
				{{ user.name }}
			</a>
			<!--end::Name-->

			<!--begin::Position-->
			<div class="fw-semibold text-gray-400 mb-6" bis_skin_checked="1">
				{{ user.email }}
			</div>
			<!--end::Position-->

			<!--begin::Info-->
			<div class="d-flex flex-center flex-wrap mb-0" bis_skin_checked="1">
				<!--begin::Stats-->
				<div
					class="border border-dashed rounded min-w-90px py-3 px-4 mx-2 mb-3"
					bis_skin_checked="1"
				>
					<div
						class="fs-6 fw-bold text-gray-700"
						bis_skin_checked="1"
					>
						${{ balance() }}
					</div>
					<div class="fw-semibold text-gray-400" bis_skin_checked="1">
						Balance
					</div>
				</div>
				<!--end::Stats-->

				<button
					@click="active = user"
					type="button"
					class="btn btn-sm btn-light-primary btn-flex btn-center"
					data-kt-follow-btn="true"
				>
					<i class="ki-duotone ki-user-square">
						<span class="path1"></span>
						<span class="path2"></span>
						<span class="path3"></span>
					</i>

					<!--begin::Indicator label-->
					<span class="mt-0">View</span>
					<!--end::Indicator label-->
					<!--end::Indicator progress-->
				</button>
			</div>
			<!--end::Info-->

			<!--begin::Follow-->

			<!--end::Follow-->
		</div>
		<!--begin::Card body-->
	</div>
	<!--begin::Card-->
</template>
