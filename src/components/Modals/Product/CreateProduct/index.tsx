import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useMutation, useQueryClient } from "react-query";
import { useCategoryFilter } from "../../../../hooks/useCategoryFilter";
//components
import { productsService } from "../../../../services";
import { IProduct, IProductCategory } from "../../../../interfaces";
import { Modal as ModalCreate } from "react-responsive-modal";
import { ValidationMessage } from "../../../ValidationMessage";
//styles
import {
  Wrapper,
  Header,
  HeaderTitleRow,
  HeaderTitle,
  HeaderDescription,
  FormGrid,
  Row,
  RowThree,
  FieldGroup,
  FieldLabelRow,
  LabelIcon,
  LabelRequired,
  LabelOptional,
  Input,
  Select,
  Textarea,
  ImagePreview,
  PriceSummary,
  Footer,
  SecondaryButton,
  PrimaryButton,
} from "../styles";
import "react-responsive-modal/styles.css";
import { GetSwallAlert, validateForm, validators } from "../../../../utils";
import {
  LuPackage,
  LuFileText,
  LuDollarSign,
  LuLayers,
  LuImagePlus,
  LuTag,
  LuStar,
} from "react-icons/lu";

interface modalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setReloadData(value: number): void;
}

export function ModalCreateProduct({
  isOpen,
  setIsOpen,
  setReloadData,
}: modalProps) {
  const queryClient = useQueryClient();

  const [category, setCategory] = useState<string>();
  const [sku, setSku] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [subtitle, setSubtitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [urlBanner, setUrl] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [discount, setDiscount] = useState<number>();
  const [highlighted, setHighlighted] = useState(false);
  const [validationError, setValidationError] = useState<string>("");

  const {
    value: { productCategories },
    isLoading,
    isError,
  } = useCategoryFilter({ page: 1, perPage: 20 });

  const mutation = useMutation(
    (newProduct: Partial<IProduct>) =>
      productsService.create(category, newProduct as IProduct),
    {
      onSuccess: () => {
        setReloadData(Math.random());
        queryClient.invalidateQueries("products");
      },
      onError: (error: Error) => {
        GetSwallAlert(
          "center",
          "error",
          `Erro ao cadastrar produto: ${error.message}`,
          2000
        );
      },
    }
  );

  const categories = productCategories.map((category: IProductCategory) => ({
    label: category.title,
    value: category.category_id,
  }));

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setValidationError("");

    const validation = validateForm([
      { field: "title", value: title, message: "O campo Título é obrigatório", validator: validators.requiredString },
      { field: "subtitle", value: subtitle, message: "O campo Subtítulo é obrigatório", validator: validators.requiredString },
      { field: "description", value: description, message: "O campo Descrição é obrigatório", validator: validators.requiredString },
      { field: "category", value: category, message: "O campo Categoria é obrigatório", validator: validators.selectedOption },
      { field: "price", value: price, message: "O campo Valor deve ser maior que zero", validator: validators.positiveNumber }
    ]);

    if (!validation.isValid) {
      setValidationError(validation.errorMessage);
      return;
    }

    const data: Partial<IProduct> = {
      sku: sku || uuidv4(),
      category_id: category,
      title,
      subtitle,
      description,
      urlBanner: urlBanner || "https://i.imgur.com/2HFGvvT.png",
      price,
      discount,
      highlighted,
    };

    mutation.mutate(data);
    setIsOpen(false);
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
            <LuPackage size={20} />
            <HeaderTitle>Cadastrar Novo Produto</HeaderTitle>
          </HeaderTitleRow>
          <HeaderDescription>
            Preencha os campos abaixo para adicionar um novo produto ao catálogo.
          </HeaderDescription>
        </Header>

        <FormGrid>
          <Row>
            <FieldGroup>
              <FieldLabelRow htmlFor="title">
                <LabelIcon>
                  <LuFileText size={14} />
                </LabelIcon>
                Título <LabelRequired>*</LabelRequired>
              </FieldLabelRow>
              <Input
                id="title"
                placeholder="Ex: PC Gamer Starter"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabelRow htmlFor="highlighted">
                <LabelIcon>
                  <LuStar size={14} />
                </LabelIcon>
                Em destaque
              </FieldLabelRow>
              <Select
                id="highlighted"
                value={String(highlighted)}
                onChange={(e) => setHighlighted(e.target.value === "true")}
              >
                <option value="false">Não</option>
                <option value="true">Sim</option>
              </Select>
            </FieldGroup>
          </Row>

          <RowThree>
            <FieldGroup>
              <FieldLabelRow htmlFor="subtitle">
                <LabelIcon>
                  <LuFileText size={14} />
                </LabelIcon>
                Subtítulo
              </FieldLabelRow>
              <Input
                id="subtitle"
                placeholder="Ex: Montagem Completa"
                value={subtitle || ""}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabelRow htmlFor="price">
                <LabelIcon>
                  <LuDollarSign size={14} />
                </LabelIcon>
                Valor <LabelRequired>*</LabelRequired>
              </FieldLabelRow>
              <Input
                id="price"
                type="number"
                min={0}
                step="0.01"
                placeholder="0,00"
                value={price ?? ""}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabelRow htmlFor="category_id">
                <LabelIcon>
                  <LuLayers size={14} />
                </LabelIcon>
                Categoria <LabelRequired>*</LabelRequired>
              </FieldLabelRow>
              {isLoading ? (
                <Input disabled value="Carregando categorias..." />
              ) : isError ? (
                <Input disabled value="Erro ao carregar categorias" />
              ) : (
                <Select
                  id="category_id"
                  value={category || ""}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Selecione...</option>
                  {categories.map((categoryOption) => (
                    <option
                      key={categoryOption.value}
                      value={categoryOption.value}
                    >
                      {categoryOption.label}
                    </option>
                  ))}
                </Select>
              )}
            </FieldGroup>
          </RowThree>

          <FieldGroup>
            <FieldLabelRow htmlFor="urlBanner">
              <LabelIcon>
                <LuImagePlus size={14} />
              </LabelIcon>
              Imagem de capa
              <LabelOptional>(Opcional)</LabelOptional>
            </FieldLabelRow>
            <Input
              id="urlBanner"
              placeholder="https://exemplo.com/imagem.jpg"
              value={urlBanner || ""}
              onChange={(e) => setUrl(e.target.value)}
            />
            {urlBanner && (
              <ImagePreview>
                <img
                  src={urlBanner}
                  alt="Preview"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </ImagePreview>
            )}
          </FieldGroup>

          <FieldGroup>
            <FieldLabelRow htmlFor="description">
              <LabelIcon>
                <LuFileText size={14} />
              </LabelIcon>
              Descrição do produto
            </FieldLabelRow>
            <Textarea
              id="description"
              placeholder="Descreva as características e detalhes do produto..."
              value={description || ""}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FieldGroup>

          <Row>
            <FieldGroup>
              <FieldLabelRow htmlFor="discount">
                <LabelIcon>
                  <LuTag size={14} />
                </LabelIcon>
                Valor Desconto
              </FieldLabelRow>
              <Input
                id="discount"
                type="number"
                min={0}
                step="0.01"
                placeholder="0,00"
                value={discount ?? ""}
                onChange={(e) => setDiscount(Number(e.target.value))}
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabelRow htmlFor="sku">
                <LabelIcon>
                  <LuPackage size={14} />
                </LabelIcon>
                SKU
                <LabelOptional>(Opcional)</LabelOptional>
              </FieldLabelRow>
              <Input
                id="sku"
                placeholder="Gerado automaticamente se vazio"
                value={sku || ""}
                onChange={(e) => setSku(e.target.value)}
              />
            </FieldGroup>
          </Row>

          {price && discount && discount > 0 && (
            <PriceSummary>
              <span>Resumo de preço:</span>
              <div className="line">
                <span className="old">
                  R${" "}
                  {price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </span>
                <span className="new">
                  R${" "}
                  {(price - discount).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </span>
                <span className="badge">
                  {Math.round((discount / price) * 100)}% OFF
                </span>
              </div>
            </PriceSummary>
          )}
        </FormGrid>

        <ValidationMessage
          message={validationError}
          show={!!validationError}
        />

        <Footer>
          <SecondaryButton type="button" onClick={() => setIsOpen(false)}>
            Cancelar
          </SecondaryButton>
          <PrimaryButton
            type="submit"
            disabled={!title || !price || !category}
          >
            Cadastrar Produto
          </PrimaryButton>
        </Footer>
      </Wrapper>
    </ModalCreate>
  );
}
