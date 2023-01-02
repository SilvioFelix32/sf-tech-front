import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
//components
import { Modal as ModalCreate } from "react-responsive-modal";
//styles
import { Button, Text, Content, Wrapper, Input, Select } from "./styles";
import "react-responsive-modal/styles.css";
import { productCategoryService } from "../../../../services/products-category-service";
import { IProductCategories } from "../../../../types/IProductCategories";
import { ProductType, ProductTypes } from "../../../../types/IProductType";

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
        <Content>
          <Text>Title:</Text>
          <Input type="string" onChange={(e) => setTitle(e.target.value)} />
          <Text>Description:</Text>
          <Input
            type="string"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Text>Product type:</Text>
          <Select
            onChange={(e) => setProduct_type(e.target.value as ProductType)}
          >
            <option value=""></option>
            {ProductTypes.map((productType) => (
              <option key={productType.title} value={productType.value}>
                {productType.title}
              </option>
            ))}
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
        <Button type="submit" onClick={() => setIsOpen(false)}>
          Cadastrar
        </Button>
      </Wrapper>
    </ModalCreate>
  );
}
