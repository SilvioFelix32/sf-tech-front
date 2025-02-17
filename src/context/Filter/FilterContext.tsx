import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import reducer from "../reducers/filterReducer";
import { IProduct } from "../../types";
import { CategoriesContext } from "../Categories/CategoriesContext";

const FilterContext = createContext(null);

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

export const FilterContextProvider = ({ children }) => {
  const { filteredProducts } = useContext(CategoriesContext);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setProducts(filteredProducts);
  }, [filteredProducts]);

  const [state, dispatch] = useReducer(reducer, initialState);

  // update the filter values
  const updateFilterValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    return dispatch({
      type: "UPDATE_FILTERS_VALUE",
      payload: { name, value, products },
    });
  };

  // to clear the filter
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS", payload: products });
  };

  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
