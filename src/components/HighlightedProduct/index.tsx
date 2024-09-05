import Image from "next/image";
import { MoonLoader } from "react-spinners";
import { CSSProperties, useState } from "react";
import { useQuery } from "react-query";
import { environment } from "../../utils/environment";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useFavorite } from "../../context";
import { useCan } from "../../context/Authentication/hooks/useCan";
import { IProduct } from "../../types";
import { formatNumber } from "../../utils/functions";
import { BuyButton } from "../Buttons";
// styles
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
} from "./styles";
import { productsService } from "../../services";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

export function HighlightedProductCard() {
  const company_id = environment.companyId;
  const { favoriteItems, removeItemFromFavorites, handleAddToFavorites } =
    useFavorite();
  const [, setButtonType] = useState("isNotFavorited");
  const userIsAuthenticated = useCan({ role: ["USER", "ADMIN", "MASTER"] });

  const {
    data: products,
    error,
    isLoading,
  } = useQuery<IProduct[], Error>(
    ["products", company_id],
    () =>
      productsService.getAll({ page: 1, limit: 20 }).then((res) => res.data),
    {
      enabled: !!company_id,
    }
  );

  if (isLoading)
    return (
      <div
        className="sweet-loading"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <MoonLoader
          size={150}
          color="#1A615A"
          loading={true}
          cssOverride={override}
          speedMultiplier={0.5}
        />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  const filteredArray = products.filter((item) => item.highlighted === true);
  const firstThreeItems = filteredArray.slice(0, 3);

  return (
    <Wrapper>
      <CardWrapper>
        {firstThreeItems.map((product: IProduct) => (
          <Content key={product.product_id}>
            <Picture>
              <Image
                src={
                  product.urlBanner
                    ? product.urlBanner
                    : "https://i.imgur.com/2HFGvvT.png"
                }
                alt={product?.title}
                width="250"
                height="250"
                priority
                style={{ objectFit: "contain" }}
              />
            </Picture>
            <ProductInfo>
              <Title>{product.title}</Title>
              <Description style={{ fontSize: "0.8rem" }}>
                {product.description}
              </Description>
              <ProductValue>
                <Text
                  style={{ textDecoration: "line-through", fontSize: "0.8rem" }}
                >
                  De R$
                  {formatNumber(product?.price)}
                </Text>
                <Text>
                  Por R$
                  {formatNumber(product?.price - product?.discount)}
                </Text>
                <Text style={{ fontSize: "0.8rem" }}>Até 10x sem juros</Text>
              </ProductValue>
              <BuyButton product={product} />
            </ProductInfo>
            {userIsAuthenticated &&
              (favoriteItems.some(
                (favoriteItem) => favoriteItem.product_id === product.product_id
              ) ? (
                <FavoritedButton
                  className="favorite"
                  onClick={() => {
                    removeItemFromFavorites(product.product_id);
                    setButtonType("isNotFavorited");
                  }}
                >
                  <MdFavorite />
                </FavoritedButton>
              ) : (
                <NotFavoriteButton
                  className="favorite"
                  onClick={() => {
                    handleAddToFavorites(product);
                    setButtonType("isFavorited");
                  }}
                >
                  <MdFavoriteBorder />
                </NotFavoriteButton>
              ))}
          </Content>
        ))}
      </CardWrapper>
    </Wrapper>
  );
}
