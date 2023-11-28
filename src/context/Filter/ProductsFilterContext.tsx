import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { IProduct, IProductCategories } from "../../types";
import { productCategoryService, productsService } from "../../services";
import { CompanyContext } from "../Company/CompanyContext";

interface ProductFilterState {
  searchTerm: string;
  //products: IProduct[];
}

interface ProductFilterContextData {
  state: ProductFilterState;
  setSearchTerm: (searchTerm: string) => void;
  filteredProduct: string[];
}

interface ProductFilterProviderProps {
  children: ReactNode;
  initialProducts: IProduct[];
}

const ProductFilterContext = createContext<ProductFilterContextData>(
  {} as ProductFilterContextData
);

function ProductFilterProvider({ children }: ProductFilterProviderProps) {
  const company_id = useContext(CompanyContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState<IProductCategories[]>([]);

  useEffect(() => {
    productCategoryService
      .getAll(company_id, {})
      .then((res) => setCategories(res.data));
  }, [company_id]);

  const categoryOfProducts = categories.reduce((acc, cur) => {
    return [...acc, ...cur.products];
  }, []);

  const filteredProducts = categoryOfProducts?.filter((product: IProduct) => {
    return product?.title.toLowerCase().includes(searchTerm?.toLowerCase());
  });

  const filteredProduct = filteredProducts?.map(
    (product: IProduct) => product.title
  );

  return (
    <ProductFilterContext.Provider
      value={{
        state: { searchTerm },
        setSearchTerm,
        filteredProduct,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
}

export { ProductFilterContext, ProductFilterProvider };
