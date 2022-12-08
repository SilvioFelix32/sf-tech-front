import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
//services an types
import { productsService } from "../services";
import { IProduct } from "../types";
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
import { Button, Text, Content } from "../styles/pages/admin";
import light from "../styles/themes/light";
import { customStyles } from "../styles/dataTable/customStyles";

export default function AdminProducts() {
  const [theme, setTheme] = useState(light);
  const {
    query: { company_id },
  } = useRouter();
  //Data table states and paginator
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product_id, setProduct_id] = useState("");
  //Modals
  const [reloadData, setReloadData] = useState(0);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);

  useEffect(() => {
    if (company_id) {
      productsService
        .getAll(company_id as string)
        .then((data) => setProducts(data))
        .catch((err) => alert(err));
    } else {
      alert("No company informed!");
    }
  }, [company_id]);

  //Dados da tabela
  const columns = [
    {
      name: "sku",
      selector: (row) => row.sku,
      sortable: true,
    },
    {
      name: "title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: " url_banner",
      selector: (row) => row.url_banner,
    },
    {
      name: "combo",
      selector: (row) => row.combo,
      sortable: true,
    },
    {
      name: "outros",
      selector: (row) => row.exclude_alter,
    },
  ];

  const data = products.map((product) => {
    return {
      id: product.product_id,
      sku: product.sku,
      title: product.title,
      url_banner: (
        <Image
          src={product?.url_banner}
          alt={product?.title}
          width="300"
          height="300"
          priority
        ></Image>
      ),
      combo: product.combo ? "Sim" : "Não",
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
    };
  });

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
          paginationServer
          paginationComponentOptions={paginationComponentOptions}
          paginationRowsPerPageOptions={[5, 10, 20]}
          customStyles={customStyles}
          theme={theme.title}
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
