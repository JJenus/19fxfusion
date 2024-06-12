<template>
	<div class="card mb-5 mb-xl-10">
		<!--begin::Card header-->
		<div class="card-header">
			<!--begin::Heading-->
			<div class="card-title">
				<h3>Login Sessions</h3>
			</div>
			<!--end::Heading-->

			<!--begin::Toolbar-->
			<div class="card-toolbar">
				<div class="my-1 me-4">
					<!--begin::Select-->
					<select
						class="form-select form-select-sm form-select-solid w-125px select2-hidden-accessible"
						data-control="select2"
						data-placeholder="Select Hours"
						data-hide-search="true"
						data-select2-id="select2-data-1-mxj5"
						tabindex="-1"
						aria-hidden="true"
						data-kt-initialized="1"
					>
						<option
							value="1"
							selected
							data-select2-id="select2-data-3-dbvs"
						>
							1 Hours
						</option>
						<option value="2">6 Hours</option>
						<option value="3">12 Hours</option>
						<option value="4">24 Hours</option></select
					><span
						class="select2 select2-container select2-container--bootstrap5"
						dir="ltr"
						data-select2-id="select2-data-2-mx2z"
						style="width: 100%"
						><span class="selection"
							><span
								class="select2-selection select2-selection--single form-select form-select-sm form-select-solid w-125px"
								role="combobox"
								aria-haspopup="true"
								aria-expanded="false"
								tabindex="0"
								aria-disabled="false"
								aria-labelledby="select2-jiut-container"
								aria-controls="select2-jiut-container"
								><span
									class="select2-selection__rendered"
									id="select2-jiut-container"
									role="textbox"
									aria-readonly="true"
									title="1 Hours"
									>1 Hours</span
								><span
									class="select2-selection__arrow"
									role="presentation"
									><b
										role="presentation"
									></b></span></span></span
						><span
							class="dropdown-wrapper"
							aria-hidden="true"
						></span
					></span>
					<!--end::Select-->
				</div>

				<a role="button" class="btn btn-sm btn-primary my-1">
					View All
				</a>
			</div>
			<!--end::Toolbar-->
		</div>
		<!--end::Card header-->

		<!--begin::Card body-->
		<div class="card-body p-0">
			<!--begin::Table wrapper-->
			<div class="table-responsive">
				<!--begin::Table-->
				<table
					class="table align-middle table-row-bordered table-row-solid gy-4 gs-9"
				>
					<!--begin::Thead-->
					<thead class="border-gray-200 fs-5 fw-semibold bg-lighten">
						<tr>
							<th class="min-w-250px">Location</th>
							<th class="min-w-100px">Status</th>
							<th class="min-w-150px">Device</th>
							<th class="min-w-150px">IP Address</th>
							<th class="min-w-150px">Time</th>
						</tr>
					</thead>
					<!--end::Thead-->

					<!--begin::Tbody-->
					<tbody class="fw-6 fw-semibold text-gray-600">
						<tr class="d-none">
							<td>
								<a
									href="#"
									class="text-hover-primary text-gray-600"
									>USA(5)</a
								>
							</td>

							<td>
								<span
									class="badge badge-light-success fs-7 fw-bold"
									>OK</span
								>
							</td>

							<td>Chrome - Windows</td>

							<td>236.125.56.78</td>

							<td>2 mins ago</td>
						</tr>
					</tbody>
					<!--end::Tbody-->
				</table>
				<!--end::Table-->
			</div>
			<!--end::Table wrapper-->
		</div>
		<!--end::Card body-->
	</div>
</template>
