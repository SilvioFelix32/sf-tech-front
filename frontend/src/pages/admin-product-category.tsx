import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Switch } from "@mui/material";
import DataTable from "react-data-table-component";
//components
import { Footer, Header } from "../components";
import { FaBars } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
//styles
import { ThemeProvider } from "styled-components";
import { Wrapper, Content } from "../styles";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

export default function ProductCategoryAdmin() {
  const router = useRouter();
  const {
    query: { company_id },
  } = useRouter();
  //theming
  const [theme, setTheme] = useState(light);
  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  const [productCategory, setProductCategory] = useState([]);
  const [reloadData, setReloadData] = useState(0);
  //modals
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  //data
  const [config_tipo_id, setConfigTipoId] = useState(null);
  const [titulo, setTitulo] = useState(selectedProduct?.titulo || "");
  const [descricao, setDescricao] = useState(selectedProduct?.descricao || "");
  const [ativo, setAtivo] = useState(selectedProduct?.ativo || true);
  const [avaliable, setAvaliable] = useState(
    selectedProduct?.avaliable || false
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header toggleTheme={toggleTheme} />
        <div>
          <div>
            <div>
              <button
                onClick={() =>
                  router.push({
                    pathname: "admin-products",
                    query: { company_id },
                  })
                }
              >
                <FiArrowLeft />
              </button>
              <h1>Administrar Categoria Produtos </h1>
              <button onClick={() => setOpen((oldValue) => !oldValue)}>
                <FaBars />
              </button>
            </div>
            <div>
              <button onClick={() => setIsOpen(true)}>
                Cadastrar nova Categoria
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
