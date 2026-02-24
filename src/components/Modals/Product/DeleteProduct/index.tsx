import { FormEvent } from "react";
import { Modal as ModalDelete } from "react-responsive-modal";
import { productsService } from "../../../../services";
import { GetSwallAlert } from "../../../../utils";
import {
  Wrapper,
  Header,
  HeaderTitleRow,
  HeaderTitle,
  HeaderDescription,
  Footer,
  SecondaryButton,
  PrimaryButton,
} from "../styles";
import "react-responsive-modal/styles.css";
import { LuTrash2 } from "react-icons/lu";

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
      .then(() => {
        setReloadData(Math.random());
        setOpen(false);
      })
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
      onClose={() => setOpen(false)}
      styles={{ modal: { width: "420px", maxHeight: "60vh", padding: 0 } }}
      center
    >
      <Wrapper onSubmit={handleDelete}>
        <Header>
          <HeaderTitleRow>
            <LuTrash2 size={20} />
            <HeaderTitle>Excluir produto</HeaderTitle>
          </HeaderTitleRow>
          <HeaderDescription>
            Tem certeza que deseja excluir este produto? Esta ação não pode ser
            desfeita.
          </HeaderDescription>
        </Header>

        <Footer>
          <SecondaryButton type="button" onClick={() => setOpen(false)}>
            Cancelar
          </SecondaryButton>
          <PrimaryButton $danger type="submit">
            Confirmar exclusão
          </PrimaryButton>
        </Footer>
      </Wrapper>
    </ModalDelete>
  );
}
