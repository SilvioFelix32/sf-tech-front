import { memo, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { saleService } from "../../services/sale-service";
import { ISale, PaymentMethod, SaleStatus } from "../../interfaces";
import { environment } from "../../config/environment";
import DataTable from "react-data-table-component";
import { AdminWrapper, AdminContent, AdminTitle, AdminCard, AdminCardHeader, AdminCardTitle } from "../../styles/pages/admin";
import { ModalSaleDetails, ModalUpdateSaleStatus } from "../../components/Modals";
import { EditButton } from "../../components/Buttons";

function AdminSales() {
  const queryClient = useQueryClient();
  const [selectedSaleId, setSelectedSaleId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateSaleId, setUpdateSaleId] = useState<string | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedSaleStatus, setSelectedSaleStatus] = useState<SaleStatus | undefined>(undefined);

  const company_id = environment.companyId;

  const { data: sales = [], isLoading } = useQuery<ISale[]>(
    ["sales", company_id],
    () => saleService.getAll(company_id),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      enabled: !!company_id,
    }
  );

  const handleRowClick = (row: { sale_data: ISale }) => {
    setSelectedSaleId(row.sale_data.sale_id);
    setIsModalOpen(true);
  };

  const handleUpdateStatusClick = (e: React.MouseEvent, sale: ISale) => {
    e.stopPropagation();
    setUpdateSaleId(sale.sale_id);
    setSelectedSaleStatus(sale.status);
    setIsUpdateModalOpen(true);
  };

  const handleStatusUpdate = () => {
    queryClient.invalidateQueries(["sales", company_id]);
    setIsUpdateModalOpen(false);
  };

  const data = sales.map((sale) => ({
    sale_id: sale.sale_id,
    user_id: sale.user_id,
    total: sale.total,
    payment_method: sale.payment_method,
    status: sale.status,
    deliver_address: sale.deliver_address || "-",
    created_at: new Date(sale.created_at).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    sale_data: sale,
  }));

  const formatPaymentMethod = (method?: PaymentMethod) => {
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
        return method;
    }
  };

  const formatSaleStatus = (status?: SaleStatus) => {
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
        return status;
    }
  };

  const columns = [
    {
      name: "Total",
      selector: (row) => `R$ ${row.total.toFixed(2).replace(".", ",")}`,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => formatSaleStatus(row.status),
      sortable: true,
      grow: 1,
    },
    {
      name: "Forma de Pagamento",
      selector: (row) => formatPaymentMethod(row.payment_method),
      sortable: true,
      grow: 2,
    },
    {
      name: "Endereço de Entrega",
      selector: (row) => row.deliver_address?.substring(0, 50) + (row.deliver_address?.length > 50 ? "..." : "") || "-",
      sortable: false,
      grow: 3,
    },
    {
      name: "Data da Venda",
      selector: (row) => row.created_at,
      sortable: true,
      grow: 2,
    },
    {
      name: "Ações",
      selector: (row) => row.sale_data,
      cell: (row) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EditButton
            onClick={(e) => handleUpdateStatusClick(e, row.sale_data)}
            title="Atualizar Status"
          />
        </div>
      ),
      sortable: false,
      grow: 1,
    },
  ];

  return (
    <>
      <AdminWrapper>
        <AdminTitle>Administrar Vendas</AdminTitle>
        <AdminContent fullWidth>
          <AdminCard>
            <AdminCardHeader>
              <AdminCardTitle>Lista de Vendas</AdminCardTitle>
            </AdminCardHeader>
            <DataTable
              columns={columns}
              data={data}
              progressPending={isLoading}
              onRowClicked={handleRowClick}
              pointerOnHover
              highlightOnHover
            />
          </AdminCard>
        </AdminContent>
      </AdminWrapper>
      {selectedSaleId && (
        <ModalSaleDetails
          saleId={selectedSaleId}
          company_id={company_id}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
      {updateSaleId && (
        <ModalUpdateSaleStatus
          saleId={updateSaleId}
          currentStatus={selectedSaleStatus}
          isOpen={isUpdateModalOpen}
          setIsOpen={setIsUpdateModalOpen}
          onUpdate={handleStatusUpdate}
        />
      )}
    </>
  );
}

export default memo(AdminSales);

