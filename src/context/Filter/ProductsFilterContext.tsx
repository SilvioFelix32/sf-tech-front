import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { IProduct } from "../../types";
import { productsService } from "../../services";
import { CompanyContext } from "../Company/CompanyContext";

interface ProductFilterState {
  searchTerm: string;
  products: IProduct[];
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

function ProductFilterProvider({
  children,
  initialProducts,
}: ProductFilterProviderProps) {
  const company_id = useContext(CompanyContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    productsService
      .search(company_id, searchTerm)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("erro", err));
  }, [company_id, searchTerm]);

  const filteredProducts = products?.filter((product: IProduct) => {
    return product?.title.toLowerCase().includes(searchTerm?.toLowerCase());
  });

  const filteredProduct = filteredProducts?.map(
    (product: IProduct) => product.title
  );

  return (
    <ProductFilterContext.Provider
      value={{
        state: { searchTerm, products },
        setSearchTerm,
        filteredProduct,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
}

export { ProductFilterContext, ProductFilterProvider };
