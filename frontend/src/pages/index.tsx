import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { companiesService } from "../services/companies-service";
import { useTranslation } from "react-i18next";
import { ICompany } from "../types/ICompany";
import "i18next";
//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import DataTable from "react-data-table-component";
//styles
import { ThemeProvider } from "styled-components";
import { Wrapper, Theme, Content } from "../styles";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { customStyles } from "../styles/dataTable/customStyles";

const Home: NextPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [theme, setTheme] = useState(light);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  useEffect(() => {
    companiesService.getAll().then((data) => {
      setCompanies(data);
    });
  }, []);

  const data = companies.map((company: ICompany) => {
    return {
      id: company.id,
      name: company.name,
      document: company.document,
      fantasy_name: company.fantasy_name,
      cellphone: company.cellphone,
      email: company.email,
      select_id: (
        <Link
          href={{
            pathname: "admin-products",
            query: { company_id: company.id },
          }}
        >
          {company.name}
        </Link>
      ),
    };
  });

  const columns = [
    {
      name: t("main.companyTable.id"),
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: t("main.companyTable.name"),
      selector: (row) => row.name,
      sortable: true,
      grow: 2,
      style: {
        color: "#202124",
        fontSize: "14px",
        fontWeight: 500,
      },
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
      style: {
        color: "#202124",
        fontSize: "14px",
        fontWeight: 500,
      },
    },
    {
      name: t("main.companyTable.cellphone"),
      selector: (row) => row.cellphone,
    },
    {
      name: t("main.companyTable.email"),
      selector: (row) => row.email,
    },
    {
      name: t("Select ID"),
      selector: (row) => row.select_id,
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: "Linhas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: false,
  };

  return (
    <ThemeProvider theme={theme}>
      <Theme>
        <Wrapper>
          <NavHeader />
          <Header toggleTheme={toggleTheme} />
          <button onClick={() => router.push("filters")}>
            {" "}
            pagina filters
          </button>
          <Content>
            <DataTable
              columns={columns}
              data={data}
              pagination
              paginationServer
              paginationComponentOptions={paginationComponentOptions}
              paginationRowsPerPageOptions={[5, 10, 20]}
              customStyles={customStyles}
            />
          </Content>
          <Footer />
        </Wrapper>
      </Theme>
    </ThemeProvider>
  );
};

export default Home;
