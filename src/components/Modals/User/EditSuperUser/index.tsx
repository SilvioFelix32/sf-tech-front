import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { userService } from "../../../../services";
import { IUser } from "../../../../types/IUser";
import { Modal as ModalEdit } from "react-responsive-modal";
import { environment } from "../../../../config/environment";
import { GetSwallAlert } from "../../../../utils/sweet-alert";
import { useQuery } from "react-query";
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
  const company_id = environment.companyId;

  const { data: selectedUser } = useQuery<IUser>(
    ["user", user_id],
    () => userService.getById(company_id as string, user_id as string),
    {
      enabled: !!user_id,
    }
  );

  const { register, handleSubmit, reset } = useForm<IUser>({
    defaultValues: { ...selectedUser },
  });

  useEffect(() => {
    reset({ ...selectedUser });
  }, [selectedUser, reset]);

  async function handleUpdate(data: IUser) {
    await userService
      .update(company_id as string, user_id as string, data)
      .then(() => {
        setReloadData(Math.random());
        GetSwallAlert("center", "info", "Dados atualizados com sucesso", 1500);
      });
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
        <Button type="submit" onClick={() => setSuperOpen(false)}>
          Confirmar
        </Button>
      </Wrapper>
    </ModalEdit>
  );
}
