//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import { ProductCard } from "../components/ProductCard";
import { BrandsFilterCard } from "../components/Filters/BrandsFilterCard";
import { CategoriesFilterCard } from "../components/Filters/CategoriesFilterCard";
import { PriceFilterCard } from "../components/Filters/PriceFilterCard";
//styles
import {
  Wrapper,
  Content,
  MainSection,
  LeftContent,
  Theme,
} from "../styles/pages/filters";
import { useState } from "react";

export default function Filters() {
  const [filter, setFilter] = useState("");

  return (
    <Theme>
      <Wrapper>
        <NavHeader />
        <Header />
        <Content>
          <LeftContent>
            <CategoriesFilterCard filter={filter} setFilter={setFilter} />
            {/* <BrandsFilterCard /> */}
            <PriceFilterCard />
          </LeftContent>
          <MainSection>
            <ProductCard filter={filter} />
          </MainSection>
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
