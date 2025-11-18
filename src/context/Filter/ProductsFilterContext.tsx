import { createContext, useState, useEffect, useContext } from "react";
import { IProduct } from "../../interfaces";
import { CategoriesContext } from "../Categories/CategoriesContext";
import { ProductFilterContextData, ProductFilterProviderProps } from "./types";

const ProductFilterContext = createContext<ProductFilterContextData>(
  {} as ProductFilterContextData
);

function ProductFilterProvider({
  children,
  initialProducts,
}: ProductFilterProviderProps) {
  const { filteredProducts } = useContext(CategoriesContext);
  const [products, setProducts] = useState<IProduct[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProducts(filteredProducts);
  }, [filteredProducts]);

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
