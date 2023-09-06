//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import { ProductCard } from "../components/ProductCard";
import { CategoriesFilterCard } from "../components/Filters/CategoriesFilterCard";
import { PriceFilterCard } from "../components/Filters/PriceFilterCard";
import { useFilterContext } from "../context";
//styles
import {
  Wrapper,
  Content,
  MainSection,
  LeftContent,
  Theme,
  Button,
} from "../styles/pages/home";
import { useState } from "react";

export default function Filters() {
  const [filter, setFilter] = useState("");
  const [isSelected, setIsSelected] = useState("");
  const { clearFilters } = useFilterContext();

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
            <Button
              onClick={() => {
                clearFilters(), setFilter(""), setIsSelected("");
              }}
            >
              Limpar Filtros
            </Button>
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
