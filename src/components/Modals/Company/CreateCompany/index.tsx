import { FormEvent, useState } from "react";
import { Modal as ModalCreate } from "react-responsive-modal";
import { companiesService } from "@/services/companies-service";
import { ICompanyParams } from "@/interfaces/ICompanyParams";
import { GetSwallAlert } from "@/utils";
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

interface ModalCreateCompanyProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onSuccess: () => void;
}

export function ModalCreateCompany({
  isOpen,
  setIsOpen,
  onSuccess,
}: ModalCreateCompanyProps) {
  const [name, setName] = useState("");
  const [fantasyName, setFantasyName] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [status, setStatus] = useState<"ACTIVE" | "INACTIVE">("ACTIVE");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data: ICompanyParams = {
      name: name || undefined,
      fantasyName: fantasyName || undefined,
      email: email || undefined,
      cnpj: cnpj || undefined,
      status,
    };

    await companiesService
      .create(data)
      .then(() => {
        onSuccess();
        setIsOpen(false);
        setName("");
        setFantasyName("");
        setEmail("");
        setCnpj("");
        setStatus("ACTIVE");
      })
      .catch((error: Error) => {
        GetSwallAlert("center", "error", error.message ?? "Erro ao cadastrar empresa", 2000);
      });
  }

  return (
    <ModalCreate
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      styles={{ modal: { width: "720px", maxHeight: "90vh", padding: 0 } }}
      center
    >
      <Wrapper onSubmit={handleSubmit}>
        <Header>
          <HeaderTitleRow>
            <LuBuilding2 size={20} />
            <HeaderTitle>Cadastrar Empresa</HeaderTitle>
          </HeaderTitleRow>
          <HeaderDescription>
            Preencha os campos abaixo para adicionar uma nova empresa ao sistema.
          </HeaderDescription>
        </Header>

        <FormGrid>
          <Row>
            <FieldGroup>
              <FieldLabelRow htmlFor="company-name">
                <LabelIcon>
                  <LuBuilding2 size={14} />
                </LabelIcon>
                Nome <LabelRequired>*</LabelRequired>
              </FieldLabelRow>
              <Input
                id="company-name"
                type="text"
                placeholder="Ex: Empresa XYZ Ltda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabelRow htmlFor="company-fantasyName">
                <LabelIcon>
                  <LuUser size={14} />
                </LabelIcon>
                Nome Fantasia <LabelOptional>(Opcional)</LabelOptional>
              </FieldLabelRow>
              <Input
                id="company-fantasyName"
                type="text"
                placeholder="Ex: XYZ"
                value={fantasyName}
                onChange={(e) => setFantasyName(e.target.value)}
              />
            </FieldGroup>
          </Row>

          <Row>
            <FieldGroup>
              <FieldLabelRow htmlFor="company-cnpj">
                <LabelIcon>
                  <LuFileText size={14} />
                </LabelIcon>
                CNPJ <LabelOptional>(Opcional)</LabelOptional>
              </FieldLabelRow>
              <Input
                id="company-cnpj"
                type="text"
                placeholder="00.000.000/0001-00"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabelRow htmlFor="company-email">
                <LabelIcon>
                  <LuMail size={14} />
                </LabelIcon>
                Email <LabelRequired>*</LabelRequired>
              </FieldLabelRow>
              <Input
                id="company-email"
                type="email"
                placeholder="contato@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FieldGroup>
          </Row>

          <FieldGroup>
            <FieldLabelRow htmlFor="company-status">
              <LabelIcon>
                <LuToggleLeft size={14} />
              </LabelIcon>
              Status
            </FieldLabelRow>
            <Select
              id="company-status"
              value={status}
              onChange={(e) => setStatus(e.target.value as "ACTIVE" | "INACTIVE")}
            >
              <option value="ACTIVE">Ativo</option>
              <option value="INACTIVE">Inativo</option>
            </Select>
          </FieldGroup>
        </FormGrid>

        <Footer>
          <SecondaryButton type="button" onClick={() => setIsOpen(false)}>
            Cancelar
          </SecondaryButton>
          <PrimaryButton type="submit" disabled={!name || !email}>
            Cadastrar Empresa
          </PrimaryButton>
        </Footer>
      </Wrapper>
    </ModalCreate>
  );
}
