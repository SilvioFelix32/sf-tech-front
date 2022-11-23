import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { productsService } from "../../../services";
import { IProduct } from "../../../types";
//components
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
import { productCategoryService } from "../../../services/products-category-service";
import { IProductCategories } from "../../../types/IProductCategories";
import { ProductType, ProductTypes } from "../../../types/IProductType";

interface modalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setReloadData(value: number);
}

export function ModalCreateCategory({
  isOpen,
  setIsOpen,
  setReloadData,
}: modalProps) {
  const {
    query: { company_id },
  } = useRouter();
  //product data
  const [product_type, setProduct_type] = useState<ProductType>(
    ProductType.OTHERS
  );
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [active, setActive] = useState(true);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data: Partial<IProductCategories> = {
      product_type,
      title,
      description,
      active,
    };

    await productCategoryService
      .create(company_id as string, data as IProductCategories)
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
            <Text>Title:</Text>
            <Input type="string" onChange={(e) => setTitle(e.target.value)} />
            <Text>Description:</Text>
            <Input
              type="string"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Content>
          <Content>
            <Text>Product Category:</Text>
            {/* <Select onChange={(e) => setProduct_type(e.target.value)}>
              <option></option>
              {ProductTypes.map((productType) => {
                return (
                  <option key={productType} value={productType}>
                    {productType}
                  </option>
                );
              })}
            </Select> */}

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
