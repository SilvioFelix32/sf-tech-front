import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal as ModalEdit } from "react-responsive-modal";
import { environment } from "../../../../config/environment";
import { categoryService } from "../../../../services";
import { GetSwallAlert } from "../../../../utils/sweet-alert";
import { sanitazePayload } from "../../../../utils";
import { IProductCategory } from "../../../../interfaces";
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
  onOpen: boolean;
  setOnOpen: (value: boolean) => void;
  setReloadData: (value: number) => void;
  category_id: string;
}

export function ModalEditCategory({
  onOpen,
  setOnOpen,
  category_id,
  setReloadData,
}: modalProps) {
  const company_id = environment.companyId;
  const { register, handleSubmit, setValue } = useForm<IProductCategory>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (category_id) {
      categoryService.getById(category_id).then((data) => {
        setValue("title", data?.title || "");
        setValue("description", data?.description || "");
      });
    }
  }, [category_id, setValue]);

  async function handleUpdate(data: IProductCategory) {
    const sanitizedData = sanitazePayload(data);
    await categoryService
      .update(company_id, category_id, {
        ...sanitizedData,
      })
      .then(() => setReloadData(Math.random()))
      .catch((error) => {
        console.error(error.name, error.message);
        GetSwallAlert("center", "error", "Erro ao atualizar categoria", 2000);
      });
    setOnOpen(false);
  }

  return (
    <ModalEdit
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={onOpen}
      onClose={() => {
        setOnOpen(false);
      }}
      styles={{ modal: { width: "520px", maxHeight: "80vh", padding: 0 } }}
      center
    >
      <Wrapper onSubmit={handleSubmit(handleUpdate)}>
        <Header>
          <HeaderTitleRow>
            <LuLayers size={20} />
            <HeaderTitle>Editar Categoria</HeaderTitle>
          </HeaderTitleRow>
          <HeaderDescription>
            Altere o título ou a descrição desta categoria de produtos.
          </HeaderDescription>
        </Header>

        <FormGrid>
          <FieldGroup>
            <FieldLabelRow htmlFor="category-title-edit">
              <LabelIcon>
                <LuLayers size={14} />
              </LabelIcon>
              Título <LabelRequired>*</LabelRequired>
            </FieldLabelRow>
            <Input
              id="category-title-edit"
              placeholder="Ex: Monitores, Periféricos..."
              {...register("title", { required: true })}
            />
          </FieldGroup>

          <FieldGroup>
            <FieldLabelRow htmlFor="category-description-edit">
              <LabelIcon>
                <LuFileText size={14} />
              </LabelIcon>
              Descrição <LabelOptional>(Opcional)</LabelOptional>
            </FieldLabelRow>
            <Textarea
              id="category-description-edit"
              placeholder="Descreva brevemente o tipo de produtos desta categoria..."
              {...register("description")}
            />
          </FieldGroup>
        </FormGrid>

        <Footer>
          <SecondaryButton type="button" onClick={() => setOnOpen(false)}>
            Cancelar
          </SecondaryButton>
          <PrimaryButton type="submit">Salvar alterações</PrimaryButton>
        </Footer>
      </Wrapper>
    </ModalEdit>
  );
}
