"use strict";

// Class Definition
var KTAuthNewPassword = (function () {
	// Elements
	var form;
	var submitButton;
	var validator;
	var passwordMeter;

	var handleForm = function (e) {
		// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
		validator = FormValidation.formValidation(form, {
			fields: {
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

		form.querySelector('input[name="password"]').addEventListener(
			"input",
			function () {
				if (this.value.length > 0) {
					validator.updateFieldStatus("password", "NotValidated");
				}
			}
		);
	};

	var handleSubmitAjax = function (e) {
		// Handle form submit
		submitButton.addEventListener("click", function (e) {
			// Prevent button default action
			// e.preventDefault();

			validator.revalidateField("password");

			// Validate form
			validator.validate().then(function (status) {
				if (status == "Valid") {
					// Show loading indication
					submitButton.setAttribute("data-kt-indicator", "on");

					// Disable button to avoid multiple click
					// submitButton.disabled = true;

					// Check axios library docs: https://axios-http.com/docs/intro
				} else {
                    e.preventDefault();
					submitButton.disabled = false;
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
	};

	var validatePassword = function () {
		return passwordMeter.getScore() > 50;
	};

	// Public Functions
	return {
		// public functions
		init: function () {
			form = document.querySelector("#kt_new_password_form");
			submitButton = document.querySelector("#kt_new_password_submit");
			passwordMeter = KTPasswordMeter.getInstance(
				form.querySelector('[data-kt-password-meter="true"]')
			);

			handleForm();

			handleSubmitAjax(); // use for ajax submit
		},
	};
})();

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTAuthNewPassword.init();
});
