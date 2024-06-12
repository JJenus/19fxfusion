<script setup lang="ts">

	const props = defineProps({
		error: Object,
	});

	const fatal = props.error?.statusCode === 404 ? false : true;
	// console.log(fatal);
	console.log(props.error)

	const handleError = () => clearError({ redirect: "/" });
</script>

<template>
	<!--begin::Authentication - Signup Welcome Message -->
	<div class="d-flex flex-column flex-center flex-column-fluid">
		<!--begin::Content-->
		<div class="d-flex flex-column flex-center text-center p-10">
			<!--begin::Wrapper-->
			<div class="card card-flush w-lg-650px py-5">
				<div class="card-body py-15 py-lg-20">
					<!--begin::Title-->
					<h1 class="fw-bolder fs-2hx text-gray-900 mb-4">Oops!</h1>
					<!--end::Title-->

					<!--begin::Text-->
					<div class="fw-semibold fs-6 text-gray-500 mb-7">
						<span v-if="!fatal"> We can't find that page. </span>
						<span v-else>
							<!-- We kindly ask for your patience as we diligently
							work to enhance our services. Please return in a
							moment, and we'll have even more improvements to
							offer. -->

							Accessing an unauthorized area?
						</span>
					</div>
					<!--end::Text-->

					<!--begin::Illustration-->
					<div v-if="!fatal" class="mb-3">
						<img
							src="/assets/media/auth/404.png"
							class="mw-100 mh-300px theme-light-show"
							alt=""
						/>
						<img
							src="/assets/media/auth/404-dark.png"
							class="mw-100 mh-300px theme-dark-show"
							alt=""
						/>
					</div>

					<div v-else class="mb-3">
						<img
							src="https://static.vecteezy.com/system/resources/previews/012/669/872/original/protection-of-bank-deposits-people-shield-money-security-concept-flat-illustration-vector.jpg"
							class="mw-100 mh-300px"
							alt=""
						/>
					</div>
					<!--end::Illustration-->

					<!--begin::Link-->
					<div class="mb-0">
						<a
							@click="handleError"
							role="button"
							class="btn btn-sm btn-primary"
							>Return Home</a
						>
					</div>
					<!--end::Link-->
				</div>
			</div>
			<!--end::Wrapper-->
		</div>
		<!--end::Content-->
	</div>
	<!--end::Authentication - Signup Welcome Message-->
</template>
