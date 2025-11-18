import { useForm } from "react-hook-form";
import { IProduct, IProductCategory, IUpdateProduct } from "../../../../interfaces";
import { productsService } from "../../../../services";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useCategoryFilter } from "../../../../hooks/useCategoryFilter";
import { Modal as ModalEdit } from "react-responsive-modal";
import { GetSwallAlert, sanitazePayload } from "../../../../utils";
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
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<IProduct>();

  const { isLoading: isProductLoading } = useQuery(
    ["product", product_id],
    () => productsService.getById(product_id),
    {
      enabled: !!product_id,
      onSuccess: (data) => {
        reset({ ...data });
      },
    }
  );

  const {
    value: { productCategories },
    isLoading,
    isError,
  } = useCategoryFilter({ page: 1, perPage: 20 });

  const mutation = useMutation(
    async (data: IUpdateProduct) => {
      const sanitizedData = sanitazePayload(data);
      const { product_id, ...rest } = sanitizedData;
      try {
        return await productsService.update(product_id, {
          ...rest,
          highlighted: Boolean(data.highlighted),
        });
      } catch (error) {
        console.error(error);
        GetSwallAlert("center", "error", "Erro ao atualizar produto", 2000);
      }
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

  if (isProductLoading) return <div>Carregando...</div>;

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

            <Text>Categoria de produto:</Text>
            {isLoading ? (
              <Text>Carregando categorias...</Text>
            ) : isError ? (
              <Text>Erro ao carregar categorias</Text>
            ) : (
              <Select {...register("category_id")} defaultValue="">
                <option value=""></option>
                {productCategories.map((category: IProductCategory) => (
                  <option
                    key={category.category_id}
                    value={category.category_id}
                  >
                    {category.title}
                  </option>
                ))}
              </Select>
            )}
          </Content>
        </Context>
        <Button type="submit">Confirmar</Button>
      </Wrapper>
    </ModalEdit>
  );
}
