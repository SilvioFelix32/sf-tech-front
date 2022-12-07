import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { userService } from "../../../../services";
import { IUser } from "../../../../types/IUser";
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

  useEffect(() => {
    if (user_id) {
      userService
        .getById(company_id as string, user_id as string)
        .then((data) => {
          setSelectedUSer(data);
        })
        .catch((err) => alert(err));
    }
  }, [user_id, company_id]);

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
            <Text>Sex Type:</Text>
            <Select
              defaultValue={selectedUser?.sex_type}
              {...register("sex_type")}
            >
              <option value=""></option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              <option value="OTHERS">OTHERS</option>
            </Select>
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
            <Text>Email:</Text>
            <Input
              type="email"
              defaultValue={selectedUser?.email}
              {...register("email")}
            />
            <Text>CEP</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.cep}
              {...register("cep")}
            />
          </Content>
          <Content>
            <Text>State</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.state}
              {...register("state")}
            />
            <Text>City</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.city}
              {...register("city")}
            />
            <Text>Neighborhood</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.neighborhood}
              {...register("neighborhood")}
            />
            <Text>Address</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.address}
              {...register("address")}
            />
            <Text>Address Number</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.address_number}
              {...register("address_number")}
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
