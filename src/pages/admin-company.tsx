import { memo } from "react";
import { useQuery } from "react-query";
import { companiesService } from "../services/companies-service";
import { ICompany } from "../interfaces/ICompany";
import DataTable from "react-data-table-component";
import { Wrapper, Content, Text } from "../styles/pages/admin";
import { customStyles } from "../styles/customDataTable";

function AdminCompany() {
  const { data: companies = [] } = useQuery<ICompany[]>(
    "companies",
    companiesService.getAll,
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutos
      cacheTime: 30 * 60 * 1000, // 30 minutos
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
    <Wrapper>
      <Text>Administrar Empresas</Text>
      <Content>
        <DataTable columns={columns} data={data} customStyles={customStyles} />
      </Content>
    </Wrapper>
  );
}

export default memo(AdminCompany);
