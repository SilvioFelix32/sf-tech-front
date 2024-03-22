import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { CompanyContext } from "../../context";
import { useForm } from "react-hook-form";
import { userService } from "../../services";
import { SweetAlert } from "../../shared/sweet-alert";
import { IUser, Role } from "../../types/IUser";
import { ConfirmPassword, CreatePassword } from "./Passwords";
//styles
import { Wrapper, Content, Input, Select, Button, Title } from "./styles";

export function RegistrationForm() {
  const { SwallSuccess, SwallFailure, SwallCheckPassword } = SweetAlert;
  const company_id = useContext(CompanyContext);
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { register, setValue, handleSubmit } = useForm();

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
          {...register("lastName", { required: true })}
        />
      </Content>
      <Content>
        <Input
          type="text"
          style={{ width: "95%" }}
          placeholder="Email*"
          {...register("email", { required: true })}
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
