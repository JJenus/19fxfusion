<script setup>
	const config = useRuntimeConfig().public;
</script>

<template>
	<!--begin::Footer container-->
	<!-- -->
	<div
		style="border-radius: 0"
		class="app-containeri container-fluidi fs-5 pt-10 mt-10 py-3 "
	>
		<div class="card bg-body border-0 w-100 m-0 p-0 rounded-0">
			<div class="card-body mx-0">
				<div class="row row-cols-md-2 justify-content-between">
					<!--begin::Copyright-->
					<div class="col-md-4 order-2w p-0 m-0 order-md-1w pb-8">
						<div
							class="d-flex flex-column align-itemis-center mb-6"
						>
							<div
								class="d-flex flex-row align-items-center justify-content-center m-0 mb-3"
							>
								<NFTexLogo :classes="'h-50px'" />
							</div>
						</div>
						<p class="text-center p-4">
							Our business and philanthropy are helping build more
							sustainable, diverse and equitable communities
							around the world.
						</p>
						<!--end::Page title-->
					</div>
					<!--end::Copyright-->
					<div class="col-md-5">
						<h2 class="fs-2qx text-danger mb-2">Stay informed</h2>
						<p>
							Reach us on
							<br />
							+1 (228) 888-1615
						</p>
						<p class="mb-5">
							Don’t miss, to subscribe to our new feeds, kindly
							fill the form below.
						</p>
						<div class="d-flex align-items-center">
							<div
								class="position-relative my-1 me-3"
								bis_skin_checked="1"
							>
								<i
									class="ki-outline ki-sms fs-3 position-absolute top-50 translate-middle-y ms-4"
								></i>
								<input
									type="text"
									data-kt-table-widget-4="search"
									class="form-control w-200px w-lg-300px ps-12"
									placeholder="Email"
								/>
							</div>
							<button class="btn btn-light-danger">
								Subscribe
							</button>
						</div>
					</div>
				</div>

				<div
					class="d-flex flex-column flex-md-row mt-9 align-items-center justify-content-between"
				>
					<div class="px-md-2 fs-6">
						<span
							>Copyright © 2023 {{ config.APP }}. all rights
							reserved.</span
						>
					</div>
					<!--begin::Menu-->
					<ul
						class="menu menu-gray-600 menu-hover-primary fw-semibold order-1w"
					>
						<li class="menu-item">
							<NuxtLink
								to="/resources/about-us"
								target="_blank"
								class="menu-link px-2"
								>About</NuxtLink
							>
						</li>

						<li class="menu-item">
							<NuxtLink
								to="/resources/contact-us"
								class="menu-link px-2"
							>
								Contact Us
							</NuxtLink>
						</li>

						<li class="menu-item">
							<a target="_blank" class="menu-link px-2"
								>Term and conditions</a
							>
						</li>
					</ul>
					<!--end::Menu-->
				</div>
			</div>
		</div>
	</div>
	<!--end::Footer container-->
</template>
