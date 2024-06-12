<script setup>
	const config = useRuntimeConfig().public;
	const currentPage = "Our Banking";
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
					Banking With Ease
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
					<li class="breadcrumb-item text-muted">
						Corporate Banking
					</li>
					<!--end::Item-->
					<!--begin::Item-->
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-400 w-5px h-2px"></span>
					</li>
					<!--end::Item-->

					<!--begin::Item-->
					<li class="breadcrumb-item text-muted">
						Corporate Banking
					</li>
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
									Personal Banking
								</h1>
								<div class="d-flex flex-stack mb-5">
									<span class="text-gray-400 fs-4 fw-bold"
										>Accessible To All</span
									>
								</div>
								<span
									class="fs-4 fw-semibold text-gray-600 d-block"
								>
									We are constantly
									thinking about you! We create accounts
									tailored to suit your individual needs as a
									valued customer and are constantly
									innovating, bringing new products and
									services to help make banking and life
									easier for you.
								</span>
							</div>
							<!--end::Title-->
						</form>
						<!--end::Form-->
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
								Corporate Banking
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
							<div class="d-flex flex-stack mb-5">
								<span class="text-gray-400 fs-4 fw-bold"
									>Helping Businesses</span
								>
							</div>

							<!--begin::Text-->
							<span
								class="text-gray-800 fs-6 fw-semibold d-block mb-9"
							>
								At Federal Credit Reserve , we are committed to
								the development of the real sectors of the
								economy. We offer a comprehensive portfolio of
								corporate and commercial banking services in the
								Energy, Manufacturing, FMCGs, Export & Import,
								Telecommunications, Agriculture and Public
								Sectors of the economy amongst others.
							</span>
							<!--end::Text-->
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
