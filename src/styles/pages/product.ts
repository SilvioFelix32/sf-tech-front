import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Breadcrumb = styled.nav`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: ${({ theme }) => theme.colors.tertiary};
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ProductSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MainImage = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;

  .image {
    object-fit: contain;
    border-radius: 8px;
  }
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #ef4444;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  z-index: 10;
`;

export const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const ThumbnailButton = styled.button<{ $isSelected: boolean }>`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.tertiary : "transparent"};
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;

  &:hover {
    border-color: ${({ theme }) => theme.colors.tertiary};
    opacity: 0.8;
  }

  .thumbnail-image {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const RatingText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 0.5rem;
  opacity: 0.8;
`;

export const PriceSection = styled.div`
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const OriginalPrice = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: line-through;
  opacity: 0.6;
  margin: 0;
`;

export const CurrentPrice = styled.p`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
`;

export const InstallmentText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin: 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  opacity: 0.9;
  margin: 0;
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const QuantityLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  overflow: hidden;
`;

export const QuantityButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 1.25rem;
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.background};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const QuantityValue = styled.span`
  padding: 0.5rem 1.5rem;
  border-left: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-right: 1px solid ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  min-width: 60px;
  text-align: center;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 36px;
  padding: 0 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.background};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const IconButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const IconButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1.25rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const BenefitsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
`;

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const TabsContainer = styled.div`
  margin-bottom: 3rem;
`;

export const TabsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.tertiary};
  margin-bottom: 1.5rem;
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
  padding: 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid
    ${({ theme, $isActive }) => ($isActive ? theme.colors.tertiary : "transparent")};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.tertiary : theme.colors.text)};
  font-weight: ${({ $isActive }) => ($isActive ? 600 : 400)};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const TabContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  padding: 1.5rem;
`;

export const SpecsGrid = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

export const SpecItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
`;

export const SpecLabel = styled.dt`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

export const SpecValue = styled.dd`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ReviewItem = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const ReviewAuthor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ReviewName = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const ReviewDate = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin: 0;
`;

export const ReviewComment = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin: 0;
`;

export const RelatedProductsSection = styled.div`
  margin-top: 3rem;
  width: 100%;
`;

export const RelatedProductsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
`;

export const RelatedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

export const RelatedProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
  }
`;

export const RelatedProductImage = styled.div`
  position: relative;
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;

  .related-image {
    object-fit: contain;
    transition: transform 0.3s;
  }

  ${RelatedProductCard}:hover & .related-image {
    transform: scale(1.05);
  }
`;

export const RelatedProductInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const RelatedProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`;

export const RelatedProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

export const Picture = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ProductValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
`;

export const ProductPrices = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
  font-size: 0.8rem;
  margin: 2px;
  text-transform: capitalize;

  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 0.7rem;
  }
`;

export const Button = styled.button`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.background};
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  transition: all 0.1s linear;
  transition-duration: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.tertiary};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.tertiary};
    background-color: ${({ theme }) => theme.colors.background};
    cursor: not-allowed;
    outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 3rem;
`;

export const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

export const SectionProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  transition: all 0.3s;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background};

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
  }
`;
