import React from "react";

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  alignRight?: boolean;
  alignCenter?: boolean;
  children: React.ReactNode;
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  alignRight?: boolean;
  alignCenter?: boolean;
  fontMedium?: boolean;
  muted?: boolean;
  mono?: boolean;
  children: React.ReactNode;
}

export interface AdminTableEmptyProps {
  colSpan: number;
  message?: string;
}

export interface AdminTablePaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  itemsPerPageOptions?: number[];
  label?: string;
  onPageChange: (page: number) => void;
  onItemsPerPageChange?: (value: number) => void;
}

