<script setup lang="ts">
	const auth = useAuth();
	const user = userData().data;
	const logout = () => {
		auth.logout();
	};
</script>
<template>
	<div
		class="menu border border-info border-3 menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
		data-kt-menu="true"
	>
		<!--begin::Menu separator-->
		<!--end::Menu separator-->

		<!--begin::Menu item-->
		<div class="menu-item px-5">
			<div
				class="d-flex flex-row justify-content-between align-items-center"
			>
				<div>
					<div class="d-flex flex-column mb-4">
						<span class="fw-bold"> Balance </span>
						<div class="fs-2 fw-bold">
							{{ user.account.amount }}
						</div>
					</div>
				</div>
				<i class="fa-brands fa-ethereum fs-5x text-warning me-4"></i>
			</div>
			<a href="/crypto/fund-wallet" class="btn btn-secondary w-100 mt-5"
				>Fund Wallet</a
			>
		</div>
		<!--end::Menu item-->
	</div>
</template>
