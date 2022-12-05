import { useRouter } from "next/router";
import { FormEvent } from "react";
import { Modal as ModalDelete } from "react-responsive-modal";
import { productsService, userService } from "../../../services";
import { Button, Content, Text, Wrapper } from "./styles";
//styles

interface modalProps {
  user_id: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  setReloadData(value: number);
}

export function ModalDeleteUser({
  user_id,
  open,
  setOpen,
  setReloadData,
}: modalProps) {
  const {
    query: { company_id },
  } = useRouter();

  async function handleDelete(event: FormEvent) {
    event.preventDefault();

    await userService
      .delete(user_id as string, company_id as string)
      .then(() => setReloadData(Math.random()))
      .catch((err) => alert(err));
  }

  return (
    <ModalDelete
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      center
    >
      <Wrapper onSubmit={handleDelete}>
        <Text>Delete User?</Text>
        <Content>
          <Button type="submit" onClick={() => setOpen(false)}>
            Confirm
          </Button>
          <Button type="button" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Content>
      </Wrapper>
    </ModalDelete>
  );
}
