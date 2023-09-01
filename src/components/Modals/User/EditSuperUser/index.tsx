import { CompanyContext } from "../../../../context";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { userService } from "../../../../services";
import { IUser } from "../../../../types/IUser";
import { Modal as ModalEdit } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { SweetAlert } from "../../../../shared/sweet-alert";
import {
  Button,
  Content,
  Context,
  Text,
  Input,
  Select,
  Wrapper,
} from "./styles";

interface ModalProps {
  superOpen: boolean;
  setSuperOpen: (value: boolean) => void;
  setReloadData: (value: number) => void;
  user_id: string;
}

export function ModalEditSuperUser({
  superOpen,
  setSuperOpen,
  user_id,
  setReloadData,
}: ModalProps) {
  const company_id = useContext(CompanyContext);
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const { SwallSuccess } = SweetAlert;

  const { register, handleSubmit, reset } = useForm<IUser>({
    defaultValues: { ...selectedUser },
  });

  useEffect(() => {
    if (user_id) {
      userService
        .getById(company_id as string, user_id as string)
        .then((data) => {
          setSelectedUser(data);
        });
    }
  }, [user_id, company_id]);

  useEffect(() => {
    reset({ ...selectedUser });
  }, [selectedUser]);

  async function handleUpdate(data: IUser) {
    await userService
      .update(company_id as string, user_id as string, data)
      .then(() => setReloadData(Math.random()));
  }

  return (
    <ModalEdit
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={superOpen}
      onClose={() => {
        setSuperOpen(false);
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
            <Text>Role:</Text>
            <Select defaultValue={selectedUser?.role} {...register("role")}>
              <option value=""></option>
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
              <option value="MASTER">MASTER</option>
            </Select>
          </Content>
          <Content>
            <Text>Birth date:</Text>
            <Input
              type="date"
              defaultValue={selectedUser?.birth_date}
              {...register("birth_date")}
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
        <Button
          type="submit"
          onClick={() => {
            setSuperOpen(false);
            SwallSuccess();
          }}
        >
          Confirmar
        </Button>
      </Wrapper>
    </ModalEdit>
  );
}
