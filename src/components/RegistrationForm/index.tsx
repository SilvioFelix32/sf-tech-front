import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { userService } from "../../services";
import { GetSwallAlert } from "../../utils/sweet-alert";
import { IUser, Role } from "../../types/IUser";
import { environment } from "../../utils/environment";
import { ConfirmPassword, CreatePassword } from "./Passwords";
//styles
import {
  Wrapper,
  Content,
  Column,
  Input,
  Button,
  Title,
  ErrorText,
} from "./styles";

export function RegistrationForm() {
  const company_id = environment.companyId;
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  function verifyPasswords() {
    if (password !== passwordConfirm) {
      GetSwallAlert("center", "info", "Senhas não conferem", 3000);
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
        GetSwallAlert("top-end", "success", "Sucesso", 1500);
        router.push("/");
      })
      .catch(() => GetSwallAlert("top-end", "error", "Falha", 1500));
  }

  return (
    <Wrapper onSubmit={handleSubmit(handleCreateUser)}>
      <Title>Criar Conta</Title>

      <Content>
        <Column>
          <Input
            type="text"
            placeholder="Nome*"
            {...register("name", { required: "Nome* é obrigatório" })}
          />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </Column>

        <Column>
          <Input
            type="text"
            placeholder="Sobrenome*"
            {...register("lastName", { required: "Sobrenome* é obrigatório" })}
          />
          {errors.lastName && <ErrorText>{errors.lastName.message}</ErrorText>}
        </Column>
      </Content>

      <Content>
        <Column>
          <Input
            type="text"
            placeholder="Email*"
            {...register("email", { required: "Email* é obrigatório" })}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </Column>
      </Content>

      <Content style={{ padding: "5px" }}>
        <CreatePassword password={password} setPassword={setPassword} />
        <ConfirmPassword
          passwordConfirm={passwordConfirm}
          setPasswordConfirm={setPasswordConfirm}
        />
        {password !== passwordConfirm && passwordConfirm && (
          <ErrorText>Senhas não conferem</ErrorText>
        )}
      </Content>

      <Button onClick={() => verifyPasswords()} type="submit">
        Cadastrar
      </Button>
    </Wrapper>
  );
}
