import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { CompanyContext } from "../../context";
import { useForm } from "react-hook-form";
import { userService, viaCEPService } from "../../services";
import { SweetAlert } from "../../shared/sweet-alert";
import { IUser, Role } from "../../types/IUser";
import MaskedInput from "../InputMask";
import InputMask from "react-input-mask";
import { ConfirmPassword, CreatePassword } from "./Passwords";
//styles
import { Wrapper, Content, Input, Select, Button, Title } from "./styles";

const initialValues = {
  cpf: "",
};

export function RegistrationForm() {
  const { SwallSuccess, SwallFailure, SwallCheckPassword } = SweetAlert;
  const company_id = useContext(CompanyContext);
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [defaultValues, setValues] = useState(initialValues);
  const { register, setValue, setFocus, handleSubmit } = useForm();

  function handleChange(event: any) {
    setValues({
      ...defaultValues,
      [event.target.name]: event.target.value,
    });
  }

  async function checkCEP(e: any) {
    const cep = e.target.value.replace(/\D/g, ""); // essa Regex substitui qualquer coisa que n seja numero por um valor vazior, pois a API só aceita numeros.

    if (e.target.value) {
      await viaCEPService
        .getCEP(cep)
        .then((res) => res.json())
        .then((data) => {
          setValue("neighborhood", data.bairro);
          setValue("address", data.logradouro);
          setValue("city", data.localidade);
          setValue("state", data.uf);
          setValue("address_complement", data.complemento);
          setFocus("address_number");
        })
        .catch((err) => console.error(err));
    }
  }

  function verifyPasswords() {
    if (password != passwordConfirm) {
      SwallCheckPassword();
    } else {
      setValue("password", password);
    }
  }

  async function handleCreateUser(data: IUser) {
    const sendData = {
      ...data,
      password: password as string,
      role: "USER" as Role,
    };

    await userService
      .create(company_id as string, sendData)
      .then(() => {
        SwallSuccess();
        router.push("/");
      })
      .catch(() => SwallFailure());
  }

  return (
    <Wrapper onSubmit={handleSubmit(handleCreateUser)}>
      <Title>Criar Conta</Title>

      <Content>
        <Input
          type="text"
          placeholder="Nome*"
          {...register("name", { required: true })}
        />

        <Input
          type="text"
          placeholder="Sobrenome*"
          {...register("last_name", { required: true })}
        />
      </Content>
      <Content>
        <InputMask
          name="Nascimento"
          mask="99/99/9999"
          placeholder="Data de Nascimento*"
          className="inputMask"
          {...register("birth_date", { valueAsDate: true })}
        />

        <InputMask
          name="Celular"
          mask="(99)99999-9999"
          placeholder="Celular"
          className="inputMask"
          {...register("celphone")}
        />
      </Content>
      <Content>
        <Input
          type="text"
          style={{ width: "95%" }}
          placeholder="Email*"
          {...register("email", { required: true })}
        />

        <MaskedInput
          name="cpf"
          mask="999.999.999-99"
          defaultValue={defaultValues.cpf}
          onChange={handleChange}
          register={register}
        />
      </Content>
      <Content>
        <Input
          type="text"
          placeholder="CEP"
          {...register("cep", { required: true })}
          onBlur={checkCEP}
        />

        <Input type="text" placeholder="Estado" {...register("state")} />

        <Input type="text" placeholder="Cidade" {...register("city")} />
      </Content>
      <Content>
        <Input type="text" placeholder="Bairro" {...register("neighborhood")} />

        <Input type="text" placeholder="Rua" {...register("address")} />
      </Content>
      <Content>
        <Input
          type="text"
          placeholder="Numero"
          {...register("address_number")}
        />

        <Input
          type="text"
          placeholder="Complemento"
          {...register("address_complement")}
        />
      </Content>
      <Content>
        <CreatePassword password={password} setPassword={setPassword} />
        <ConfirmPassword
          passwordConfirm={passwordConfirm}
          setPasswordConfirm={setPasswordConfirm}
        />
      </Content>
      <Button onClick={() => verifyPasswords()} type="submit">
        Cadastrar
      </Button>
    </Wrapper>
  );
}
