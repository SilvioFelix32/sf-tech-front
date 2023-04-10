import React, { useContext, useEffect, useState } from "react";
import { CompanyContext } from "../context";
//services an types
import { productCategoryService } from "../services";
import { IProductCategories } from "../types/IProductCategories";
//components
import {
  ModalCreateCategory,
  ModalEditCategory,
  ModalDeleteCategory,
} from "../components";
import { EditButton, ExcludeButton } from "../components/Buttons";
//imported libs
import DataTable from "react-data-table-component";
//styles and theme
import { Wrapper, Button, Text, Content } from "../styles/pages/admin";
import { customStyles } from "../styles/customDataTable";

export default function AdminCategories() {
  const company_id = useContext(CompanyContext);
  //Data table states and pagination
  const [productCategories, setProductCategories] = useState<
    IProductCategories[]
  >([]);
  const [category_id, setCategory_id] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  //Modals
  const [reloadData, setReloadData] = useState(0);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);

  async function fetchProducts(page: number) {
    setLoading(true);
    await productCategoryService
      .getAll(company_id, {
        page: page,
        limit: perPage,
      })
      .then((data) => {
        console.log(data);
        setProductCategories(data);
        setTotalRows(data.total_count);
      });
    setLoading(false);
  }

  function handlePageChange(page) {
    fetchProducts(page);
  }

  async function handlePerRowsChange(newPerPage, page) {
    setLoading(true);

    await productCategoryService
      .getAll(company_id, {
        page: page,
        limit: newPerPage,
      })
      .then((data) => {
        setProductCategories(data);
        setPerPage(newPerPage);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts(1); // fetch page 1 of users
  }, [reloadData, company_id]);

  useEffect(() => {
    productCategoryService.getAll(company_id, {}).then((data) => {
      setProductCategories(data);
    });
  }, [company_id, reloadData]);

  //Dados da tabela
  const columns = [
    {
      name: "active",
      selector: (row) => row.active,
      sortable: true,
    },
    {
      name: "title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "product_type",
      selector: (row) => row.product_type,
      sortable: true,
    },
    {
      name: "outros",
      selector: (row) => row.exclude_alter,
      sortable: true,
    },
  ];

  const data = productCategories.map((product) => {
    return {
      active: product.active ? "Sim" : "Não",
      title: product.title,
      description: product.description,
      product_type: product.product_type,
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
              setCategory_id(product?.category_id);
            }}
          ></EditButton>
          <ExcludeButton
            onClick={() => {
              setCategory_id(product?.category_id);
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
      <Content>
        <Text>Administração de Categorias de Produtos</Text>
        <Button onClick={() => setIsOpen(true)}>
          Cadastrar nova Categoria
        </Button>
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
      <ModalCreateCategory
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setReloadData={setReloadData}
      />
      <ModalEditCategory
        category_id={category_id}
        onOpen={onOpen}
        setOnOpen={setOnOpen}
        setReloadData={setReloadData}
      />
      <ModalDeleteCategory
        category_id={category_id}
        open={open}
        setOpen={setOpen}
        setReloadData={setReloadData}
      />
    </Wrapper>
  );
}
