import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
import light from "../styles/themes/light";
import { customStyles } from "../styles/dataTable/customStyles";

export default function AdminCategories() {
  const [theme, setTheme] = useState(light);
  const {
    query: { company_id },
  } = useRouter();
  //Data table states and paginator
  const [productCategories, setProductCategories] = useState<
    IProductCategories[]
  >([]);
  const [category_id, setCategory_id] = useState("");
  //Modals
  const [reloadData, setReloadData] = useState(0);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onOpen, setOnOpen] = useState(false);

  useEffect(() => {
    if (company_id) {
      productCategoryService
        .getAll(company_id as string)
        .then((data) => setProductCategories(data))
        .catch((err) => alert(err));
    } else {
      alert("No company informed!");
    }
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
          paginationComponentOptions={paginationComponentOptions}
          paginationRowsPerPageOptions={[5, 10, 20]}
          customStyles={customStyles}
          theme={theme.title}
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
