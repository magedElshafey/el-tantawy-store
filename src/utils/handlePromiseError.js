import { AxiosError } from "axios";
import Swal from "sweetalert2";
const handlePromisError = (error) => {
  if (error instanceof AxiosError && error.response) {
    Swal.fire({
      icon: "error",
      title: error.response.data.message,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "An unexpected error occurred",
    });
  }
};

export default handlePromisError;
