import { HiOutlineMail, HiOutlineUser, HiOutlineUsers } from "react-icons/hi";
import { GiSmartphone } from "react-icons/gi";
import { userService } from "../../../../services";
import { IUser } from "../../../../types";
import { Card, Divisory, MainData, Wrapper } from "./styles";

import { Column, Content, Input, Title, Text } from "./styles";
import { useForm } from "react-hook-form";

interface ComponentProps {
  company_id: string;
  myUser: IUser;
}

export function PaymentInformation({ company_id, myUser }: ComponentProps) {
  const { register, handleSubmit, reset } = useForm<IUser>({
    defaultValues: { ...myUser },
  });
  const user_id = myUser?.user_id;

  async function handleUpdate(data: IUser) {
    await userService.update(company_id, user_id, {
      ...data,
    });
  }

  return (
    <Wrapper onSubmit={handleSubmit(handleUpdate)}>
      <Content>
        <Title>1.Informações de contato:</Title>
        <Column>
          <Card>
            <Divisory>
              <HiOutlineUser />
              <MainData>
                <Text>Nome:</Text>
                <Input
                  defaultValue={myUser.name}
                  {...register("name", { required: true })}
                />
              </MainData>
            </Divisory>
          </Card>

          <Card>
            <Divisory>
              <HiOutlineUsers />
              <MainData>
                <Text>Sobrenome:</Text>
                <Input
                  defaultValue={myUser.last_name}
                  {...register("last_name", { required: true })}
                />
              </MainData>
            </Divisory>
          </Card>
        </Column>
        <Column>
          <Card>
            <Divisory>
              <GiSmartphone />
              <MainData>
                <Text>Telefone:</Text>
                <Input
                  defaultValue={
                    myUser.celphone ? myUser.celphone : "Não informado"
                  }
                  {...register("celphone", { required: true })}
                />
              </MainData>
            </Divisory>
          </Card>

          <Card>
            <Divisory>
              <HiOutlineMail />
              <MainData>
                <Text>Email:</Text>
                <Input
                  defaultValue={myUser.email}
                  {...register("email", { required: true })}
                />
              </MainData>
            </Divisory>
          </Card>
        </Column>
      </Content>
    </Wrapper>
  );
}
