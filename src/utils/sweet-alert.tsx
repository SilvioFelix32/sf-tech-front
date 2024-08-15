import Swal, { SweetAlertIcon, SweetAlertPosition } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export function GetSwallAlert(
  position: SweetAlertPosition,
  icon: SweetAlertIcon,
  title: string | HTMLElement | JQuery,
  timer: number
) {
  MySwal.fire({
    position,
    icon,
    title,
    showConfirmButton: false,
    timer,
  });
}
