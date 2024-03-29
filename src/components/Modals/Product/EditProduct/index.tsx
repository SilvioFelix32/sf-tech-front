/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { productsService, productCategoryService } from "../../../../services";
import { CompanyContext } from "../../../../context";
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
  const company_id = useContext(CompanyContext);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const [productCategory, setProductCategory] = useState<IProductCategories[]>(
    []
  );

  const { register, handleSubmit, reset } = useForm<IProduct>({
    defaultValues: { ...selectedProduct },
  });

  useEffect(() => {
    if (product_id) {
      productsService
        .getById(product_id)
        .then((data) => setSelectedProduct(data));
      productCategoryService
        .getAll(company_id, {})
        .then((res) => setProductCategory(res.data));
    }
  }, [product_id]);

  useEffect(() => {
    reset({ ...selectedProduct });
  }, [selectedProduct]);

  async function handleUpdate(data: IProduct) {
    delete data.product_id;

    await productsService.update(company_id, product_id, {
      ...data,
      highlighted: Boolean(data.highlighted),
      for_sale: Boolean(data.for_sale),
      active: Boolean(data.active),
    });
    setReloadData(Math.random());
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
      center
    >
      <Wrapper onSubmit={handleSubmit(handleUpdate)}>
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
              {...register("title", { required: true })}
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
              {...register("value", {
                valueAsNumber: true,
              })}
            />
            <Text>Valor Desconto:</Text>
            <Input
              type="number"
              defaultValue={selectedProduct?.discount.toFixed(2)}
              {...register("discount", {
                valueAsNumber: true,
              })}
            />
          </Content>
          <Content>
            <Text>Product Category:</Text>
            <Select {...register("category_id")}>
              {productCategory.map((category) => (
                <option key={category.category_id} value={category.category_id}>
                  {category.title}
                </option>
              ))}
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
              {...register("active")}
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
