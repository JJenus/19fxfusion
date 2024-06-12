<script setup>
	const CONFIG = useRuntimeConfig().public;
	const currentPage = "About Us";
	useSeoMeta({
		title: `${CONFIG.APP} - ${currentPage}`,
	});
</script>

<template>
	<!--begin::About main-->
	<div class="d-flex flex-column flex-xl-row">
		<!--begin::Content-->
		<div class="card border-0 bg-transparent mb-8 mb-xl-0 pb-lg-18">
			<div class="card-body pb-lg-20">
				<!--begin::Blog-->
				<div class="mb-13">
					<!--begin::Title-->
					<div class="mb-9">
						<h3 class="fs-2qx fw-bold text-dark">
							{{ CONFIG.APP }}
						</h3>

						<span class="fs-5 fw-semibold text-gray-400"> </span>
					</div>
					<!--end::Title-->

					<!--begin::Wrapper-->
					<div class="overlay mb-11">
						<!--begin::Image-->
						<div
							class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-325px"
							style="
								background-image: url('/assets/media/auth/bg15.jpg');
							"
						></div>
						<!--end::Image-->

						<!--begin::Links-->
						<div
							class="overlay-layer card-rounded d-flex flex-column bg-dark bg-opacity-25"
						>
							<NFTexLogo :classes="'h-50px h-lg-100px mb-5'" />
							<NuxtLink to="/contact-us" class="btn btn-primary">
								Contact Us
							</NuxtLink>
						</div>
						<!--end::Links-->
					</div>
					<!--end::Wrapper-->

					<!--begin::Section-->
					<div class="fs-5 fw-semibold text-gray-600 mt-4">
						<!--begin::Text-->
						<p class="mb-8">
							At {{ CONFIG.APP }}, we're committed to
							revolutionizing the way you bank. Our team of
							experts has crafted innovative fintech solutions
							tailored to your needs. With a focus on security,
							simplicity, and convenience, we're dedicated to
							providing you with the best banking experience
							possible. Discover the {{ CONFIG.APP }} Difference
							Today!
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
						<h1 class="fw-bold text-dark mb-3">Our services</h1>
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
									<div class="mb-2" bis_skin_checked="1">
										<!--begin::Title-->
										<h1
											class="fw-semibold text-gray-800 text-center lh-lg"
										>
											<span class="fw-bolder">
												Transfer
											</span>
										</h1>
										<!--end::Title-->

										<!--begin::Illustration-->
										<div
											class="py-10 text-center"
											bis_skin_checked="1"
										>
											<i
												class="ki-duotone ki-arrow-right-left fs-5x text-success"
											>
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
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
										<button
											data-bs-toggle="modal"
											data-bs-target="#kt_modal_login"
											@click="
												useAuth().openAuthModal(
													'register'
												)
											"
											class="btn btn-sm btn-primary me-2"
										>
											Try Now
										</button>
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
									<div class="mb-2" bis_skin_checked="1">
										<!--begin::Title-->
										<h1
											class="fw-semibold text-gray-800 text-center lh-lg"
										>
											<span class="fw-bolder">
												Accept payments
											</span>
										</h1>
										<!--end::Title-->

										<!--begin::Illustration-->
										<div
											class="py-10 text-center"
											bis_skin_checked="1"
										>
											<i
												class="ki-duotone ki-color-swatch fs-5x text-warning"
											>
												<span class="path1"></span>
												<span class="path2"></span>
												<span class="path3"></span>
												<span class="path4"></span>
												<span class="path5"></span>
												<span class="path6"></span>
												<span class="path7"></span>
												<span class="path8"></span>
												<span class="path9"></span>
												<span class="path10"></span>
												<span class="path11"></span>
												<span class="path12"></span>
												<span class="path13"></span>
												<span class="path14"></span>
												<span class="path15"></span>
												<span class="path16"></span>
												<span class="path17"></span>
												<span class="path18"></span>
												<span class="path19"></span>
												<span class="path20"></span>
												<span class="path21"></span>
											</i>
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
										<button
											data-bs-toggle="modal"
											data-bs-target="#kt_modal_login"
											@click="
												useAuth().openAuthModal(
													'register'
												)
											"
											class="btn btn-sm btn-primary me-2"
										>
											Try Now
										</button>
										<!--end::Link-->

										<!--begin::Link-->

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
									<div class="mb-2" bis_skin_checked="1">
										<!--begin::Title-->
										<h1
											class="fw-semibold text-gray-800 text-center lh-lg"
										>
											<span class="fw-bolder">
												Request payment
											</span>
										</h1>
										<!--end::Title-->

										<!--begin::Illustration-->
										<div
											class="py-10 text-center"
											bis_skin_checked="1"
										>
											<!-- <i
												class="ki-duotone ki-fasten fs-5x text-danger"
											>
												<span class="path1"></span>
												<span class="path2"></span>
											</i> -->
											<i
												class="fa-solid fa-hand-holding-dollar fs-5x text-danger"
											></i>
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
										<button
											data-bs-toggle="modal"
											data-bs-target="#kt_modal_login"
											@click="
												useAuth().openAuthModal(
													'register'
												)
											"
											class="btn btn-sm btn-primary me-2"
										>
											Try Now
										</button>
										<!--end::Link-->

										<!--begin::Link-->
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
									<div class="mb-2" bis_skin_checked="1">
										<!--begin::Title-->
										<h1
											class="fw-semibold text-gray-800 text-center lh-lg"
										>
											<span class="fw-bolder">
												Manage Your finances
											</span>
										</h1>
										<!--end::Title-->

										<!--begin::Illustration-->
										<div
											class="py-10 text-center"
											bis_skin_checked="1"
										>
											<i
												class="ki-duotone ki-data fs-5x text-info"
											>
												<span class="path1"></span>
												<span class="path2"></span>
												<span class="path3"></span>
												<span class="path4"></span>
												<span class="path5"></span>
											</i>
										</div>
										<!--end::Illustration-->
									</div>
									<!--end::Heading-->
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
						<div class="mb-5 position-relative z-index-3">
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
								A business strategy is the means by which it
								sets out to achieve its desired ends. You have
								ideas, goals, and dreams. We have a culturally
								diverse, forward thinking team looking for
								talent like you and make your dream come true.
							</span>
							<!--end::Text-->
						</div>
						<!--end::Content-->

						<!--begin::Item-->
						<div class="d-flex position-relative z-index-3">
							<!--begin::Item-->
							<div class="me-lg-19 me-7">
								<div class="text-dark fw-semibold fs-1">
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
								<div class="text-dark fw-semibold fs-1">
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
								<div class="text-dark fw-semibold fs-1">
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
					<div class="position-relative" bis_skin_checked="1">
						<!--begin::Row-->
						<div class="row g-3 g-lg-6" bis_skin_checked="1">
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
									<div class="m-0" bis_skin_checked="1">
										<!--begin::Number-->
										<span
											class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1"
											>100%</span
										>
										<!--end::Number-->

										<!--begin::Desc-->
										<span
											class="text-gray-500 fw-semibold fs-6"
											>Balanced Investments</span
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
									<div class="m-0" bis_skin_checked="1">
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
									<div class="m-0" bis_skin_checked="1">
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
									<div class="m-0" bis_skin_checked="1">
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
					<h4 class="card-title fw-bold text-text-gray-800 fs-2">
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
</template>
