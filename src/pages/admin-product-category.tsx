import { memo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { IProductCategory } from "../types";
import { categoryService } from "../services";
import { environment } from "../config/environment";
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
import { ICategoryResponse } from "../services/interfaces/ICategoryResponse";

function AdminCategories() {
  const company_id = environment.companyId;
  const queryClient = useQueryClient();
  const [category_id, setCategory_id] = useState("");
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);
  const [perPage, setPerPage] = useState(10);

  const {
    data: categories = {
      data: [],
      meta: { total: 0, currentPage: 1, perPage: 10, next: 1 },
    },
    isLoading,
    isFetching,
    refetch,
  } = useQuery<ICategoryResponse>(
    ["productCategories", company_id, perPage],
    () => categoryService.getAll(company_id, { page: 1, limit: perPage }),
    {
      enabled: !!company_id,
      select: ({ data, meta, message }) => ({ data, meta, message }),
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutos
      cacheTime: 30 * 60 * 1000, // 30 minutos
    }
  );

  const mutation = useMutation(
    async ({ page, limit }: { page: number; limit: number }) => {
      return categoryService.getAll(company_id, { page, limit });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["productCategories"]);
      },
    }
  );

  const handlePageChange = (page: number) => {
    mutation.mutate({ page, limit: perPage });
  };

  const handlePerRowsChange = (newPerPage: number, page: number) => {
    setPerPage(newPerPage);
    mutation.mutate({ page, limit: newPerPage });
  };

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

  const data = categories.data.map((category: IProductCategory) => ({
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
  }));

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
          progressPending={isLoading || isFetching}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          paginationComponentOptions={paginationComponentOptions}
          paginationRowsPerPageOptions={[5, 10, 20]}
          paginationTotalRows={categories.meta.total}
          customStyles={customStyles}
        />
      </Content>
      <ModalCreateCategory
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setReloadData={() => refetch()}
      />
      <ModalEditCategory
        category_id={category_id}
        onOpen={onOpen}
        setOnOpen={setOnOpen}
        setReloadData={() => refetch()}
      />
      <ModalDeleteCategory
        category_id={category_id}
        open={open}
        setOpen={setOpen}
        setReloadData={() => refetch()}
      />
    </Wrapper>
  );
}

export default memo(AdminCategories);
