import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal as ModalEdit } from "react-responsive-modal";
import { companiesService } from "@/services/companies-service";
import { ICompanyParams } from "@/interfaces/ICompanyParams";
import { ICompany } from "@/interfaces/ICompany";
import { GetSwallAlert } from "@/utils/sweet-alert";
import { sanitazePayload } from "@/utils";
import {
  Wrapper,
  Header,
  HeaderTitleRow,
  HeaderTitle,
  HeaderDescription,
  FormGrid,
  Row,
  FieldGroup,
  FieldLabelRow,
  LabelIcon,
  LabelRequired,
  LabelOptional,
  Input,
  Select,
  Footer,
  SecondaryButton,
  PrimaryButton,
} from "../styles";
import "react-responsive-modal/styles.css";
import { LuBuilding2, LuUser, LuMail, LuFileText, LuToggleLeft } from "react-icons/lu";

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
      styles={{ modal: { width: "720px", maxHeight: "90vh", padding: 0 } }}
      center
    >
      <Wrapper onSubmit={handleSubmit(handleUpdate)}>
        <Header>
          <HeaderTitleRow>
            <LuBuilding2 size={20} />
            <HeaderTitle>Editar Empresa</HeaderTitle>
          </HeaderTitleRow>
          <HeaderDescription>
            Atualize as informações da empresa selecionada.
          </HeaderDescription>
        </Header>

        <FormGrid>
          <Row>
            <FieldGroup>
              <FieldLabelRow htmlFor="company-name-edit">
                <LabelIcon>
                  <LuBuilding2 size={14} />
                </LabelIcon>
                Nome <LabelRequired>*</LabelRequired>
              </FieldLabelRow>
              <Input
                id="company-name-edit"
                type="text"
                placeholder="Ex: Empresa XYZ Ltda"
                {...register("name", { required: true })}
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabelRow htmlFor="company-fantasyName-edit">
                <LabelIcon>
                  <LuUser size={14} />
                </LabelIcon>
                Nome Fantasia <LabelOptional>(Opcional)</LabelOptional>
              </FieldLabelRow>
              <Input
                id="company-fantasyName-edit"
                type="text"
                placeholder="Ex: XYZ"
                {...register("fantasyName")}
              />
            </FieldGroup>
          </Row>

          <Row>
            <FieldGroup>
              <FieldLabelRow htmlFor="company-cnpj-edit">
                <LabelIcon>
                  <LuFileText size={14} />
                </LabelIcon>
                CNPJ <LabelOptional>(Opcional)</LabelOptional>
              </FieldLabelRow>
              <Input
                id="company-cnpj-edit"
                type="text"
                placeholder="00.000.000/0001-00"
                {...register("cnpj")}
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabelRow htmlFor="company-email-edit">
                <LabelIcon>
                  <LuMail size={14} />
                </LabelIcon>
                Email <LabelRequired>*</LabelRequired>
              </FieldLabelRow>
              <Input
                id="company-email-edit"
                type="email"
                placeholder="contato@empresa.com"
                {...register("email", { required: true })}
              />
            </FieldGroup>
          </Row>

          <FieldGroup>
            <FieldLabelRow htmlFor="company-status-edit">
              <LabelIcon>
                <LuToggleLeft size={14} />
              </LabelIcon>
              Status
            </FieldLabelRow>
            <Select id="company-status-edit" {...register("status")}>
              <option value="ACTIVE">Ativo</option>
              <option value="INACTIVE">Inativo</option>
            </Select>
          </FieldGroup>
        </FormGrid>

        <Footer>
          <SecondaryButton type="button" onClick={() => setIsOpen(false)}>
            Cancelar
          </SecondaryButton>
          <PrimaryButton type="submit">Salvar alterações</PrimaryButton>
        </Footer>
      </Wrapper>
    </ModalEdit>
  );
}
