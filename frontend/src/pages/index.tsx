import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { companiesService } from "../services/companies-service";
import { useTranslation } from "react-i18next";
import "i18next";
//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import DataTable from "react-data-table-component";
//styles
import { ThemeProvider } from "styled-components";
import { Wrapper, Content } from "../styles";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import customStyles from "../styles/customStyles";
import Link from "next/link";
import { ICompany } from "../types/ICompany";

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
      fantasy_name: company.fantasy_name,
      celphone1: company.celphone1,
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
      selector: (row) => row.celphone1,
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
      <Wrapper>
        <NavHeader />
        <Header toggleTheme={toggleTheme} />
        <button onClick={() => router.push("filters")}> pagina filters</button>
        <button onClick={() => router.push("admin-products")}>
          admin products
        </button>
        <Content>
          <DataTable
            columns={columns}
            data={data}
            progressPending={loading}
            pagination
            paginationServer
            paginationComponentOptions={paginationComponentOptions}
            paginationRowsPerPageOptions={[10, 15, 20]}
            paginationTotalRows={totalRows}
            //customStyles={customStyles}
          />
        </Content>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Home;
