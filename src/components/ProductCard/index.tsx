import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import {
  CompanyContext,
  ProductFilterContext,
  useFavorite,
  useFilterContext,
} from "../../context";
import { useCan } from "../../context/Authentication/hooks/useCan";
import { productCategoryService } from "../../services";
import { IProduct } from "../../types";
import { IProductCategories } from "../../types/IProductCategories";
import { BuyButton } from "../Buttons";
import { PaginationButton } from "../Buttons/Pagination";
import { ProductModal } from "../Modals";
import { formatNumber } from "../../shared/functions";
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

interface CategorySelector {
  filter: string;
  isSelected: string;
}

export function ProductCard({ filter, isSelected }: CategorySelector) {
  const company_id = useContext(CompanyContext);
  const {
    filters: { price },
  } = useFilterContext();
  const { filteredProduct } = useContext(ProductFilterContext);
  const { favoriteItems, removeItemFromFavorites, handleAddToFavorites } =
    useFavorite();
  const [categories, setCategories] = useState<IProductCategories[]>([]);
  const [buttonType, setButtonType] = useState("isNotFavorited");
  const [product_Id, setProductId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const userIsAuthenticated = useCan({ role: ["USER", "ADMIN", "MASTER"] });
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  useEffect(() => {
    productCategoryService
      .getAll(company_id, {})
      .then((res) => setCategories(res.data));
  }, [company_id]);

  const categoryOfProducts = categories.reduce((acc, cur) => {
    if (isSelected && cur.category_id !== isSelected) {
      return acc;
    }
    return [...acc, ...cur.products];
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const filteredProducts = categoryOfProducts
    .filter((product: IProduct) => product.value <= price)
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

  return (
    <Wrapper>
      <CardWrapper>
        {filteredProducts.map((product: IProduct) => (
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
              <Title style={{ fontSize: "0.8rem" }}>{product.subtitle}</Title>
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
                  style={{ textDecoration: "line-through", fontSize: "0.8rem" }}
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

      <PaginationButton
        productsPerPage={productsPerPage}
        totalProducts={categoryOfProducts.length}
        paginate={paginate}
      />
      <ProductModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        productId={product_Id}
      />
    </Wrapper>
  );
}
