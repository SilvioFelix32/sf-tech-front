import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const SweetAlert = {
  SwallConfirm,
  SwallCheckPassword,
  SwallSuccess,
  SwallFailure,
};

const MySwal = withReactContent(Swal);

function SwallConfirm() {
  MySwal.fire({
    position: "center",
    icon: "info",
    title: "Deseja apagar?",
    showConfirmButton: false,
    timer: 4000,
  });
}

function SwallCheckPassword() {
  MySwal.fire({
    position: "center",
    icon: "info",
    title: "Senhas não conferem",
    showConfirmButton: false,
    timer: 3000,
  });
}

function SwallSuccess() {
  MySwal.fire({
    position: "top-end",
    icon: "success",
    title: "Sucesso",
    showConfirmButton: false,
    timer: 1500,
  });
}

function SwallFailure() {
  MySwal.fire({
    position: "top-end",
    icon: "error",
    title: "Falha",
    showConfirmButton: false,
    timer: 1500,
  });
}
