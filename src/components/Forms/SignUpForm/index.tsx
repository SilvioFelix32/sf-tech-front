import { useRouter } from "next/router";
import { signUp } from "aws-amplify/auth";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { faker } from "@faker-js/faker";
import { environment } from "../../../config/environment";
import { IUser } from "../../../interfaces";
import { GetSwallAlert } from "../../../utils";
import { userService } from "../../../services/user-service";
import { Gender, ICreateUserRequest } from "../../../interfaces/IDbUser";
import { ConfirmPassword, CreatePassword } from "./Passwords";
import {
  Wrapper,
  Content,
  Column,
  Input,
  Button,
  Title,
  ErrorText,
  Text,
  RouterButton,
} from "./styles";

interface SignUpFormData extends IUser {
  cpf: string;
  cellphone: string;
  birthdate: string;
  gender: Gender;
}

export function SignUpForm() {
  const company_id = environment.companyId;
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [generatedCpf, setGeneratedCpf] = useState("");
  const [generatedCellphone, setGeneratedCellphone] = useState("");
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  function formatCpf(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  function formatCellphone(cellphone: string): string {
    const cleaned = cellphone.replace(/\D/g, "");
    if (cleaned.length === 11) {
      return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return cellphone;
  }

  useEffect(() => {
    const cpf = faker.string.numeric(11);
    const ddd = faker.string.numeric(2);
    const phoneNumber = faker.string.numeric(9);
    const cellphoneNumbers = `${ddd}${phoneNumber}`;
    const cellphoneFormatted = formatCellphone(cellphoneNumbers);
    const cpfFormatted = formatCpf(cpf);
    
    setGeneratedCpf(cpfFormatted);
    setGeneratedCellphone(cellphoneFormatted);
    
    setValue("cpf", cpf);
    setValue("cellphone", cellphoneFormatted);
  }, [setValue]);

  function verifyPasswords() {
    if (password !== passwordConfirm) {
      GetSwallAlert("center", "info", "Senhas não conferem", 3000);
    } else {
      setValue("password", password);
    }
  }

  async function handleCreateUser(data: SignUpFormData) {
    try {
      const cpfOnlyNumbers = data.cpf.replace(/\D/g, "");

      const result = await signUp({
        username: data.email,
        password: data.password,
        options: {
          userAttributes: {
            email: data.email,
            name: data.name,
            family_name: data.lastName,
            "custom:company_id": company_id,
            "custom:role": "USER",
          },
        },
      });

      const payload: ICreateUserRequest = {
        first_name: data.name,
        last_name: data.lastName,
        email: data.email,
        cpf: cpfOnlyNumbers,
        cellphone: data.cellphone,
        birthdate: data.birthdate,
        gender: data.gender,
      };

      userService.create(payload).catch((error) => {
        console.error("Erro ao criar usuário no backend:", error);
      });

      if (result) {
        router.push({
          pathname: "/auth/confirm-signup",
          query: { email: data.email },
        });
      }
    } catch (error) {
      const err = error as Error;
      GetSwallAlert("center", "error", `Erro: ${err.message}`, 2000);
      console.error("Erro ao criar usuário", error);
    }
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
            type="email"
            placeholder="Email*"
            autoComplete="off"
            {...register("email", { required: "Email* é obrigatório" })}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </Column>
      </Content>

      <Content>
        <Column>
          <Input
            type="text"
            value={generatedCpf}
            readOnly
            disabled
            placeholder="CPF*"
            style={{
              backgroundColor: "#f5f5f5",
              cursor: "not-allowed",
            }}
          />
          <input
            type="hidden"
            {...register("cpf", { required: true })}
            value={generatedCpf.replace(/\D/g, "")}
          />
        </Column>
      </Content>

      <Content>
        <Column>
          <Input
            type="text"
            value={generatedCellphone}
            readOnly
            disabled
            placeholder="Celular*"
            style={{
              backgroundColor: "#f5f5f5",
              cursor: "not-allowed",
            }}
          />
          <input
            type="hidden"
            {...register("cellphone", { required: true })}
            value={generatedCellphone}
          />
        </Column>
      </Content>

      <Content
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Text style={{ fontSize: "0.85rem", color: "#666", textAlign: "center" }}>
          *CPF e Celular serão gerados aleatoriamente apenas para teste do site
        </Text>
      </Content>

      <Content>
        <Column>
          <Input
            type="date"
            placeholder="Data de nascimento*"
            {...register("birthdate", {
              required: "Data de nascimento* é obrigatória",
            })}
          />
          {errors.birthdate && (
            <ErrorText>{errors.birthdate.message}</ErrorText>
          )}
        </Column>
      </Content>

      <Content>
        <Column>
          <select
            {...register("gender", { required: "Gênero* é obrigatório" })}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
            }}
            defaultValue=""
          >
            <option value="" disabled>
              Selecione o gênero*
            </option>
            <option value="Male">Masculino</option>
            <option value="Female">Feminino</option>
            <option value="Other">Outro</option>
          </select>
          {errors.gender && <ErrorText>{errors.gender.message}</ErrorText>}
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
      <Content
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5px",
        }}
      >
        <Text>Já tem uma conta?</Text>
        <RouterButton type="button" onClick={() => router.push("/auth/signIn")}>
          Faça login.
        </RouterButton>
      </Content>
    </Wrapper>
  );
}
