import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FaBars } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "react-responsive-modal/styles.css";
import { companiesService } from "../services";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { ThemeProvider } from "styled-components";

export default function ManageCompany() {
  const {
    query: { companyQuery },
  } = useRouter();
  const router = useRouter();
  const MySwal = withReactContent(Swal);
  const [isToggled, setIsToggled] = useState(false);
  const [company, setCompany] = useState(null);
  const company_id = "f1a87c2b-f81a-4d28-a24d-15bb3d0aac7b";

  useEffect(() => {
    if (company_id) {
      companiesService
        .getById(company_id)
        .then((data) => {
          setCompany(data);
        })
        .catch(() => {
          MySwal.fire({
            position: "center",
            icon: "info",
            title: "Empresa não encontrada, você será redirecionado em 3s",
            showConfirmButton: false,
            timer: 3000,
          }).then(() => router.push("/"));
        });
    } else {
      MySwal.fire({
        position: "center",
        icon: "info",
        title: "Empresa não encontrada, você será redirecionado em 3s",
        showConfirmButton: false,
        timer: 3000,
      }).then(() => router.push("dashboard"));
    }
  }, [company_id]);

  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header toggleTheme={toggleTheme} />
        <div>
          <button onClick={() => router.push("dashboard")}>
            <FiArrowLeft />
          </button>
          <h1>Editar dados da Empresa </h1>
          <button onClick={() => setIsToggled((oldValue) => !oldValue)}>
            <FaBars />
          </button>
        </div>
        {company &&
          {
            /* <AdminCompany company={company} /> */
          }}
        <Footer />
      </>
    </ThemeProvider>
  );
}
