import Swal from "sweetalert2"

export const errorAlert = (text: string | null) => {
    return Swal.fire({
        text: text || "Sorry, looks like there are some errors detected, please try again.",
        icon: "error",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        customClass: {
            confirmButton: "btn btn-primary",
        },
    });
}

export const successAlert = (text: string) => {
    return Swal.fire({
        text: text,
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        customClass: {
            confirmButton: "btn btn-primary",
        },
    });
}

export const warningAlert = (text: string) => {
    return Swal.fire({
        text: text,
        icon: "warning",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        customClass: {
            confirmButton: "btn btn-primary",
        },
    });
}

export const infoAlert = (text: string) => {
    return Swal.fire({
        text: text,
        icon: "info",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        customClass: {
            confirmButton: "btn btn-primary",
        },
    });
}

