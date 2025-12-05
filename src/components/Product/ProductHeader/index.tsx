import { BsStarFill, BsStar } from "react-icons/bs";
import {
  ProductHeader,
  Title,
  RatingContainer,
  StarContainer,
  RatingText,
} from "../../../styles/pages/product";

interface ProductHeaderProps {
  title: string;
  rating: number;
  reviewsCount: number;
}

export function ProductHeaderComponent({
  title,
  rating,
  reviewsCount,
}: ProductHeaderProps) {
  const renderStars = (ratingValue: number) => {
    return Array.from({ length: 5 }).map((_, index) => {
      const isFilled = index < Math.floor(ratingValue);
      return (
        <span key={index}>
          {isFilled ? (
            <BsStarFill style={{ color: "#fbbf24", fontSize: "1.25rem" }} />
          ) : (
            <BsStar style={{ color: "#9ca3af", fontSize: "1.25rem" }} />
          )}
        </span>
      );
    });
  };

  return (
    <ProductHeader>
      <Title>{title}</Title>
      <RatingContainer>
        <StarContainer>{renderStars(rating)}</StarContainer>
        <RatingText>
          {rating} ({reviewsCount} avaliações)
        </RatingText>
      </RatingContainer>
    </ProductHeader>
  );
}

