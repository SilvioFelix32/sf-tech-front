import { CompanyContext } from "../../../../context";
import { FormEvent, useContext, useState } from "react";
//components
import { Modal as ModalCreate } from "react-responsive-modal";
//styles
import { Button, Text, Content, Wrapper, Input, Select } from "./styles";
import "react-responsive-modal/styles.css";
import { IProductCategory } from "../../../../types";
import { productCategoryService } from "../../../../services";

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
  const company_id = useContext(CompanyContext);

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data: Partial<IProductCategory> = {
      title,
      description,
    };

    await productCategoryService
      .create(company_id, data as IProductCategory)
      .then(() => setReloadData(Math.random()));
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
