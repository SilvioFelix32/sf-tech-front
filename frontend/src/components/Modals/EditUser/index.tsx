import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { userService } from "../../../services";
import { IUser } from "../../../types/IUser";
//components
import { Modal as ModalEdit } from "react-responsive-modal";
//styles
import {
  Button,
  Content,
  Context,
  Text,
  Input,
  Select,
  Wrapper,
} from "./styles";
import "react-responsive-modal/styles.css";

interface modalProps {
  onOpen: boolean;
  setOnOpen: (value: boolean) => void;
  setReloadData: (value: number) => void;
  user_id: string;
}

export function ModalEditUser({
  onOpen,
  setOnOpen,
  user_id,
  setReloadData,
}: modalProps) {
  const {
    query: { company_id },
  } = useRouter();
  const [selectedUser, setSelectedUSer] = useState<IUser>();

  const { register, handleSubmit } = useForm({
    defaultValues: { ...selectedUser },
  });
  console.log(user_id);

  useEffect(() => {
    if (user_id) {
      userService
        .getById(user_id as string, company_id as string)
        .then((data) => {
          console.log(data), setSelectedUSer(data);
        })
        .catch((err) => alert(err));
    }
  }, [user_id, company_id]);

  console.log(selectedUser);

  async function handleUpdate(data: IUser) {
    await userService
      .update(company_id as string, user_id as string, data)
      .then(() => setReloadData(Math.random()))
      .catch((err) => alert(err));
  }

  return (
    <ModalEdit
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={onOpen}
      onClose={() => {
        setOnOpen(false);
      }}
      center
    >
      <Wrapper onSubmit={handleSubmit(handleUpdate)}>
        <Context>
          <Content>
            <Text>Document:</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.document}
              {...register("document")}
            />
            <Text>Name:</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.name}
              {...register("name")}
            />
            <Text>Last name:</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.last_name}
              {...register("last_name")}
            />
            <Text>User name:</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.user_name}
              {...register("user_name")}
            />
          </Content>
          <Content>
            <Text>Birth date:</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.birth_date}
              {...(register("birth_date"), { valueAsDate: true })}
            />
            <Text>Celphone:</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.celphone}
              {...register("celphone")}
            />
            <Text>Valor Desconto:</Text>
            <Input
              type="email"
              defaultValue={selectedUser?.email}
              {...register("email")}
            />
          </Content>
        </Context>
        <Button type="submit" onClick={() => setOnOpen(false)}>
          Confirmar
        </Button>
      </Wrapper>
    </ModalEdit>
  );
}
