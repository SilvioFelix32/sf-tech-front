import React from "react";
import { formatPrice } from "../../../utils/formatPrice";
import {
  StatsGridFour,
  StatCard,
  StatLabel,
  StatValue,
  StatChange,
} from "../../../styles/pages/admin/dashboard";

interface AdminSalesStatsProps {
  totalVendas: number;
  totalFaturamento: number;
  entregues: number;
  pendentes: number;
}

export const AdminSalesStats: React.FC<AdminSalesStatsProps> = ({
  totalVendas,
  totalFaturamento,
  entregues,
  pendentes,
}) => {
  return (
    <StatsGridFour>
      <StatCard>
        <StatLabel>Total de Vendas</StatLabel>
        <StatValue>{totalVendas}</StatValue>
        <StatChange>todas as vendas registradas</StatChange>
      </StatCard>
      <StatCard>
        <StatLabel>Faturamento</StatLabel>
        <StatValue>R$ {formatPrice(totalFaturamento)}</StatValue>
        <StatChange>valor bruto acumulado</StatChange>
      </StatCard>
      <StatCard>
        <StatLabel>Entregues</StatLabel>
        <StatValue>{entregues}</StatValue>
        <StatChange>vendas concluídas</StatChange>
      </StatCard>
      <StatCard>
        <StatLabel>Pendentes</StatLabel>
        <StatValue>{pendentes}</StatValue>
        <StatChange>em análise</StatChange>
      </StatCard>
    </StatsGridFour>
  );
};

