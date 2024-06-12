"use strict";

// Class definition
var KTSignupGeneral = (function () {
	// Elements
	var form;
	var submitButton;
	var validator;
	var passwordMeter;

	// Handle form
	var handleForm = function (e) {
		// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
		validator = FormValidation.formValidation(form, {
			fields: {
				name: {
					validators: {
						notEmpty: {
							message: "Name is required",
						},
					},
				},
				email: {
					validators: {
						regexp: {
							regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							message: "The value is not a valid email address",
						},
						notEmpty: {
							message: "Email address is required",
						},
					},
				},
				address: {
					validators: {
						notEmpty: {
							message: "Address is required",
						},
					},
				},
				phone: {
					validators: {
						notEmpty: {
							message: "Phone is required",
						},
					},
				},
				city: {
					validators: {
						notEmpty: {
							message: "City is required",
						},
					},
				},
				country: {
					validators: {
						notEmpty: {
							message: "Country is required",
						},
					},
				},
				password: {
					validators: {
						notEmpty: {
							message: "The password is required",
						},
						callback: {
							message: "Please enter valid password",
							callback: function (input) {
								if (input.value.length > 0) {
									return validatePassword();
								}
							},
						},
					},
				},
				"confirm-password": {
					validators: {
						notEmpty: {
							message: "The password confirmation is required",
						},
						identical: {
							compare: function () {
								return form.querySelector('[name="password"]')
									.value;
							},
							message:
								"The password and its confirm are not the same",
						},
					},
				},
				toc: {
					validators: {
						notEmpty: {
							message: "You must accept the terms and conditions",
						},
					},
				},
			},
			plugins: {
				trigger: new FormValidation.plugins.Trigger({
					event: {
						password: false,
					},
				}),
				bootstrap: new FormValidation.plugins.Bootstrap5({
					rowSelector: ".fv-row",
					eleInvalidClass: "", // comment to enable invalid state icons
					eleValidClass: "", // comment to enable valid state icons
				}),
			},
		});

		// Handle form submit
		submitButton.addEventListener("click", function (e) {
			// e.preventDefault();

			validator.revalidateField("password");

			validator.validate().then(function (status) {
				if (status == "Valid") {
					// Show loading indication
					submitButton.setAttribute("data-kt-indicator", "on");
				} else {
					e.preventDefault();
					// Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/
					Swal.fire({
						text: "Sorry, looks like there are some errors detected, please try again.",
						icon: "error",
						buttonsStyling: false,
						confirmButtonText: "Ok, got it!",
						customClass: {
							confirmButton: "btn btn-primary",
						},
					});
				}
			});
		});

		// Handle password input
		form.querySelector('input[name="password"]').addEventListener(
			"input",
			function () {
				if (this.value.length > 0) {
					validator.updateFieldStatus("password", "NotValidated");
				}
			}
		);
	};

	// Password input validation
	var validatePassword = function () {
		return passwordMeter.getScore() > 50;
	};

	var isValidUrl = function (url) {
		try {
			new URL(url);
			return true;
		} catch (e) {
			return false;
		}
	};

	// Public functions
	return {
		// Initialization
		init: function () {
			// Elements
			form = document.querySelector("#kt_sign_up_form");
			submitButton = document.querySelector("#kt_sign_up_submit");
			passwordMeter = KTPasswordMeter.getInstance(
				form.querySelector('[data-kt-password-meter="true"]')
			);

			handleForm();
		},
	};
})();

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTSignupGeneral.init();
});
