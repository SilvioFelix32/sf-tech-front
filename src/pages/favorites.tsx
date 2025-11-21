import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useFavorite } from "../context";
import { BuyButton } from "../components";
import { IFavoriteItem } from "../interfaces/IFavorite";
import { formatPrice } from "../utils/formatPrice";
import { BsXLg } from "react-icons/bs";
//styles
import {
  Wrapper,
  Title,
} from "../styles/pages/favorites";
import {
  Product,
  ProductContent,
  ProductDescription,
  ProductValue,
  Text,
  Description,
  Button,
} from "../components/Modals/Favorite/styles";

export default function MyFavorites() {
  const router = useRouter();
  const { removeItemFromFavorites, favoriteItems } = useFavorite();

  if (favoriteItems.length === 0) {
    return (
      <Wrapper>
        <Title
          style={{ fontSize: "1.5rem", textAlign: "center", marginTop: "3rem" }}
        >
          Nenhum favorito ainda
        </Title>
      </Wrapper>
    );
  }

  return (
    <Wrapper style={{ flexDirection: "column", padding: "20px" }}>
      <Title style={{ fontSize: "22px", marginBottom: "2rem" }}>
        Meus Itens Favoritos:
      </Title>
      {favoriteItems.map((item: IFavoriteItem) => (
        <div
          key={item.product_id}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "180px",
            padding: "10px",
            borderBottom: "solid 1px",
            borderColor: "rgba(51, 193, 179, 0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              src={item.urlBanner || "https://i.imgur.com/2HFGvvT.png"}
              alt={item.title}
              width={100}
              height={100}
              className="image"
              style={{ borderRadius: "50%", objectFit: "contain" }}
            />
            <ProductContent>
              <Text
                style={{ cursor: "pointer" }}
                onClick={() => router.push(`/product/${item.product_id}`)}
              >
                {item.title}
              </Text>
            </ProductContent>
            <ProductDescription>
              <Description style={{ fontSize: "12px", fontWeight: "300" }}>
                {item.description}
              </Description>
            </ProductDescription>
            <ProductValue>
              <Text>R$ {formatPrice(item.price - item.discount)}</Text>
            </ProductValue>
            <Button
              onClick={() => removeItemFromFavorites(item.product_id)}
              style={{ height: "40px", width: "40px", margin: "0 10px" }}
            >
              <BsXLg />
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <div style={{ width: "250px" }}>
              <BuyButton product={item} />
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
}
