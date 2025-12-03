import Image from "next/image";
import { memo, useContext, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import {
  ProductFilterContext,
  useFilterContext,
} from "../../context";
import { useFavorite } from "../../hooks/useFavorite";
import { useCan } from "../../hooks/useCan";
import { IProduct } from "../../interfaces";
import { BuyButton } from "../Buttons";
import { PaginationButton } from "../Buttons/Pagination";
import { formatPrice } from "../../utils/formatPrice";
import { useRouter } from "next/router";
import { CategoriesContext } from "../../context";
//styles
import {
  Wrapper,
  Content,
  Text,
  FavoritedButton,
  NotFavoriteButton,
  Picture,
  ProductInfo,
  Title,
  ProductValue,
  CardWrapper,
  Description,
  Pagination,
} from "./styles";

interface CategorySelector {
  filter: string;
  isSelected: string;
}

export const ProductCard = memo(({ isSelected }: CategorySelector) => {
  const {
    filters: { price },
  } = useFilterContext();
  const router = useRouter();
  const { productCategories } = useContext(CategoriesContext);
  const { filteredProduct } = useContext(ProductFilterContext);
  const { favoriteItems, removeItemFromFavorites, handleAddToFavorites } =
    useFavorite();
  const [, setButtonType] = useState("isNotFavorited");
  const userIsAuthenticated = useCan({ role: ["USER", "ADMIN", "MASTER"] });
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
    <Wrapper>
      <CardWrapper>
        {filteredProducts.map((product: IProduct) => (
          <Content key={product.product_id}>
            <Picture
              onClick={() => router.push(`/product/${product.product_id}`)}
            >
              <Image
                src={
                  product.urlBanner
                    ? product.urlBanner
                    : "https://i.imgur.com/2HFGvvT.png"
                }
                alt={product?.title}
                width="200"
                height="200"
                priority
                style={{ objectFit: "contain" }}
              ></Image>
            </Picture>
            <ProductInfo
              onClick={() => router.push(`/product/${product.product_id}`)}
            >
              <Title>{product.title}</Title>
              <Description style={{ fontWeight: 400, marginBottom: "10px" }}>
                {product.description}
              </Description>
              <ProductValue>
                <Text
                  style={{
                    textDecoration: "line-through",
                    fontSize: "0.8rem",
                  }}
                >
                  De R$
                  {formatPrice(product?.price)}
                </Text>
                <Text style={{ fontSize: "1.5rem" }}>
                  Por R$
                  {formatPrice(product?.price - product?.discount)}
                </Text>
              </ProductValue>
            </ProductInfo>
            <BuyButton product={product} />
            {userIsAuthenticated &&
              (favoriteItems.some(
                (favoriteItem) => favoriteItem.product_id === product.product_id
              ) ? (
                <FavoritedButton
                  className="favorite"
                  onClick={() => {
                    removeItemFromFavorites(product.product_id),
                      setButtonType("isNotFavorited");
                  }}
                >
                  <MdFavorite />
                </FavoritedButton>
              ) : (
                <NotFavoriteButton
                  className="favorite"
                  onClick={() => {
                    handleAddToFavorites(product), setButtonType("isFavorited");
                  }}
                >
                  <MdFavoriteBorder />
                </NotFavoriteButton>
              ))}
          </Content>
        ))}
      </CardWrapper>

      <Pagination>
        <PaginationButton
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </Pagination>
    </Wrapper>
  ) : (
    <Wrapper>
      <CardWrapper>
        <Content
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title>Carregando produtos</Title>
        </Content>
      </CardWrapper>
    </Wrapper>
  );
});

ProductCard.displayName = "ProductCard";
