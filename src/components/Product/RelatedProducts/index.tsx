import Image from "next/image";
import { useRouter } from "next/router";
import { IProduct } from "../../../interfaces/IProducts";
import { formatPrice } from "../../../utils/formatPrice";
import {
  RelatedProductsSection,
  RelatedProductsTitle,
  RelatedProductsGrid,
  RelatedProductCard,
  RelatedProductImage,
  RelatedProductInfo,
  RelatedProductTitle,
  RelatedProductPrice,
} from "../../../styles/pages/product";

interface RelatedProductsProps {
  products: IProduct[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  const router = useRouter();

  if (!products || products.length === 0) return null;

  const displayedProducts = products.slice(0, 3);

  return (
    <RelatedProductsSection>
      <RelatedProductsTitle>Quem viu também comprou</RelatedProductsTitle>
      <RelatedProductsGrid>
        {displayedProducts.map((product) => (
          <RelatedProductCard
            key={product.product_id}
            onClick={() => router.push(`/product/${product.product_id}`)}
          >
            <RelatedProductImage>
              <Image
                src={
                  product.urlBanner
                    ? product.urlBanner
                    : "https://i.imgur.com/2HFGvvT.png"
                }
                alt={product.title || "Produto"}
                fill
                className="related-image"
                style={{ objectFit: "contain" }}
              />
            </RelatedProductImage>
            <RelatedProductInfo>
              <RelatedProductTitle>{product.title}</RelatedProductTitle>
              <RelatedProductPrice>
                R${" "}
                {formatPrice(
                  (product.price || 0) - (product.discount || 0)
                )}
              </RelatedProductPrice>
            </RelatedProductInfo>
          </RelatedProductCard>
        ))}
      </RelatedProductsGrid>
    </RelatedProductsSection>
  );
}

