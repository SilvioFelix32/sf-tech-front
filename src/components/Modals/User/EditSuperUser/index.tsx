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
            <Text>Name:</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.name}
              {...register("name")}
            />
            <Text>Last name:</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.lastName}
              {...register("lastName")}
            />
            <Text>Sex Type:</Text>

            <Text>Role:</Text>
            <Select defaultValue={selectedUser?.role} {...register("role")}>
              <option value=""></option>
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
              <option value="MASTER">MASTER</option>
            </Select>
          </Content>
          <Content>
            <Text>Email:</Text>
            <Input
              type="email"
              defaultValue={selectedUser?.email}
              {...register("email")}
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
