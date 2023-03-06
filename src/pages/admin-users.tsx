import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IUser } from "../types/IUser";
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
  const {
    query: { company_id },
  } = useRouter();
  const [users, setUsers] = useState<IUser[]>([]);
  //Modals
  const [reloadData, setReloadData] = useState(0);
  const [user_id, setUser_id] = useState("");
  const [open, setOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);
  const [superOpen, setSuperOpen] = useState(false);
  const userHasMasterPermissions = useCan({ role: ["MASTER"] });

  useEffect(() => {
    userService.getAll(company_id as string).then((data) => {
      setUsers(data);
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
      name: "celphone",
      selector: (row) => row.celphone,
    },
    {
      name: "nascimento",
      selector: (row) => row.birth_date,
    },
    {
      name: "ativo",
      selector: (row) => row.active,
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
          paginationComponentOptions={paginationComponentOptions}
          paginationRowsPerPageOptions={[5, 10, 20]}
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
