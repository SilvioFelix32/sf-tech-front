import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
//components
import { IProductCategories } from "../../../../types/IProductCategories";
import { productCategoryService, productsService } from "../../../../services";
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
  const {
    query: { company_id },
  } = useRouter();
  const router = useRouter();
  const [productCategory, setProductCategory] = useState<IProductCategories[]>(
    []
  );
  //product data
  const [category_id, setCategory_id] = useState<string>();
  const [sku, setSku] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [subtitle, setSubtitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [url_banner, setUrl] = useState<string>();
  const [value, setValue] = useState<number>();
  const [discount, setDiscount] = useState<number>();
  const [active, setActive] = useState(true);
  const [combo, setCombo] = useState(true);
  const [for_sale, setFor_sale] = useState(true);
  const [highlighted, setHighlighted] = useState(true);

  useEffect(() => {
    if (company_id) {
      productCategoryService
        .getAll(company_id as string)
        .then((data) => setProductCategory(data))
        .catch((err) => alert(err));
    }
  }, [company_id]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data: Partial<IProduct> = {
      sku: sku || uuidv4(),
      title,
      subtitle,
      description,
      url_banner: url_banner || "https://i.imgur.com/2HFGvvT.png",
      value,
      discount,
      active,
      combo,
      for_sale,
      highlighted,
    };

    await productsService
      .create(category_id as string, company_id as string, data as IProduct)
      .then(() => setReloadData(Math.random()))
      .catch((err) => alert(err));
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
            <Text>Url_banner:</Text>
            <Input
              type="string"
              placeholder="(Optional)"
              onChange={(e) => setUrl(e.target.value)}
            />
            <Text>Valor:</Text>
            <Input
              type="number"
              onChange={(e) => setValue(Number(e.target.value))}
            />
            <Text>Valor Desconto:</Text>
            <Input
              type="number"
              onChange={(e) => setDiscount(Number(e.target.value))}
            />
          </Content>
          <Content>
            <Text>Product Category:</Text>
            <Select onChange={(e) => setCategory_id(e.target.value)}>
              <option></option>
              {productCategory.map((category) => {
                return (
                  <option
                    key={category?.category_id}
                    value={category?.category_id}
                  >
                    {category?.product_type}
                  </option>
                );
              })}
            </Select>

            <Text>A venda:</Text>
            <Select
              onChange={(e) =>
                setFor_sale(e.target.value === "true" ? true : false)
              }
              defaultValue="true"
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </Select>
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
            <Text>Ativo:</Text>
            <Select
              onChange={(e) =>
                setActive(e.target.value === "true" ? true : false)
              }
              defaultValue="true"
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
