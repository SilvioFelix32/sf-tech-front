import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
//services
import { productsService } from "../services";
import { IProduct } from "../types";
//components
import { NavHeader, Header, Footer, ModalCreateProduct } from "../components";
//import { Modal as ModalDelete } from "react-responsive-modal";
//import { Modal as ModalOptions } from "react-responsive-modal";
//imported libs
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import DataTable from "react-data-table-component";
//styles
import { ThemeProvider } from "styled-components";
import { Wrapper, Button } from "../styles/admin-products";
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
  //Modals
  const [reloadData, setReloadData] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

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
  }, []);

  /*   async function fetchOneProduct(product_id: string) {
    if (company_id) {
      await productsService
        .getById(company_id)
        .then((data) => setProductSelectedById(data))
        .catch((err) => alert(err));
    } else {
      alert("Something went wrong!");
      router.push("/");
    }
  }

  async function handleDeleteProduct(product_id: string) {
    productsService.delete(company_id, product_id).then(() => {
      setReloadData(Math.random());
      setOpen(false);
    });
  } */

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
      selector: (row) => row.excluir_alterar,
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
        <div>
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <MdOutlineModeEditOutline />
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(true);
            }}
          >
            <MdDeleteOutline />
          </button>
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
              <ModalCreateProduct
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setReloadData={setReloadData}
              />
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
        {/*      <ModalRegistration
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setReloadData={setReloadData}
        /> */}
        {/*         <ModalDelete open={open} onClose={() => setIsOpen(false)} center>
          <div>
            <p>Excluir Produto?:</p>
            <div>
              <button
                onClick={() => {
                  handleDeleteProduct(selectedProduct);
                }}
              >
                Confirmar
              </button>
              <button onClick={() => setIsOpen(false)}>Cancelar</button>
            </div>
          </div>
        </ModalDelete> */}
      </Wrapper>
    </ThemeProvider>
  );
}
