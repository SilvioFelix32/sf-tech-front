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
import { SweetAlert } from "../../../../shared/sweet-alert";

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
  const { SwallSuccess } = SweetAlert;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { ...selectedUser },
  });

  useEffect(() => {
    if (user_id) {
      userService
        .getById(company_id as string, user_id as string)
        .then((data) => {
          setSelectedUSer(data);
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
      open={onOpen}
      onClose={() => {
        setOnOpen(false);
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
              defaultValue={selectedUser?.last_name}
              {...register("last_name")}
            />
            <Text>Role:</Text>
            <Select defaultValue={selectedUser?.role} {...register("role")}>
              <option value=""></option>
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </Select>
          </Content>
        </Context>
        <Button
          type="submit"
          onClick={() => {
            setOnOpen(false);
            SwallSuccess();
          }}
        >
          Confirmar
        </Button>
      </Wrapper>
    </ModalEdit>
  );
}
