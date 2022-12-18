import { useState } from "react";
import { setCookie } from "nookies";
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

export default function Filters() {
  const themes = light || dark;
  const [theme, setTheme] = useState(themes);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
    setCookie(undefined, "color-theme", theme.title, {
      maxAge: 60 * 60 * 24,
      path: "/",
    });
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
}
