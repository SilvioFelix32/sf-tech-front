import type { NextPage } from "next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "i18next";
//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import { ProductCard } from "../components/ProductCard";
import { BrandsFilterCard } from "../components/Filters/BrandsFilterCard";
import { CategoriesFilterCard } from "../components/Filters/CategoriesFilterCard";
import { PriceFilterCard } from "../components/Filters/PriceFilterCard";
//styles
import { ThemeProvider } from "styled-components";
import {
  Wrapper,
  Content,
  MainSection,
  LeftContent,
  Theme,
} from "../styles/pages/filters";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { useRouter } from "next/router";

const Filtes: NextPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const {
    query: { company_id },
  } = useRouter();
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Theme>
        <Wrapper>
          <NavHeader />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "10px",
            }}
          >
            <button
              onClick={() =>
                router.push({
                  pathname: "admin-products",
                  query: { company_id },
                })
              }
            >
              admin-products
            </button>
            <button
              onClick={() =>
                router.push({
                  pathname: "admin-users",
                  query: { company_id },
                })
              }
            >
              admin-users
            </button>
            <button
              onClick={() =>
                router.push({
                  pathname: " admin-product-category",
                  query: { company_id },
                })
              }
            >
              admin-product-category
            </button>
            <button
              onClick={() =>
                router.push({
                  pathname: "admin-company",
                  query: { company_id },
                })
              }
            >
              admin-company
            </button>
          </div>
          <Header toggleTheme={toggleTheme} />
          <Content>
            <LeftContent>
              <CategoriesFilterCard />
              <BrandsFilterCard />
              <PriceFilterCard />
            </LeftContent>
            <MainSection>
              <ProductCard />
            </MainSection>
          </Content>
          <Footer />
        </Wrapper>
      </Theme>
    </ThemeProvider>
  );
};

export default Filtes;
