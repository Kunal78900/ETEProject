import { toast } from "react-toastify";

const showSuccessToast = (msg) => {
  console.log("showing msg ", msg);
  try {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (e) {
    console.log("error in loading toast ", e);
    return;
  }
};

export default showSuccessToast;
