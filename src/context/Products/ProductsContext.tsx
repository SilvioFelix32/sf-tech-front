import React, {
  createContext,
  useState,
  ReactNode,
  useReducer,
  useMemo,
  CSSProperties,
} from "react";
import { MoonLoader } from "react-spinners";
import { useQuery } from "react-query";
import { IProduct, IProductCategory } from "../../types";
import { categoryService } from "../../services";
import reducer from "../../utils/filterReducer";
import { environment } from "../../utils/environment";

interface ProductFilterContextData {
  productCategories: IProductCategory[];
  filteredProducts: IProduct[];
  filter: string;
  setFilter: (filter: string) => void;
  isSelected: string;
  setisSelected: (iSelected: string) => void;
  updateFilterValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearFilters: () => void;
}

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

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

interface ProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<ProductFilterContextData>({
  productCategories: [],
  filteredProducts: [],
  filter: "",
  setFilter: () => {},
  isSelected: "",
  setisSelected: () => {},
  updateFilterValue: () => {},
  clearFilters: () => {},
});

function ProductProvider({ children }: ProductProviderProps) {
  const company_id = environment.companyId;
  const [filteredProducts, dispatch] = useReducer(reducer, initialState);
  const [isSelected, setisSelected] = useState<string>("");

  const {
    data: categories = [],
    isLoading,
    isError,
  } = useQuery(
    ["productCategories", company_id],
    () => categoryService.getAll(company_id, { page: 1, limit: 20 }),
    {
      select: (res) => res.data,
      onSuccess: (data) => {
        const allProducts = data.flatMap(
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
      productCategories: categories,
      filteredProducts: filteredProducts.filter_products,
      filter: filteredProducts.filters.text,
      setFilter,
      isSelected,
      setisSelected,
      updateFilterValue,
      clearFilters,
    }),
    [categories, filteredProducts, isSelected]
  );

  if (isLoading)
    return (
      <div
        className="sweet-loading"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <MoonLoader
          size={150}
          color="#1A615A"
          loading={true}
          cssOverride={override}
          speedMultiplier={0.5}
        />
      </div>
    );
  if (isError)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        Falha ao carregar produtos
      </div>
    );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
