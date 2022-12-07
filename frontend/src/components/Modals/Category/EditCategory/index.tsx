import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IProductCategories } from "../../../../types/IProductCategories";
import { productCategoryService } from "../../../../services";
//components
import { Modal as ModalEdit } from "react-responsive-modal";
//styles
import { Button, Content, Context, Text, Input, Wrapper } from "./styles";
import "react-responsive-modal/styles.css";

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
  const {
    query: { company_id },
  } = useRouter();
  const [productCategory, setproductCategory] = useState<IProductCategories>();
  const { register, handleSubmit } = useForm({
    defaultValues: { ...productCategory },
  });

  useEffect(() => {
    if (category_id) {
      productCategoryService
        .getAll(category_id as string)
        .then((data) => setproductCategory(data as any))
        .catch((err) => alert(err));
    }
  }, [category_id]);

  async function handleUpdate(data: IProductCategories) {
    await productCategoryService
      .update(company_id as string, category_id as string, data)
      .then(() => setReloadData(Math.random()))
      .catch((err) => alert(err));
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
            <Text>Product_type:</Text>
            <Input
              type="string"
              defaultValue={productCategory?.product_type}
              {...register("product_type")}
            />
          </Content>
        </Context>
        <Button type="submit" onClick={() => setOnOpen(false)}>
          Confirmar
        </Button>
      </Wrapper>
    </ModalEdit>
  );
}
