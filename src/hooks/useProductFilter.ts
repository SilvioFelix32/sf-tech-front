import { useMemo } from "react";
import { useQuery } from "react-query";
import { productsService } from "../services";
import { IProductResponse } from "@/interfaces";

interface useProductFilterOptions {
  page: number;
  perPage: number;
  queryKey?: string;
}

export const useProductFilter = ({
  page,
  perPage,
  queryKey = "products",
}: useProductFilterOptions) => {
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
    [queryKey, page, perPage],
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
