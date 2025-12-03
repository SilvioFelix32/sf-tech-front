import Image from "next/image";
import { memo, useContext, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { ProductFilterContext, useFilterContext } from "../../context";
import { useFavorite } from "../../hooks/useFavorite";
import { useCan } from "../../hooks/useCan";
import {
  IProductListProps,
  IProductCardItemProps,
  IProduct,
} from "../../interfaces";
import { BuyButton } from "../Buttons";
import { PaginationButton } from "../Buttons/Pagination";
import { formatPrice } from "../../utils/formatPrice";
import { useRouter } from "next/router";
import { CategoriesContext } from "../../context";
//styles
import {
  ProductListContainer,
  ProductGrid,
  ProductListPagination,
  ProductCardContainer,
  ProductImageWrapper,
  ProductInfoContainer,
  ProductTitle,
  ProductDescriptionText,
  ProductPriceContainer,
  ProductPriceText,
  FavoriteButton,
  NotFavoriteIconButton,
  ProductCardFooter,
  DiscountBadge,
} from "./styles";

const ProductCardItem = ({
  product,
  isFavorite,
  onToggleFavorite,
  onNavigateToDetails,
}: IProductCardItemProps) => {
  const userIsAuthenticated = useCan({ role: ["USER", "ADMIN", "MASTER"] });
  const hasDiscount = product.discount > 0;
  const discountPercentage =
    hasDiscount && product.price > 0
      ? Math.round((product.discount / product.price) * 100)
      : 0;

  return (
    <ProductCardContainer>
      <ProductImageWrapper onClick={onNavigateToDetails}>
        <Image
          src={
            product.urlBanner ? product.urlBanner : "https://i.imgur.com/2HFGvvT.png"
          }
          alt={product?.title}
          width="200"
          height="200"
          priority
          style={{ objectFit: "contain" }}
        />
        {discountPercentage > 0 && (
          <DiscountBadge>-{discountPercentage}%</DiscountBadge>
        )}
        {userIsAuthenticated &&
          (isFavorite ? (
            <FavoriteButton className="favorite" onClick={onToggleFavorite}>
              <MdFavorite />
            </FavoriteButton>
          ) : (
            <NotFavoriteIconButton className="favorite" onClick={onToggleFavorite}>
              <MdFavoriteBorder />
            </NotFavoriteIconButton>
          ))}
      </ProductImageWrapper>
      <ProductInfoContainer onClick={onNavigateToDetails}>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescriptionText>
          {product.description}
        </ProductDescriptionText>
        <ProductPriceContainer>
          {hasDiscount && (
            <ProductPriceText
              style={{
                textDecoration: "line-through",
                fontSize: "0.8rem",
                opacity: 0.7,
              }}
            >
              De R$
              {formatPrice(product?.price)}
            </ProductPriceText>
          )}
          <ProductPriceText style={{ fontSize: "1.5rem" }}>
            Por R$
            {formatPrice(product?.price - product?.discount)}
          </ProductPriceText>
        </ProductPriceContainer>
      </ProductInfoContainer>
      <ProductCardFooter>
        <BuyButton product={product} />
      </ProductCardFooter>
    </ProductCardContainer>
  );
};

export const ProductList = memo(({ isSelected }: IProductListProps) => {
  const {
    filters: { price },
  } = useFilterContext();
  const router = useRouter();
  const { productCategories } = useContext(CategoriesContext);
  const { filteredProduct } = useContext(ProductFilterContext);
  const { favoriteItems, removeItemFromFavorites, handleAddToFavorites } =
    useFavorite();
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const products = productCategories?.reduce((acc, cur) => {
    if (isSelected && cur.category_id !== isSelected) {
      return acc;
    }
    return [...acc, ...cur.products];
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const filteredProducts = products
    ?.filter((product: IProduct) => product.price <= price)
    .filter((product: IProduct) => {
      if (filteredProduct?.length === 0) {
        return true;
      }
      return filteredProduct?.includes(product.title);
    })
    .slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return filteredProducts && filteredProducts.length > 0 ? (
    <ProductListContainer>
      <ProductGrid>
        {filteredProducts.map((product: IProduct) => {
          const isFavorite = favoriteItems.some(
            (favoriteItem) => favoriteItem.product_id === product.product_id
          );

          const handleToggleFavorite = () => {
            if (isFavorite) {
              removeItemFromFavorites(product.product_id);
            } else {
              handleAddToFavorites(product);
            }
          };

          const handleNavigateToDetails = () =>
            router.push(`/product/${product.product_id}`);

          return (
            <ProductCardItem
              key={product.product_id}
              product={product}
              isFavorite={isFavorite}
              onToggleFavorite={handleToggleFavorite}
              onNavigateToDetails={handleNavigateToDetails}
            />
          );
        })}
      </ProductGrid>

      <ProductListPagination>
        <PaginationButton
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </ProductListPagination>
    </ProductListContainer>
  ) : (
    <ProductListContainer>
      <ProductGrid>
        <ProductCardContainer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProductTitle>Carregando produtos</ProductTitle>
        </ProductCardContainer>
      </ProductGrid>
    </ProductListContainer>
  );
});

ProductList.displayName = "ProductList";

export { ProductList as ProductCard };
