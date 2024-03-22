import { FormEvent, useContext, useEffect, useState } from "react";
import { CompanyContext } from "../../../../context";
import { v4 as uuidv4 } from "uuid";
//components
import { productCategoryService } from "../../../../services";
import productsService from "../../../../services/products-service";
import { IProduct } from "../../../../types";
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

interface modalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setReloadData(value: number);
}

export function ModalCreateProduct({
  isOpen,
  setIsOpen,
  setReloadData,
}: modalProps) {
  const company_id = useContext(CompanyContext);
  const [product, setProduct] = useState<IProduct[]>([]);
  //product data
  const [sku, setSku] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [subtitle, setSubtitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [urlBanner, setUrl] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [discount, setDiscount] = useState<number>();
  const [highlighted, setHighlighted] = useState(true);

  useEffect(() => {
    if (company_id) {
      productCategoryService
        .getAll(company_id, {})
        .then((res) => setProduct(res.data));
    }
  }, [company_id]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data: Partial<IProduct> = {
      sku: sku || uuidv4(),
      title,
      subtitle,
      description,
      urlBanner: urlBanner || "https://i.imgur.com/2HFGvvT.png",
      price,
      discount,
      highlighted,
    };

    await productsService
      .create(company_id as string, data as IProduct)
      .then(() => setReloadData(Math.random()));
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
      center
    >
      <Wrapper onSubmit={handleSubmit}>
        <Context>
          <Content>
            <Text>Sku:</Text>
            <Input
              type="string"
              placeholder="(Optional)"
              onChange={(e) => setSku(e.target.value)}
            />
            <Text>Title:</Text>
            <Input type="string" onChange={(e) => setTitle(e.target.value)} />
            <Text>Subtitle:</Text>
            <Input
              type="string"
              onChange={(e) => setSubtitle(e.target.value)}
            />
            <Text>Description:</Text>
            <Input
              type="string"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Content>
          <Content>
            <Text>urlBanner:</Text>
            <Input
              type="string"
              placeholder="(Optional)"
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
          </Content>
        </Context>
        <Button type="submit" onClick={() => setIsOpen(false)}>
          Cadastrar
        </Button>
      </Wrapper>
    </ModalCreate>
  );
}
