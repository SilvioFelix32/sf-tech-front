import { BsStarFill, BsStar } from "react-icons/bs";
import { IProductReview } from "../../../interfaces/IProductReview";
import {
  ReviewsList,
  ReviewItem,
  ReviewHeader,
  ReviewAuthor,
  ReviewName,
  ReviewDate,
  ReviewComment,
  StarContainer,
} from "../../../styles/pages/product";

interface ProductReviewsProps {
  reviews: IProductReview[];
}

export function ProductReviews({ reviews }: ProductReviewsProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => {
      const isFilled = index < Math.floor(rating);
      return (
        <span key={index}>
          {isFilled ? (
            <BsStarFill style={{ color: "#fbbf24", fontSize: "1rem" }} />
          ) : (
            <BsStar style={{ color: "#9ca3af", fontSize: "1rem" }} />
          )}
        </span>
      );
    });
  };

  return (
    <ReviewsList>
      {reviews.map((review) => (
        <ReviewItem key={review.id}>
          <ReviewHeader>
            <ReviewAuthor>
              <ReviewName>{review.name}</ReviewName>
              <ReviewDate>{review.date}</ReviewDate>
            </ReviewAuthor>
            <StarContainer>{renderStars(review.rating)}</StarContainer>
          </ReviewHeader>
          <ReviewComment>{review.comment}</ReviewComment>
        </ReviewItem>
      ))}
    </ReviewsList>
  );
}

