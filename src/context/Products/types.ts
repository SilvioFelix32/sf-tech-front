import { ReactNode } from "react";
import { IProductCategory, IProduct } from "../../types";

export interface ProductFilterContextData {
  productCategories: IProductCategory[];
  filteredProducts: IProduct[];
  filter: string;
  setFilter: (filter: string) => void;
  isSelected: string;
  setIsSelected: (iSelected: string) => void;
  updateFilterValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearFilters: () => void;
}

export interface ProductProviderProps {
  children: ReactNode;
}
