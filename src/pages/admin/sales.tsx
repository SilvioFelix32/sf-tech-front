import { memo, useMemo, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import "@coreui/coreui/dist/css/coreui.min.css";
import { saleService } from "../../services/sale-service";
import { AdminSalesStatusFilter, ISale, SaleStatus } from "../../interfaces";
import { environment } from "../../config/environment";
import {
  AdminWrapper,
  AdminTitle,
  AdminSubtitle,
  AdminContent,
} from "@/styles/pages/admin";
import {
  AdminSalesTable,
} from "../../components/Admin/Sale/AdminSalesTable";
import { AdminSalesStats } from "../../components/Admin/Sale/AdminSalesStats";
import {
  ModalSaleDetails,
  ModalUpdateSaleStatus,
} from "../../components/Modals";

function AdminSales() {
  const queryClient = useQueryClient();
  const [selectedSaleId, setSelectedSaleId] = useState<string | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [updateSaleId, setUpdateSaleId] = useState<string | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedSaleStatus, setSelectedSaleStatus] = useState<SaleStatus | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<AdminSalesStatusFilter>("all");

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

  const filteredSales = useMemo(() => {
    const term = searchTerm.toLowerCase();

    return sales.filter((sale) => {
      const totalAsString = String(sale.total ?? "").toLowerCase();

      const matchesSearch =
        sale.sale_id.toLowerCase().includes(term) ||
        totalAsString.includes(term);

      const matchesStatus =
        statusFilter === "all" || sale.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [sales, searchTerm, statusFilter]);

  const totalVendas = sales.length;
  const totalFaturamento = sales.reduce(
    (acc, current) => acc + Number(current.total ?? 0),
    0
  );
  const entregues = sales.filter(
    (sale) => sale.status === SaleStatus.DELIVERED
  ).length;
  const pendentes = sales.filter(
    (sale) => sale.status === SaleStatus.UNDER_REVIEW
  ).length;

  const handleRowClick = (sale: ISale) => {
    setSelectedSaleId(sale.sale_id);
    setIsDetailsOpen(true);
  };

  const handleUpdateStatusClick = (sale: ISale) => {
    setUpdateSaleId(sale.sale_id);
    setSelectedSaleStatus(sale.status);
    setIsUpdateModalOpen(true);
  };

  const handleStatusUpdate = () => {
    queryClient.invalidateQueries(["sales", company_id]);
    setIsUpdateModalOpen(false);
  };

  return (
    <>
      <AdminWrapper>
        <AdminTitle>Administrar Vendas</AdminTitle>
        <AdminSubtitle>Acompanhe e gerencie todas as vendas da loja</AdminSubtitle>

        <AdminContent fullWidth>
          <AdminSalesStats
            totalVendas={totalVendas}
            totalFaturamento={totalFaturamento}
            entregues={entregues}
            pendentes={pendentes}
          />

          <AdminSalesTable
            isLoading={isLoading}
            salesCount={filteredSales.length}
            filteredSales={filteredSales}
            searchTerm={searchTerm}
            statusFilter={statusFilter}
            onSearchChange={setSearchTerm}
            onStatusFilterChange={setStatusFilter}
            onRowClick={handleRowClick}
            onUpdateStatusClick={handleUpdateStatusClick}
            setSelectedSaleId={setSelectedSaleId}
            setIsDetailsOpen={setIsDetailsOpen}
          />
        </AdminContent>
      </AdminWrapper>

      {selectedSaleId && (
        <ModalSaleDetails
          saleId={selectedSaleId}
          company_id={company_id}
          isOpen={isDetailsOpen}
          setIsOpen={setIsDetailsOpen}
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

