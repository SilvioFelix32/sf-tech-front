import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "i18next";
import { IUser } from "../types/IUser";
import { userService } from "../services";
//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import DataTable from "react-data-table-component";
//styles
import { ThemeProvider } from "styled-components";
import { Wrapper, Theme, Content, Text } from "../styles/pages/admin-company";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { customStyles } from "../styles/dataTable/customStyles";

export default function ManageUsers() {
  const { t } = useTranslation();
  const {
    query: { company_id },
  } = useRouter();
  const [theme, setTheme] = useState(light);
  const [users, setUsers] = useState<IUser[]>([]);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  useEffect(() => {
    userService.getAll(company_id as string).then((data) => {
      setUsers(data);
    });
  }, [company_id]);

  const data = users.map((user) => {
    return {
      user_id: user.user_id,
      name: user.name,
      last_name: user.last_name,
      document: user.document,
      email: user.email,
      celphone: user.celphone,
      birth_date: user.birth_date,
      active: user.active ? "Sim" : "Não",
    };
  });

  const columns = [
    {
      name: t("user_id"),
      selector: (row) => row.user_id,
      sortable: true,
    },
    {
      name: t("main.companyTable.name"),
      selector: (row) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: "last_name",
      selector: (row) => row.last_name,
      sortable: true,
      grow: 1,
    },
    {
      name: "document",
      selector: (row) => row.document,
      sortable: true,
      grow: 1,
    },
    {
      name: t("email"),
      selector: (row) => row.email,
      sortable: true,
      grow: 2,
    },
    {
      name: t("celphone"),
      selector: (row) => row.celphone,
    },
    {
      name: t("birth_date"),
      selector: (row) => row.birth_date,
    },
    {
      name: t("active"),
      selector: (row) => row.active,
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
          <Text>Administrar Usuários</Text>
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
          <Footer />
        </Wrapper>
      </Theme>
    </ThemeProvider>
  );
}
