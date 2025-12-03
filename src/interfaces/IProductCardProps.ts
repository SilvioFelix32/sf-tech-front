import { IProduct } from "./IProducts";

export interface IProductListProps {
  isSelected: string;
}

export interface IProductCardItemProps {
  product: IProduct;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onNavigateToDetails: () => void;
}


