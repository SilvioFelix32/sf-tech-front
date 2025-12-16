import { environment } from "../../../../config/environment";
import { useForm } from "react-hook-form";
import { saleService } from "../../../../services/sale-service";
import { IUpdateSaleStatusRequest, SaleStatus } from "../../../../interfaces";
import { Modal as ModalEdit } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { GetSwallAlert } from "../../../../utils/sweet-alert";
import {
  Button,
  Content,
  Context,
  Text,
  Select,
  Wrapper,
} from "./styles";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  saleId: string;
  currentStatus?: SaleStatus;
  onUpdate: () => void;
}

export function ModalUpdateSaleStatus({
  isOpen,
  setIsOpen,
  saleId,
  currentStatus,
  onUpdate,
}: ModalProps) {
  const company_id = environment.companyId;

  const { register, handleSubmit } = useForm<IUpdateSaleStatusRequest>({
    defaultValues: {
      status: currentStatus || SaleStatus.UNDER_REVIEW,
    },
  });

  async function handleUpdate(data: IUpdateSaleStatusRequest) {
    try {
      await saleService.updateStatus(company_id, saleId, data);
      GetSwallAlert("center", "success", "Status atualizado com sucesso!", 2000);
      onUpdate();
      setIsOpen(false);
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      GetSwallAlert("center", "error", "Erro ao atualizar status. Tente novamente.", 3000);
    }
  }

  return (
    <ModalEdit
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      center
    >
      <Wrapper onSubmit={handleSubmit(handleUpdate)}>
        <Context>
          <Content>
            <Text>Selecione o novo status:</Text>
            <Select
              defaultValue={currentStatus || SaleStatus.UNDER_REVIEW}
              {...register("status", { required: true })}
            >
              <option value={SaleStatus.UNDER_REVIEW}>Em Análise</option>
              <option value={SaleStatus.APPROVED}>Aprovada</option>
              <option value={SaleStatus.IN_TRANSIT}>Em Trânsito</option>
              <option value={SaleStatus.DELIVERED}>Entregue</option>
            </Select>
          </Content>
        </Context>
        <Button type="submit">Confirmar</Button>
      </Wrapper>
    </ModalEdit>
  );
}

