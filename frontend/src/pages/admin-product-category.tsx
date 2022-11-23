import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
//services an types
import { productCategoryService } from "../services";
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
import {
  Wrapper,
  Button,
  Theme,
  Text,
  Content,
} from "../styles/pages/admin-products";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { IProductCategories } from "../types/IProductCategories";
import { customStyles } from "../styles/dataTable/customStyles";
import { ModalCreateCategory } from "../components/Modals/CreateCategory";

export default function Administration() {
  const [theme, setTheme] = useState(light);
  const {
    query: { company_id },
  } = useRouter();
  const router = useRouter();
  //Data table states and paginator
  const [productCategories, setProductCategories] = useState<
    IProductCategories[]
  >([]);
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
      productCategoryService
        .getAll(company_id as string)
        .then((data) => setProductCategories(data))
        .catch((err) => alert(err));
    } else {
      alert("No company informed!");
      router.push("/");
    }
  }, [reloadData]);

  //Dados da tabela
  const columns = [
    {
      name: "category_id",
      selector: (row) => row.category_id,
      sortable: true,
    },
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
      name: "products",
      selector: (row) => row.products,
      sortable: true,
    },
  ];

  const data = productCategories.map((product) => {
    return {
      category_id: product.category_id,
      active: product.active ? "Sim" : "Não",
      title: product.title,
      description: product.description,
      product_type: product.product_type,
      products: product.products.map((prod: IProduct) => {
        prod.title;
      }),
    };
  });

  const paginationComponentOptions = {
    rowsPerPageText: "Linhas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: false,
  };

  return (
    <ThemeProvider theme={theme}>
      <Theme>
        <Wrapper>
          <NavHeader />
          <Header toggleTheme={toggleTheme} />
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
              paginationComponentOptions={paginationComponentOptions}
              paginationRowsPerPageOptions={[5, 10, 20]}
              customStyles={customStyles}
              theme={theme.title}
            />
          </Content>
          <Footer />
          <ModalCreateCategory
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
      </Theme>
    </ThemeProvider>
  );
}
