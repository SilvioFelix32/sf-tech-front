import { memo } from "react";
import { useQuery } from "react-query";
import { environment } from "../../config/environment";
import { companiesService } from "../../services/companies-service";
import { saleService } from "../../services/sale-service";
import { categoryService } from "../../services";
import { productsService } from "../../services";
import { ISale, SaleStatus, PaymentMethod } from "../../interfaces";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  AdminTableEmpty,
} from "../../components/AdminTable";
import {
  AdminWrapper,
  AdminContent,
  AdminTitle,
  AdminSubtitle,
  AdminCard,
  AdminCardHeader,
  AdminCardHeaderLeft,
  AdminCardTitle,
  AdminCardCount,
} from "../../styles/pages/admin";
import { BiBuilding, BiNews, BiPackage, BiWallet, BiTrendingUp } from "react-icons/bi";
import { StatusPill } from "../../styles/pages/admin";
import styled from "styled-components";

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  width: 100%;
  margin-bottom: 24px;
`;

const StatCard = styled.div`
  background-color: ${({ theme }) =>
    theme.title === "light" ? "#FFFFFF" : theme.colors.background};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) =>
    theme.title === "light" ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)"};
`;

const StatLabel = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.85;
  margin: 0 0 8px 0;
`;

const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 4px 0;
`;

const StatChange = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  margin: 0;
`;

const StatIconWrap = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: ${({ theme }) => `${theme.colors.tertiary}30`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  > svg {
    color: ${({ theme }) => theme.colors.tertiary};
    width: 20px;
    height: 20px;
  }
`;

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

function getStatusVariant(status?: SaleStatus): boolean {
  return status === SaleStatus.APPROVED || status === SaleStatus.DELIVERED;
}

const RECENT_SALES_LIMIT = 5;

function AdminDashboard() {
  const companyId = environment.companyId;

  const { data: companies = [] } = useQuery("companies", companiesService.getAll, {
    staleTime: 5 * 60 * 1000,
    enabled: true,
  });

  const { data: categoriesResponse } = useQuery(
    ["productCategories", companyId, 1, 1],
    () => categoryService.getAll(companyId, { page: 1, limit: 1 }),
    { staleTime: 5 * 60 * 1000, enabled: !!companyId }
  );

  const { data: productsResponse } = useQuery(
    ["products", 1, 1],
    () => productsService.getAll({ page: 1, limit: 1 }),
    { staleTime: 5 * 60 * 1000 }
  );

  const { data: sales = [] } = useQuery<ISale[]>(
    ["sales", companyId],
    () => saleService.getAll(companyId),
    { staleTime: 5 * 60 * 1000, enabled: !!companyId }
  );

  const totalRevenue = sales.reduce((acc, s) => acc + Number(s.total ?? 0), 0);
  const recentSales = sales
    .slice()
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    .slice(0, RECENT_SALES_LIMIT);

  const stats = [
    {
      label: "Empresas",
      value: String(companies.length),
      icon: BiBuilding,
      change: "cadastradas",
    },
    {
      label: "Categorias",
      value: String(categoriesResponse?.meta?.total ?? 0),
      icon: BiNews,
      change: "na plataforma",
    },
    {
      label: "Produtos",
      value: String(productsResponse?.meta?.total ?? 0),
      icon: BiPackage,
      change: "cadastrados",
    },
    {
      label: "Vendas",
      value: String(sales.length),
      icon: BiWallet,
      change: "realizadas",
    },
    {
      label: "Faturamento",
      value: `R$ ${totalRevenue.toFixed(2).replace(".", ",")}`,
      icon: BiWallet,
      change: "total",
    },
    {
      label: "Crescimento",
      value: "-",
      icon: BiTrendingUp,
      change: "vs. mês anterior",
    },
  ];

  return (
    <AdminWrapper>
      <AdminTitle>Dashboard</AdminTitle>
      <AdminSubtitle>Visão geral do seu e-commerce</AdminSubtitle>
      <AdminContent fullWidth>
        <StatsGrid>
          {stats.map((stat) => (
            <StatCard key={stat.label}>
              <StatIconWrap>
                <stat.icon />
              </StatIconWrap>
              <StatLabel>{stat.label}</StatLabel>
              <StatValue>{stat.value}</StatValue>
              <StatChange>{stat.change}</StatChange>
            </StatCard>
          ))}
        </StatsGrid>

        <AdminCard>
          <AdminCardHeader>
            <AdminCardHeaderLeft>
              <AdminCardTitle>Vendas Recentes</AdminCardTitle>
              <AdminCardCount>Últimas {RECENT_SALES_LIMIT} transações</AdminCardCount>
            </AdminCardHeaderLeft>
          </AdminCardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Pagamento</TableHead>
                <TableHead alignRight>Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentSales.length > 0 ? (
                recentSales.map((sale) => (
                  <TableRow key={sale.sale_id}>
                    <TableCell mono muted>
                      {sale.sale_id?.slice(0, 8)}...
                    </TableCell>
                    <TableCell fontMedium>
                      R$ {Number(sale.total).toFixed(2).replace(".", ",")}
                    </TableCell>
                    <TableCell>
                      <StatusPill $active={getStatusVariant(sale.status)}>
                        {formatSaleStatus(sale.status)}
                      </StatusPill>
                    </TableCell>
                    <TableCell muted>
                      {formatPaymentMethod(sale.payment_method)}
                    </TableCell>
                    <TableCell alignRight muted>
                      {new Date(sale.created_at).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <AdminTableEmpty colSpan={5} message="Nenhuma venda recente" />
              )}
            </TableBody>
          </Table>
        </AdminCard>
      </AdminContent>
    </AdminWrapper>
  );
}

export default memo(AdminDashboard);
