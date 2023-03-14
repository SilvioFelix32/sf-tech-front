import { FormEvent, useContext } from "react";
import { Modal as ModalDelete } from "react-responsive-modal";
import { CompanyContext } from "../../../../context";
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
  const company_id = useContext(CompanyContext);

  async function handleDelete(event: FormEvent) {
    event.preventDefault();

    await productCategoryService
      .delete(company_id as string, category_id as string)
      .then(() => setReloadData(Math.random()));
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
