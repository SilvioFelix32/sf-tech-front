import { useReducer, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { environment } from "../config/environment";
import { categoryService } from "../services";
import { ICategoryResponse } from "../services/interfaces";
import reducer from "../context/reducers/filterReducer";
import { IProductCategory } from "../types";

const initialState = {
  filter_products: [],
  all_products: [],
  filters: {
    text: "",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

interface useCategoryFilterOptions {
  page: number;
  perPage: number;
}

export const useCategoryFilter = ({
  page,
  perPage,
}: useCategoryFilterOptions) => {
  const company_id = environment.companyId;
  const [filteredProducts, dispatch] = useReducer(reducer, initialState);
  const [isSelected, setIsSelected] = useState<string>("");

  const {
    data: categoriesResponse = {
      data: [],
      meta: { total: 0, currentPage: 1, perPage: 20, next: 1 },
      message: "",
    },
    isLoading,
    isError,
    refetch,
  } = useQuery<ICategoryResponse>(
    ["productCategories", company_id, page, perPage],
    () => categoryService.getAll(company_id, { page, limit: perPage }),
    {
      select: ({ data, meta, message }) => ({ data, meta, message }),
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutos
      cacheTime: 30 * 60 * 1000, // 30 minutos
      onSuccess: (response) => {
        const allProducts = response.data.flatMap(
          (category: IProductCategory) => category.products
        );
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: allProducts });
      },
    }
  );

  const setFilter = (filter: string) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  const updateFilterValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  const value = useMemo(
    () => ({
      productCategories: categoriesResponse.data,
      meta: categoriesResponse.meta,
      filteredProducts: filteredProducts.filter_products,
      filter: filteredProducts.filters.text,
      setFilter,
      isSelected,
      setIsSelected,
      updateFilterValue,
      clearFilters,
    }),
    [
      categoriesResponse.data,
      categoriesResponse.meta,
      filteredProducts,
      isSelected,
    ]
  );

  return {
    value,
    isLoading,
    isError,
    refetch,
  };
};
