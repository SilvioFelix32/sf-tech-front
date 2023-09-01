/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { CompanyContext } from "../context";
import { productCategoryService } from "../services";
import { IProductCategories } from "../types/IProductCategories";
import {
  ModalCreateCategory,
  ModalEditCategory,
  ModalDeleteCategory,
} from "../components";
import { EditButton, ExcludeButton } from "../components/Buttons";
import DataTable from "react-data-table-component";
import "react-responsive-modal/styles.css";
import { Wrapper, Button, Text, Content } from "../styles/pages/admin";
import { customStyles } from "../styles/customDataTable";

export default function AdminCategories() {
  const company_id = useContext(CompanyContext);
  const [productCategories, setProductCategories] = useState<
    IProductCategories[]
  >([]);
  const [category_id, setCategory_id] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [reloadData, setReloadData] = useState(0);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);

  async function fetchProducts(page: number, limit: number) {
    setLoading(true);
    try {
      const res = await productCategoryService.getAll(company_id, {
        page,
        limit,
      });
      setProductCategories(res.data);
      setTotalRows(res.meta.total);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  }

  function handlePageChange(page: number) {
    fetchProducts(page, perPage);
  }

  async function handlePerRowsChange(newPerPage: number, page: number) {
    setLoading(true);

    try {
      const res = await productCategoryService.getAll(company_id, {
        page,
        limit: newPerPage,
      });
      setProductCategories(res.data);
      setPerPage(newPerPage);
    } catch (error) {
      console.error("Error changing rows per page:", error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProducts(1, perPage);
  }, [company_id, reloadData, perPage]);

  const columns = [
    {
      name: "ativo",
      selector: "active",
      sortable: true,
      cell: (row) => (row.active ? "Sim" : "Não"),
    },
    {
      name: "titulo",
      selector: "title",
      sortable: true,
    },
    {
      name: "descrição",
      selector: "description",
      sortable: true,
    },
    {
      name: "tipo produto",
      selector: "product_type",
      sortable: true,
    },
    {
      name: "outros",
      selector: "exclude_alter",
      sortable: true,
      cell: (row) => (
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
              setCategory_id(row.category_id);
            }}
          ></EditButton>
          <ExcludeButton
            onClick={() => {
              setCategory_id(row.category_id);
              setOpen(true);
            }}
          ></ExcludeButton>
        </div>
      ),
    },
  ];

  return (
    <Wrapper>
      <Content>
        <Text>Administração de Categorias de Produtos</Text>
        <Button onClick={() => setIsOpen(true)}>
          Cadastrar nova Categoria
        </Button>
        <DataTable
          columns={columns as any}
          data={productCategories}
          pagination
          paginationServer
          progressPending={loading}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          paginationComponentOptions={{
            rowsPerPageText: "Linhas por página",
            rangeSeparatorText: "de",
            selectAllRowsItem: false,
          }}
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
