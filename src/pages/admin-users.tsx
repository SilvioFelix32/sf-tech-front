import { useContext, useEffect, useMemo, useState } from "react";
import { IUser, Role } from "../types/IUser";
import { userService } from "../services";
import { environment } from "../utils/environment";
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
  const company_id = environment.companyId;
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  // Modals
  const [reloadData, setReloadData] = useState(0);
  const [user_id, setUser_id] = useState("");
  const [open, setOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);
  const userHasMasterPermissions = useCan({ role: [Role.MASTER] });

  async function fetchUsers(page: number, perPage: number) {
    setLoading(true);

    try {
      const response = await userService.getAll(company_id, {
        page: page,
        limit: perPage,
      });
      setUsers(response.data.data);
      setTotalRows(response.data.meta.total);
      setPage(response.data.meta.currentPage);
      setLastPage(response.data.meta.lastPage || 1);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  function handlePageChange(newPage: number) {
    if (newPage <= lastPage) {
      setPage(newPage);
      fetchUsers(newPage, perPage);
    }
  }

  async function handlePerRowsChange(newPerPage: number, page: number) {
    setLoading(true);

    try {
      const response = await userService.getAll(company_id, {
        page: page,
        limit: newPerPage,
      });
      setUsers(response.data.data);
      setPerPage(newPerPage);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers(page, perPage);
  }, [perPage]);
  const columns = useMemo(() => {
    const baseColumns = [
      {
        name: "nome",
        selector: (row) => row.name,
        sortable: true,
        grow: 2,
      },
      {
        name: "sobrenome",
        selector: (row) => row.lastName,
        sortable: true,
        grow: 1,
      },
      {
        name: "email",
        selector: (row) => row.email,
        sortable: true,
        grow: 2,
      },
    ];

    if (userHasMasterPermissions) {
      baseColumns.push({
        name: "outros",
        selector: (row) => row.exclude_alter,
        sortable: true,
        grow: 1,
      });
    }

    return baseColumns;
  }, [userHasMasterPermissions]);

  const data = useMemo(() => {
    return users?.map((user) => ({
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
              setUser_id(user?.user_id);
              setOnOpen(true);
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
    }));
  }, [users]);

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
          progressPending={loading}
          onChangePage={handlePageChange}
          paginationTotalRows={totalRows}
          paginationPerPage={perPage}
          paginationServer
          paginationComponentOptions={paginationComponentOptions}
          paginationDefaultPage={page}
          customStyles={customStyles}
          paginationRowsPerPageOptions={[5, 10, 20]}
          onChangeRowsPerPage={handlePerRowsChange}
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
