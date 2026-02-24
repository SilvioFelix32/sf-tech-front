export enum SaleStatus {
  APPROVED = "APPROVED",
  DELIVERED = "DELIVERED",
  UNDER_REVIEW = "UNDER_REVIEW",
  IN_TRANSIT = "IN_TRANSIT",
}

export enum PaymentMethod {
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  PIX = "PIX",
  BANK_SLIP = "BANK_SLIP",
}

export interface ISaleItem {
  category_id: string;
  product_id: string;
  sku: string;
  title: string;
  subtitle: string;
  description: string;
  url_banner: string;
  quantity: number;
  total_value: number;
}

export interface ICreateSaleRequest {
  total: number;
  items: ISaleItem[];
  payment_method?: PaymentMethod;
  deliver_address?: string;
}

export interface IUpdateSaleStatusRequest {
  status: SaleStatus;
}

export interface ISale {
  sale_id: string;
  company_id: string;
  user_id: string;
  total: number;
  items: ISaleItem[];
  payment_method?: PaymentMethod;
  status?: SaleStatus;
  deliver_address?: string;
  created_at: string;
  updated_at?: string;
}

export interface AdminSalesTableProps {
  isLoading: boolean;
  salesCount: number;
  filteredSales: ISale[];
  searchTerm: string;
  statusFilter: AdminSalesStatusFilter;
  onSearchChange: (value: string) => void;
  onStatusFilterChange: (value: AdminSalesStatusFilter) => void;
  onRowClick: (sale: ISale) => void;
  onUpdateStatusClick: (sale: ISale) => void;
  setSelectedSaleId: (id: string) => void;
  setIsDetailsOpen: (value: boolean) => void;
}

export type AdminSalesStatusFilter = "all" | SaleStatus;

export interface ModalSaleDetailsProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  saleId: string;
  company_id: string;
}
