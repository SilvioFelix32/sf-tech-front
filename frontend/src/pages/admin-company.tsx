import { useEffect, useState } from "react";
import { companiesService } from "../services/companies-service";
import { useTranslation } from "react-i18next";
import { ICompany } from "../types/ICompany";
import "i18next";
//components
import DataTable from "react-data-table-component";
//styles
import { Wrapper, Content, Text } from "../styles/pages/admin";
import light from "../styles/themes/light";
import { customStyles } from "../styles/dataTable/customStyles";

export default function AdminCompany() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(light);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    companiesService.getAll().then((data) => {
      setCompanies(data);
    });
  }, []);

  const data = companies.map((company: ICompany) => {
    return {
      name: company.name,
      document: company.document,
      fantasy_name: company.fantasy_name,
      cellphone: company.cellphone,
      email: company.email,
    };
  });

  const columns = [
    {
      name: t("main.companyTable.name"),
      selector: (row) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: "document",
      selector: (row) => row.document,
      sortable: true,
      grow: 1,
    },
    {
      name: t("main.companyTable.fantasyName"),
      selector: (row) => row.fantasy_name,
      sortable: true,
      grow: 2,
    },
    {
      name: t("main.companyTable.cellphone"),
      selector: (row) => row.cellphone,
    },
    {
      name: t("main.companyTable.email"),
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
          paginationServer
          paginationComponentOptions={paginationComponentOptions}
          paginationRowsPerPageOptions={[5, 10, 20]}
          customStyles={customStyles}
          theme={theme.title}
        />
      </Content>
    </Wrapper>
  );
}
