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
import {
  Wrapper,
  Content,
  MainSection,
  LeftContent,
  Theme,
} from "../styles/pages/filters";

export default function Filters() {
  return (
    <Theme>
      <Wrapper>
        <NavHeader />
        <Header />
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
  );
}
