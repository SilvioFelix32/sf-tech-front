import { FormEvent, useState } from "react";
import { environment } from "../../../../config/environment";
import { v4 as uuidv4 } from "uuid";
import { useQuery, useMutation, useQueryClient } from "react-query";
//components
import { categoryService, productsService } from "../../../../services";
import { IProduct, IProductCategory } from "../../../../types";
import { Modal as ModalCreate } from "react-responsive-modal";
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
import { ICategoryResponse } from "../../../../services/interfaces/ICategoryResponse";

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
  const company_id = environment.companyId;
  const queryClient = useQueryClient();

  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery<ICategoryResponse, Error>(
    ["categories", company_id],
    () => categoryService.getAll(company_id, { page: 1, limit: 20 }),
    {
      enabled: !!company_id,
    }
  );

  const mutation = useMutation(
    (newProduct: Partial<IProduct>) =>
      productsService.create(company_id, newProduct as IProduct),
    {
      onSuccess: () => {
        setReloadData(Math.random());
        queryClient.invalidateQueries("products");
      },
    }
  );

  const [category, setCategory] = useState<string>();
  const [sku, setSku] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [subtitle, setSubtitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [urlBanner, setUrl] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [discount, setDiscount] = useState<number>();
  const [highlighted, setHighlighted] = useState(true);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

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
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <Text>Valor Desconto:</Text>
            <Input
              type="number"
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
                {categories?.data.map((category: IProductCategory) => (
                  <option
                    key={category.category_id}
                    value={category.category_id}
                  >
                    {category.title}
                  </option>
                ))}
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
        <Button type="submit">Cadastrar</Button>
      </Wrapper>
    </ModalCreate>
  );
}
