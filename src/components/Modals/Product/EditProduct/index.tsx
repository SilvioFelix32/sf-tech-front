/* eslint-disable @typescript-eslint/no-unused-vars */

import { useForm } from "react-hook-form";
import { IProduct, IProductCategory, IUpdateProduct } from "../../../../types";
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
import { categoryService, productsService } from "../../../../services";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { environment } from "../../../../config/environment";
import { ICategoryResponse } from "../../../../services/interfaces/ICategoryResponse";

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
  const company_id = environment.companyId;

  const { data: selectedProduct, isLoading: isProductLoading } = useQuery(
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
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useQuery<ICategoryResponse, Error>(
    ["categories", company_id],
    () => categoryService.getAll(company_id, { page: 1, limit: 20 }),
    {
      enabled: !!company_id,
    }
  );

  const mutation = useMutation(
    (data: IUpdateProduct) => {
      const { product_id, updatedAt, createdAt, ...rest } = data;
      return productsService.update(product_id, {
        ...rest,
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
            {isCategoriesLoading ? (
              <Text>Carregando categorias...</Text>
            ) : isCategoriesError ? (
              <Text>Erro ao carregar categorias</Text>
            ) : (
              <Select {...register("category_id")} defaultValue="">
                <option value=""></option>
                {categories.data?.map((category: IProductCategory) => (
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
