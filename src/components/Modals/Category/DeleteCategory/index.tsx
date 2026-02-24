import { FormEvent } from "react";
import { Modal as ModalDelete } from "react-responsive-modal";
import { categoryService } from "../../../../services";
import {
  Wrapper,
  Header,
  HeaderTitleRow,
  HeaderTitle,
  HeaderDescription,
  Text,
  Content,
  Footer,
  SecondaryButton,
  PrimaryButton,
} from "../styles";
import { GetSwallAlert } from "../../../../utils/sweet-alert";
import { LuTrash2 } from "react-icons/lu";

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
  async function handleDelete(event: FormEvent) {
    event.preventDefault();

    await categoryService
      .delete(category_id)
      .then(() => setReloadData(Math.random()))
      .catch((error) => {
        console.error(error);
        GetSwallAlert("center", "error", "Erro ao deletar categoria", 2000);
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
      styles={{ modal: { width: "420px", maxHeight: "60vh", padding: 0 } }}
      center
    >
      <Wrapper onSubmit={handleDelete}>
        <Header>
          <HeaderTitleRow>
            <LuTrash2 size={20} />
            <HeaderTitle>Excluir categoria</HeaderTitle>
          </HeaderTitleRow>
          <HeaderDescription>
            Tem certeza que deseja excluir esta categoria? Esta ação não pode ser
            desfeita.
          </HeaderDescription>
        </Header>

        <Text>Os produtos vinculados continuarão existindo, mas sem esta categoria.</Text>

        <Footer>
          <SecondaryButton type="button" onClick={() => setOpen(false)}>
            Cancelar
          </SecondaryButton>
          <PrimaryButton $danger type="submit" onClick={() => setOpen(false)}>
            Confirmar exclusão
          </PrimaryButton>
        </Footer>
      </Wrapper>
    </ModalDelete>
  );
}
