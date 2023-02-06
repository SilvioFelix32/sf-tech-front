import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { companiesService } from "../services/companies-service";
import { ICompany } from "../types/ICompany";
//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import DataTable from "react-data-table-component";
//styles
import { Wrapper, Theme, Content } from "../styles";
import { customStyles } from "../styles/dataTable/customStyles";

const Home: NextPage = () => {
  const [filter, setFilter] = useState("");
  const [companies, setCompanies] = useState([]);

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
            pathname: "filters",
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
      name: "id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "nome",
      selector: (row) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: "documento",
      selector: (row) => row.document,
      sortable: true,
      grow: 1,
    },
    {
      name: "nome fantasia",
      selector: (row) => row.fantasy_name,
      sortable: true,
      grow: 2,
    },
    {
      name: "celular",
      selector: (row) => row.cellphone,
    },
    {
      name: "email",
      selector: (row) => row.email,
    },
    {
      name: "select id",
      selector: (row) => row.select_id,
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: "Linhas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: false,
  };

  return (
    <Theme>
      <Wrapper>
        <NavHeader />
        <Header filter={filter} setFilter={setFilter} />
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
  );
};

export default Home;
