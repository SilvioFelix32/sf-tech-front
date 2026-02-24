import { FormEvent, useState } from "react";
import { environment } from "../../../../config/environment";
import { Modal as ModalCreate } from "react-responsive-modal";
import { IProductCategory } from "../../../../interfaces";
import { categoryService } from "../../../../services";
import { GetSwallAlert } from "../../../../utils";
//styles
import {
  Wrapper,
  Header,
  HeaderTitleRow,
  HeaderTitle,
  HeaderDescription,
  FormGrid,
  FieldGroup,
  FieldLabelRow,
  LabelIcon,
  LabelRequired,
  LabelOptional,
  Input,
  Textarea,
  Footer,
  SecondaryButton,
  PrimaryButton,
} from "../styles";
import "react-responsive-modal/styles.css";
import { LuLayers, LuFileText } from "react-icons/lu";

interface modalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setReloadData: (value: number) => void;
}

export function ModalCreateCategory({
  isOpen,
  setIsOpen,
  setReloadData,
}: modalProps) {
  const company_id = environment.companyId;

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data: Partial<IProductCategory> = { title, description };

    try {
      await categoryService.create(company_id, data as IProductCategory);
      setReloadData(Math.random());
      setIsOpen(false);
    } catch (error: any) {
      GetSwallAlert("center", "error", error.message, 2000);
    }
  }

  return (
    <ModalCreate
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      styles={{ modal: { width: "520px", maxHeight: "80vh", padding: 0 } }}
      center
    >
      <Wrapper onSubmit={handleSubmit}>
        <Header>
          <HeaderTitleRow>
            <LuLayers size={20} />
            <HeaderTitle>Cadastrar Categoria</HeaderTitle>
          </HeaderTitleRow>
          <HeaderDescription>
            Defina um título e uma descrição para organizar seus produtos.
          </HeaderDescription>
        </Header>

        <FormGrid>
          <FieldGroup>
            <FieldLabelRow htmlFor="category-title">
              <LabelIcon>
                <LuLayers size={14} />
              </LabelIcon>
              Título <LabelRequired>*</LabelRequired>
            </FieldLabelRow>
            <Input
              id="category-title"
              placeholder="Ex: Monitores, Periféricos..."
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FieldGroup>

          <FieldGroup>
            <FieldLabelRow htmlFor="category-description">
              <LabelIcon>
                <LuFileText size={14} />
              </LabelIcon>
              Descrição <LabelOptional>(Opcional)</LabelOptional>
            </FieldLabelRow>
            <Textarea
              id="category-description"
              placeholder="Descreva brevemente o tipo de produtos desta categoria..."
              value={description || ""}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FieldGroup>
        </FormGrid>

        <Footer>
          <SecondaryButton type="button" onClick={() => setIsOpen(false)}>
            Cancelar
          </SecondaryButton>
          <PrimaryButton type="submit" disabled={!title}>
            Cadastrar Categoria
          </PrimaryButton>
        </Footer>
      </Wrapper>
    </ModalCreate>
  );
}
