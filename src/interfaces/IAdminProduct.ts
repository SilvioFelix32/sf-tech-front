import { IProduct } from "./IProducts";

export type ProductSortField = "category" | "price" | "stock" | "stock_level" | "highlighted";
export type ProductSortOrder = "asc" | "desc";

export interface AdminProductTableProps {
  isLoading: boolean;
  products: IProduct[];
  categoriesMap: Record<string, string>;
  sortField: ProductSortField;
  sortOrder: ProductSortOrder;
  searchTerm: string;
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  onSearchChange: (value: string) => void;
  onSortChange: (field: ProductSortField) => void;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (value: number) => void;
  onCreateClick: () => void;
  onRowClick: (productId: string) => void;
  onViewClick: (productId: string) => void;
  onEditClick: (productId: string) => void;
  onDeleteClick: (productId: string) => void;
}

export interface AdminProductHeaderProps {
  totalCount: number;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onCreateClick: () => void;
}

export interface AdminProductRowProps {
  product: IProduct;
  categoryTitle?: string;
  onRowClick: (productId: string) => void;
  onViewClick: (productId: string) => void;
  onEditClick: (productId: string) => void;
  onDeleteClick: (productId: string) => void;
}
