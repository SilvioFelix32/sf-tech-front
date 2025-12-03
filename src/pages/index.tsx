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
  HomePageWrapper,
  HomeContent,
  ProductListSection,
  FilterSidebar,
} from "../styles/pages/home";
import { Theme } from "../styles/components";

export default function Home() {
  const [isInitialModalOpen, setInitialModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  return (
    <Theme>
      <NavHeader />
      <Header
        showSignInButton={true}
        showCartButton={true}
        showFavoritesButton={true}
        showAdminButton={true}
      />
      <HomePageWrapper>
        <HomeContent>
          <FilterSidebar>
            <CategoriesFilterCard
              isSelected={selectedCategoryId}
              setIsSelected={setSelectedCategoryId}
            />
            <PriceFilterCard />
          </FilterSidebar>
          <ProductListSection>
            <ProductCard isSelected={selectedCategoryId} />
          </ProductListSection>
        </HomeContent>
        <InitialModal
          isOpen={isInitialModalOpen}
          setOpen={setInitialModalOpen}
        />
      </HomePageWrapper>
      <Footer />
    </Theme>
  );
}
