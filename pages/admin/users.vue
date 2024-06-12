<script setup lang="ts">
	const searchText = ref("");
	const active = userData().active;
	const foundUsers = ref(userData().users.value.length);

	if (userData().users.value.length === 0) {
		userData().getUsers();
	}

	const search = (area: string, input: string) => {
		const rjx = new RegExp(input, "i");
		const showAble = document.querySelectorAll(area);
		showAble.forEach((e) => {
			if (!rjx.test(e.innerHTML)) {
				e.classList.add("d-none");
			} else {
				e.classList.remove("d-none");
			}
		});
	};

	function filterUsers(searchString: string) {
		if (!searchString) {
			return userData().users.value; // Return the full list when search string is empty
		}

		searchString = searchString.toLowerCase(); // Convert search string to lowercase for case-insensitive search

		const users = userData().users.value.filter((user) => {
			// Perform a case-insensitive search for any of the properties
			const a =
				(user.id && user.id.toLowerCase().includes(searchString)) ||
				(user.name && user.name.toLowerCase().includes(searchString)) ||
				(user.email &&
					user.email.toLowerCase().includes(searchString)) ||
				(user.phone &&
					user.phone.toLowerCase().includes(searchString)) ||
				(user.imgUrl &&
					user.imgUrl.toLowerCase().includes(searchString)) ||
				(user.address &&
					user.address.toLowerCase().includes(searchString)) ||
				(user.city && user.city.toLowerCase().includes(searchString)) ||
				(user.country &&
					user.country.toLowerCase().includes(searchString)) ||
				(user.dob && user.dob.toLowerCase().includes(searchString)) ||
				(user.account.currencyId &&
					user.account.currencyId
						.toLowerCase()
						.includes(searchString)) ||
				(user.account.amount !== null &&
					user.account.amount
						.toString()
						.toLowerCase()
						.includes(searchString)) ||
				(user.account.status &&
					user.account.status.toLowerCase().includes(searchString));

			return a;
		});
		foundUsers.value = users.length;
		return users;
	}

	// const findUser = () => {
	// 	filterUsers(searchText.value);
	// 	// search(".user", searchText.value);
	// };
	onMounted(() => {});
</script>

<template>
	<div class="h-md-100">
		<!--begin::Chart widget 36-->
		<div v-if="!active" class="">
			<div
				class="card card-flush card-custom border-0 h-md-100 mb-5 mb-lg-10"
			>
				<!--begin::Card body-->
				<div class="card-body">
					<div
						class="d-block d-flex flex-column align-items-center justify-content-center"
					>
						<h1 class="text-center h2 pb-2 fw-bold">
							Users ({{ foundUsers }})
						</h1>
						<div
							class="position-relative my-1"
							bis_skin_checked="1"
						>
							<i
								class="ki-outline ki-magnifier fs-2 position-absolute top-50 translate-middle-y ms-4"
							></i>
							<input
								type="text"
								data-kt-table-widget-4="search"
								class="form-control w-150px fs-7 ps-12"
								placeholder="Search"
								v-model="searchText"
							/>
						</div>
					</div>
				</div>
				<!--end::Card body-->
			</div>
			<!--end::Chart widget 36-->
			<div class="row g-6 mb-6 g-xl-9 mb-xl-9">
				<div
					v-for="user in filterUsers(searchText)"
					class="col-md-6"
					bis_skin_checked="1"
				>
					<AdminUsersUser :user="user" />
				</div>
			</div>
		</div>

		<AdminUser v-else />
	</div>
</template>
