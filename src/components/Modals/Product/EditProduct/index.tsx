import { useForm } from "react-hook-form";
import { IProduct, IProductCategory, IUpdateProduct } from "../../../../interfaces";
import { productsService } from "../../../../services";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useCategoryFilter } from "../../../../hooks/useCategoryFilter";
import { Modal as ModalEdit } from "react-responsive-modal";
import { GetSwallAlert, sanitazePayload } from "../../../../utils";
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
import {
  LuPackage,
  LuFileText,
  LuDollarSign,
  LuLayers,
  LuImagePlus,
  LuTag,
} from "react-icons/lu";

interface ModalProps {
  onOpen: boolean;
  setOnOpen: (value: boolean) => void;
  setReloadData: (value: number) => void;
  product_id: string;
}

export function ModalEditProduct({
  onOpen,
  setOnOpen,
  product_id,
  setReloadData,
}: ModalProps) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, watch } = useForm<IProduct>();

  const { isLoading: isProductLoading } = useQuery(
    ["product", product_id],
    () => productsService.getById(product_id),
    {
      enabled: !!product_id,
      onSuccess: (data) => {
        reset({ ...data });
      },
    }
  );

  const {
    value: { productCategories },
    isLoading,
    isError,
  } = useCategoryFilter({ page: 1, perPage: 20 });

  const mutation = useMutation(
    async (data: IUpdateProduct) => {
      const sanitizedData = sanitazePayload(data);
      const { product_id, ...rest } = sanitizedData;
      try {
        return await productsService.update(product_id, {
          ...rest,
          highlighted: Boolean(data.highlighted),
        });
      } catch (error) {
        console.error(error);
        GetSwallAlert("center", "error", "Erro ao atualizar produto", 2000);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["products"]);
        setReloadData(Math.random());
        setOnOpen(false);
      },
    }
  );

  const watchedPrice = watch("price");
  const watchedDiscount = watch("discount");
  const watchedUrlBanner = watch("urlBanner");

  function handleUpdate(data: IProduct) {
    mutation.mutate(data);
  }

  if (isProductLoading) return <div>Carregando...</div>;

  return (
    <ModalEdit
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={onOpen}
      onClose={() => setOnOpen(false)}
      styles={{ modal: { width: "720px", maxHeight: "90vh", padding: 0 } }}
      center
    >
      <Wrapper onSubmit={handleSubmit(handleUpdate)}>
        <Header>
          <HeaderTitleRow>
            <LuPackage size={20} />
            <HeaderTitle>Editar Produto</HeaderTitle>
          </HeaderTitleRow>
          <HeaderDescription>
            Atualize as informações abaixo para editar o produto selecionado.
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
                {...register("title", { required: true })}
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabelRow htmlFor="highlighted">
                <LabelIcon>
                  <LuTag size={14} />
                </LabelIcon>
                Em destaque
              </FieldLabelRow>
              <Select id="highlighted" {...register("highlighted")}>
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
                {...register("subtitle")}
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
                step="0.01"
                placeholder="0,00"
                {...register("price", { valueAsNumber: true })}
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
                <Select id="category_id" {...register("category_id")}>
                  <option value="">Selecione...</option>
                  {productCategories.map((category: IProductCategory) => (
                    <option
                      key={category.category_id}
                      value={category.category_id}
                    >
                      {category.title}
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
              {...register("urlBanner")}
            />
            {watchedUrlBanner && (
              <ImagePreview>
                <img
                  src={watchedUrlBanner}
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
              {...register("description")}
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
                step="0.01"
                placeholder="0,00"
                {...register("discount", { valueAsNumber: true })}
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
              <Input id="sku" {...register("sku")} />
            </FieldGroup>
          </Row>

          {watchedPrice && watchedDiscount && watchedDiscount > 0 && (
            <PriceSummary>
              <span>Resumo de preço:</span>
              <div className="line">
                <span className="old">
                  R${" "}
                  {Number(watchedPrice).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </span>
                <span className="new">
                  R${" "}
                  {Number(watchedPrice - watchedDiscount).toLocaleString(
                    "pt-BR",
                    {
                      minimumFractionDigits: 2,
                    }
                  )}
                </span>
                <span className="badge">
                  {Math.round(
                    (Number(watchedDiscount) / Number(watchedPrice)) * 100
                  )}
                  % OFF
                </span>
              </div>
            </PriceSummary>
          )}
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

