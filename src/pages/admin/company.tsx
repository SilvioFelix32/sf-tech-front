import { memo } from "react";
import { useQuery } from "react-query";
import { companiesService } from "../../services/companies-service";
import { ICompany } from "../../interfaces/ICompany";
import DataTable from "react-data-table-component";
import { AdminWrapper, AdminContent, AdminTitle, AdminCard, AdminCardHeader, AdminCardTitle } from "../../styles/pages/admin";
import { customStyles } from "../../styles/customDataTable";

function AdminCompany() {
  const { data: companies = [] } = useQuery<ICompany[]>(
    "companies",
    companiesService.getAll,
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    }
  );

  const data = companies.map((company) => ({
    name: company.name,
    fantasyName: company.fantasyName,
    email: company.email,
  }));

  const columns = [
    {
      name: "nome",
      selector: (row) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: "nome fantasia",
      selector: (row) => row.fantasyName,
      sortable: true,
      grow: 2,
    },
    {
      name: "email",
      selector: (row) => row.email,
    },
  ];

  return (
    <AdminWrapper>
      <AdminTitle>Administrar Empresas</AdminTitle>
      <AdminContent fullWidth>
        <AdminCard>
          <AdminCardHeader>
            <AdminCardTitle>Lista de Empresas</AdminCardTitle>
          </AdminCardHeader>
          <DataTable columns={columns} data={data} customStyles={customStyles} />
        </AdminCard>
      </AdminContent>
    </AdminWrapper>
  );
}

export default memo(AdminCompany);

