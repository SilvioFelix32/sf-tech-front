import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
//services an types
import { productsService } from "../services";
import { IProduct } from "../types";
//components
import {
  NavHeader,
  Header,
  Footer,
  ModalCreateProduct,
  ModalEditProduct,
  ModalDeleteProduct,
} from "../components";
import { EditButton, ExcludeButton } from "../components/Buttons";
//imported libs
import DataTable from "react-data-table-component";
//styles and theme
import { ThemeProvider } from "styled-components";
import { Wrapper, Button } from "../styles";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

export default function Administration() {
  const [theme, setTheme] = useState(light);
  const {
    query: { company_id },
  } = useRouter();
  const router = useRouter();
  //Data table states and paginator
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product_id, setProduct_id] = useState("");
  //Modals
  const [reloadData, setReloadData] = useState(0);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  useEffect(() => {
    if (company_id) {
      productsService
        .getAll(company_id as string)
        .then((data) => setProducts(data))
        .catch((err) => alert(err));
    } else {
      alert("No company informed!");
      router.push("/");
    }
  }, [reloadData]);

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
    <ThemeProvider theme={theme}>
      <Wrapper>
        <NavHeader />
        <Header toggleTheme={toggleTheme} />
        <div>
          <div>
            <div>
              <h1>Administração</h1>
            </div>
            <div>
              <Button onClick={() => setIsOpen(true)}>
                Cadastrar novo Produto
              </Button>
            </div>
            <DataTable
              columns={columns}
              data={data}
              pagination
              paginationServer
              paginationComponentOptions={paginationComponentOptions}
              paginationRowsPerPageOptions={[5, 10, 20]}
            />
          </div>
        </div>
        <Footer />
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
      </Wrapper>
    </ThemeProvider>
  );
}
