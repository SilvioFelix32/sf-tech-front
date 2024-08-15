import { useForm } from "react-hook-form";
import { IProduct } from "../../../../types";
import { Modal as ModalEdit } from "react-responsive-modal";
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
import { useQuery, useMutation, useQueryClient } from "react-query";

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
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset } = useForm<IProduct>();

  const { data: selectedProduct, isLoading } = useQuery(
    ["product", product_id],
    () => productsService.getById(product_id),
    {
      enabled: !!product_id,
      onSuccess: (data) => {
        reset({ ...data });
      },
    }
  );

  const mutation = useMutation(
    (data: IProduct) => {
      delete data.product_id;
      return productsService.update(product_id, {
        ...data,
        highlighted: Boolean(data.highlighted),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["products"]);
        setReloadData(Math.random());
        setOnOpen(false);
      },
    }
  );

  function handleUpdate(data: IProduct) {
    mutation.mutate(data);
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <ModalEdit
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={onOpen}
      onClose={() => setOnOpen(false)}
      center
    >
      <Wrapper onSubmit={handleSubmit(handleUpdate)}>
        <Context>
          <Content>
            <Text>Sku:</Text>
            <Input type="string" {...register("sku")} />
            <Text>Title:</Text>
            <Input type="string" {...register("title", { required: true })} />
            <Text>Subtitle:</Text>
            <Input type="string" {...register("subtitle")} />
            <Text>Description:</Text>
            <Input type="string" {...register("description")} />
          </Content>
          <Content>
            <Text>urlBanner:</Text>
            <Input type="string" {...register("urlBanner")} />
            <Text>Valor:</Text>
            <Input
              type="number"
              {...register("price", { valueAsNumber: true })}
            />
            <Text>Valor Desconto:</Text>
            <Input
              type="number"
              {...register("discount", { valueAsNumber: true })}
            />
          </Content>
          <Content>
            <Text>Em destaque:</Text>
            <Select {...register("highlighted")}>
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </Select>
          </Content>
        </Context>
        <Button type="submit">Confirmar</Button>
      </Wrapper>
    </ModalEdit>
  );
}
