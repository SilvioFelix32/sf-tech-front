import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { productsService, productCategoryService } from "../../../../services";
import { IProduct } from "../../../../types";
import { IProductCategories } from "../../../../types/IProductCategories";
//components
import { Modal as ModalEdit } from "react-responsive-modal";
//styles
import {
  Button,
  Content,
  Context,
  Text,
  Input,
  Select,
  Wrapper,
} from "./styles";
import "react-responsive-modal/styles.css";

interface modalProps {
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
}: modalProps) {
  const {
    query: { company_id },
  } = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const [productCategory, setproductCategory] = useState<IProductCategories[]>(
    []
  );
  const { register, handleSubmit } = useForm({
    defaultValues: { ...selectedProduct },
  });

  useEffect(() => {
    if (product_id) {
      productsService
        .getById(product_id as string)
        .then((data) => setSelectedProduct(data))
        .catch((err) => alert(err));
      productCategoryService
        .getAll(product_id as string)
        .then((data) => setproductCategory(data))
        .catch((err) => alert(err));
    }
  }, [product_id]);

  const onSubmit = (data: IProduct) => console.log("====>", data);

  /*   async function handleUpdate(data: IProduct) {
      await productsService
        .update(company_id as string, product_id as string, data)
        .then(() => setReloadData(Math.random()))
        .catch((err) => alert(err));
  } */

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
      center
    >
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Context>
          <Content>
            <Text>Sku:</Text>
            <Input
              type="string"
              defaultValue={selectedProduct?.sku}
              {...register("sku")}
            />
            <Text>Title:</Text>
            <Input
              type="string"
              defaultValue={selectedProduct?.title}
              {...(register("title"), { required: true })}
            />
            <Text>Subtitle:</Text>
            <Input
              type="string"
              defaultValue={selectedProduct?.subtitle}
              {...register("subtitle")}
            />
            <Text>Description:</Text>
            <Input
              type="string"
              defaultValue={selectedProduct?.description}
              {...register("description")}
            />
          </Content>
          <Content>
            <Text>Url_banner:</Text>
            <Input
              type="string"
              defaultValue={selectedProduct?.url_banner}
              {...register("url_banner")}
            />
            <Text>Valor:</Text>
            <Input
              type="number"
              defaultValue={selectedProduct?.value.toFixed(2)}
              {...(register("value"),
              {
                valueAsNumber: true,
              })}
            />
            <Text>Valor Desconto:</Text>
            <Input
              type="number"
              defaultValue={selectedProduct?.discount.toFixed(2)}
              {...(register("discount"),
              {
                valueAsNumber: true,
              })}
            />
          </Content>
          <Content>
            <Text>Product Category:</Text>
            <Select
              defaultValue={selectedProduct?.category_id}
              {...register("category_id")}
            >
              <option value={selectedProduct?.category_id}>
                {selectedProduct?.product_type}
              </option>
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

            <Text>Product Type:</Text>
            <Select
              defaultValue={selectedProduct?.product_type as any}
              {...register("product_type")}
            >
              <option value={selectedProduct?.product_type}>
                {selectedProduct?.product_type}
              </option>
              <option value={"COMPUTER"}>COMPUTER</option>
              <option value={"NOTEBOOK"}>NOTEBOOK</option>
              <option value={"CELL"}>CELLPHONE</option>
              <option value={"OTHERS"}>OTHERS</option>
            </Select>

            <Text>A venda:</Text>
            <Select
              defaultValue={selectedProduct?.for_sale.toString()}
              {...register("for_sale")}
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </Select>
            <Text>Em destaque:</Text>
            <Select
              defaultValue={selectedProduct?.highlighted.toString()}
              {...register("highlighted")}
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </Select>
            <Text>Ativo:</Text>
            <Select
              defaultValue={selectedProduct?.active.toString()}
              {...register("highlighted")}
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </Select>
          </Content>
        </Context>
        <Button type="submit" onClick={() => setOnOpen(false)}>
          Confirmar
        </Button>
      </Wrapper>
    </ModalEdit>
  );
}
