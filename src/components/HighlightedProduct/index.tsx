import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import productsService from "../../services/products-service";
import { CompanyContext, useFavorite } from "../../context";
import { useCan } from "../../context/Authentication/hooks/useCan";
import { IProduct } from "../../types";
import { formatNumber } from "../../shared/functions";
import { BuyButton } from "../Buttons";
import { ProductModal } from "../Modals";
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
  Button,
} from "./styles";

export function HighlightedProductCard() {
  const company_id = useContext(CompanyContext);
  const { favoriteItems, removeItemFromFavorites, handleAddToFavorites } =
    useFavorite();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [buttonType, setButtonType] = useState("isNotFavorited");
  const [product_Id, setProductId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const userIsAuthenticated = useCan({ role: ["USER", "ADMIN", "MASTER"] });

  useEffect(() => {
    productsService.getAll(company_id, {}).then((res) => setProducts(res.data));
  }, [company_id]);

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
                width="300"
                height="300"
                priority
              ></Image>
            </Picture>
            <ProductInfo>
              <Title>{product.title}</Title>
              <Title style={{ fontSize: "14px" }}>{product.subtitle}</Title>
              <Button
                onClick={() => {
                  setOpenModal(true);
                  setProductId(product.product_id);
                }}
              >
                Mais detalhes
              </Button>
              <ProductValue>
                <Text
                  style={{ textDecoration: "line-through", fontSize: "14px" }}
                >
                  De R$
                  {formatNumber(product?.price)}
                </Text>
                <Text>
                  Por R$
                  {formatNumber(product?.price - product?.discount)}
                </Text>
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
                    removeItemFromFavorites(product.product_id),
                      setButtonType("isNotFavorited");
                  }}
                >
                  <MdFavoriteBorder />
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

      <ProductModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        productId={product_Id}
      />
    </Wrapper>
  );
}
