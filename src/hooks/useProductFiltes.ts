import { useMemo } from "react";
import { useQuery } from "react-query";
import { productsService } from "../services";
import { IProductResponse } from "../services/interfaces";

interface useCategoryFilterOptions {
  page: number;
  perPage: number;
}

export const useProductFilter = ({
  page,
  perPage,
}: useCategoryFilterOptions) => {
  console.log("useProductFilter.filtros", page, perPage);

  const {
    data: response = {
      data: [],
      meta: { total: 0, currentPage: 1, perPage: 20, next: 1 },
      message: "",
    },
    isLoading,
    isError,
    refetch,
  } = useQuery<IProductResponse>(
    ["products", page, perPage],
    () => productsService.getAll({ page, limit: perPage }),
    {
      select: ({ data, meta, message }) => ({ data, meta, message }),
      keepPreviousData: true,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutos
      cacheTime: 30 * 60 * 1000, // 30 minutos
    }
  );

  console.log("pagina atual", response.meta.currentPage);
  console.log("produtos por página", response.meta.perPage);
  console.log("total de produtos", response.meta.total);

  const value = useMemo(
    () => ({
      products: response.data,
      meta: response.meta,
    }),
    [response.data, response.meta]
  );

  return {
    value,
    isLoading,
    isError,
    refetch,
  };
};
