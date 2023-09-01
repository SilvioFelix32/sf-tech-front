/* eslint-disable react-hooks/exhaustive-deps */
import { CompanyContext } from "../../../../context";
import { useContext, useEffect } from "react";
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
import { ProductType, ProductTypes } from "../../../../types/IProductType";

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
  const { register, handleSubmit, reset, setValue } =
    useForm<IProductCategories>({
      defaultValues: {
        title: "",
        description: "",
        product_type: ProductType.PERIPHERAL,
        active: false,
      },
    });

  useEffect(() => {
    if (category_id) {
      productCategoryService.getById(category_id).then((data) => {
        setValue("title", data?.title || "");
        setValue("description", data?.description || "");
        setValue("product_type", data?.product_type || ProductType.PERIPHERAL);
        setValue("active", data?.active || false);
      });
    }
  }, [category_id, setValue]);

  async function handleUpdate(data: IProductCategories) {
    await productCategoryService
      .update(company_id as string, category_id as string, data)
      .then(() => setReloadData(Math.random()));
    setOnOpen(false);
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
            <Input type="string" {...register("title")} />
            <Text>Description:</Text>
            <Input type="string" {...register("description")} />
          </Content>
          <Content>
            <Text>Product type:</Text>
            <Select {...register("product_type")}>
              {ProductTypes.map((productType) => (
                <option key={productType.title} value={productType.value}>
                  {productType.title}
                </option>
              ))}
            </Select>
            <Text>Active:</Text>
            <Select {...register("active")}>
              <option value="true">true</option>
              <option value="false">false</option>
            </Select>
          </Content>
        </Context>
        <Button type="submit">Confirmar</Button>
      </Wrapper>
    </ModalEdit>
  );
}
