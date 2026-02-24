import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal as ModalEdit } from "react-responsive-modal";
import { companiesService } from "@/services/companies-service";
import { ICompanyParams } from "@/interfaces/ICompanyParams";
import { ICompany } from "@/interfaces/ICompany";
import { GetSwallAlert } from "@/utils/sweet-alert";
import { sanitazePayload } from "@/utils";
import { Button, Content, Text, Input, Wrapper, Select } from "./styles";
import "react-responsive-modal/styles.css";

interface FormData extends ICompanyParams {
  name: string;
  fantasyName?: string;
  email: string;
  cnpj?: string;
  status?: "ACTIVE" | "INACTIVE";
}

interface ModalUpdateCompanyProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  companyId: string | undefined;
  onSuccess: () => void;
}

export function ModalUpdateCompany({
  isOpen,
  setIsOpen,
  companyId,
  onSuccess,
}: ModalUpdateCompanyProps) {
  const { register, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      name: "",
      fantasyName: "",
      email: "",
      cnpj: "",
      status: "ACTIVE",
    },
  });

  useEffect(() => {
    if (companyId && isOpen) {
      companiesService.getById(companyId).then((data: ICompany) => {
        setValue("name", data?.name ?? "");
        setValue("fantasyName", data?.fantasyName ?? "");
        setValue("email", data?.email ?? "");
        setValue("cnpj", data?.cnpj ?? "");
        setValue("status", data?.status ?? "ACTIVE");
      });
    }
  }, [companyId, isOpen, setValue]);

  async function handleUpdate(data: FormData) {
    if (!companyId) return;
    const sanitizedData = sanitazePayload(data) as ICompanyParams;
    await companiesService
      .update(companyId, sanitizedData)
      .then(() => {
        onSuccess();
        setIsOpen(false);
      })
      .catch((error: Error) => {
        console.error(error);
        GetSwallAlert("center", "error", "Erro ao atualizar empresa", 2000);
      });
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
        <Content>
          <Text>Nome:</Text>
          <Input type="text" {...register("name", { required: true })} />
          <Text>Nome Fantasia:</Text>
          <Input type="text" {...register("fantasyName")} />
          <Text>CNPJ:</Text>
          <Input type="text" {...register("cnpj")} placeholder="00.000.000/0001-00" />
          <Text>Email:</Text>
          <Input type="email" {...register("email", { required: true })} />
          <Text>Status:</Text>
          <Select {...register("status")}>
            <option value="ACTIVE">Ativo</option>
            <option value="INACTIVE">Inativo</option>
          </Select>
        </Content>
        <Button type="submit">Confirmar</Button>
      </Wrapper>
    </ModalEdit>
  );
}
