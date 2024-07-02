import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CompanyContext } from "../../../../context";
import { IProduct } from "../../../../types";
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
import { productsService } from "../../../../services";

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

  const { register, handleSubmit, reset } = useForm<IProduct>({
    defaultValues: { ...selectedProduct },
  });

  useEffect(() => {
    if (product_id) {
      productsService
        .getById(product_id)
        .then((data) => setSelectedProduct(data));
    }
  }, [product_id]);

  useEffect(() => {
    reset({ ...selectedProduct });
  }, [selectedProduct]);

  async function handleUpdate(data: IProduct) {
    delete data.product_id;

    await productsService.update(product_id, {
      ...data,
      highlighted: Boolean(data.highlighted),
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
            <Text>urlBanner:</Text>
            <Input
              type="string"
              defaultValue={selectedProduct?.urlBanner}
              {...register("urlBanner")}
            />
            <Text>Valor:</Text>
            <Input
              type="number"
              defaultValue={selectedProduct?.price.toFixed(2)}
              {...register("price", {
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
            <Text>Em destaque:</Text>
            <Select
              defaultValue={selectedProduct?.highlighted.toString()}
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
