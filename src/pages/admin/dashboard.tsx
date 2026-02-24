import { memo } from "react";
import { useQuery } from "react-query";
import { environment } from "../../config/environment";
import { formatPrice } from "../../utils/formatPrice";
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
import {
  StatsGrid,
  StatCard,
  StatLabel,
  StatValue,
  StatChange,
  StatIconWrap,
} from "../../styles/pages/admin/dashboard";

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
      change: "+0% este mês",
    },
    {
      label: "Categorias",
      value: String(categoriesResponse?.meta?.total ?? 0),
      icon: BiNews,
      change: "+2 este mês",
    },
    {
      label: "Produtos",
      value: String(productsResponse?.meta?.total ?? 0),
      icon: BiPackage,
      change: "+5 este mês",
    },
    {
      label: "Vendas",
      value: String(sales.length),
      icon: BiWallet,
      change: "+3 esta semana",
    },
    {
      label: "Faturamento",
      value: `R$ ${formatPrice(totalRevenue)}`,
      icon: BiWallet,
      change: "+12% este mês",
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
              <AdminCardCount>Últimas transações realizadas na loja</AdminCardCount>
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
