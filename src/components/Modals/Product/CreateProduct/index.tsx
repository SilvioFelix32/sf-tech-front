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
  Button,
  Text,
  Content,
  Wrapper,
  Input,
  Select,
  Context,
} from "./styles";
import "react-responsive-modal/styles.css";
import { GetSwallAlert, validateForm, validators } from "../../../../utils";

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
  const [highlighted, setHighlighted] = useState(true);
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
      center
    >
      <Wrapper onSubmit={handleSubmit}>
        <Context>
          <Content>
            <Text>Titulo:</Text>
            <Input type="string" onChange={(e) => setTitle(e.target.value)} />
            <Text>Subtitulo:</Text>
            <Input
              type="string"
              onChange={(e) => setSubtitle(e.target.value)}
            />
            <Text>Descrição do produto:</Text>
            <Input
              type="string"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Content>
          <Content>
            <Text>Imagem de capa:</Text>
            <Input
              type="string"
              placeholder="(Opcional)"
              onChange={(e) => setUrl(e.target.value)}
            />
            <Text>Valor:</Text>
            <Input
              type="number"
              min={0}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <Text>Valor Desconto:</Text>
            <Input
              type="number"
              min={0}
              onChange={(e) => setDiscount(Number(e.target.value))}
            />
          </Content>
          <Content>
            <Text>Em destaque:</Text>
            <Select
              onChange={(e) =>
                setHighlighted(e.target.value === "true" ? true : false)
              }
              defaultValue="false"
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </Select>
            <Text>Categoria de produto:</Text>
            {isLoading ? (
              <Text>Carregando categorias...</Text>
            ) : isError ? (
              <Text>Erro ao carregar categorias</Text>
            ) : (
              <Select
                onChange={(e) => setCategory(e.target.value)}
                defaultValue=""
              >
                <option value=""></option>
                {categories.map(
                  (category: { label: string; value: string }) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  )
                )}
              </Select>
            )}
            <Text>Sku:</Text>
            <Input
              type="string"
              placeholder="(Opcional)"
              onChange={(e) => setSku(e.target.value)}
            />
          </Content>
        </Context>
        <ValidationMessage 
          message={validationError} 
          show={!!validationError} 
        />
        <Button type="submit">Cadastrar</Button>
      </Wrapper>
    </ModalCreate>
  );
}
