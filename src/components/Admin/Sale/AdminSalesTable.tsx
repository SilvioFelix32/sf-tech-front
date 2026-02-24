import React, { useMemo, useState, useEffect } from "react";
import { BiSearch, BiStore, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { AdminSalesTableProps, PaymentMethod, SaleStatus } from "../../../interfaces";
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
  SortableHeader,
} from "../../../styles/pages/admin";

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
    case SaleStatus.CANCELED:
      return "Cancelada";
    default:
      return String(status);
  }
}

function getStatusVariant(status?: SaleStatus) {
  if (!status) return "under_review" as const;
  switch (status) {
    case SaleStatus.APPROVED:
      return "approved" as const;
    case SaleStatus.DELIVERED:
      return "delivered" as const;
    case SaleStatus.UNDER_REVIEW:
      return "under_review" as const;
    case SaleStatus.IN_TRANSIT:
      return "in_transit" as const;
    case SaleStatus.CANCELED:
      return "canceled" as const;
    default:
      return "default" as const;
  }
}

type SortColumn = "total" | "status" | "payment" | "address" | "date";
type SortDirection = "asc" | "desc";

const STATUS_ORDER: Record<string, number> = {
  [SaleStatus.UNDER_REVIEW]: 0,
  [SaleStatus.APPROVED]: 1,
  [SaleStatus.IN_TRANSIT]: 2,
  [SaleStatus.DELIVERED]: 3,
  [SaleStatus.CANCELED]: 4,
};

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
  const [sortState, setSortState] = useState<{
    column: SortColumn;
    direction: SortDirection;
  }>({ column: "date", direction: "desc" });

  const handleSort = (column: SortColumn) => {
    setSortState((prev) => {
      if (prev?.column === column) {
        return {
          column,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { column, direction: "asc" as SortDirection };
    });
    setCurrentPage(1);
  };

  const sortedSales = useMemo(() => {
    const { column: sortColumn, direction: sortDirection } = sortState;
    const dir = sortDirection === "asc" ? 1 : -1;
    return [...filteredSales].sort((a, b) => {
      let cmp = 0;
      switch (sortColumn) {
        case "total":
          cmp = (a.total ?? 0) - (b.total ?? 0);
          break;
        case "status":
          cmp =
            (STATUS_ORDER[a.status ?? ""] ?? -1) -
            (STATUS_ORDER[b.status ?? ""] ?? -1);
          break;
        case "payment":
          cmp = (formatPaymentMethod(a.payment_method) ?? "").localeCompare(
            formatPaymentMethod(b.payment_method) ?? ""
          );
          break;
        case "address":
          cmp = (a.deliver_address ?? "").localeCompare(b.deliver_address ?? "");
          break;
        case "date":
          cmp = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
          break;
        default:
          return 0;
      }
      return cmp * dir;
    });
  }, [filteredSales, sortState]);

  const totalItems = sortedSales.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage || 1));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedSales = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedSales.slice(startIndex, endIndex);
  }, [sortedSales, currentPage, itemsPerPage]);

  const SortIcon = ({ column }: { column: SortColumn }) => {
    if (sortState.column !== column) return <BiChevronDown size={14} />;
    return sortState.direction === "asc" ? (
      <BiChevronUp size={14} />
    ) : (
      <BiChevronDown size={14} />
    );
  };

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
              <TableHead>
                <SortableHeader type="button" onClick={() => handleSort("total")}>
                  Total
                  <SortIcon column="total" />
                </SortableHeader>
              </TableHead>
              <TableHead>
                <SortableHeader type="button" onClick={() => handleSort("status")}>
                  Status
                  <SortIcon column="status" />
                </SortableHeader>
              </TableHead>
              <TableHead>
                <SortableHeader type="button" onClick={() => handleSort("payment")}>
                  Pagamento
                  <SortIcon column="payment" />
                </SortableHeader>
              </TableHead>
              <TableHead>
                <SortableHeader type="button" onClick={() => handleSort("address")}>
                  Endereço de Entrega
                  <SortIcon column="address" />
                </SortableHeader>
              </TableHead>
              <TableHead>
                <SortableHeader type="button" onClick={() => handleSort("date")}>
                  Data da Venda
                  <SortIcon column="date" />
                </SortableHeader>
              </TableHead>
              <TableHead alignRight>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedSales.length > 0 ? (
              paginatedSales.map((sale) => (
                <TableRow
                  key={sale.sale_id}
                >
                  <TableCell fontMedium
                    onClick={() => onRowClick(sale)}
                    style={{ cursor: "pointer" }}>
                    R$ {formatPrice(sale.total)}
                  </TableCell>
                  <TableCell
                    onClick={() => onRowClick(sale)}
                    style={{ cursor: "pointer" }}>
                    <StatusPill
                      $variant={getStatusVariant(sale.status)}
                    >
                      {formatSaleStatus(sale.status)}
                    </StatusPill>
                  </TableCell>
                  <TableCell muted
                    onClick={() => onRowClick(sale)}
                    style={{ cursor: "pointer" }}>
                    {formatPaymentMethod(sale.payment_method)}
                  </TableCell>
                  <TableCell muted
                    onClick={() => onRowClick(sale)}
                    style={{ cursor: "pointer" }}>
                    {sale.deliver_address
                      ? `${sale.deliver_address.substring(0, 50)}${sale.deliver_address.length > 50 ? "..." : ""
                      }`
                      : "-"}
                  </TableCell>
                  <TableCell muted
                    onClick={() => onRowClick(sale)}
                    style={{ cursor: "pointer" }}>
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

