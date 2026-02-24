import { FormEvent } from "react";
import { Modal as ModalDelete } from "react-responsive-modal";
import { companiesService } from "@/services/companies-service";
import { GetSwallAlert } from "@/utils/sweet-alert";
import { Wrapper, Button, ButtonCancel, Content, Text } from "./styles";
import "react-responsive-modal/styles.css";

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
      center
    >
      <Wrapper onSubmit={handleDelete}>
        <Text>Excluir empresa?</Text>
        <Content>
          <Button type="submit">Confirmar</Button>
          <ButtonCancel type="button" onClick={() => setIsOpen(false)}>
            Cancelar
          </ButtonCancel>
        </Content>
      </Wrapper>
    </ModalDelete>
  );
}
