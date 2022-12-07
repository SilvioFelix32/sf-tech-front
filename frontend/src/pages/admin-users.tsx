import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "i18next";
import { IUser } from "../types/IUser";
import { userService } from "../services";
//components
import DataTable from "react-data-table-component";
import { ModalEditUser, ModalDeleteUser } from "../components";
import { EditButton, ExcludeButton } from "../components/Buttons";
//styles
import { Wrapper, Content, Text } from "../styles/pages/admin";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { customStyles } from "../styles/dataTable/customStyles";

export default function AdminUsers() {
  const { t } = useTranslation();
  const {
    query: { company_id },
  } = useRouter();
  const [theme, setTheme] = useState(light);
  const [users, setUsers] = useState<IUser[]>([]);
  //Modals
  const [reloadData, setReloadData] = useState(0);
  const [user_id, setUser_id] = useState("");
  const [open, setOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);

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
      name: user.name,
      last_name: user.last_name,
      document: user.document,
      email: user.email,
      celphone: user.celphone,
      birth_date: user.birth_date,
      active: user.active ? "Sim" : "Não",
      exclude_alter: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EditButton
            onClick={() => {
              setOnOpen(true);
              setUser_id(user?.user_id);
            }}
          ></EditButton>
          <ExcludeButton
            onClick={() => {
              setUser_id(user?.user_id);
              setOpen(true);
            }}
          ></ExcludeButton>
        </div>
      ),
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
    {
      name: t("outros"),
      selector: (row) => row.exclude_alter,
      sortable: true,
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: "Linhas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: false,
  };

  return (
    <Wrapper>
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
      <ModalEditUser
        user_id={user_id}
        onOpen={onOpen}
        setOnOpen={setOnOpen}
        setReloadData={setReloadData}
      />
      <ModalDeleteUser
        user_id={user_id}
        open={open}
        setOpen={setOpen}
        setReloadData={setReloadData}
      />
    </Wrapper>
  );
}
