import React, { createContext, CSSProperties } from "react";
import { MoonLoader } from "react-spinners";
import { ProductFilterContextData, ProductProviderProps } from "./types";
import { useCategoryFilter } from "../../hooks/useCategoryFilter";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const CategoriesContext = createContext<ProductFilterContextData>({
  productCategories: [],
  filteredProducts: [],
  filter: "",
  setFilter: () => {},
  isSelected: "",
  setIsSelected: () => {},
  updateFilterValue: () => {},
  clearFilters: () => {},
});

function ProductProvider({
  children,
  page = 1,
  perPage = 20,
}: ProductProviderProps) {
  const { value, isLoading, isError } = useCategoryFilter({ page, perPage });

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
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}

export { CategoriesContext, ProductProvider };
