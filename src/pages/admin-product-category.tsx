import { memo, useState } from "react";
import { useQueryClient } from "react-query";
import { IProductCategory } from "../interfaces";
import { useCategoryFilter } from "../hooks/useCategoryFilter";
import {
  ModalCreateCategory,
  ModalEditCategory,
  ModalDeleteCategory,
} from "../components";
import { EditButton, ExcludeButton } from "../components/Buttons";
import DataTable from "react-data-table-component";
import { Wrapper, Button, Text, Content } from "../styles/pages/admin";
import { customStyles } from "../styles/customDataTable";
import "react-responsive-modal/styles.css";

function AdminCategories() {
  const queryClient = useQueryClient();
  const [category_id, setCategory_id] = useState("");
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const {
    value: { productCategories, meta },
    isLoading,
  } = useCategoryFilter({ page, perPage });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePerRowsChange = (newPerPage: number) => {
    setPerPage(newPerPage);
    setPage(1);
  };

  function invalidateQuery() {
    queryClient.invalidateQueries(["productCategories"]);
  }

  const columns = [
    {
      name: "titulo",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "descrição",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "outros",
      selector: (row) => row.exclude_alter,
    },
  ];

  const data =
    productCategories && productCategories.length > 0
      ? productCategories.map((category: IProductCategory) => ({
          title: category.title,
          description: category.description,
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
                  setCategory_id(category.category_id);
                }}
              ></EditButton>
              <ExcludeButton
                onClick={() => {
                  setCategory_id(category.category_id);
                  setOpen(true);
                }}
              ></ExcludeButton>
            </div>
          ),
        }))
      : [];

  const paginationComponentOptions = {
    rowsPerPageText: "Linhas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: false,
  };

  return (
    <Wrapper>
      <Content>
        <Text>Administração de Categorias de Produtos</Text>
        <Button onClick={() => setIsOpen(true)}>
          Cadastrar nova Categoria
        </Button>
        <DataTable
          columns={columns}
          data={data}
          pagination
          progressPending={isLoading}
          onChangePage={handlePageChange}
          paginationTotalRows={meta.total}
          paginationPerPage={perPage}
          paginationServer
          paginationComponentOptions={paginationComponentOptions}
          paginationDefaultPage={page}
          customStyles={customStyles}
          paginationRowsPerPageOptions={[5, 10, 20]}
          onChangeRowsPerPage={handlePerRowsChange}
        />
      </Content>
      <ModalCreateCategory
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setReloadData={() => invalidateQuery()}
      />
      <ModalEditCategory
        category_id={category_id}
        onOpen={onOpen}
        setOnOpen={setOnOpen}
        setReloadData={() => invalidateQuery()}
      />
      <ModalDeleteCategory
        category_id={category_id}
        open={open}
        setOpen={setOpen}
        setReloadData={() => invalidateQuery()}
      />
    </Wrapper>
  );
}

export default memo(AdminCategories);
