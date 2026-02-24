import { FormEvent } from "react";
import { Modal as ModalDelete } from "react-responsive-modal";
import { companiesService } from "@/services/companies-service";
import { GetSwallAlert } from "@/utils/sweet-alert";
import {
  Wrapper,
  Header,
  HeaderTitleRow,
  HeaderTitle,
  HeaderDescription,
  Text,
  Footer,
  SecondaryButton,
  PrimaryButton,
} from "../styles";
import "react-responsive-modal/styles.css";
import { LuTrash2 } from "react-icons/lu";

interface ModalDeleteCompanyProps {
  companyId: string | undefined;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onSuccess: () => void;
}

export function ModalDeleteCompany({
  companyId,
  isOpen,
  setIsOpen,
  onSuccess,
}: ModalDeleteCompanyProps) {
  async function handleDelete(event: FormEvent) {
    event.preventDefault();
    if (!companyId) return;

    await companiesService
      .delete(companyId)
      .then(() => {
        onSuccess();
        setIsOpen(false);
      })
      .catch((error: Error) => {
        console.error(error);
        GetSwallAlert("center", "error", "Erro ao excluir empresa", 2000);
      });
  }

  return (
    <ModalDelete
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      styles={{ modal: { width: "420px", maxHeight: "60vh", padding: 0 } }}
      center
    >
      <Wrapper onSubmit={handleDelete}>
        <Header>
          <HeaderTitleRow>
            <LuTrash2 size={20} />
            <HeaderTitle>Excluir empresa</HeaderTitle>
          </HeaderTitleRow>
          <HeaderDescription>
            Tem certeza que deseja excluir esta empresa? Esta ação não pode ser
            desfeita.
          </HeaderDescription>
        </Header>

        <Text>Os dados associados à empresa serão removidos permanentemente.</Text>

        <Footer>
          <SecondaryButton type="button" onClick={() => setIsOpen(false)}>
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
