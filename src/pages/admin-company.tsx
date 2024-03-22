import { useEffect, useState } from "react";
import { companiesService } from "../services/companies-service";
import { ICompany } from "../types/ICompany";
//components
import DataTable from "react-data-table-component";
//styles
import { Wrapper, Content, Text } from "../styles/pages/admin";
import { customStyles } from "../styles/customDataTable";

export default function AdminCompany() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    companiesService.getAll().then((data) => {
      setCompanies(data);
    });
  }, []);

  const data = companies.map((company: ICompany) => {
    return {
      name: company.name,
      fantasyName: company.fantasyName,
      email: company.email,
    };
  });

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

  const paginationComponentOptions = {
    rowsPerPageText: "Linhas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: false,
  };

  return (
    <Wrapper>
      <Text>Administrar Empresas</Text>
      <Content>
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          paginationRowsPerPageOptions={[5, 10, 20]}
          customStyles={customStyles}
        />
      </Content>
    </Wrapper>
  );
}
