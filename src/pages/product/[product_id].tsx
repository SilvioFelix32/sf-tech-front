import Image from "next/image";
import { useCart } from "../../context";
import { useRouter } from "next/router";
import { NavHeader, BuyButton, Header } from "../../components";
import { useQuery } from "react-query";
import { categoryService, productsService } from "../../services";
import { formatNumber } from "../../utils/functions";
import { IProduct, IProductCategory } from "../../types";
import {
  Content,
  Description,
  Picture,
  ProductInfo,
  ProductValue,
  Theme,
  Title,
  Text,
  Wrapper,
  ProductPrices,
  Section,
  Categories,
  SectionProduct,
  Button,
} from "../../styles/pages/product";

export default function Product() {
  const router = useRouter();
  const { product_id } = router.query;
  const { totalItemsCount } = useCart();
  const { data: product, isLoading: isProductLoading } = useQuery(
    ["product", product_id],
    () => productsService.getById(product_id as string),
    {
      enabled: !!product_id,
    }
  );
  const category_id = product?.category_id;

  const { data: category } = useQuery<IProductCategory, Error>(
    ["category", category_id],
    () => categoryService.getById(category_id),
    {
      enabled: !!category_id,
    }
  );

  if (isProductLoading) return <div>Carregando...</div>;

  return product ? (
    <Theme>
      <NavHeader />
      <Header
        showSignInButton={true}
        showCartButton={true}
        showFavoritesButton={true}
        showAdminButton={true}
        styles={{ width: "70%" }}
      />
      <Wrapper>
        <Title>{product.title}</Title>
        <Content>
          <Picture>
            <Image
              src={
                product.urlBanner
                  ? product.urlBanner
                  : "https://i.imgur.com/2HFGvvT.png"
              }
              alt={product?.title}
              priority
              width="300"
              height="300"
              className="image"
              style={{ objectFit: "contain" }}
            ></Image>
          </Picture>
          <ProductInfo>
            <Description>{product.description}</Description>
            <ProductValue>
              <ProductPrices>
                <Text
                  style={{
                    textDecoration: "line-through",
                    fontSize: "1rem",
                  }}
                >
                  De R$
                  {formatNumber(product?.price)}
                </Text>
                <Text style={{ fontSize: "1.8rem" }}>
                  Por R$
                  {formatNumber(product?.price - product?.discount)}
                </Text>
              </ProductPrices>
              <ProductPrices>
                <BuyButton product={product} />
                <Button
                  onClick={() =>
                    totalItemsCount > 0 && router.push("/shop-cart")
                  }
                  disabled={totalItemsCount <= 0}
                >
                  Confirmar Compra
                </Button>
              </ProductPrices>
            </ProductValue>
          </ProductInfo>
        </Content>
        <Section>
          <Title style={{ fontSize: "1.5rem" }}>Quem viu também comprou</Title>
          <Categories>
            {category?.products?.slice(0, 5).map((product) => (
              <SectionProduct
                key={product.product_id}
                onClick={() => router.push(`/product/${product.product_id}`)}
              >
                <Picture>
                  <Image
                    src={
                      product.urlBanner
                        ? product.urlBanner
                        : "https://i.imgur.com/2HFGvvT.png"
                    }
                    alt={product?.title}
                    width="100"
                    height="100"
                    priority
                    style={{ objectFit: "contain" }}
                  ></Image>
                </Picture>
                <Title
                  style={{
                    fontSize: "1.2rem",
                    textAlign: "center",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  {product.title}
                </Title>
                <Text style={{ fontSize: "1.2rem" }}>
                  {formatNumber(product?.price - product?.discount)}
                </Text>
              </SectionProduct>
            ))}
          </Categories>
        </Section>
      </Wrapper>
    </Theme>
  ) : (
    <div>Carregando...</div>
  );
}
