import React, { useMemo, useState, useEffect } from "react";
import { BiSearch, BiStore } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";

import { ISale, PaymentMethod, SaleStatus } from "../../../interfaces";
import { formatPrice } from "../../../utils/formatPrice";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  AdminTableEmpty,
} from "../../AdminTable";
import { AdminTablePagination } from "../../AdminTable";
import {
  AdminCard,
  AdminCardHeader,
  AdminCardHeaderLeft,
  AdminCardHeaderRight,
  AdminCardTitleRow,
  AdminCardTitle,
  AdminCardCount,
  AdminSearchWrap,
  AdminSearchInput,
  StatusPill,
} from "../../../styles/pages/admin";

export type AdminSalesStatusFilter = "all" | SaleStatus;

interface AdminSalesTableProps {
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

function formatPaymentMethod(method?: PaymentMethod) {
  if (!method) return "-";
  switch (method) {
    case PaymentMethod.CREDIT_CARD:
      return "Cartão de Crédito";
    case PaymentMethod.DEBIT_CARD:
      return "Cartão de Débito";
    case PaymentMethod.PIX:
      return "PIX";
    case PaymentMethod.BANK_SLIP:
      return "Boleto Bancário";
    default:
      return String(method);
  }
}

function formatSaleStatus(status?: SaleStatus) {
  if (!status) return "Em Análise";
  switch (status) {
    case SaleStatus.APPROVED:
      return "Aprovada";
    case SaleStatus.DELIVERED:
      return "Entregue";
    case SaleStatus.UNDER_REVIEW:
      return "Em Análise";
    case SaleStatus.IN_TRANSIT:
      return "Em Trânsito";
    default:
      return String(status);
  }
}

export const AdminSalesTable: React.FC<AdminSalesTableProps> = ({
  isLoading,
  salesCount,
  filteredSales,
  searchTerm,
  statusFilter,
  onSearchChange,
  onStatusFilterChange,
  onRowClick,
  onUpdateStatusClick,
  setSelectedSaleId,
  setIsDetailsOpen,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalItems = filteredSales.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage || 1));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedSales = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredSales.slice(startIndex, endIndex);
  }, [filteredSales, currentPage, itemsPerPage]);

  return (
    <AdminCard>
      <AdminCardHeader>
        <AdminCardHeaderLeft>
          <AdminCardTitleRow>
            <BiStore />
            <AdminCardTitle>Lista de Vendas</AdminCardTitle>
          </AdminCardTitleRow>
          <AdminCardCount>{salesCount} venda(s) encontrada(s)</AdminCardCount>
        </AdminCardHeaderLeft>
        <AdminCardHeaderRight>
          <AdminSearchWrap>
            <BiSearch />
            <AdminSearchInput
              type="text"
              placeholder="Buscar venda..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </AdminSearchWrap>
          <select
            value={statusFilter}
            onChange={(e) =>
              onStatusFilterChange(
                e.target.value === "all"
                  ? "all"
                  : (e.target.value as SaleStatus)
              )
            }
            style={{
              height: 36,
              borderRadius: 6,
              border: "1px solid rgba(15,23,42,0.16)",
              padding: "0 8px",
              fontSize: "0.85rem",
            }}
          >
            <option value="all">Todos</option>
            <option value={SaleStatus.UNDER_REVIEW}>Em Análise</option>
            <option value={SaleStatus.APPROVED}>Aprovada</option>
            <option value={SaleStatus.IN_TRANSIT}>Em Trânsito</option>
            <option value={SaleStatus.DELIVERED}>Entregue</option>
          </select>
        </AdminCardHeaderRight>
      </AdminCardHeader>

      {isLoading ? (
        <p style={{ padding: 24, textAlign: "center", opacity: 0.8 }}>
          Carregando...
        </p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Pagamento</TableHead>
              <TableHead>Endereço de Entrega</TableHead>
              <TableHead>Data da Venda</TableHead>
              <TableHead alignRight>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedSales.length > 0 ? (
              paginatedSales.map((sale) => (
                <TableRow
                  key={sale.sale_id}
                  onClick={() => onRowClick(sale)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell fontMedium>
                    R$ {formatPrice(sale.total)}
                  </TableCell>
                  <TableCell>
                    <StatusPill
                      $active={
                        sale.status === SaleStatus.APPROVED ||
                        sale.status === SaleStatus.DELIVERED
                      }
                    >
                      {formatSaleStatus(sale.status)}
                    </StatusPill>
                  </TableCell>
                  <TableCell muted>
                    {formatPaymentMethod(sale.payment_method)}
                  </TableCell>
                  <TableCell muted>
                    {sale.deliver_address
                      ? `${sale.deliver_address.substring(0, 50)}${
                          sale.deliver_address.length > 50 ? "..." : ""
                        }`
                      : "-"}
                  </TableCell>
                  <TableCell muted>
                    {new Date(sale.created_at).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </TableCell>
                  <TableCell alignRight>
                    <CDropdown>
                      <CDropdownToggle caret={false} className="p-0 btn-link">
                        <FiMoreVertical
                          size={20}
                          style={{ cursor: "pointer" }}
                        />
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSaleId(sale.sale_id);
                            setIsDetailsOpen(true);
                          }}
                        >
                          <BiStore size={16} style={{ marginRight: 8 }} />
                          Ver Detalhes
                        </CDropdownItem>
                        <CDropdownItem
                          onClick={(e) => {
                            e.stopPropagation();
                            onUpdateStatusClick(sale);
                          }}
                        >
                          <MdModeEditOutline
                            size={16}
                            style={{ marginRight: 8 }}
                          />
                          Atualizar Status
                        </CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <AdminTableEmpty
                colSpan={6}
                message="Nenhuma venda encontrada"
              />
            )}
          </TableBody>
        </Table>
      )}
      {totalItems > 0 && (
        <AdminTablePagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          itemsPerPageOptions={[5, 10, 15, 20]}
          label="vendas"
          onPageChange={setCurrentPage}
          onItemsPerPageChange={(value) => {
            setItemsPerPage(value);
            setCurrentPage(1);
          }}
        />
      )}
    </AdminCard>
  );
};

