<script setup>
	// /assets/media/svg/avatars/blank.svg
	const route = useRoute();
	console.log();
	const currentRoute = ref("overview");
	const user = userData().data;

	onMounted(() => {
		if (route.path.split("/")[2])
			currentRoute.value = route.path.split("/")[2];
	});
</script>

<template>
	<div class="card mb-5 mb-xl-8">
		<!--begin::Card body-->
		<div class="card-body pt-15">
			<!--begin::Summary-->
			<div class="d-flex flex-center flex-column mb-5">
				<!--begin::Avatar-->
				<div class="symbol symbol-100px symbol-circle mb-7">
					<img :src="user.imgUrl" alt="image" />
				</div>
				<!--end::Avatar-->

				<!--begin::Name-->
				<a
					href="#"
					class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
				>
					{{ user.name }}
				</a>
				<!--end::Name-->

				<!--begin::Position-->
				<div class="fs-5 fw-semibold text-muted mb-6"></div>
				<!--end::Position-->

				<!--begin::Info-->
				<div class="d-flex flex-wriap flex-center d-noine">
					<!--begin::Stats-->
					<NuxtLink
						to="/app/profile"
						@click="currentRoute = 'overview'"
						:class="currentRoute == 'overview' ? 'active' : ''"
						class="btn btn-active-light-primary border border-gray-300 border-dashed rounded py-3 px-3 mb-3"
					>
						<i class="ki-duotone ki-note-2 fs-3 me-1">
							<i class="path1"></i>
							<i class="path2"></i>
							<i class="path3"></i>
							<i class="path4"></i>
						</i>
						Overview
					</NuxtLink>
					<!--end::Stats-->

					<!--begin::Stats-->
					<NuxtLink
						to="/app/profile/edit"
						@click="currentRoute = 'edit'"
						:class="currentRoute == 'edit' ? 'active' : ''"
						class="btn btn-active-light-primary border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3"
					>
						<i class="ki-outline ki-notepad-edit fs-3 me-1"></i>
						<span class="w-50px">Edit</span>
					</NuxtLink>
					<!--end::Stats-->

					<!--begin::Stats-->
					<!-- <NuxtLink
						to="/app/profile/settings"
						@click="currentRoute = 'settings'"
						:class="currentRoute == 'settings' ? 'active' : ''"
						class="btn btn-active-light-primary border border-gray-300 border-dashed rounded py-3 px-3 mb-3"
					>
						<i class="ki-outline ki-gear fs-3 me-1"></i>
						<span class="w-50px">Settings</span>
					</NuxtLink> -->
					<!--end::Stats-->
				</div>
				<!--end::Info-->
			</div>
			<!--end::Summary-->
			<div class="separator separator-dashed my-3"></div>
			<NuxtPage />
		</div>
		<!--end::Card body-->
	</div>

	<div
		class="modal fade"
		id="kt_modal_update_customer"
		tabindex="-1"
		style="display: none"
		aria-hidden="true"
	>
		<!--begin::Modal dialog-->
		<div class="modal-dialog modal-dialog-centered mw-650px">
			<!--begin::Modal content-->
			<div class="modal-content">
				<!--begin::Form-->
				<form
					class="form"
					action="#"
					id="kt_modal_update_customer_form"
				>
					<!--begin::Modal header-->
					<div
						class="modal-header"
						id="kt_modal_update_customer_header"
					>
						<!--begin::Modal title-->
						<h2 class="fw-bold">Update Customer</h2>
						<!--end::Modal title-->

						<!--begin::Close-->
						<div
							id="kt_modal_update_customer_close"
							data-bs-dismiss="modal"
							class="btn btn-icon btn-sm btn-active-icon-primary"
						>
							<i class="ki-outline ki-cross fs-1"></i>
						</div>
						<!--end::Close-->
					</div>
					<!--end::Modal header-->

					<!--begin::Modal body-->
					<div class="modal-body py-10 px-lg-17">
						<!--begin::Scroll-->
						<div
							class="d-flex flex-column scroll-y me-n7 pe-7"
							id="kt_modal_update_customer_scroll"
							data-kt-scroll="true"
							data-kt-scroll-activate="{default: false, lg: true}"
							data-kt-scroll-max-height="auto"
							data-kt-scroll-dependencies="#kt_modal_update_customer_header"
							data-kt-scroll-wrappers="#kt_modal_update_customer_scroll"
							data-kt-scroll-offset="300px"
							style=""
						>
							<!--begin::Notice-->

							<!--begin::Notice-->
							<div
								class="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6"
							>
								<!--begin::Icon-->
								<i
									class="ki-outline ki-information fs-2tx text-primary me-4"
								></i>
								<!--end::Icon-->

								<!--begin::Wrapper-->
								<div class="d-flex flex-stack flex-grow-1">
									<!--begin::Content-->
									<div class="fw-semibold">
										<div class="fs-6 text-gray-700">
											Updating customer details will
											receive a privacy audit. For more
											info, please read our
											<a href="#">Privacy Policy</a>
										</div>
									</div>
									<!--end::Content-->
								</div>
								<!--end::Wrapper-->
							</div>
							<!--end::Notice-->
							<!--end::Notice-->

							<!--begin::User toggle-->
							<div
								class="fw-bold fs-3 rotate collapsible mb-7"
								data-bs-toggle="collapse"
								href="#kt_modal_update_customer_user_info"
								role="button"
								aria-expanded="false"
								aria-controls="kt_modal_update_customer_user_info"
							>
								User Information
								<span class="ms-2 rotate-180">
									<i class="ki-outline ki-down fs-3"></i>
								</span>
							</div>
							<!--end::User toggle-->

							<!--begin::User form-->
							<div
								id="kt_modal_update_customer_user_info"
								class="collapse show"
							>
								<!--begin::Input group-->
								<div class="mb-7">
									<!--begin::Label-->
									<label class="fs-6 fw-semibold mb-2">
										<span>Update Avatar</span>

										<span
											class="ms-1"
											data-bs-toggle="tooltip"
											aria-label="Allowed file types: png, jpg, jpeg."
											data-bs-original-title="Allowed file types: png, jpg, jpeg."
											data-kt-initialized="1"
										>
											<i
												class="ki-outline ki-information fs-7"
											></i>
										</span>
									</label>
									<!--end::Label-->

									<!--begin::Image input wrapper-->
									<div class="mt-1">
										<!--begin::Image input-->
										<div
											class="image-input image-input-outline"
											data-kt-image-input="true"
											style="
												background-image: url('/assets/media/svg/avatars/blank.svg');
											"
										>
											<!--begin::Preview existing avatar-->
											<div
												class="image-input-wrapper w-125px h-125px"
												style="
													background-image: url(/assets/media/avatars/300-1.jpg);
												"
											></div>
											<!--end::Preview existing avatar-->

											<!--begin::Edit-->
											<label
												class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
												data-kt-image-input-action="change"
												data-bs-toggle="tooltip"
												aria-label="Change avatar"
												data-bs-original-title="Change avatar"
												data-kt-initialized="1"
											>
												<i
													class="ki-outline ki-pencil fs-7"
												></i>
												<!--begin::Inputs-->
												<input
													type="file"
													name="avatar"
													accept=".png, .jpg, .jpeg"
												/>
												<input
													type="hidden"
													name="avatar_remove"
												/>
												<!--end::Inputs-->
											</label>
											<!--end::Edit-->

											<!--begin::Cancel-->
											<span
												class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
												data-kt-image-input-action="cancel"
												data-bs-toggle="tooltip"
												aria-label="Cancel avatar"
												data-bs-original-title="Cancel avatar"
												data-kt-initialized="1"
											>
												<i
													class="ki-outline ki-cross fs-2"
												></i>
											</span>
											<!--end::Cancel-->

											<!--begin::Remove-->
											<span
												class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
												data-kt-image-input-action="remove"
												data-bs-toggle="tooltip"
												aria-label="Remove avatar"
												data-bs-original-title="Remove avatar"
												data-kt-initialized="1"
											>
												<i
													class="ki-outline ki-cross fs-2"
												></i>
											</span>
											<!--end::Remove-->
										</div>
										<!--end::Image input-->
									</div>
									<!--end::Image input wrapper-->
								</div>
								<!--end::Input group-->

								<!--begin::Input group-->
								<div class="fv-row mb-7">
									<!--begin::Label-->
									<label class="fs-6 fw-semibold mb-2"
										>Name</label
									>
									<!--end::Label-->

									<!--begin::Input-->
									<input
										type="text"
										class="form-control form-control-solid"
										placeholder=""
										name="name"
										value="Sean Bean"
									/>
									<!--end::Input-->
								</div>
								<!--end::Input group-->

								<!--begin::Input group-->
								<div class="fv-row mb-7">
									<!--begin::Label-->
									<label class="fs-6 fw-semibold mb-2">
										<span>Email</span>

										<span
											class="ms-1"
											data-bs-toggle="tooltip"
											aria-label="Email address must be active"
											data-bs-original-title="Email address must be active"
											data-kt-initialized="1"
										>
											<i
												class="ki-outline ki-information fs-7"
											></i>
										</span>
									</label>
									<!--end::Label-->

									<!--begin::Input-->
									<input
										type="email"
										class="form-control form-control-solid"
										placeholder=""
										name="email"
										value="sean@dellito.com"
									/>
									<!--end::Input-->
								</div>
								<!--end::Input group-->

								<!--begin::Input group-->
								<div class="fv-row mb-15">
									<!--begin::Label-->
									<label class="fs-6 fw-semibold mb-2"
										>Description</label
									>
									<!--end::Label-->

									<!--begin::Input-->
									<input
										type="text"
										class="form-control form-control-solid"
										placeholder=""
										name="description"
									/>
									<!--end::Input-->
								</div>
								<!--end::Input group-->
							</div>
							<!--end::User form-->

							<!--begin::Billing toggle-->
							<div
								class="fw-bold fs-3 rotate collapsible mb-7 active"
								data-bs-toggle="collapse"
								href="#kt_modal_update_customer_billing_info"
								role="button"
								aria-expanded="true"
								aria-controls="kt_modal_update_customer_billing_info"
							>
								Shipping Information
								<span class="ms-2 rotate-180">
									<i class="ki-outline ki-down fs-3"></i>
								</span>
							</div>
							<!--end::Billing toggle-->

							<!--begin::Billing form-->
							<div
								id="kt_modal_update_customer_billing_info"
								class="collapse show"
								style=""
							>
								<!--begin::Input group-->
								<div class="d-flex flex-column mb-7 fv-row">
									<!--begin::Label-->
									<label class="fs-6 fw-semibold mb-2"
										>Address Line 1</label
									>
									<!--end::Label-->

									<!--begin::Input-->
									<input
										class="form-control form-control-solid"
										placeholder=""
										name="address1"
										value="101, Collins Street"
									/>
									<!--end::Input-->
								</div>
								<!--end::Input group-->

								<!--begin::Input group-->
								<div class="d-flex flex-column mb-7 fv-row">
									<!--begin::Label-->
									<label class="fs-6 fw-semibold mb-2"
										>Address Line 2</label
									>
									<!--end::Label-->

									<!--begin::Input-->
									<input
										class="form-control form-control-solid"
										placeholder=""
										name="address2"
									/>
									<!--end::Input-->
								</div>
								<!--end::Input group-->

								<!--begin::Input group-->
								<div class="d-flex flex-column mb-7 fv-row">
									<!--begin::Label-->
									<label class="fs-6 fw-semibold mb-2"
										>Town</label
									>
									<!--end::Label-->

									<!--begin::Input-->
									<input
										class="form-control form-control-solid"
										placeholder=""
										name="city"
										value="Melbourne"
									/>
									<!--end::Input-->
								</div>
								<!--end::Input group-->

								<!--begin::Input group-->
								<div class="row g-9 mb-7">
									<!--begin::Col-->
									<div class="col-md-6 fv-row">
										<!--begin::Label-->
										<label class="fs-6 fw-semibold mb-2"
											>State / Province</label
										>
										<!--end::Label-->

										<!--begin::Input-->
										<input
											class="form-control form-control-solid"
											placeholder=""
											name="state"
											value="Victoria"
										/>
										<!--end::Input-->
									</div>
									<!--end::Col-->

									<!--begin::Col-->
									<div class="col-md-6 fv-row">
										<!--begin::Label-->
										<label class="fs-6 fw-semibold mb-2"
											>Post Code</label
										>
										<!--end::Label-->

										<!--begin::Input-->
										<input
											class="form-control form-control-solid"
											placeholder=""
											name="postcode"
											value="3000"
										/>
										<!--end::Input-->
									</div>
									<!--end::Col-->
								</div>
								<!--end::Input group-->

								<!--begin::Input group-->
								<div class="d-flex flex-column mb-7 fv-row">
									<!--begin::Label-->
									<label class="fs-6 fw-semibold mb-2">
										<span>Country</span>

										<span
											class="ms-1"
											data-bs-toggle="tooltip"
											aria-label="Country of origination"
											data-bs-original-title="Country of origination"
											data-kt-initialized="1"
										>
											<i
												class="ki-outline ki-information fs-7"
											></i>
										</span>
									</label>
									<!--end::Label-->

									<!--begin::Input-->
									<select
										name="country"
										aria-label="Select a Country"
										data-control="select2"
										data-placeholder="Select a Country..."
										data-dropdown-parent="#kt_modal_update_customer"
										class="form-select form-select-solid fw-bold select2-hidden-accessible"
										data-select2-id="select2-data-7-wosf"
										tabindex="-1"
										aria-hidden="true"
										data-kt-initialized="1"
									>
										<option
											value=""
											data-select2-id="select2-data-9-o8oi"
										>
											Select a Country...
										</option>
										<option value="AF">Afghanistan</option>
										<option value="AX">
											Aland Islands
										</option>
										<option value="AL">Albania</option>
										<option value="DZ">Algeria</option>
										<option value="AS">
											American Samoa
										</option>
										<option value="AD">Andorra</option>
										<option value="AO">Angola</option>
										<option value="AI">Anguilla</option>
										<option value="AG">
											Antigua and Barbuda
										</option>
										<option value="AR">Argentina</option>
										<option value="AM">Armenia</option>
										<option value="AW">Aruba</option>
										<option value="AU">Australia</option>
										<option value="AT">Austria</option>
										<option value="AZ">Azerbaijan</option>
										<option value="BS">Bahamas</option>
										<option value="BH">Bahrain</option>
										<option value="BD">Bangladesh</option>
										<option value="BB">Barbados</option>
										<option value="BY">Belarus</option>
										<option value="BE">Belgium</option>
										<option value="BZ">Belize</option>
										<option value="BJ">Benin</option>
										<option value="BM">Bermuda</option>
										<option value="BT">Bhutan</option>
										<option value="BO">
											Bolivia, Plurinational State of
										</option>
										<option value="BQ">
											Bonaire, Sint Eustatius and Saba
										</option>
										<option value="BA">
											Bosnia and Herzegovina
										</option>
										<option value="BW">Botswana</option>
										<option value="BR">Brazil</option>
										<option value="IO">
											British Indian Ocean Territory
										</option>
										<option value="BN">
											Brunei Darussalam
										</option>
										<option value="BG">Bulgaria</option>
										<option value="BF">Burkina Faso</option>
										<option value="BI">Burundi</option>
										<option value="KH">Cambodia</option>
										<option value="CM">Cameroon</option>
										<option value="CA">Canada</option>
										<option value="CV">Cape Verde</option>
										<option value="KY">
											Cayman Islands
										</option>
										<option value="CF">
											Central African Republic
										</option>
										<option value="TD">Chad</option>
										<option value="CL">Chile</option>
										<option value="CN">China</option>
										<option value="CX">
											Christmas Island
										</option>
										<option value="CC">
											Cocos (Keeling) Islands
										</option>
										<option value="CO">Colombia</option>
										<option value="KM">Comoros</option>
										<option value="CK">Cook Islands</option>
										<option value="CR">Costa Rica</option>
										<option value="CI">
											Côte d'Ivoire
										</option>
										<option value="HR">Croatia</option>
										<option value="CU">Cuba</option>
										<option value="CW">Curaçao</option>
										<option value="CZ">
											Czech Republic
										</option>
										<option value="DK">Denmark</option>
										<option value="DJ">Djibouti</option>
										<option value="DM">Dominica</option>
										<option value="DO">
											Dominican Republic
										</option>
										<option value="EC">Ecuador</option>
										<option value="EG">Egypt</option>
										<option value="SV">El Salvador</option>
										<option value="GQ">
											Equatorial Guinea
										</option>
										<option value="ER">Eritrea</option>
										<option value="EE">Estonia</option>
										<option value="ET">Ethiopia</option>
										<option value="FK">
											Falkland Islands (Malvinas)
										</option>
										<option value="FJ">Fiji</option>
										<option value="FI">Finland</option>
										<option value="FR">France</option>
										<option value="PF">
											French Polynesia
										</option>
										<option value="GA">Gabon</option>
										<option value="GM">Gambia</option>
										<option value="GE">Georgia</option>
										<option value="DE">Germany</option>
										<option value="GH">Ghana</option>
										<option value="GI">Gibraltar</option>
										<option value="GR">Greece</option>
										<option value="GL">Greenland</option>
										<option value="GD">Grenada</option>
										<option value="GU">Guam</option>
										<option value="GT">Guatemala</option>
										<option value="GG">Guernsey</option>
										<option value="GN">Guinea</option>
										<option value="GW">
											Guinea-Bissau
										</option>
										<option value="HT">Haiti</option>
										<option value="VA">
											Holy See (Vatican City State)
										</option>
										<option value="HN">Honduras</option>
										<option value="HK">Hong Kong</option>
										<option value="HU">Hungary</option>
										<option value="IS">Iceland</option>
										<option value="IN">India</option>
										<option value="ID">Indonesia</option>
										<option value="IR">
											Iran, Islamic Republic of
										</option>
										<option value="IQ">Iraq</option>
										<option value="IE">Ireland</option>
										<option value="IM">Isle of Man</option>
										<option value="IL">Israel</option>
										<option value="IT">Italy</option>
										<option value="JM">Jamaica</option>
										<option value="JP">Japan</option>
										<option value="JE">Jersey</option>
										<option value="JO">Jordan</option>
										<option value="KZ">Kazakhstan</option>
										<option value="KE">Kenya</option>
										<option value="KI">Kiribati</option>
										<option value="KP">
											Korea, Democratic People's Republic
											of
										</option>
										<option value="KW">Kuwait</option>
										<option value="KG">Kyrgyzstan</option>
										<option value="LA">
											Lao People's Democratic Republic
										</option>
										<option value="LV">Latvia</option>
										<option value="LB">Lebanon</option>
										<option value="LS">Lesotho</option>
										<option value="LR">Liberia</option>
										<option value="LY">Libya</option>
										<option value="LI">
											Liechtenstein
										</option>
										<option value="LT">Lithuania</option>
										<option value="LU">Luxembourg</option>
										<option value="MO">Macao</option>
										<option value="MG">Madagascar</option>
										<option value="MW">Malawi</option>
										<option value="MY">Malaysia</option>
										<option value="MV">Maldives</option>
										<option value="ML">Mali</option>
										<option value="MT">Malta</option>
										<option value="MH">
											Marshall Islands
										</option>
										<option value="MQ">Martinique</option>
										<option value="MR">Mauritania</option>
										<option value="MU">Mauritius</option>
										<option value="MX">Mexico</option>
										<option value="FM">
											Micronesia, Federated States of
										</option>
										<option value="MD">
											Moldova, Republic of
										</option>
										<option value="MC">Monaco</option>
										<option value="MN">Mongolia</option>
										<option value="ME">Montenegro</option>
										<option value="MS">Montserrat</option>
										<option value="MA">Morocco</option>
										<option value="MZ">Mozambique</option>
										<option value="MM">Myanmar</option>
										<option value="NA">Namibia</option>
										<option value="NR">Nauru</option>
										<option value="NP">Nepal</option>
										<option value="NL">Netherlands</option>
										<option value="NZ">New Zealand</option>
										<option value="NI">Nicaragua</option>
										<option value="NE">Niger</option>
										<option value="NG">Nigeria</option>
										<option value="NU">Niue</option>
										<option value="NF">
											Norfolk Island
										</option>
										<option value="MP">
											Northern Mariana Islands
										</option>
										<option value="NO">Norway</option>
										<option value="OM">Oman</option>
										<option value="PK">Pakistan</option>
										<option value="PW">Palau</option>
										<option value="PS">
											Palestinian Territory, Occupied
										</option>
										<option value="PA">Panama</option>
										<option value="PG">
											Papua New Guinea
										</option>
										<option value="PY">Paraguay</option>
										<option value="PE">Peru</option>
										<option value="PH">Philippines</option>
										<option value="PL">Poland</option>
										<option value="PT">Portugal</option>
										<option value="PR">Puerto Rico</option>
										<option value="QA">Qatar</option>
										<option value="RO">Romania</option>
										<option value="RU">
											Russian Federation
										</option>
										<option value="RW">Rwanda</option>
										<option value="BL">
											Saint Barthélemy
										</option>
										<option value="KN">
											Saint Kitts and Nevis
										</option>
										<option value="LC">Saint Lucia</option>
										<option value="MF">
											Saint Martin (French part)
										</option>
										<option value="VC">
											Saint Vincent and the Grenadines
										</option>
										<option value="WS">Samoa</option>
										<option value="SM">San Marino</option>
										<option value="ST">
											Sao Tome and Principe
										</option>
										<option value="SA">Saudi Arabia</option>
										<option value="SN">Senegal</option>
										<option value="RS">Serbia</option>
										<option value="SC">Seychelles</option>
										<option value="SL">Sierra Leone</option>
										<option value="SG">Singapore</option>
										<option value="SX">
											Sint Maarten (Dutch part)
										</option>
										<option value="SK">Slovakia</option>
										<option value="SI">Slovenia</option>
										<option value="SB">
											Solomon Islands
										</option>
										<option value="SO">Somalia</option>
										<option value="ZA">South Africa</option>
										<option value="KR">South Korea</option>
										<option value="SS">South Sudan</option>
										<option value="ES">Spain</option>
										<option value="LK">Sri Lanka</option>
										<option value="SD">Sudan</option>
										<option value="SR">Suriname</option>
										<option value="SZ">Swaziland</option>
										<option value="SE">Sweden</option>
										<option value="CH">Switzerland</option>
										<option value="SY">
											Syrian Arab Republic
										</option>
										<option value="TW">
											Taiwan, Province of China
										</option>
										<option value="TJ">Tajikistan</option>
										<option value="TZ">
											Tanzania, United Republic of
										</option>
										<option value="TH">Thailand</option>
										<option value="TG">Togo</option>
										<option value="TK">Tokelau</option>
										<option value="TO">Tonga</option>
										<option value="TT">
											Trinidad and Tobago
										</option>
										<option value="TN">Tunisia</option>
										<option value="TR">Turkey</option>
										<option value="TM">Turkmenistan</option>
										<option value="TC">
											Turks and Caicos Islands
										</option>
										<option value="TV">Tuvalu</option>
										<option value="UG">Uganda</option>
										<option value="UA">Ukraine</option>
										<option value="AE">
											United Arab Emirates
										</option>
										<option value="GB">
											United Kingdom
										</option>
										<option value="US">
											United States
										</option>
										<option value="UY">Uruguay</option>
										<option value="UZ">Uzbekistan</option>
										<option value="VU">Vanuatu</option>
										<option value="VE">
											Venezuela, Bolivarian Republic of
										</option>
										<option value="VN">Vietnam</option>
										<option value="VI">
											Virgin Islands
										</option>
										<option value="YE">Yemen</option>
										<option value="ZM">Zambia</option>
										<option value="ZW">
											Zimbabwe
										</option></select
									><span
										class="select2 select2-container select2-container--bootstrap5"
										dir="ltr"
										data-select2-id="select2-data-8-lr0w"
										style="width: 100%"
										><span class="selection"
											><span
												class="select2-selection select2-selection--single form-select form-select-solid fw-bold"
												role="combobox"
												aria-haspopup="true"
												aria-expanded="false"
												tabindex="0"
												aria-disabled="false"
												aria-labelledby="select2-country-tv-container"
												aria-controls="select2-country-tv-container"
												><span
													class="select2-selection__rendered"
													id="select2-country-tv-container"
													role="textbox"
													aria-readonly="true"
													title="Select a Country..."
													><span
														class="select2-selection__placeholder"
														>Select a
														Country...</span
													></span
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
									<!--end::Input-->
								</div>
								<!--end::Input group-->

								<!--begin::Input group-->
								<div class="fv-row mb-7">
									<!--begin::Wrapper-->
									<div class="d-flex flex-stack">
										<!--begin::Label-->
										<div class="me-5">
											<!--begin::Label-->
											<label class="fs-6 fw-semibold"
												>Use as a billing
												adderess?</label
											>
											<!--end::Label-->

											<!--begin::Input-->
											<div
												class="fs-7 fw-semibold text-muted"
											>
												If you need more info, please
												check budget planning
											</div>
											<!--end::Input-->
										</div>
										<!--end::Label-->

										<!--begin::Switch-->
										<label
											class="form-check form-switch form-check-custom form-check-solid"
										>
											<!--begin::Input-->
											<input
												class="form-check-input"
												name="billing"
												type="checkbox"
												value="1"
												id="kt_modal_update_customer_billing"
												checked
											/>
											<!--end::Input-->

											<!--begin::Label-->
											<span
												class="form-check-label fw-semibold text-muted"
												for="kt_modal_update_customer_billing"
											>
												Yes
											</span>
											<!--end::Label-->
										</label>
										<!--end::Switch-->
									</div>
									<!--begin::Wrapper-->
								</div>
								<!--end::Input group-->
							</div>
							<!--end::Billing form-->
						</div>
						<!--end::Scroll-->
					</div>
					<!--end::Modal body-->

					<!--begin::Modal footer-->
					<div class="modal-footer flex-center">
						<!--begin::Button-->
						<button
							type="reset"
							id="kt_modal_update_customer_cancel"
							class="btn btn-light me-3"
						>
							Discard
						</button>
						<!--end::Button-->

						<!--begin::Button-->
						<button
							type="submit"
							id="kt_modal_update_customer_submit"
							class="btn btn-primary"
						>
							<span class="indicator-label"> Submit </span>
							<span class="indicator-progress">
								Please wait...
								<span
									class="spinner-border spinner-border-sm align-middle ms-2"
								></span>
							</span>
						</button>
						<!--end::Button-->
					</div>
					<!--end::Modal footer-->
				</form>
				<!--end::Form-->
			</div>
		</div>
	</div>
</template>
