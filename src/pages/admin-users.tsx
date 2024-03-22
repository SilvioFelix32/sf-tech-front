import { useContext, useEffect, useState } from "react";
import { IUser } from "../types/IUser";
import { CompanyContext } from "../context";
import { userService } from "../services";
import { useCan } from "../context/Authentication/hooks/useCan";
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

export default function AdminUsers() {
  const company_id = useContext(CompanyContext);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [users, setUsers] = useState<IUser[]>([]);
  // Modals
  const [reloadData, setReloadData] = useState(0);
  const [user_id, setUser_id] = useState("");
  const [open, setOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);
  const [superOpen, setSuperOpen] = useState(false);
  const userHasMasterPermissions = useCan({ role: ["MASTER"] });

  async function fetchUsers(page: number) {
    setLoading(true);

    try {
      const response = await userService.getAll(company_id, {
        page: page,
        limit: perPage,
      });
      setUsers(response.data);
      setTotalRows(response.meta.total);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handlePerRowsChange(newPerPage: number, page: number) {
    setLoading(true);

    try {
      const response = await userService.getAll(company_id, {
        page: page,
        limit: newPerPage,
      });
      setUsers(response.data);
      setPerPage(newPerPage);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  function handlePageChange(page: number) {
    fetchUsers(page);
  }

  useEffect(() => {
    fetchUsers(1); // fetch page 1 of users
  }, [company_id, reloadData]);

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

  const data = users.map((user) => {
    return {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
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
          progressPending={loading}
          pagination
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          paginationRowsPerPageOptions={[5, 10, 20]}
          paginationComponentOptions={paginationComponentOptions}
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
