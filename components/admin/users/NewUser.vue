<script setup lang="ts">
	import moment from "moment";
	import { IUser } from "utils/interfaces/IUser";

	const props = defineProps<{ user: IUser }>();
	// console.log(props.user);
	const timeAgo = () => {
		return moment(props.user.createdAt).fromNow();
	};
</script>

<template>
	<div
		@click="closeDrawer()"
		class="border border-gray-300 p-4 border-dashed rounded mb-4 d-flex align-items-center me-5 me-xl-13"
		bis_skin_checked="1"
	>
		<!--begin::Symbol-->
		<div class="symbol symbol-30px symbol-circle me-3" bis_skin_checked="1">
			<img
				:src="user.imgUrl || `/assets/media/svg/avatars/blank.svg`"
				class=""
				alt=""
			/>
		</div>
		<!--end::Symbol-->

		<!--begin::Info-->
		<div class="m-0" bis_skin_checked="1">
			<span class="fw-semibold \ d-block fs-8">{{ user.name }}</span>
			<NuxtLink
				to="/admin/users"
				@click="userData().active.value = user"
				role="button"
				class="fw-bold text-gray-800 text-hover-primary fs-7"
			>
				{{ timeAgo() }}
			</NuxtLink>
		</div>
		<!--end::Info-->
	</div>
</template>
