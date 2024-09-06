import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { IProduct } from "../../types";
import { ProductContext } from "../Products/ProductsContext";

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
  const { filteredProducts } = useContext(ProductContext);
  const [products, setProducts] = useState<IProduct[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProducts(filteredProducts);
  }, [filteredProducts]);

  // TODO: Otimizar a busca, hoje ela não deveria paginar se fossem poucos
  const searchProducts = products?.filter((product: IProduct) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProduct = searchProducts?.map(
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
