import { ReactNode } from "react";
import { IProduct } from "../../interfaces";

export interface ProductFilterState {
  searchTerm: string;
  products: IProduct[];
}

export interface ProductFilterContextData {
  state: ProductFilterState;

  setSearchTerm: (searchTerm: string) => void;
  filteredProduct: string[];
}

export interface ProductFilterProviderProps {
  children: ReactNode;
  initialProducts: IProduct[];
}
