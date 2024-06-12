<script setup>
	const config = useRuntimeConfig().public;
	const currentPage = "About";
	useSeoMeta({
		title: `${currentPage} - ${config.APP}`,
	});
</script>

<template>
	<div class="d-flex flex-column flex-column-fluid">
		<!--begin::Content-->
		<div id="kt_app_content" class="app-content flex-column-fluid">
			<!--begin::Content container-->
			<div
				id="kt_app_content_container"
				class="app-container container-fluid"
			>
				<div class="mb-6">
					<div
						class="card border-0 h-100 bgi-no-repeat bgi-size-cover bgi-position-x-end bg-primary"
						data-bs-theme="light"
						style="
							background-image: url('https://www.citigroup.com/rcs/v1/siteIds/citigpa/asset/64bec2480517e6725120d613.jpg');
						"
						bis_skin_checked="1"
					>
						<!--begin::Body-->
						<div class="card-body" bis_skin_checked="1">
							<!--begin::Row-->
							<div
								class="row align-items-center h-100"
								bis_skin_checked="1"
							>
								<!--begin::Col-->
								<div
									class="col-7 ps-xl-13"
									bis_skin_checked="1"
								>
									<!--begin::Title-->
									<div
										class="text-white mb-6 pt-6"
										bis_skin_checked="1"
									>
										<span
											class="fs-4 fw-semibold me-2 d-block lh-1 pb-2 opacity-75"
											>Get the best offer</span
										>

										<span
											class="fs-3qx d-none text-info d-lg-inline fw-bold display-3"
										>
											{{ config.APP }}
										</span>

										<span
											class="fs-3qx d-lg-none text-dark fw-bold display-3"
										>
											{{ config.APP }}
										</span>
									</div>
									<!--end::Title-->

									<!--begin::Text-->
									<span
										class="fw-semibold text-white fs-6 mb-8 d-block opacity-75"
									>
										Providing financial services to enable
										growth and economic progress.
									</span>
									<!--end::Text-->

									<!--begin::Items-->
									<div
										class="d-flex align-items-center flex-wrap d-grid gap-2 mb-10 mb-xl-20"
										bis_skin_checked="1"
									>
										<!--begin::Item-->
										<div
											class="d-flex align-items-center me-5 me-xl-13"
											bis_skin_checked="1"
										>
											<!--begin::Symbol-->
											<div
												class="symbol symbol-30px symbol-circle me-3"
												bis_skin_checked="1"
											>
												<span
													class="symbol-label"
													style="background: #35c7ff"
												>
													<i
														class="ki-outline ki-abstract-41 fs-5 text-white"
													></i>
												</span>
											</div>
											<!--end::Symbol-->

											<!--begin::Info-->
											<div
												class="text-white"
												bis_skin_checked="1"
											>
												<span
													class="fw-semibold d-block fs-8 opacity-75"
													>Services</span
												>
												<span class="fw-bold fs-7"
													>Unlimited</span
												>
											</div>
											<!--end::Info-->
										</div>
										<!--end::Item-->

										<!--begin::Item-->
										<div
											class="d-flex align-items-center"
											bis_skin_checked="1"
										>
											<!--begin::Symbol-->
											<div
												class="symbol symbol-30px symbol-circle me-3"
												bis_skin_checked="1"
											>
												<span
													class="symbol-label"
													style="background: #35c7ff"
												>
													<i
														class="ki-outline ki-abstract-26 fs-5 text-white"
													></i>
												</span>
											</div>
											<!--end::Symbol-->

											<!--begin::Info-->
											<div
												class="text-white"
												bis_skin_checked="1"
											>
												<span
													class="fw-semibold opacity-75 d-block fs-8"
													>Transactions</span
												>
												<span class="fw-bold fs-7"
													>Unlimited</span
												>
											</div>
											<!--end::Info-->
										</div>
										<!--end::Item-->
									</div>
									<!--end::Items-->

									<!--begin::Action-->
									<div
										class="d-flex flex-column flex-sm-row d-grid gap-2"
										bis_skin_checked="1"
									>
										<NuxtLink
											to="/sign-up"
											class="btn btn-success flex-shrink-0 me-lg-2"
											>Create Account</NuxtLink
										>
										<NuxtLink
											to="/sign-in"
											class="btn btn-primary flex-shrink-0"
											style="
												background: rgba(
													255,
													255,
													255,
													0.2
												);
											"
											>Sign In</NuxtLink
										>
									</div>
									<!--end::Action-->
								</div>
								<!--end::Col-->

								<!--begin::Col-->
								<div class="col-5 pt-10" bis_skin_checked="1">
									<!--end::Illustration-->
								</div>
								<!--end::Col-->
							</div>
							<!--end::Row-->
						</div>
						<!--end::Body-->
					</div>
				</div>
				<!--begin::About main-->
				<div class="d-flex flex-column flex-xl-row">
					<!--begin::Content-->
					<div class="card bg-body mb-8 mb-xl-0 pb-lg-18">
						<div class="card-body pb-lg-20">
							<!--begin::Blog-->
							<div class="mb-13">
								<!--begin::Title-->
								<div class="mb-9">
									<h3 class="fs-2qx fw-bold text-dark">
										About Premium Trust Group
									</h3>

									<span
										class="fs-5 fw-semibold text-gray-400"
									>
									</span>
								</div>
								<!--end::Title-->

								<!--begin::Wrapper-->
								<div class="overlay mb-11">
									<!--begin::Image-->
									<div
										class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-325px"
										style="
											background-image: url('https://africanmusings.com/wp-content/uploads/2022/12/12-Digital-Banking-Challenges-and-Opportunities-For-the-Banking-Industry-1.png');
										"
									></div>
									<!--end::Image-->

									<!--begin::Links-->
									<div
										class="overlay-layer card-rounded bg-dark bg-opacity-25"
									>
										<NuxtLink
											to="contact-us"
											class="btn btn-primary"
											>Contact Us</NuxtLink
										>
										<NuxtLink
											to="sign-up"
											class="btn btn-light-primary ms-3"
											>Join Us</NuxtLink
										>
									</div>
									<!--end::Links-->
								</div>
								<!--end::Wrapper-->

								<!--begin::Section-->
								<div
									class="fs-5 fw-semibold text-gray-600 mt-4"
								>
									<!--begin::Text-->
									<p class="mb-8">
										We offer a wide range of bank accounts
										for your banking needs. Need to deposit
										a check? Send money to a friend? Pay
										your bills on time? Explore additional
										account solutions? Our secure digital
										banking tools make managing your money
										fast and easy. Bank online, it's all at
										your fingertips – right here, right now.

										<NuxtLink
											to="sign-up"
											class="link-primary pe-1"
											>Sign up</NuxtLink
										>

										(yes, create account in seconds)
									</p>
									<!--end::Text-->
								</div>
								<!--end::Section-->
							</div>
							<!--end::Blog-->

							<!--begin::Team-->
							<div class="m-0">
								<!--begin::Heading-->
								<div class="mb-9">
									<!--begin::Title-->
									<h1 class="fw-bold text-dark mb-3">
										Our services
									</h1>
									<!--begin::Title-->

									<!--begin::Description-->
									<span class="fs-5 fw-semibold text-muted">
										Make financial transactions much easier
									</span>
									<!--begin::Description-->
								</div>
								<!--end::Heading-->

								<!--begin::Members-->
								<div class="row row-cols-lg-2 g-5">
									<div class="col">
										<div
											class="card h-md-100"
											dir="ltr"
											bis_skin_checked="1"
										>
											<!--begin::Body-->
											<div
												class="card-body d-flex flex-column flex-center"
												bis_skin_checked="1"
											>
												<!--begin::Heading-->
												<div
													class="mb-2"
													bis_skin_checked="1"
												>
													<!--begin::Title-->
													<h1
														class="fw-semibold text-gray-800 text-center lh-lg"
													>
														<span class="fw-bolder">
															Online Banking
														</span>
													</h1>
													<!--end::Title-->

													<!--begin::Illustration-->
													<div
														class="py-10 text-center"
														bis_skin_checked="1"
													>
														<img
															src="https://media.istockphoto.com/id/1351373355/vector/online-banking-showing-on-mobile-phone.jpg?s=612x612&w=0&k=20&c=xTd-bloxdTzpZEvX_cc8xQRCvR9ExbzofSizT6GSpng="
															class="theme-light-show w-200px"
															alt=""
														/>
														<img
															src="/assets/media/svg/illustrations/easy/2-dark.svg"
															class="theme-dark-show w-200px"
															alt=""
														/>
													</div>
													<!--end::Illustration-->
												</div>
												<!--end::Heading-->

												<!--begin::Links-->
												<div
													class="text-center mb-1"
													bis_skin_checked="1"
												>
													<!--begin::Link-->
													<NuxtLink
														to="sign-in"
														class="btn btn-sm btn-primary me-2"
													>
														Try Now
													</NuxtLink>
													<!--end::Link-->

													<!--begin::Link-->
													<a
														class="btn btn-sm btn-light"
														role="button"
													>
														Learn More
													</a>
													<!--end::Link-->
												</div>
												<!--end::Links-->
											</div>
											<!--end::Body-->
										</div>
									</div>

									<div class="col">
										<div
											class="card h-md-100"
											dir="ltr"
											bis_skin_checked="1"
										>
											<!--begin::Body-->
											<div
												class="card-body d-flex flex-column flex-center"
												bis_skin_checked="1"
											>
												<!--begin::Heading-->
												<div
													class="mb-2"
													bis_skin_checked="1"
												>
													<!--begin::Title-->
													<h1
														class="fw-semibold text-gray-800 text-center lh-lg"
													>
														<span class="fw-bolder">
															Current Account
														</span>
													</h1>
													<!--end::Title-->

													<!--begin::Illustration-->
													<div
														class="py-10 text-center"
														bis_skin_checked="1"
													>
														<img
															src="/assets/media/svg/illustrations/easy/2.svg"
															class="theme-light-show w-200px"
															alt=""
														/>
														<img
															src="/assets/media/svg/illustrations/easy/2-dark.svg"
															class="theme-dark-show w-200px"
															alt=""
														/>
													</div>
													<!--end::Illustration-->
												</div>
												<!--end::Heading-->

												<!--begin::Links-->
												<div
													class="text-center mb-1"
													bis_skin_checked="1"
												>
													<!--begin::Link-->
													<NuxtLink
														to="sign-in"
														class="btn btn-sm btn-primary me-2"
													>
														Try Now
													</NuxtLink>
													<!--end::Link-->

													<!--begin::Link-->
													<a
														class="btn btn-sm btn-light"
														role="button"
													>
														Learn More
													</a>
													<!--end::Link-->
												</div>
												<!--end::Links-->
											</div>
											<!--end::Body-->
										</div>
									</div>

									<div class="col">
										<div
											class="card h-md-100"
											dir="ltr"
											bis_skin_checked="1"
										>
											<!--begin::Body-->
											<div
												class="card-body d-flex flex-column flex-center"
												bis_skin_checked="1"
											>
												<!--begin::Heading-->
												<div
													class="mb-2"
													bis_skin_checked="1"
												>
													<!--begin::Title-->
													<h1
														class="fw-semibold text-gray-800 text-center lh-lg"
													>
														<span class="fw-bolder">
															Money Transfer
														</span>
													</h1>
													<!--end::Title-->

													<!--begin::Illustration-->
													<div
														class="py-10 text-center"
														bis_skin_checked="1"
													>
														<img
															src="https://assets.materialup.com/uploads/6af2ebb0-dfb9-4dd1-bcdc-0ce058646682/preview.jpg"
															class="theme-light-show w-200px"
															alt=""
														/>
														<img
															src="/assets/media/svg/illustrations/easy/2-dark.svg"
															class="theme-dark-show w-200px"
															alt=""
														/>
													</div>
													<!--end::Illustration-->
												</div>
												<!--end::Heading-->

												<!--begin::Links-->
												<div
													class="text-center mb-1"
													bis_skin_checked="1"
												>
													<!--begin::Link-->
													<NuxtLink
														to="sign-in"
														class="btn btn-sm btn-primary me-2"
													>
														Try Now
													</NuxtLink>
													<!--end::Link-->

													<!--begin::Link-->
													<a
														class="btn btn-sm btn-light"
														role="button"
													>
														Learn More
													</a>
													<!--end::Link-->
												</div>
												<!--end::Links-->
											</div>
											<!--end::Body-->
										</div>
									</div>
								</div>
								<!--end::Members-->
							</div>
							<!--end::Team-->

							<!--begin::Post-->
							<div class="row align-items-center mb-10 mt-6">
								<!--begin::Wrapper-->
								<div class="col-lg-7">
									<!--begin::Content-->
									<div
										class="mb-5 position-relative z-index-3"
									>
										<!--begin::Wrapper-->
										<div class="mb-6">
											<!--begin::Title-->
											<h1
												class="fw-bold text-gray-900 fw-bold lh-base"
											>
												Business Growth
											</h1>
											<!--end::Title-->
										</div>
										<!--end::Wrapper-->

										<!--begin::Text-->
										<span
											class="text-gray-700 d-block fw-semibold fs-4 pb-4 lh-lg"
										>
											A business strategy is the means by
											which it sets out to achieve its
											desired ends. You have ideas, goals,
											and dreams. We have a culturally
											diverse, forward thinking team
											looking for talent like you and make
											your dream come true.
										</span>
										<!--end::Text-->
									</div>
									<!--end::Content-->

									<!--begin::Item-->
									<div
										class="d-flex position-relative z-index-3"
									>
										<!--begin::Item-->
										<div class="me-lg-19 me-7">
											<div
												class="text-dark fw-semibold fs-1"
											>
												<span
													class="m-0"
													data-kt-countup="true"
													data-kt-countup-value="100"
													>0</span
												>
												%
											</div>

											<span
												class="text-gray-700 d-block fw-semibold fs-4"
												>Satisfication</span
											>
										</div>
										<!--end::Item-->

										<!--begin::Item-->
										<div class="me-lg-19 me-7">
											<div
												class="text-dark fw-semibold fs-1"
											>
												<span
													class="m-0"
													data-kt-countup="true"
													data-kt-countup-value="124"
													>0</span
												>
												K
											</div>

											<span
												class="text-gray-700 d-block fw-semibold fs-4"
												>Customers</span
											>
										</div>
										<!--end::Item-->

										<!--begin::Item-->
										<div class="me-lg-19 me-7">
											<div
												class="text-dark fw-semibold fs-1"
											>
												<span
													class="m-0"
													data-kt-countup="true"
													data-kt-countup-value="24"
													data-kt-countup-prefix="$"
													>0</span
												>
												K
											</div>

											<span
												class="text-gray-700 d-block fw-semibold fs-4"
												>Transactions</span
											>
										</div>
										<!--end::Item-->
									</div>
									<!--end::Item-->
								</div>
								<!--end::Wrapper-->

								<!--begin::Item-->
								<div class="col-lg-5">
									<!--begin::Image-->
									<img
										src="/assets/media/svg/illustrations/easy/4.svg"
										class="w-175px mb-10"
										alt=""
									/>
									<!--end::Image-->

									<!--begin::Action-->
									<div class="ps-13"></div>
									<!--end::Action-->
								</div>
								<!--end::Item-->
							</div>
							<!--end::Post-->

							<!--begin::Social links-->
							<div class="card border-0 bg-light text-center">
								<!--begin::Body-->
								<div class="card-body py-8">
									<!--begin::Icon-->
									<a href="#" class="mx-4">
										<img
											src="/assets/media/svg/brand-logos/facebook-4.svg"
											class="h-30px my-2"
											alt=""
										/>
									</a>
									<!--end::Icon-->
									<!--begin::Icon-->
									<a href="#" class="mx-4">
										<img
											src="/assets/media/svg/brand-logos/instagram-2016.svg"
											class="h-30px my-2"
											alt=""
										/>
									</a>
									<!--end::Icon-->

									<!--end::Icon-->
									<!--begin::Icon-->

									<!--end::Icon-->
									<!--begin::Icon-->
									<a href="#" class="mx-4">
										<img
											src="/assets/media/svg/brand-logos/twitter.svg"
											class="h-30px my-2"
											alt=""
										/>
									</a>
									<!--end::Icon-->

									<!--end::Icon-->
								</div>
								<!--end::Body-->
							</div>
							<!--end::Social links-->
						</div>
					</div>
					<!--end::Content-->

					<!--begin::Sidebar-->
					<div class="flex-column flex-lg-row-auto w-100 w-xl-350px ms-xl-5">
						<div class="card card-flush mb-6" bis_skin_checked="1">
							<!--begin::Body-->
							<div class="card-body" bis_skin_checked="1">
								<!--begin::Stats-->
								<div
									class="position-relative"
									bis_skin_checked="1"
								>
									<!--begin::Row-->
									<div
										class="row g-3 g-lg-6"
										bis_skin_checked="1"
									>
										<!--begin::Col-->
										<div class="col-6" bis_skin_checked="1">
											<!--begin::Items-->
											<div
												class="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5"
												bis_skin_checked="1"
											>
												<!--begin::Symbol-->
												<div
													class="symbol symbol-30px me-5 mb-8"
													bis_skin_checked="1"
												>
													<span class="symbol-label">
														<i
															class="ki-outline ki-flask fs-1 text-primary"
														></i>
													</span>
												</div>
												<!--end::Symbol-->

												<!--begin::Stats-->
												<div
													class="m-0"
													bis_skin_checked="1"
												>
													<!--begin::Number-->
													<span
														class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1"
														>100%</span
													>
													<!--end::Number-->

													<!--begin::Desc-->
													<span
														class="text-gray-500 fw-semibold fs-6"
														>Balanced
														Investments</span
													>
													<!--end::Desc-->
												</div>
												<!--end::Stats-->
											</div>
											<!--end::Items-->
										</div>
										<!--end::Col-->
										<!--begin::Col-->
										<div class="col-6" bis_skin_checked="1">
											<!--begin::Items-->
											<div
												class="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5"
												bis_skin_checked="1"
											>
												<!--begin::Symbol-->
												<div
													class="symbol symbol-30px me-5 mb-8"
													bis_skin_checked="1"
												>
													<span class="symbol-label">
														<i
															class="ki-outline ki-bank fs-1 text-primary"
														></i>
													</span>
												</div>
												<!--end::Symbol-->

												<!--begin::Stats-->
												<div
													class="m-0"
													bis_skin_checked="1"
												>
													<!--begin::Number-->
													<span
														class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1"
														>100%</span
													>
													<!--end::Number-->

													<!--begin::Desc-->
													<span
														class="text-gray-500 fw-semibold fs-6"
														>Accessible</span
													>
													<!--end::Desc-->
												</div>
												<!--end::Stats-->
											</div>
											<!--end::Items-->
										</div>
										<!--end::Col-->
										<!--begin::Col-->
										<div class="col-6" bis_skin_checked="1">
											<!--begin::Items-->
											<div
												class="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5"
												bis_skin_checked="1"
											>
												<!--begin::Symbol-->
												<div
													class="symbol symbol-30px me-5 mb-8"
													bis_skin_checked="1"
												>
													<span class="symbol-label">
														<i
															class="ki-outline ki-award fs-1 text-primary"
														></i>
													</span>
												</div>
												<!--end::Symbol-->

												<!--begin::Stats-->
												<div
													class="m-0"
													bis_skin_checked="1"
												>
													<!--begin::Number-->
													<span
														class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1"
														>4.8</span
													>
													<!--end::Number-->

													<!--begin::Desc-->
													<span
														class="text-gray-500 fw-semibold fs-6"
														>Avg. Score</span
													>
													<!--end::Desc-->
												</div>
												<!--end::Stats-->
											</div>
											<!--end::Items-->
										</div>
										<!--end::Col-->
										<!--begin::Col-->
										<div class="col-6" bis_skin_checked="1">
											<!--begin::Items-->
											<div
												class="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5"
												bis_skin_checked="1"
											>
												<!--begin::Symbol-->
												<div
													class="symbol symbol-30px me-5 mb-8"
													bis_skin_checked="1"
												>
													<span class="symbol-label">
														<i
															class="ki-outline ki-timer fs-1 text-primary"
														></i>
													</span>
												</div>
												<!--end::Symbol-->

												<!--begin::Stats-->
												<div
													class="m-0"
													bis_skin_checked="1"
												>
													<!--begin::Number-->
													<span
														class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1"
														>24/7</span
													>
													<!--end::Number-->

													<!--begin::Desc-->
													<span
														class="text-gray-500 fw-semibold fs-6"
														>Availability</span
													>
													<!--end::Desc-->
												</div>
												<!--end::Stats-->
											</div>
											<!--end::Items-->
										</div>
										<!--end::Col-->
									</div>
									<!--end::Row-->
								</div>
								<!--end::Stats-->
							</div>
							<!--end::Body-->
						</div>

						<!--begin::Connected-->
						<div class="card card-flush bg-body">
							<!--begin::Card header-->
							<div class="card-header">
								<h4
									class="card-title fw-bold text-text-gray-800 fs-2"
								>
									Stay Connected
								</h4>
							</div>
							<!--end::Card header-->

							<!--begin::Card body-->
							<div class="card-body pt-2">
								<!--begin::Items-->
								<div class="mb-6">
									<!--begin::Link-->
									<a href="#" class="mb-6">
										<img
											src="/assets/media/svg/brand-logos/facebook-4.svg"
											class="h-20px me-2"
											alt=""
										/>

										<span
											class="text-gray-700 text-hover-primary fs-5 mb-6"
											>Facebook</span
										>
									</a>
									<!--end::Link-->
								</div>
								<!--begin::Items-->
								<!--begin::Items-->

								<!--begin::Items-->
								<!--begin::Items-->
								<div class="mb-6">
									<!--begin::Link-->
									<a href="#" class="mb-6">
										<img
											src="/assets/media/svg/brand-logos/twitter.svg"
											class="h-20px me-2"
											alt=""
										/>

										<span
											class="text-gray-700 text-hover-primary fs-5 mb-6"
											>Twitter</span
										>
									</a>
									<!--end::Link-->
								</div>
								<!--begin::Items-->
								<!--begin::Items-->

								<!--begin::Items-->
								<!--begin::Items-->
								<div class="">
									<!--begin::Link-->
									<a href="#" class="mb-6">
										<img
											src="/assets/media/svg/brand-logos/instagram-2016.svg"
											class="h-20px me-2"
											alt=""
										/>

										<span
											class="text-gray-700 text-hover-primary fs-5 mb-6"
											>Instagram</span
										>
									</a>
									<!--end::Link-->
								</div>
								<!--begin::Items-->
							</div>
							<!--end::Card body-->
						</div>
						<!--end::Connected-->
					</div>
					<!--end::Sidebar-->
				</div>
				<!--end::About main-->
			</div>
			<!--end::Content container-->
		</div>
		<!--end::Content-->
	</div>
</template>
