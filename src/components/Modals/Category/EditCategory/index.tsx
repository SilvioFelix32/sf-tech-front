/* eslint-disable react-hooks/exhaustive-deps */
import { CompanyContext } from "../../../../context";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IProductCategories } from "../../../../types/IProductCategories";
import { productCategoryService } from "../../../../services";
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
import { ProductTypes } from "../../../../types/IProductType";

interface modalProps {
  onOpen: boolean;
  setOnOpen: (value: boolean) => void;
  setReloadData: (value: number) => void;
  category_id: string;
}

export function ModalEditCategory({
  onOpen,
  setOnOpen,
  category_id,
  setReloadData,
}: modalProps) {
  const company_id = useContext(CompanyContext);
  const [productCategory, setproductCategory] = useState<IProductCategories>();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { ...productCategory },
  });

  useEffect(() => {
    if (category_id) {
      productCategoryService
        .getById(category_id)
        .then((data) => setproductCategory(data as any));
    }
  }, [category_id]);

  useEffect(() => {
    reset({ ...productCategory });
  }, [productCategory]);

  async function handleUpdate(data: IProductCategories) {
    await productCategoryService
      .update(company_id as string, category_id as string, data)
      .then(() => setReloadData(Math.random()));
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
            <Text>Title:</Text>
            <Input
              type="string"
              defaultValue={productCategory?.title}
              {...register("title")}
            />
            <Text>Description:</Text>
            <Input
              type="string"
              defaultValue={productCategory?.description}
              {...register("description")}
            />
          </Content>
          <Content>
            <Text>Product type:</Text>
            <Select
              defaultValue={productCategory?.product_type}
              {...register("product_type")}
            >
              {ProductTypes.map((productType) => (
                <option key={productType.title} value={productType.value}>
                  {productType.title}
                </option>
              ))}
            </Select>
            <Text>Active:</Text>
            <Select
              defaultValue={productCategory?.active === true ? "true" : "false"}
              {...(register("active"), { valueAsBoolean: true })}
            >
              <option value="true">true</option>
              <option value="false">false</option>
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
