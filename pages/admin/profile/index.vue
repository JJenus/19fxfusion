<script setup lang="ts">
	const user = userData().data;
</script>
<template>
	<div>
		<!--begin::Details content-->
		<div id="kt_customer_view_details" class="collapse show">
			<div class="card-body p-9">
				<!--begin::Row-->
				<div class="row mb-7">
					<!--begin::Label-->
					<label class="col-sm-4 fw-semibold text-muted"
						>Full Name</label
					>
					<!--end::Label-->

					<!--begin::Col-->
					<div class="col-sm-8">
						<span class="fw-bold fs-6 text-gray-800">
							{{ user?.name }}
						</span>
					</div>
					<!--end::Col-->
				</div>
				<!--end::Row-->

				<!--begin::Input group-->
				<div class="row mb-7">
					<!--begin::Label-->
					<label class="col-sm-4 fw-semibold text-muted">
						Contact Phone

						<span
							class="ms-1"
							data-bs-toggle="tooltip"
							aria-label="Phone number must be active"
							data-bs-original-title="Phone number must be active"
							data-kt-initialized="1"
						>
							<i class="ki-outline ki-information fs-7"></i>
						</span>
					</label>
					<!--end::Label-->

					<!--begin::Col-->
					<div class="col-sm-8 d-flex align-items-center">
						<span class="fw-bold fs-6 text-gray-800 me-2">{{
							user.phone
						}}</span>
					</div>
					<!--end::Col-->
				</div>
				<!--end::Input group-->

				<!--begin::Input group-->
				<div class="row mb-7">
					<!--begin::Label-->
					<label class="col-sm-4 fw-semibold text-muted">Email</label>
					<!--end::Label-->

					<!--begin::Col-->
					<div class="col-sm-8 d-flex align-items-center">
						<a
							href="#"
							class="fw-semibold fs-6 text-gray-800 text-hover-primary me-3"
						>
							{{ user.email }}
						</a>
						<span v-if="user.emailVerified" class="badge badge-success">Verified</span>
						<span v-else class="badge badge-danger">Not verified</span>
					</div>
					<!--end::Col-->
				</div>
				<!--end::Input group-->

				<!--begin::Input group-->
				<div class="row mb-7">
					<!--begin::Label-->
					<label class="col-sm-4 fw-semibold text-muted">
						Country

						<span
							class="ms-1"
							data-bs-toggle="tooltip"
							aria-label="Country of origination"
							data-bs-original-title="Country of origination"
							data-kt-initialized="1"
						>
							<i class="ki-outline ki-information fs-7"></i>
						</span>
					</label>
					<!--end::Label-->

					<!--begin::Col-->
					<div class="col-sm-8">
						<span class="fw-bold fs-6 text-gray-800">{{user.country}}</span>
					</div>
					<!--end::Col-->
				</div>
				<!--end::Input group-->

				<!--begin::Input group-->
				<div class="row mb-7">
					<!--begin::Label-->
					<label class="col-sm-4 fw-semibold text-muted"
						>Communication</label
					>
					<!--end::Label-->

					<!--begin::Col-->
					<div class="col-sm-8">
						<span class="fw-bold fs-6 text-gray-800"
							>Email, Phone</span
						>
					</div>
					<!--end::Col-->
				</div>
				<!--end::Input group-->

				<!--begin::Input group-->
				<div class="row mb-10">
					<!--begin::Label-->
					<label class="col-sm-4 fw-semibold text-muted"
						>Allow Changes</label
					>
					<!--begin::Label-->

					<!--begin::Label-->
					<div class="col-sm-8">
						<span class="fw-semibold fs-6 text-gray-800">Yes</span>
					</div>
					<!--begin::Label-->
				</div>
				<!--end::Input group-->
			</div>
		</div>
		<!--end::Details content-->
	</div>
</template>
