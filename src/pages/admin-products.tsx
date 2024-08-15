import React, { useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
//services an types
import { IProduct } from "../types";
import { productsService } from "../services";
import { environment } from "../utils/environment";
//components
import {
  ModalCreateProduct,
  ModalDeleteProduct,
  ModalEditProduct,
} from "../components";
import { EditButton, ExcludeButton } from "../components/Buttons";
//imported libs
import DataTable from "react-data-table-component";
//styles and theme
import { Button, Text, Content, Picture } from "../styles/pages/admin";
import { customStyles } from "../styles/customDataTable";

export default function AdminProducts() {
  const company_id = environment.companyId;
  //Data table states and pagination
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product_id, setProduct_id] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  //Modals
  const [reloadData, setReloadData] = useState(0);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);

  async function fetchProducts(page: number, perPage: number) {
    setLoading(true);

    await productsService
      .getAll({
        page: page,
        limit: perPage,
      })
      .then((res) => {
        setProducts(res.data);
        setTotalRows(res.meta.total);
      });
    setLoading(false);
  }

  function handlePageChange(page: number) {
    fetchProducts(page, perPage);
  }

  async function handlePerRowsChange(newPerPage: number, page: number) {
    setLoading(true);
    await productsService
      .getAll({
        page: page,
        limit: newPerPage,
      })
      .then((res) => {
        setProducts(res.data);
        setPerPage(newPerPage);
      })
      .catch((err) => console.error("error msg", err));
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts(1, perPage);
  }, [perPage]);

  //Dados da tabela
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

  const data = useMemo(() => {
    return products?.map((product) => ({
      id: product.product_id,
      sku: product.sku,
      title: product.title,
      urlBanner: (
        <Picture>
          <Image
            src={product?.urlBanner}
            alt={product?.title}
            width="200"
            height="200"
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
              setProduct_id(product?.product_id);
            }}
          ></EditButton>
          <ExcludeButton
            onClick={() => {
              setProduct_id(product?.product_id);
              setOpen(true);
            }}
          ></ExcludeButton>
        </div>
      ),
    }));
  }, [products]);

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
          progressPending={loading}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          paginationComponentOptions={paginationComponentOptions}
          paginationRowsPerPageOptions={[5, 10, 20]}
          paginationTotalRows={totalRows}
          customStyles={customStyles}
        />
      </Content>
      <ModalCreateProduct
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setReloadData={setReloadData}
      />
      <ModalEditProduct
        product_id={product_id}
        onOpen={onOpen}
        setOnOpen={setOnOpen}
        setReloadData={setReloadData}
      />
      <ModalDeleteProduct
        product_id={product_id}
        open={open}
        setOpen={setOpen}
        setReloadData={setReloadData}
      />
    </>
  );
}
