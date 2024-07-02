import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import { IProduct, IProductCategory } from "../../types";
import { categoryService } from "../../services";
import reducer from "../../helpers/filterReducer";

interface ProductFilterContextData {
  productCategories: IProductCategory[];
  filteredProducts: IProduct[];
  filter: string;
  setFilter: (filter: string) => void;
  isSelected: string;
  setIsSelected: (iSelected: string) => void;
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

interface ProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<ProductFilterContextData>({
  productCategories: [],
  filteredProducts: [],
  filter: "",
  setFilter: () => {},
  isSelected: "",
  setIsSelected: () => {},
  updateFilterValue: () => {},
  clearFilters: () => {},
});

function ProductProvider({ children }: ProductProviderProps) {
  const company_id = "b4cce349-7c0b-41c7-9b3e-c21c9f0c2e4c";
  const [categories, setCategories] = useState<IProductCategory[]>([]);
  const [filteredProducts, dispatch] = useReducer(reducer, initialState);
  const [isSelected, setIsSelected] = useState<string>(""); // Added state and setter for iSelected

  // TODO: change this paginate properly
  useEffect(() => {
    categoryService
      .getAll(company_id, { page: 1, limit: 20 })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.error("error", err));
  }, [company_id]);

  useEffect(() => {
    if (categories && Array.isArray(categories) && categories.length > 0) {
      const allProducts = categories.flatMap((category) => category.products);
      dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: allProducts });
    }
  }, [categories]);

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

  return (
    <ProductContext.Provider
      value={{
        productCategories: categories,
        filteredProducts: filteredProducts.filter_products,
        filter: filteredProducts.filters.text,
        setFilter,
        isSelected,
        setIsSelected,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
