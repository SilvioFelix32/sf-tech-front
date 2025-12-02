import { memo, useState } from "react";
import { useQuery } from "react-query";
import { saleService } from "../../services/sale-service";
import { ISale } from "../../interfaces";
import { environment } from "../../config/environment";
import DataTable from "react-data-table-component";
import { AdminWrapper, AdminContent, AdminTitle, AdminCard, AdminCardHeader, AdminCardTitle } from "../../styles/pages/admin";
import { customStyles } from "../../styles/customDataTable";
import { ModalSaleDetails } from "../../components/Modals/Sale/SaleDetails";

function AdminSales() {
  const [selectedSaleId, setSelectedSaleId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleRowClick = (row: ISale) => {
    setSelectedSaleId(row.sale_id);
    setIsModalOpen(true);
  };

  const data = sales.map((sale) => ({
    sale_id: sale.sale_id,
    user_id: sale.user_id,
    total: sale.total,
    created_at: new Date(sale.created_at).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  }));

  const columns = [
    {
      name: "ID da Venda",
      selector: (row) => row.sale_id,
      sortable: true,
      grow: 2,
    },
    {
      name: "ID do Usuário",
      selector: (row) => row.user_id,
      sortable: true,
      grow: 2,
    },
    {
      name: "Total",
      selector: (row) => `R$ ${row.total.toFixed(2).replace(".", ",")}`,
      sortable: true,
    },
    {
      name: "Data de Criação",
      selector: (row) => row.created_at,
      sortable: true,
      grow: 2,
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
              customStyles={customStyles}
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
    </>
  );
}

export default memo(AdminSales);

