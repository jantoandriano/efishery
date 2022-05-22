import { toast } from "react-toastify";

const toastAlert = () =>
  toast("Berhasil menambahkan data", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
  });

export default toastAlert;
