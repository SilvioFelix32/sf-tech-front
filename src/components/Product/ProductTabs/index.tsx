import { useState } from "react";
import { IProduct } from "../../../interfaces/IProducts";
import { IProductReview } from "../../../interfaces/IProductReview";
import { ProductSpecs } from "../ProductSpecs";
import { ProductReviews } from "../ProductReviews";
import { getProductSpecsByCategory } from "../../../utils/productSpecsMock";
import {
  TabsContainer,
  TabsList,
  TabButton,
  TabContent,
  Description,
} from "../../../styles/pages/product";

interface ProductTabsProps {
  product: IProduct;
  categoryName?: string;
  reviews: IProductReview[];
}

export function ProductTabs({ product, categoryName, reviews }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"specs" | "description" | "reviews">("specs");
  
  const { specs, description } = getProductSpecsByCategory(categoryName);

  return (
    <TabsContainer>
      <TabsList>
        <TabButton
          $isActive={activeTab === "specs"}
          onClick={() => setActiveTab("specs")}
        >
          Especificações
        </TabButton>
        <TabButton
          $isActive={activeTab === "description"}
          onClick={() => setActiveTab("description")}
        >
          Descrição
        </TabButton>
        <TabButton
          $isActive={activeTab === "reviews"}
          onClick={() => setActiveTab("reviews")}
        >
          Avaliações ({reviews.length})
        </TabButton>
      </TabsList>

      {activeTab === "specs" && (
        <TabContent>
          <ProductSpecs specs={specs} />
        </TabContent>
      )}

      {activeTab === "description" && (
        <TabContent>
          <Description style={{ marginBottom: "1.5rem" }}>
            {description.main}
          </Description>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: 600,
              marginTop: "1.5rem",
              marginBottom: "0.75rem",
              color: "inherit",
            }}
          >
            Características Principais:
          </h3>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {description.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </TabContent>
      )}

      {activeTab === "reviews" && (
        <TabContent>
          <ProductReviews reviews={reviews} />
        </TabContent>
      )}
    </TabsContainer>
  );
}

