import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { CompanyContext, useFavorite } from "../../context";
import { useCan } from "../../context/Authentication/hooks/useCan";
import { productCategoryService } from "../../services";
import { IProduct } from "../../types";
import { IProductCategories } from "../../types/IProductCategories";
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
  const [categories, setCategories] = useState<IProductCategories[]>([]);
  const [buttonType, setButtonType] = useState("isNotFavorited");
  const [product_Id, setProductId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const userIsAuthenticated = useCan({ role: ["USER", "ADMIN", "MASTER"] });

  useEffect(() => {
    productCategoryService
      .getAll(company_id, {})
      .then((res) => setCategories(res.data));
  }, [company_id]);

  const combinedArray = [].concat(...categories.map((cat) => cat.products));
  const filteredArray = combinedArray.filter(
    (item) => item.highlighted === true
  );
  const firstThreeItems = filteredArray.slice(0, 3);

  return (
    <Wrapper>
      <CardWrapper>
        {firstThreeItems.map((product: IProduct) => (
          <Content key={product.product_id}>
            <Picture>
              <Image
                src={
                  product.url_banner
                    ? product.url_banner
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
                  {formatNumber(product?.value)}
                </Text>
                <Text>
                  Por R$
                  {formatNumber(product?.value - product?.discount)}
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
