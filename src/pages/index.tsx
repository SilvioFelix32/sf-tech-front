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
import { InitialModal } from "../components";

export default function Home() {
  const [filter, setFilter] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  return (
    <Theme>
      <NavHeader />
      <Header
        showSignInButton={true}
        showCartButton={true}
        showFavoritesButton={true}
        showAdminButton={true}
      />
      <Wrapper>
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
        <InitialModal isOpen={isOpen} setOpen={setOpen} />
        <Footer />
      </Wrapper>
    </Theme>
  );
}
