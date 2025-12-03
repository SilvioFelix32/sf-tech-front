import Image from "next/image";
import { memo, useContext, useEffect, useRef, useState } from "react";
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
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const products = productCategories?.reduce((acc, cur) => {
    if (isSelected && cur.category_id !== isSelected) {
      return acc;
    }
    return [...acc, ...cur.products];
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const baseFilteredProducts = products
    ?.filter((product: IProduct) => product.price <= price)
    .filter((product: IProduct) => {
      if (filteredProduct?.length === 0) {
        return true;
      }
      return filteredProduct?.includes(product.title);
    });

  const filteredProducts = baseFilteredProducts?.slice(
    0,
    indexOfLastProduct
  );

  const hasMore =
    !!baseFilteredProducts &&
    !!filteredProducts &&
    filteredProducts.length < baseFilteredProducts.length;

  useEffect(() => {
    if (!hasMore) {
      return;
    }

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      },
      {
        rootMargin: "200px",
      }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore]);

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

      {hasMore && (
        <ProductListPagination>
          <div
            ref={loadMoreRef}
            style={{
              width: "100%",
              height: "40px",
            }}
          />
        </ProductListPagination>
      )}
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
