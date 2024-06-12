<script setup>
	const config = useRuntimeConfig().public;
	const currentPage = "Contact Us";
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
					Contact Us
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
					<li class="breadcrumb-item text-muted">Request</li>
					<!--end::Item-->
					<!--begin::Item-->
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-400 w-5px h-2px"></span>
					</li>
					<!--end::Item-->

					<!--begin::Item-->
					<li class="breadcrumb-item text-muted">Let's speak</li>
					<!--end::Item-->
				</ul>
				<!--end::Breadcrumb-->
			</div>
			<!--end::Page title-->

			<!--begin::Sitemap main-->
			<div class="d-flex flex-column flex-xl-row">
				<!--begin::Content-->
				<div class="card bg-body flex-row-fluid mb-9 mb-xl-0 me-xl-9">
					<div class="card-body">
						<!--begin::Form-->
						<form
							action="#"
							class="form mb-15"
							method="post"
							id="kt_contact_form"
						>
							<!--begin::Title-->
							<div class="d-flex flex-column mb-9 fv-row">
								<h1 class="fw-bold text-dark mb-7">
									Submit a Request
								</h1>

								<span
									class="fs-4 fw-semibold text-gray-600 d-block"
								>
									Have a question about your account? Looking
									for a specific product?
								</span>
							</div>
							<!--end::Title-->

							<!--begin::Input group-->
							<div class="row mb-5">
								<!--begin::Col-->
								<div class="col-md-6 fv-row">
									<!--begin::Label-->
									<label class="fs-5 fw-semibold mb-2"
										>Name</label
									>
									<!--end::Label-->

									<!--begin::Input-->
									<input
										type="text"
										class="form-control form-control-solid"
										placeholder=""
										name="name"
									/>
									<!--end::Input-->
								</div>
								<!--end::Col-->

								<!--begin::Col-->
								<div class="col-md-6 fv-row">
									<!--end::Label-->
									<label class="fs-5 fw-semibold mb-2"
										>Email</label
									>
									<!--end::Label-->

									<!--end::Input-->
									<input
										type="text"
										class="form-control form-control-solid"
										placeholder=""
										name="email"
									/>
									<!--end::Input-->
								</div>
								<!--end::Col-->
							</div>
							<!--end::Input group-->

							<!--begin::Input group-->
							<div class="d-flex flex-column mb-5 fv-row">
								<!--begin::Label-->
								<label class="fs-5 fw-semibold mb-2"
									>Subject</label
								>
								<!--end::Label-->

								<!--begin::Input-->
								<input
									class="form-control form-control-solid"
									placeholder=""
									name="subject"
								/>
								<!--end::Input-->
							</div>
							<!--end::Input group-->

							<!--begin::Input group-->
							<div class="d-flex flex-column mb-10 fv-row">
								<label class="fs-6 fw-semibold mb-2"
									>Message</label
								>

								<textarea
									class="form-control form-control-solid"
									rows="6"
									name="message"
									placeholder=""
								>
								</textarea>
							</div>
							<!--end::Input group-->

							<!--begin::Submit-->
							<button
								type="submit"
								class="btn btn-primary"
								id="kt_contact_submit_button"
							>
								<!--begin::Indicator label-->
								<span class="indicator-label">
									Send Feedback</span
								>
								<!--end::Indicator label-->

								<!--begin::Indicator progress-->
								<span class="indicator-progress">
									Please wait...
									<span
										class="spinner-border spinner-border-sm align-middle ms-2"
									></span>
								</span>
								<!--end::Indicator progress-->
							</button>
							<!--end::Submit-->
						</form>
						<!--end::Form-->

						<!--begin::Map-->
						<div
							id="kt_contact_map"
							class="w-100 rounded mb-2 mb-lg-0 mt-2"
							style="height: 486px"
						></div>
						<!--end::Map-->
					</div>
				</div>
				<!--end::Content-->

				<!--begin::Sidebar-->
				<div class="flex-column flex-lg-row-auto w-100 w-xl-350px">
					<!--begin::Support-->
					<div class="card card-flush bg-body mb-9">
						<!--begin::Card header-->
						<div class="card-header">
							<h2 class="card-title fs-2 fw-bold text-dark">
								Let’s Speak
							</h2>

							<div class="card-toolbar">
								<button
									type="button"
									class="btn btn-sm btn-icon btn-color-primary"
								>
									<i class="ki-outline ki-phone fs-1"></i>
								</button>
							</div>
						</div>
						<!--end::Card header-->

						<!--begin::Card body-->
						<div class="card-body pt-2">
							<!--begin::Items-->
							<div class="mb-5">
								<!--begin::Item-->
								<div class="d-flex flex-stack mb-5">
									<span class="text-gray-400 fs-4 fw-bold"
										>WhatsApp</span
									>

									<span class="text-gray-700 fs-4 fw-bold">
										+1 (228) 888-8515
									</span>
								</div>
								<!--end::Item-->
								<!--begin::Item-->
								<div class="d-flex flex-stack mb-5 d-none">
									<span class="text-gray-400 fs-4 fw-bold"
										>Amsterdam</span
									>

									<span class="text-gray-700 fs-4 fw-bold"
										>(671) 555-0110</span
									>
								</div>
								<!--end::Item-->

								<!--end::Item-->
							</div>
							<!--end::Items-->

							<!--begin::Text-->
							<span
								class="text-gray-800 fs-6 fw-semibold d-block mb-9"
							>
								We're available anytime you need us. <br />
								Contact us on any of these channels.
							</span>
							<!--end::Text-->

							<!--begin::Info-->
							<div class="d-flex flex-stack mb-6">
								<h2 class="card-title fs-2 fw-bold text-dark">
									Let’s Read
								</h2>

								<div class="card-toolbar">
									<button
										type="button"
										class="btn btn-sm btn-icon btn-color-primary"
									>
										<i class="ki-outline ki-sms fs-2hx"></i>
									</button>
								</div>
							</div>
							<!--end::Info-->

							<!--begin::Items-->
							<div class="mb-4">
								<!--begin::Item-->
								<div class="d-flex flex-stack">
									<span class="text-gray-400 fs-4 fw-bold"
										>Support</span
									>

									<a
										href="mailto:support@elisafinance.com"
										class="text-gray-700 text-hover-primary fs-4 fw-bold"
										>support@elisafinance.com</a
									>
								</div>
								<!--end::Item-->
							</div>
							<!--end::Items-->
						</div>
						<!--end::Card body-->
					</div>
					<!--end::Support-->

					<!--begin::Connected-->
					<div class="card card-flush bg-body">
						<!--begin::Card header-->
						<div class="card-header">
							<h4 class="card-title fw-bold text-">
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
							<div class="mb-6">
								<!--begin::Link-->
								<a href="#" class="mb-6">
									<img
										src="/assets/media/svg/brand-logos/github.svg"
										class="h-20px me-2"
										alt=""
									/>

									<span
										class="text-gray-700 text-hover-primary fs-5 mb-6"
										>Github</span
									>
								</a>
								<!--end::Link-->
							</div>
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
							<div class="mb-6">
								<!--begin::Link-->
								<a href="#" class="mb-6">
									<img
										src="/assets/media/svg/brand-logos/dribbble-icon-1.svg"
										class="h-20px me-2"
										alt=""
									/>

									<span
										class="text-gray-700 text-hover-primary fs-5 mb-6"
										>Dribbble</span
									>
								</a>
								<!--end::Link-->
							</div>
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
			<!--end::Sitemap main-->
		</div>
		<!--end::Content container-->
	</div>
	<!--end::Content-->
</template>
