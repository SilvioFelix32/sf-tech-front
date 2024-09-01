//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import { ProductCard } from "../components/ProductCard";
import { CategoriesFilterCard } from "../components/Filters/CategoriesFilterCard";
import { PriceFilterCard } from "../components/Filters/PriceFilterCard";
//styles
import {
  Wrapper,
  Content,
  MainSection,
  LeftContent,
  Theme,
} from "../styles/pages/home";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("");
  const [isSelected, setIsSelected] = useState("");

  return (
    <Theme>
      <Wrapper>
        <NavHeader />
        <Header />
        <Content>
          <LeftContent>
            <CategoriesFilterCard
              filter={filter}
              setFilter={setFilter}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
            <PriceFilterCard />
          </LeftContent>
          <MainSection>
            <ProductCard filter={filter} isSelected={isSelected} />
          </MainSection>
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
