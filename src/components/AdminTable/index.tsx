import React from "react";
import {
  Table as StyledTable,
  TableHeader as StyledTableHeader,
  TableBody as StyledTableBody,
  TableRow as StyledTableRow,
  TableHead as StyledTableHead,
  TableCell as StyledTableCell,
  TableEmptyRow,
  TableEmptyCell,
} from "./styles";

export const Table = StyledTable;
export const TableHeader = StyledTableHeader;
export const TableBody = StyledTableBody;
export const TableRow = StyledTableRow;

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  alignRight?: boolean;
  alignCenter?: boolean;
  children: React.ReactNode;
}

export function TableHead({ alignRight, alignCenter, children, ...rest }: TableHeadProps) {
  return (
    <StyledTableHead $alignRight={alignRight} $alignCenter={alignCenter} {...rest}>
      {children}
    </StyledTableHead>
  );
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  alignRight?: boolean;
  alignCenter?: boolean;
  fontMedium?: boolean;
  muted?: boolean;
  mono?: boolean;
  children: React.ReactNode;
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

interface AdminTableEmptyProps {
  colSpan: number;
  message?: string;
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
