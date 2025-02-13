import { useState } from "react";
//components
import {
  CategoriesFilterCard,
  Footer,
  Header,
  InitialModal,
  NavHeader,
  PriceFilterCard,
  ProductCard,
} from "../components";
//styles
import {
  Wrapper,
  Content,
  MainSection,
  LeftContent,
} from "../styles/pages/home";
import { Theme } from "../styles/components";

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
