import { CSSProperties, useEffect, useState } from "react";
import { useFavorite } from "../../hooks/useFavorite";
import dynamic from "next/dynamic";
const MoonLoader = dynamic(() => import("react-spinners").then(m => m.MoonLoader), { ssr: false });
import { useRouter } from "next/router";
import { NavHeader, Header, Footer } from "../../components";
import {
  ProductBreadcrumb,
  ProductImageGallery,
  ProductHeaderComponent,
  ProductPriceSection,
  ProductActionButtons,
  ProductBenefits,
  ProductTabs,
  RelatedProducts,
} from "../../components/Product";
import { useQuery } from "react-query";
import { categoryService, productsService } from "../../services";
import { IProductCategory } from "../../interfaces";
import { Container, ProductSection, ProductInfo, Description } from "../../styles/pages/product";
import { Theme } from "../../styles/components";
import { mockReviews, mockRating, mockReviewsCount } from "../../utils/mockData";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

export default function Product() {
  const router = useRouter();
  const { product_id } = router.query;
  const { favoriteItems, handleAddToFavorites, removeItemFromFavorites } = useFavorite();
  const [isFavorite, setIsFavorite] = useState(false);

  const { data: product, isLoading: isProductLoading } = useQuery(
    ["product", product_id],
    () => productsService.getById(String(product_id)),
    {
      enabled: !!product_id,
      onSuccess: (data) => {
        const favorite = favoriteItems.find(
          (item) => item.product_id === data.product_id
        );
        setIsFavorite(!!favorite);
      },
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

  useEffect(() => {
    if (product) {
      const favorite = favoriteItems.find(
        (item) => item.product_id === product.product_id
      );
      setIsFavorite(!!favorite);
    }
  }, [favoriteItems, product]);

  const productImages = product?.urlBanner
    ? [product.urlBanner, product.urlBanner, product.urlBanner]
    : ["https://i.imgur.com/2HFGvvT.png"];

  const discountPercentage =
    product && product.price && product.discount
      ? Math.round((product.discount / product.price) * 100)
      : 0;

  const finalPrice = product
    ? (product.price || 0) - (product.discount || 0)
    : 0;

  const handleToggleFavorite = () => {
    if (!product) return;
    if (isFavorite) {
      removeItemFromFavorites(product.product_id);
    } else {
      handleAddToFavorites(product);
    }
    setIsFavorite(!isFavorite);
  };

  if (isProductLoading)
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

  if (!product) return null;

  return (
    <Theme height="auto">
      <NavHeader />
      <Header
        showSignInButton={true}
        showCartButton={true}
        showFavoritesButton={true}
        showAdminButton={true}
        showSearchBar={false}
      />
      <Container>
        <ProductBreadcrumb
          categoryName={category?.title}
          productName={product.title || ""}
        />

        <ProductSection>
          <ProductImageGallery
            images={productImages}
            productTitle={product.title || ""}
            discountPercentage={discountPercentage}
          />

          <ProductInfo>
            <ProductHeaderComponent
              title={product.title || ""}
              rating={mockRating}
              reviewsCount={mockReviewsCount}
            />

            <ProductPriceSection
              originalPrice={product.price || 0}
              finalPrice={finalPrice}
              hasDiscount={discountPercentage > 0}
            />

            <Description>{product.description}</Description>

            <ProductActionButtons
              product={product}
              isFavorite={isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />

            <ProductBenefits />
          </ProductInfo>
        </ProductSection>

        <ProductTabs
          product={product}
          categoryName={category?.title}
          reviews={mockReviews}
        />

        {category?.products && category.products.length > 0 && (
          <RelatedProducts products={category.products} />
        )}
      </Container>
      <Footer />
    </Theme>
  );
}
