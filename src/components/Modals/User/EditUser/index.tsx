import { environment } from "../../../../utils/environment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { userService } from "../../../../services";
import { IUser } from "../../../../types/IUser";
import { Modal as ModalEdit } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { GetSwallAlert } from "../../../../utils/sweet-alert";
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
}: ModalProps) {
  const company_id = environment.companyId;
  const [selectedUser, setSelectedUser] = useState<IUser>();

  const { register, handleSubmit, reset } = useForm<IUser>({
    defaultValues: { ...selectedUser },
  });

  useEffect(() => {
    if (user_id) {
      userService.getById(company_id, user_id).then((data) => {
        setSelectedUser(data);
      });
    }
  }, [user_id, company_id]);

  useEffect(() => {
    reset({ ...selectedUser });
  }, [selectedUser]);

  async function handleUpdate(data: IUser) {
    await userService
      .update(company_id, user_id, data)
      .then(() => setReloadData(Math.random()));
  }

  const closeModal = () => {
    setOnOpen(false);
    GetSwallAlert("top-end", "success", "Sucesso", 1500);
  };

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
            <Text>Nome:</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.name}
              {...register("name")}
            />
            <Text>Sobrenome:</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.lastName}
              {...register("lastName")}
            />
            <Text>Email:</Text>
            <Input
              type="string"
              defaultValue={selectedUser?.email}
              {...register("email")}
            />
            <Text>Regra:</Text>
            <Select defaultValue={selectedUser?.role} {...register("role")}>
              <option value="USER">USUÁRIO</option>
              <option value="ADMIN">ADMINISTRADOR</option>
            </Select>
          </Content>
        </Context>
        <Button type="submit" onClick={closeModal}>
          Confirmar
        </Button>
      </Wrapper>
    </ModalEdit>
  );
}
