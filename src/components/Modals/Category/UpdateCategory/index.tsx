import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { categoryService } from "../../../../services";
import { environment } from "../../../../utils/environment";
import { IProductCategory } from "../../../../types";
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
  const company_id = environment.companyId;
  const { register, handleSubmit, setValue } = useForm<IProductCategory>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (category_id) {
      categoryService.getById(category_id).then((data) => {
        setValue("title", data?.title || "");
        setValue("description", data?.description || "");
      });
    }
  }, [category_id, setValue]);

  async function handleUpdate(data: IProductCategory) {
    await categoryService
      .update(company_id as string, category_id as string, {
        ...data,
      })
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
        </Context>
        <Button type="submit">Confirmar</Button>
      </Wrapper>
    </ModalEdit>
  );
}
