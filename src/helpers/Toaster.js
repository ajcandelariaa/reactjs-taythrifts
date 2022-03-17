import { toast } from "react-toastify";

// REGISTRATION TOAST
export const toastSuccess = () => {
  toast.success("Form Submitted", {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};
export const toastError = () => {
  toast.error("Error Submitting Form", {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};



// LOGIN TOAST
export const toastValidAccount = () => {
  toast.success("Login Successfully", {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};
export const toastInvalidAccount = () => {
  toast.error("Invalid Username and Password", {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};