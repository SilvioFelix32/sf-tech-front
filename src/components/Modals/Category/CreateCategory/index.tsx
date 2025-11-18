import { environment } from "../../../../config/environment";
import { FormEvent, useState } from "react";
import { Modal as ModalCreate } from "react-responsive-modal";
import { IProductCategory } from "../../../../interfaces";
import { categoryService } from "../../../../services";
import { GetSwallAlert } from "../../../../utils";
//styles
import { Button, Text, Content, Wrapper, Input } from "./styles";
import "react-responsive-modal/styles.css";

interface modalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setReloadData: (value: number) => void;
}

export function ModalCreateCategory({
  isOpen,
  setIsOpen,
  setReloadData,
}: modalProps) {
  const company_id = environment.companyId;

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data: Partial<IProductCategory> = {
      title,
      description,
    };

    await categoryService
      .create(company_id, data as IProductCategory)
      .then(() => setReloadData(Math.random()))
      .catch((error) => {
        GetSwallAlert("center", "error", error.message, 2000);
      });
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
        </Content>
        <Button type="submit" onClick={() => setIsOpen(false)}>
          Cadastrar
        </Button>
      </Wrapper>
    </ModalCreate>
  );
}
