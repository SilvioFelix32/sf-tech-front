import React, { useState, memo } from "react";
import Image from "next/image";
import { useProductFilter } from "../hooks/useProductFiltes";
import {
  ModalCreateProduct,
  ModalDeleteProduct,
  ModalEditProduct,
} from "../components";
import { useQueryClient } from "react-query";
import DataTable from "react-data-table-component";
import { EditButton, ExcludeButton } from "../components/Buttons";
//styles
import { Button, Text, Content, Picture } from "../styles/pages/admin";
import { customStyles } from "../styles/customDataTable";

function AdminProducts() {
  const queryClient = useQueryClient();
  const [product_id, setProduct_id] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);

  const {
    value: { products, meta },
    isLoading,
  } = useProductFilter({ page, perPage });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePerRowsChange = (newPerPage: number) => {
    setPerPage(newPerPage);
    setPage(1);
  };

  const reloadData = () => queryClient.invalidateQueries(["products"]);

  const columns = [
    {
      name: "sku",
      selector: (row) => row.sku,
      sortable: true,
    },
    {
      name: "titulo",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "imagem",
      selector: (row) => row.urlBanner,
    },
    {
      name: "destaque",
      selector: (row) => row.highlighted,
      sortable: true,
    },
    {
      name: "outros",
      selector: (row) => row.exclude_alter,
    },
  ];

  const data =
    products && products.length > 0
      ? products.map((product) => ({
          id: product.product_id,
          sku: product.sku,
          title: product.title,
          urlBanner: (
            <Picture>
              <Image
                src={product.urlBanner}
                alt={product.title}
                width="200"
                height="200"
                style={{ objectFit: "contain" }}
                priority
              ></Image>
            </Picture>
          ),
          highlighted: product.highlighted ? "Sim" : "Não",
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
                  setProduct_id(product.product_id);
                }}
              ></EditButton>
              <ExcludeButton
                onClick={() => {
                  setProduct_id(product.product_id);
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
    <>
      <Content>
        <Text>Administração de Produtos</Text>
        <Button onClick={() => setIsOpen(true)}>Cadastrar novo Produto</Button>
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
      <ModalCreateProduct
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setReloadData={reloadData}
      />
      <ModalEditProduct
        product_id={product_id}
        onOpen={onOpen}
        setOnOpen={setOnOpen}
        setReloadData={reloadData}
      />
      <ModalDeleteProduct
        product_id={product_id}
        open={open}
        setOpen={setOpen}
        setReloadData={reloadData}
      />
    </>
  );
}

export default memo(AdminProducts);
