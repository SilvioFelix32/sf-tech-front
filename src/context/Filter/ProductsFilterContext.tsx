import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { IProduct } from "../../types";
import { CompanyContext } from "../Company/CompanyContext";
import productsService from "../../services/products-service";

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
  const [products, setProducts] = useState<IProduct[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await productsService.getAll(company_id, searchTerm);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchAllProducts();
  }, [company_id]);

  const filteredProducts = products?.filter((product: IProduct) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
