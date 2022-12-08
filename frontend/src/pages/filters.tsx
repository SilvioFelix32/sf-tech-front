import type { NextPage } from "next";
import { useState } from "react";
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

const Filtes: NextPage = () => {
  const [theme, setTheme] = useState(light);
  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Theme>
        <Wrapper>
          <NavHeader />
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
