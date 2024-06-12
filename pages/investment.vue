<script setup>
	const config = useRuntimeConfig().public;
	const currentPage = "Investments";
	useSeoMeta({
		title: `${currentPage} - ${config.APP}`,
	});
</script>

<template>
	<!--begin::Content-->
	<div id="kt_app_content" class="app-content flex-column-fluid">
		<!--begin::Content container-->
		<div
			id="kt_app_content_container"
			class="app-container container-fluid"
		>
			<!--begin::Page title-->
			<div
				class="page-title d-flex flex-column justify-content-center me-3 mb-10"
			>
				<!--begin::Title-->
				<h1
					class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0"
				>
					Why Choose Us?
				</h1>
				<!--end::Title-->

				<!--begin::Breadcrumb-->
				<ul
					class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1"
				>
					<!--begin::Item-->
					<li class="breadcrumb-item text-muted">
						<a href="/" class="text-muted text-hover-primary">
							Home
						</a>
					</li>
					<!--end::Item-->
					<!--begin::Item-->
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-400 w-5px h-2px"></span>
					</li>
					<!--end::Item-->

					<!--begin::Item-->
					<li class="breadcrumb-item text-muted">Quality</li>
					<!--end::Item-->
					<!--begin::Item-->
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-400 w-5px h-2px"></span>
					</li>
					<!--end::Item-->

					<!--begin::Item-->
					<li class="breadcrumb-item text-muted">Services</li>
					<!--end::Item-->
				</ul>
				<!--end::Breadcrumb-->
			</div>
			<!--end::Page title-->

			<!--begin::Sitemap main-->
			<div class="d-flex flex-column flex-xl-row">
				<!--begin::Content-->
				<div
					class="card bg-body flex-row-fluid mb-9 mb-xl-0 me-xl-9"
				></div>
				<!--end::Content-->

				<!--begin::Sidebar-->
				<div class="flex-column flex-lg-row-auto w-100">
					<!--begin::Support-->
					<div class="card card-flush bg-body mb-9">
						<!--end::Card header-->

						<!--begin::Card body-->
						<div class="card-body">
							<!--begin::Items-->
							<div class="row g-5">
								<div class="col-lg-5">
									<div class="mb-12" bis_skin_checked="1">
										<!--begin::Description-->
										<div class="m-0" bis_skin_checked="1">
											<!--begin::Title-->
											<h4
												class="fs-1 text-gray-800 w-bolder mb-6"
											>
												Consider investing with us.
											</h4>
											<!--end::Title-->

											<!--begin::Text-->
											<p
												class="fw-semibold fs-4 text-gray-600 mb-2"
											>
												There is no feeling better than
												knowing your money is safe.
											</p>
											<!--end::Text-->
										</div>
										<!--end::Description-->

										<!--begin::Accordion-->

										<!--begin::Section-->
										<div class="m-0" bis_skin_checked="1">
											<!--begin::Heading-->
											<div
												class="d-flex align-items-center collapsible py-3 toggle mb-0 collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#kt_job_1_1"
												bis_skin_checked="1"
												aria-expanded="false"
											>
												<!--begin::Icon-->
												<div
													class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5"
													bis_skin_checked="1"
												>
													<i
														class="ki-outline ki-minus-square toggle-on text-primary fs-1"
													></i>
													<i
														class="ki-outline ki-plus-square toggle-off fs-1"
													></i>
												</div>
												<!--end::Icon-->

												<!--begin::Title-->
												<h4
													class="text-gray-700 fw-bold cursor-pointer mb-0"
												>
													We put people first
												</h4>
												<!--end::Title-->
											</div>
											<!--end::Heading-->

											<!--begin::Body-->
											<div
												id="kt_job_1_1"
												class="fs-6 ms-1 collapse"
												bis_skin_checked="1"
												style=""
											>
												<!--begin::Item-->
												<div
													class="mb-4"
													bis_skin_checked="1"
												>
													<!--begin::Item-->
													<div
														class="d-flex align-items-center ps-10 mb-n1"
														bis_skin_checked="1"
													>
														<!--begin::Bullet-->
														<span
															class="bullet me-3"
														></span>
														<!--end::Bullet-->

														<!--begin::Label-->
														<div
															class="text-gray-600 fw-semibold fs-6"
															bis_skin_checked="1"
														>
															We are committed to
															being an ethical
															partner in your
															wealth journey. We
															focus on doing what
															we believe is best
															for you and your
															family’s financial
															health.
														</div>
														<!--end::Label-->
													</div>
													<!--end::Item-->
												</div>
												<!--end::Item-->
											</div>
											<!--end::Content-->

											<!--begin::Separator-->
											<div
												class="separator separator-dashed"
												bis_skin_checked="1"
											></div>
											<!--end::Separator-->
										</div>
										<!--end::Section-->

										<!--begin::Section-->
										<div class="m-0" bis_skin_checked="1">
											<!--begin::Heading-->
											<div
												class="d-flex align-items-center collapsible py-3 toggle mb-0 collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#kt_job_1_2"
												bis_skin_checked="1"
												aria-expanded="false"
											>
												<!--begin::Icon-->
												<div
													class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5"
													bis_skin_checked="1"
												>
													<i
														class="ki-outline ki-minus-square toggle-on text-primary fs-1"
													></i>
													<i
														class="ki-outline ki-plus-square toggle-off fs-1"
													></i>
												</div>
												<!--end::Icon-->

												<!--begin::Title-->
												<h4
													class="text-gray-700 fw-bold cursor-pointer mb-0"
												>
													Flexible investment options
												</h4>
												<!--end::Title-->
											</div>
											<!--end::Heading-->

											<!--begin::Body-->
											<div
												id="kt_job_1_2"
												class="fs-6 ms-1 collapse"
												bis_skin_checked="1"
												style=""
											>
												<!--begin::Item-->
												<div
													class="mb-4"
													bis_skin_checked="1"
												>
													<!--begin::Item-->
													<div
														class="d-flex align-items-center ps-10 mb-n1"
														bis_skin_checked="1"
													>
														<!--begin::Bullet-->
														<span
															class="bullet me-3"
														></span>
														<!--end::Bullet-->

														<!--begin::Label-->
														<div
															class="text-gray-600 fw-semibold fs-6"
															bis_skin_checked="1"
														>
															Whether your needs
															are simple or
															complex, as a wealth
															management client
															you have access to a
															full spectrum of
															financial life
															management services.
														</div>
														<!--end::Label-->
													</div>
													<!--end::Item-->
												</div>
												<!--end::Item-->
											</div>
											<!--end::Content-->

											<!--begin::Separator-->
											<div
												class="separator separator-dashed"
												bis_skin_checked="1"
											></div>
											<!--end::Separator-->
										</div>
										<!--end::Section-->

										<!--begin::Section-->
										<div class="m-0" bis_skin_checked="1">
											<!--begin::Heading-->
											<div
												class="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
												data-bs-toggle="collapse"
												data-bs-target="#kt_job_1_3"
												bis_skin_checked="1"
											>
												<!--begin::Icon-->
												<div
													class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5"
													bis_skin_checked="1"
												>
													<i
														class="ki-outline ki-minus-square toggle-on text-primary fs-1"
													></i>
													<i
														class="ki-outline ki-plus-square toggle-off fs-1"
													></i>
												</div>
												<!--end::Icon-->

												<!--begin::Title-->
												<h4
													class="text-gray-700 fw-bold cursor-pointer mb-0"
												>
													Decades of experience
												</h4>
												<!--end::Title-->
											</div>
											<!--end::Heading-->

											<!--begin::Body-->
											<div
												id="kt_job_1_3"
												class="collapse fs-6 ms-1"
												bis_skin_checked="1"
											>
												<!--begin::Item-->
												<div
													class="mb-4"
													bis_skin_checked="1"
												>
													<!--begin::Item-->
													<div
														class="d-flex align-items-center ps-10 mb-n1"
														bis_skin_checked="1"
													>
														<!--begin::Bullet-->
														<span
															class="bullet me-3"
														></span>
														<!--end::Bullet-->

														<!--begin::Label-->
														<div
															class="text-gray-600 fw-semibold fs-6"
															bis_skin_checked="1"
														>
															Our years of banking
															and trust and estate
															experience, along
															with Investments’
															wealth management
															expertise, we give
															you access to
															guidance from
															seasoned thought
															leaders, as well as
															a vast library of
															timely insights on
															financial markets
															and the economy.
														</div>
														<!--end::Label-->
													</div>
													<!--end::Item-->
												</div>
												<!--end::Item-->
											</div>
											<!--end::Content-->

											<!--begin::Separator-->
											<div
												class="separator separator-dashed"
												bis_skin_checked="1"
											></div>
											<!--end::Separator-->
										</div>
										<!--end::Section-->

										<!--begin::Section-->
										<div class="m-0" bis_skin_checked="1">
											<!--begin::Heading-->
											<div
												class="d-flex align-items-center collapsible py-3 toggle collapsed mb-0"
												data-bs-toggle="collapse"
												data-bs-target="#kt_job_1_4"
												bis_skin_checked="1"
											>
												<!--begin::Icon-->
												<div
													class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5"
													bis_skin_checked="1"
												>
													<i
														class="ki-outline ki-minus-square toggle-on text-primary fs-1"
													></i>
													<i
														class="ki-outline ki-plus-square toggle-off fs-1"
													></i>
												</div>
												<!--end::Icon-->

												<!--begin::Title-->
												<h4
													class="text-gray-700 fw-bold cursor-pointer mb-0"
												>
													Secure Loan Processs
												</h4>
												<!--end::Title-->
											</div>
											<!--end::Heading-->

											<!--begin::Body-->
											<div
												id="kt_job_1_4"
												class="collapse fs-6 ms-1"
												bis_skin_checked="1"
											>
												<!--begin::Item-->
												<div
													class="mb-4"
													bis_skin_checked="1"
												>
													<!--begin::Item-->
													<div
														class="d-flex align-items-center ps-10 mb-n1"
														bis_skin_checked="1"
													>
														<!--begin::Bullet-->
														<span
															class="bullet me-3"
														></span>
														<!--end::Bullet-->

														<!--begin::Label-->
														<div
															class="text-gray-600 fw-semibold fs-6"
															bis_skin_checked="1"
														>
															Compare various loan
															options that are
															right and best
															suitable for you.
														</div>
														<!--end::Label-->
													</div>
													<!--end::Item-->
												</div>
												<!--end::Item-->
											</div>
											<!--end::Content-->
										</div>
										<!--end::Section-->

										<!--end::Accordion-->

										<!--begin::Action-->
										<NuxtLink
											to="sign-up"
											class="btn btn-sm btn-primary mt-5"
										>
											Sign Up
										</NuxtLink>
										<!--end::Action-->
									</div>
								</div>
								<div class="col-lg-7">
									<div class="overlay" bis_skin_checked="1">
										<!--begin::Image-->
										<div
											class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-500px"
											style="
												background-image: url('/assets/media/stock/1600x800/img-4.jpg');
											"
											bis_skin_checked="1"
										></div>
										<!--end::Image-->
									</div>
								</div>
							</div>
						</div>
						<!--end::Card body-->
					</div>
					<!--end::Support-->
				</div>
				<!--end::Sidebar-->
			</div>
			<!--end::Sitemap main-->
		</div>
		<!--end::Content container-->
	</div>
	<!--end::Content-->
</template>
