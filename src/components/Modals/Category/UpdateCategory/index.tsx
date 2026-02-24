import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { categoryService } from "../../../../services";
import { environment } from "../../../../config/environment";
import { GetSwallAlert } from "../../../../utils/sweet-alert";
import { IProductCategory } from "../../../../interfaces";
//components
import { Modal as ModalEdit } from "react-responsive-modal";
//styles
import { Button, Content, Text, Input, Wrapper } from "../styles";
import "react-responsive-modal/styles.css";
import { sanitazePayload } from "../../../../utils";

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
    const sanitizedData = sanitazePayload(data);
    await categoryService
      .update(company_id, category_id, {
        ...sanitizedData,
      })
      .then(() => setReloadData(Math.random()))
      .catch((error) => {
        console.error(error.name, error.message);
        GetSwallAlert("center", "error", "Erro ao atualizar categoria", 2000);
      });
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
        <Content>
          <Text>Título:</Text>
          <Input type="string" {...register("title")} />
          <Text>Descrição:</Text>
          <Input
            type="string"
            {...register("description")}
          />
        </Content>
        <Button type="submit" onClick={() => setOnOpen(false)}>
          Atualizar
        </Button>
      </Wrapper>
    </ModalEdit>
  );
}
