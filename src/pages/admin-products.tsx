import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IProduct } from "../types";
import { productsService } from "../services";
import {
  ModalCreateProduct,
  ModalDeleteProduct,
  ModalEditProduct,
} from "../components";
import DataTable from "react-data-table-component";
import { EditButton, ExcludeButton } from "../components/Buttons";
//styles
import { Button, Text, Content, Picture } from "../styles/pages/admin";
import { customStyles } from "../styles/customDataTable";

export default function AdminProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product_id, setProduct_id] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  //Modals
  const [reloadData, setReloadData] = useState(0);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);

  async function fetchProducts(page: number, perPage: number) {
    try {
      setLoading(true);
      const res = await productsService.getAll({
        page: page,
        limit: perPage,
      });
      setProducts(res.data);
      setTotalRows(res.meta.total);
      setPage(res.meta.currentPage);
      setLastPage(res.meta.lastPage || 1);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }

  function handlePageChange(newPage: number) {
    if (newPage <= lastPage) {
      setPage(newPage);
      fetchProducts(newPage, perPage);
    }
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
    fetchProducts(page, perPage);
  }, [perPage, page, reloadData]);

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

  const data = products?.map((product) => ({
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
