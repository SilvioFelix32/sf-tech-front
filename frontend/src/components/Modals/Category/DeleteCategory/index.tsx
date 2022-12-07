import { useRouter } from "next/router";
import { FormEvent } from "react";
import { Modal as ModalDelete } from "react-responsive-modal";
import { productCategoryService } from "../../../../services";
//styles
import { Wrapper, Button, Content, Text } from "./styles";

interface modalProps {
  category_id: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  setReloadData(value: number);
}

export function ModalDeleteCategory({
  category_id,
  open,
  setOpen,
  setReloadData,
}: modalProps) {
  const {
    query: { company_id },
  } = useRouter();

  async function handleDelete(event: FormEvent) {
    event.preventDefault();

    await productCategoryService
      .delete(company_id as string, category_id as string)
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
        <Text>Delete Category?</Text>
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
