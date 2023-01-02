import { useForm } from "react-hook-form";
import { viaCEPService } from "../services/viaCEP-service";

const { register, setValue, setFocus, handleSubmit } = useForm();

function checkCEP(e: any) {
  const cep = e.target.value.replace(/\D/g, ""); // essa Regex substitui qualquer coisa que n seja numero por um valor vazior, pois a API só aceita numeros.
  if (e.target.value) {
    viaCEPService
      .getCEP(cep)
      .then((res) => res.json())
      .then((data) => {
        setValue("bairro", data.bairro);
        setValue("endereco", data.logradouro);
        setValue("cidade", data.localidade);
        setValue("estado", data.uf);
        setValue("endereco_complemento", data.complemento);
        setFocus("endereco_numero");
      });
  }
}
