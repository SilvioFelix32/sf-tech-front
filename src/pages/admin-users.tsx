import { useContext, useEffect, useState } from "react";
import { IUser } from "../types/IUser";
import { CompanyContext } from "../context";
import { userService } from "../services";
//components
import DataTable from "react-data-table-component";
import {
  ModalEditUser,
  ModalDeleteUser,
  ModalEditSuperUser,
} from "../components";
import { EditButton, ExcludeButton } from "../components/Buttons";
//styles
import { Wrapper, Content, Text } from "../styles/pages/admin";
import { customStyles } from "../styles/customDataTable";
import { useCan } from "../context/Authentication/hooks/useCan";

export default function AdminUsers() {
  const company_id = useContext(CompanyContext);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [users, setUsers] = useState<IUser[]>([]);
  //Modals
  const [reloadData, setReloadData] = useState(0);
  const [user_id, setUser_id] = useState("");
  const [open, setOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);
  const [superOpen, setSuperOpen] = useState(false);
  const userHasMasterPermissions = useCan({ role: ["MASTER"] });

  async function fetchUsers(page: number) {
    setLoading(true);
    await userService
      .getAll(company_id, {
        page: page,
        limit: perPage,
      })
      .then((res) => {
        setUsers(res.data);
        setTotalRows(res.meta.total);
      });
    setLoading(false);
  }

  function handlePageChange(page: number) {
    fetchUsers(page);
  }

  async function handlePerRowsChange(newPerPage: number, page: number) {
    setLoading(true);

    await userService
      .getAll(company_id, {
        page: page,
        limit: newPerPage,
      })
      .then((res) => {
        setUsers(res.data);
        setPerPage(newPerPage);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers(1); // fetch page 1 of users

    userService.getAll(company_id, {}).then((res) => {
      setUsers(res.data);
    });
  }, [company_id, reloadData]);

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
              if (userHasMasterPermissions) {
                setSuperOpen(true);
                setUser_id(user?.user_id);
              } else {
                setOnOpen(true);
                setUser_id(user?.user_id);
              }
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
      name: "nome",
      selector: (row) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: "ultimo nome",
      selector: (row) => row.last_name,
      sortable: true,
      grow: 1,
    },
    {
      name: "documento",
      selector: (row) => row.document,
      sortable: true,
      grow: 1,
    },
    {
      name: "email",
      selector: (row) => row.email,
      sortable: true,
      grow: 2,
    },
    {
      name: "celular",
      selector: (row) => row.celphone,
    },
    {
      name: "nascimento",
      selector: (row) => row.birth_date,
    },
    {
      name: "ativo",
      selector: (row) => row.active,
      sortable: true,
      grow: 1,
    },
    {
      name: "outros",
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
          progressPending={loading}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          paginationComponentOptions={paginationComponentOptions}
          paginationRowsPerPageOptions={[5, 10, 20]}
          paginationTotalRows={totalRows}
          customStyles={customStyles}
        />
      </Content>
      <ModalEditSuperUser
        user_id={user_id}
        superOpen={superOpen}
        setSuperOpen={setSuperOpen}
        setReloadData={setReloadData}
      />
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
