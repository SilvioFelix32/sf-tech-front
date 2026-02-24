import React, { useMemo } from "react";
import {
  TableHeadProps,
  TableCellProps,
  AdminTableEmptyProps,
  AdminTablePaginationProps,
} from "../../interfaces/IAdminTable";
import { BiChevronsLeft, BiChevronLeft, BiChevronRight, BiChevronsRight } from "react-icons/bi";
import {
  Table as StyledTable,
  TableHeader as StyledTableHeader,
  TableBody as StyledTableBody,
  TableRow as StyledTableRow,
  TableHead as StyledTableHead,
  TableCell as StyledTableCell,
  TableEmptyRow,
  TableEmptyCell,
  PaginationContainer,
  PaginationInfo,
  PaginationControls,
  PaginationButton,
  PaginationSelect,
} from "./styles";

export const Table = StyledTable;
export const TableHeader = StyledTableHeader;
export const TableBody = StyledTableBody;
export const TableRow = StyledTableRow;

export function TableHead({ alignRight, alignCenter, children, ...rest }: TableHeadProps) {
  return (
    <StyledTableHead $alignRight={alignRight} $alignCenter={alignCenter} {...rest}>
      {children}
    </StyledTableHead>
  );
}

export function TableCell({
  alignRight,
  alignCenter,
  fontMedium,
  muted,
  mono,
  children,
  ...rest
}: TableCellProps) {
  return (
    <StyledTableCell
      $alignRight={alignRight}
      $alignCenter={alignCenter}
      $fontMedium={fontMedium}
      $muted={muted}
      $mono={mono}
      {...rest}
    >
      {children}
    </StyledTableCell>
  );
}

export function AdminTableEmpty({
  colSpan,
  message = "Nenhum registro encontrado",
}: AdminTableEmptyProps) {
  return (
    <TableEmptyRow>
      <TableEmptyCell colSpan={colSpan}>{message}</TableEmptyCell>
    </TableEmptyRow>
  );
}

export function AdminTablePagination({
  currentPage,
  totalItems,
  itemsPerPage,
  itemsPerPageOptions = [5, 10, 20],
  label = "registros",
  onPageChange,
  onItemsPerPageChange,
}: AdminTablePaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage || 1));
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = totalItems === 0 ? 0 : (safeCurrentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(safeCurrentPage * itemsPerPage, totalItems);

  const pageNumbers = useMemo<(number | "ellipsis")[]>(() => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i += 1) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);

    if (safeCurrentPage > 3) {
      pages.push("ellipsis");
    }

    const start = Math.max(2, safeCurrentPage - 1);
    const end = Math.min(totalPages - 1, safeCurrentPage + 1);

    for (let i = start; i <= end; i += 1) {
      pages.push(i);
    }

    if (safeCurrentPage < totalPages - 2) {
      pages.push("ellipsis");
    }

    pages.push(totalPages);

    return pages;
  }, [safeCurrentPage, totalPages]);

  const handlePageChange = (page: number) => {
    const next = Math.max(1, Math.min(page, totalPages));
    if (next !== safeCurrentPage) {
      onPageChange(next);
    }
  };

  return (
    <PaginationContainer>
      <PaginationInfo>
        <span>Mostrando</span>
        <span>
          <strong>
            {startIndex}-{endIndex}
          </strong>
        </span>
        <span>de</span>
        <span>
          <strong>{totalItems}</strong>
        </span>
        <span>{label}</span>
        {onItemsPerPageChange && (
          <>
            <span style={{ margin: "0 4px" }}>|</span>
            <span>Itens por página:</span>
            <PaginationSelect
              value={String(itemsPerPage)}
              onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            >
              {itemsPerPageOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </PaginationSelect>
          </>
        )}
      </PaginationInfo>

      <PaginationControls>
        <PaginationButton
          onClick={() => handlePageChange(1)}
          disabled={safeCurrentPage === 1}
        >
          <BiChevronsLeft size={14} />
        </PaginationButton>
        <PaginationButton
          onClick={() => handlePageChange(safeCurrentPage - 1)}
          disabled={safeCurrentPage === 1}
        >
          <BiChevronLeft size={14} />
        </PaginationButton>

        {pageNumbers.map((page, idx) =>
          page === "ellipsis" ? (
            <span key={`ellipsis-${idx}`} style={{ padding: "0 4px", fontSize: "0.8rem" }}>
              ...
            </span>
          ) : (
            <PaginationButton
              key={page}
              $active={safeCurrentPage === page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PaginationButton>
          ),
        )}

        <PaginationButton
          onClick={() => handlePageChange(safeCurrentPage + 1)}
          disabled={safeCurrentPage === totalPages}
        >
          <BiChevronRight size={14} />
        </PaginationButton>
        <PaginationButton
          onClick={() => handlePageChange(totalPages)}
          disabled={safeCurrentPage === totalPages}
        >
          <BiChevronsRight size={14} />
        </PaginationButton>
      </PaginationControls>
    </PaginationContainer>
  );
}
