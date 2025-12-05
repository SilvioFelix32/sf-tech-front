import Image from "next/image";
import { useState } from "react";
import {
  ImageGallery,
  MainImage,
  DiscountBadge,
  ThumbnailGrid,
  ThumbnailButton,
} from "../../../styles/pages/product";

interface ProductImageGalleryProps {
  images: string[];
  productTitle: string;
  discountPercentage: number;
}

export function ProductImageGallery({
  images,
  productTitle,
  discountPercentage,
}: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <ImageGallery>
      <MainImage>
        <Image
          src={images[selectedImage] || images[0]}
          alt={productTitle || "Produto"}
          fill
          priority
          className="image"
          style={{ objectFit: "contain" }}
        />
        {discountPercentage > 0 && (
          <DiscountBadge>-{discountPercentage}%</DiscountBadge>
        )}
      </MainImage>
      {images.length > 1 && (
        <ThumbnailGrid>
          {images.map((image, index) => (
            <ThumbnailButton
              key={index}
              $isSelected={selectedImage === index}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image}
                alt={`${productTitle} - Imagem ${index + 1}`}
                fill
                className="thumbnail-image"
              />
            </ThumbnailButton>
          ))}
        </ThumbnailGrid>
      )}
    </ImageGallery>
  );
}

