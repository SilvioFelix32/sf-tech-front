import { FormEvent } from "react";
import { Modal as ModalDelete } from "react-responsive-modal";
import { productsService } from "../../../../services";
import { GetSwallAlert } from "../../../../utils";
//styles
import { Wrapper, Button, Content, Text } from "./styles";

interface modalProps {
  product_id: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  setReloadData(value: number);
}

export function ModalDeleteProduct({
  product_id,
  open,
  setOpen,
  setReloadData,
}: modalProps) {
  async function handleDelete(event: FormEvent) {
    event.preventDefault();

    await productsService
      .delete(product_id)
      .then(() => setReloadData(Math.random()))
      .catch((error) => {
        GetSwallAlert("center", "error", error.message, 2000);
      });
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
        <Text>Delete Product?</Text>
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
