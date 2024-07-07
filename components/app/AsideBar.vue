<script setup>
	import axios from "axios";

	const appConfig = useRuntimeConfig();
	const newNotification = userData().newNotification;

	const transactions = ref([]);
	const userId = useAuth().userData.value?.userId;

	if (process.client) {
		const interval = setInterval(() => {
			if (window.tidioChatApi) {
				window.tidioChatApi.on("close", () => {
					window.tidioChatApi.hide();
				});
				clearInterval(interval);
			}
		}, 800);
	}

	const startChat = () => {
		const chat = useLiveChat();
		chat.openChat();
	};

	const fetchTransactions = () => {
		const axiosConfig = {
			method: "get",
			url: `${appConfig.public.BE_API}/transactions/${userId}`,
			timeout: 15000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		axios
			.request(axiosConfig)
			.then((response) => {
				const data = response.data.sort(
					(a, b) =>
						new Date(b.createdAt).getTime() -
						new Date(a.createdAt).getTime()
				);
				transactions.value = data;
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getPreview = () => {
		if (transactions.value.length <= 5) {
			return transactions.value;
		}
		const list = [];
		for (let i = 0; i < 5; i++) {
			list.push(transactions.value[i]);
		}
		return list;
	};

	onMounted(() => {
		fetchTransactions();
	});
</script>
<template>
	<div
		id="kt_app_aside"
		class="app-aside mobile-aside flex-column z-index-1d1e"
		data-kt-drawer="true"
		data-kt-drawer-name="app-aside"
		data-kt-drawer-activate="{default: true, lg: false}"
		data-kt-drawer-overlay="true"
		data-kt-drawer-width="275px"
		data-kt-drawer-direction="end"
		data-kt-drawer-toggle="#kt_app_aside_mobile_toggle"
	>
		<!--begin::Navbar-->
		<div
			class="app-navbar flex-shrink-0 p-5 p-lg-18 pb-0 mb-0"
			id="kt_app_aside_navbar"
		>
			<!--begin::Settings-->
			<div class="app-navbar-item ms-n3">
				<!--begin::Menu- wrapper-->
				<button
					@click="startChat()"
					class="btn btn-sme dv-lg-none btn-outline ms-2 btn-custom btn-icon-muted btn-active-light btn-active-color-primary"
					data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
					data-kt-menu-attach="parent"
					data-kt-menu-placement="bottom-end"
				>
					<i class="ki-solid ki-messages fs-2x"></i> Support
				</button>

				<!--end::Menu wrapper-->
			</div>
			<!--end::Settings-->

			<!--begin::User menu-->
			<div
				class="app-navbar-item ms-auto"
				id="kt_header_user_menu_toggle"
			>
				<AppUserMenuDropdown />
			</div>
			<!--end::User menu-->
		</div>
		<!--end::Navbar-->

		<!--begin::Content-->
		<div
			id="kt_app_aside_content_wrapper"
			class="app-aside_content-wrapper hover-scroll-overlay-y ps-2 pe-0"
			data-kt-scroll="true"
			data-kt-scroll-activate="true"
			data-kt-scroll-height="auto"
			data-kt-scroll-dependencies="#kt_app_aside_navbar"
			data-kt-scroll-wrappers="#kt_app_aside_content"
			data-kt-scroll-offset="5px"
		>
			<div class="my-6 px-5 d-lg-none">
				<button class="btn btn-success w-100">Deposit</button>
			</div>
			<!--begin::Card widget 21-->
			<div
				class="card card-flush bg-body rounded-0 border-0 mt-n5 m-0 mb-lg-10"
			>
				<!--begin::Card body-->
				<div class="card-body px-3">
					<div class="table-responsive">
						<table
							class="table align-middle table-row-dashed fs-8 dataTable no-footer table-hover"
						>
							<!--begin::Table head-->
							<thead>
								<!--begin::Table row-->
								<tr
									class="text-start sort text-gray-400 fw-bold fs-7 text-capitalised gs-0"
								>
									<th
										class="min-w-70px sorting_disabled table-sort-descd"
									>
										FX Pairs
									</th>
									<th
										class="text-end min-w-50px sorting_disabled"
									>
										Bid
									</th>
									<th
										class="text-end min-w-50px sorting_disabled"
									>
										Ask
									</th>
									<th
										class="text-end min-w-50px sorting_disabled"
									>
										Low
									</th>
									<th
										class="text-end min-w-50px sorting_disabled"
									>
										High
									</th>
								</tr>
								<!--end::Table row-->
							</thead>
							<!--end::Table head-->

							<!--begin::Table body-->
							<tbody class="fw-bold text-gray-600">
								<tr class="ps-3">
									<td
										class="text-gray-800 ps-2 text-hover-primary"
									>
										<span
											class="badge bg-light-primary pb-1"
										>
											EURUSD
										</span>
									</td>

									<td class="text-end">
										<span
											class="text-gray-600 text-hover-primary cursor-pointer"
										>
											1.78499
										</span>
									</td>

									<td class="text-end">
										<span
											class="text-gray-600 text-hover-primary cursor-pointer"
										>
											1.78499
										</span>
									</td>

									<td class="text-end">
										<span
											class="text-gray-600 text-hover-primary cursor-pointer"
										>
											1.78499
										</span>
									</td>

									<td class="text-end">
										<span
											class="text-gray-800 text-hover-primary cursor-pointer"
										>
											1.78499
										</span>
									</td>
								</tr>
								<tr class="odd">
									<td
										class="text-gray-800 text-hover-primary ps-3"
									>
										EURJPY
									</td>

									<td class="text-end">
										<span
											class="text-gray-600 text-hover-primary cursor-pointer"
										>
											1.78499
										</span>
									</td>

									<td class="text-end">
										<span
											class="text-gray-600 text-hover-primary cursor-pointer"
										>
											1.78499
										</span>
									</td>

									<td class="text-end">
										<span
											class="text-gray-600 text-hover-primary cursor-pointer"
										>
											1.78499
										</span>
									</td>

									<td class="text-end">
										<span
											class="text-gray-800 text-hover-primary cursor-pointer"
										>
											1.78499
										</span>
									</td>
								</tr>
								<tr class="odd">
									<td
										class="text-gray-800 ps-3 text-hover-primary"
									>
										USDCAD
									</td>

									<td class="text-end">
										<span
											class="text-gray-600 text-hover-primary cursor-pointer"
										>
											1.78499
										</span>
									</td>

									<td class="text-end">
										<span
											class="text-gray-600 text-hover-primary cursor-pointer"
										>
											1.78499
										</span>
									</td>

									<td class="text-end">
										<span
											class="text-gray-600 text-hover-primary cursor-pointer"
										>
											1.78499
										</span>
									</td>

									<td class="text-end">
										<span
											class="text-gray-800 text-hover-primary cursor-pointer"
										>
											1.78499
										</span>
									</td>
								</tr>
							</tbody>
							<!--end::Table body-->
						</table>
					</div>
				</div>
				<!--end::Card body-->
			</div>
			<!--end::Card widget 21-->
		</div>
		<!--end::Content-->
	</div>
</template>
