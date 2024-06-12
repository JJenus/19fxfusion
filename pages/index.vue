<script setup>
	const CONFIG = useRuntimeConfig().public;

	useSeoMeta({
		title: `${CONFIG.APP}`,
	});
</script>

<template>
	<div class="container-fluid">
		<!--begin::Card-->
		<div class="card border-0 bg-transparent">
			<!--begin::Card body-->
			<div class="card-body p-0">
				<div
					class="d-flex flex-wrap justify-content-between align-items-center"
				>
					<div class="bg-transparent">
						<div class="mw-400px ms-md-4i ms-lg-6">
							<h1 class="display-2 text-capitalized">
								<span class="me-2"
									>TRADE THE MARKETS WITH THE</span
								>
								<span class="text-danger"
									>BEST TRADING CONDITIONS</span
								>
							</h1>
						</div>
					</div>
					<div class="w-lg-50">
						<div class="mx-n16 me-lg-n20 rounded me-lg-0">
							<SwiperMainSlide />
						</div>
					</div>
				</div>

				<!-- WHAT TO EXPECT -->
				<div class="row my-1 row-cols-1 row-cols-lg-3 g-10">
					<div class="col">
						<div class="card card-flush mb-6" bis_skin_checked="1">
							<!--begin::Body-->
							<div class="card-body" bis_skin_checked="1">
								<div
									class="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5 w-100 h-250px"
									bis_skin_checked="1"
								>
									<!--begin::Symbol-->
									<div
										class="symbol symbol-100px me-5 mb-8"
										bis_skin_checked="1"
									>
										<span
											class="symbol-label position-relative"
											><i
												style="font-size: 10rem"
												class="ki-outline ki-compass text-primary position-relative"
											></i
										></span>
									</div>
									<!--end::Symbol--><!--begin::Stats-->
									<div class="m-0" bis_skin_checked="1">
										<!--begin::Number--><span
											class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1"
											>Worldwide</span
										><!--end::Number--><!--begin::Desc-->
										<span
											class="text-gray-500 fw-semibold fs-6"
										>
											Trade anywhere, anytime with our
											worldwide platform. Access multiple
											markets and currencies, all from a
											user-friendly, multilingual
											interface. </span
										><!--end::Desc-->
									</div>
									<!--end::Stats-->
								</div>
								<!--end::Items-->
								<!--end::Row-->
								<!--end::Stats-->
							</div>
							<!--end::Body-->
						</div>
					</div>

					<div class="col">
						<div class="card card-flush mb-6" bis_skin_checked="1">
							<!--begin::Body-->
							<div class="card-body" bis_skin_checked="1">
								<div
									class="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5 w-100 h-250px"
									bis_skin_checked="1"
								>
									<!--begin::Symbol-->
									<div
										class="symbol symbol-100px me-5 mb-8"
										bis_skin_checked="1"
									>
										<span
											class="symbol-label position-relative"
											><i
												style="font-size: 10rem"
												class="ki-solid ki-lock-2 text-primary position-relative"
											></i
										></span>
									</div>
									<!--end::Symbol--><!--begin::Stats-->
									<div class="m-0" bis_skin_checked="1">
										<!--begin::Number--><span
											class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1"
											>Secure</span
										><!--end::Number--><!--begin::Desc-->
										<span
											class="text-gray-500 fw-semibold fs-6"
										>
											our security is our priority.
											Benefit from top-tier encryption,
											two-factor authentication, and
											robust fraud prevention, all within
											a regulated and trusted framework. </span
										><!--end::Desc-->
									</div>
									<!--end::Stats-->
								</div>
								<!--end::Items-->
								<!--end::Row-->
								<!--end::Stats-->
							</div>
							<!--end::Body-->
						</div>
					</div>

					<div class="col">
						<div class="card card-flush mb-6" bis_skin_checked="1">
							<!--begin::Body-->
							<div class="card-body" bis_skin_checked="1">
								<div
									class="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5 w-100 h-250px"
									bis_skin_checked="1"
								>
									<!--begin::Symbol-->
									<div
										class="symbol symbol-100px me-5 mb-8"
										bis_skin_checked="1"
									>
										<span
											class="symbol-label position-relative"
											><i
												style="font-size: 10rem"
												class="ki-outline ki-award text-primary position-relative"
											></i
										></span>
									</div>
									<!--end::Symbol--><!--begin::Stats-->
									<div class="m-0" bis_skin_checked="1">
										<!--begin::Number--><span
											class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1"
											>Awarded</span
										><!--end::Number--><!--begin::Desc-->
										<span
											class="text-gray-500 fw-semibold fs-6"
										>
											Join the best. Our platform is
											celebrated for innovation,
											exceptional customer service, and
											reliable performance by industry
											leaders and financial institutions. </span
										><!--end::Desc-->
									</div>
									<!--end::Stats-->
								</div>
								<!--end::Items-->
								<!--end::Row-->
								<!--end::Stats-->
							</div>
							<!--end::Body-->
						</div>
					</div>
				</div>

				<div class="row row-cols-1 row-cols-lg-3 mb-5 d-none">
					<div class="col rounded-3">
						<TVMiniChart
							:options="{
								width: '100%',
								height: 200,
								colorTheme: 'dark',
								symbol: 'FX:EURUSD',
								locale: 'en',
								dateRange: '12M',
								isTransparent: false,
								autosize: false,
								largeChartUrl: '',
							}"
						/>
					</div>
					<div class="col rounded-3">
						<TVSingleTicker
							:options="{
								colorTheme: 'dark',
								symbol: 'FX:USDJPY',
								width: '100%',
								hight: 1300,
								isTransparent: false,
								locale: 'en',
							}"
						/>
					</div>
				</div>

				<div class="mb-5">
					<TVScreener
						:options="{
							width: '100%',
							height: 450,
							colorTheme: 'dark',
							defaultColumn: 'overview',
							defaultScreen: 'general',
							market: 'forex',
							showToolbar: true,
							locale: 'en',
						}"
					/>
				</div>

				<div
					class="card border-transparent my-12"
					data-bs-theme="light"
					style="background-color: #1c325e"
				>
					<!--begin::Body-->
					<div class="card-body d-flex ps-xl-15">
						<!--begin::Wrapper-->
						<div class="m-0">
							<!--begin::Title-->
							<div
								class="position-relative mb-5 fs-1 z-index-2 fw-bold text-white mb-7"
							>
								<span class="me-2">
									We here for
									<span
										class="position-relative d-inline-block text-success"
									>
										<a
											role="button"
											class="text-success opacity-75-hover"
										>
											you </a
										>!

										<!--begin::Separator-->
										<span
											class="position-absolute opacity-50 bottom-0 start-0 border-4 border-success border-bottom w-100"
										></span>
										<!--end::Separator-->
									</span>
								</span>
								<br />

								<span class="fs-3x"> What to expect </span>
							</div>
							<!--end::Title-->

							<!--begin::Action-->
							<div
								class="mb-3 position-relative mt-8"
								style="z-index: 2"
							>
								<a
									role="button"
									class="btn btn-success fw-semibold me-2"
									data-bs-toggle="modal"
									data-bs-target="#kt_modal_login"
									@click="useAuth().openAuthModal('register')"
								>
									Created Account
								</a>

								<a
									data-bs-toggle="modal"
									data-bs-target="#kt_modal_login"
									@click="useAuth().openAuthModal('login')"
									role="button"
									class="btn btn-color-white bg-white bg-opacity-15 bg-hover-opacity-25 fw-semibold"
								>
									Sign in
								</a>
							</div>
							<!--begin::Action-->
						</div>
						<!--begin::Wrapper-->

						<!--begin::Illustration-->
						<img
							src="/assets/media/illustrations/sigma-1/17-dark.png"
							class="position-absolute me-3 bottom-0 end-0 h-200px"
							style="z-index: 1"
							alt=""
						/>
						<!--end::Illustration-->
					</div>
					<!--end::Body-->
				</div>

				<!-- SEAMLESS TRANSACTIONS -->
				<div class="card card-flush h-xl-100 mb-5">
					<!--begin::Body-->
					<div class="card-body py-9">
						<!--begin::Row-->
						<div class="row gx-9 h-100">
							<!--begin::Col-->
							<div class="col-sm-6 mb-10 mb-sm-0">
								<!--begin::Overlay-->
								<a class="d-block overlay h-100" role="button">
									<!--begin::Image-->
									<div
										class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-200px h-100"
										style="
											background-image: url('https://t3.ftcdn.net/jpg/03/30/78/08/240_F_330780882_gUmEzkzPLQebQJclnvXxa0Bt1qE83acZ.jpg');
										"
									></div>
									<!--end::Image-->

									<!--begin::Action-->
									<div
										class="overlay-layer card-rounded bg-dark bg-opacity-25"
									>
										<NFTexLogo :classes="'h-30px'" />
									</div>
									<!--end::Action-->
								</a>
								<!--end::Overlay-->
							</div>
							<!--end::Col-->

							<!--begin::Col-->
							<div class="col-sm-6 card border-0">
								<!--begin::Wrapper-->
								<div
									class="card-body d-flex flex-column justify-content-center h-lg-400px align-items-center"
								>
									<!--begin::Header-->
									<div class="mb-0">
										<!--begin::Title-->
										<div class="text-centeri mb-7 mb-lg-10">
											<i
												class="ki-duotone d-md-none ki-send text-success fs-2 order-1o me-2"
											>
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
											<a
												role="button"
												class="text-gray-800 text-hover-primary fs-3 fs-md-2x fw-bold"
												>Seamless Transactions</a
											>
										</div>
										<!--end::Title-->
									</div>
									<!--end::Header-->

									<div
										class="d-flex flex-column flex-md-row justify-content-between align-items-center"
									>
										<i
											class="ki-duotone d-none d-md-block ki-send text-success fs-5x order-1o me-5"
										>
											<span class="path1"></span>
											<span class="path2"></span>
										</i>
										<div>
											<span
												class="fw-bold text-gray-600i fs-4 pb-5"
												>{{ CONFIG.APP }} ensures that
												your transactions are smooth and
												effortless. With our intuitive
												interface and streamlined
												processes, sending money, paying
												bills, and managing your
												finances is quick and
												easy.4</span
											>
										</div>
									</div>
								</div>
								<!--end::Wrapper-->
							</div>
							<!--end::Col-->
						</div>
						<!--end::Row-->
					</div>
					<!--end::Body-->
				</div>

				<!-- Robost security -->

				<div class="card card-flush h-xl-100 mb-5">
					<!--begin::Body-->
					<div class="card-body py-9">
						<!--begin::Row-->
						<div class="row gx-9 h-100">
							<!--begin::Col-->
							<div
								class="col-sm-6 mb-10 mb-sm-0 order-1 order-lg-2"
							>
								<!--begin::Overlay-->
								<a class="d-block overlay h-100" role="button">
									<!--begin::Image-->
									<div
										class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-200px h-100"
										style="
											background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rockwellautomation.com%2Fcontent%2Fdam%2Frockwell-automation%2Fsites%2Fimages%2Fsimple-content%2Fblogs%2FTailor-cybersecurity-to-OT-environments.jpg&f=1&nofb=1&ipt=303a1f2385dfc3986e20aa3cfc0e1edcfb19f54e9df0ec6d9b801458dc80f68f&ipo=images');
										"
									></div>
									<!--end::Image-->

									<!--begin::Action-->
									<div
										class="overlay-layer card-rounded bg-dark bg-opacity-25"
									>
										<NFTexLogo :classes="'h-30px'" />
									</div>
									<!--end::Action-->
								</a>
								<!--end::Overlay-->
							</div>
							<!--end::Col-->

							<!--begin::Col-->
							<div
								class="col-sm-6 card border-0 order-2 order-lg-1"
							>
								<!--begin::Wrapper-->
								<div
									class="card-body d-flex flex-column justify-content-center h-lg-400px align-items-center"
								>
									<!--begin::Header-->
									<div class="mb-0">
										<!--begin::Title-->
										<div class="text-centeri mb-7 mb-lg-10">
											<i
												class="ki-solid d-md-none ki-lock-3 fs-2 text-danger me-2"
											>
											</i>

											<a
												role="button"
												class="text-gray-800 text-hover-primary fs-3 fs-md-2x fw-bold"
												>Robust Security Measures</a
											>
										</div>
										<!--end::Title-->
									</div>
									<!--end::Header-->

									<div
										class="d-flex flex-column flex-md-row justify-content-between align-items-center"
									>
										<i
											class="ki-duotone ki-lock-3 fs-5x text-danger me-5"
										>
											<span class="path1"></span>
											<span class="path2"></span>
											<span class="path3"></span>
										</i>
										<div>
											<span
												class="fw-bold text-gray-600i fs-4 pb-5"
												>our security is our top
												priority.
												{{ CONFIG.APP }} employs
												state-of-the-art encryption
												techniques and multi-factor
												authentication to safeguard your
												account and personal
												information. Rest assured, your
												data is protected against
												unauthorized access and cyber
												threats.
											</span>
										</div>
									</div>
								</div>
								<!--end::Wrapper-->
							</div>
							<!--end::Col-->
						</div>
						<!--end::Row-->
					</div>
					<!--end::Body-->
				</div>

				<!-- Hassle-Free Banking Experiences: -->
				<div class="card card-flush h-xl-100 mb-5">
					<!--begin::Body-->
					<div class="card-body py-9">
						<!--begin::Row-->
						<div class="row gx-9 h-100">
							<!--begin::Col-->
							<div class="col-sm-6 mb-10 mb-sm-0">
								<!--begin::Overlay-->
								<div
									class="d-block overlay h-100"
									role="button"
								>
									<!--begin::Image-->
									<div
										class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-200px h-100"
										style="
											background-image: url('/assets/media/banking/pl-img.png');
										"
									></div>
									<!--end::Image-->

									<!--begin::Action-->
									<div
										class="overlay-layer card-rounded bg-dark bg-opacity-25"
									>
										<NFTexLogo :classes="'h-30px'" />
									</div>
									<!--end::Action-->
								</div>
								<!--end::Overlay-->
							</div>
							<!--end::Col-->

							<!--begin::Col-->
							<div class="col-sm-6 card border-0">
								<!--begin::Wrapper-->
								<div
									class="card-body d-flex flex-column justify-content-center h-lg-300px align-items-center"
								>
									<!--begin::Header-->
									<div class="mb-0">
										<!--begin::Title-->
										<div class="text-centeri mb-7 mb-lg-10">
											<i
												class="ki-duotone ki-monitor-mobile fs-1 text-warning me-2 d-md-none"
											>
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
											<a
												role="button"
												class="text-gray-800 text-hover-primary fs-3 fs-md-2x fw-bold"
												>Hassle-Free Banking
											</a>
										</div>
										<!--end::Title-->
									</div>
									<!--end::Header-->

									<div
										class="d-flex flex-column flex-md-row justify-content-between align-items-center"
									>
										<i
											class="ki-duotone ki-monitor-mobile fs-5x text-warning me-5 d-none d-md-block"
										>
											<span class="path1"></span>
											<span class="path2"></span>
										</i>
										<div>
											<span
												class="fw-bold text-gray-600i fs-4 pb-5"
												>{{ CONFIG.APP }} ensures that
												your transactions are smooth and
												effortless. With our intuitive
												interface and streamlined
												processes, sending money, paying
												bills, and managing your
												finances is quick and
												easy.4</span
											>
										</div>
									</div>
								</div>
								<!--end::Wrapper-->
							</div>
							<!--end::Col-->
						</div>
						<!--end::Row-->
					</div>
					<!--end::Body-->
				</div>
			</div>
			<!--end::Card body-->
		</div>
		<!--end::Card-->
	</div>
</template>
