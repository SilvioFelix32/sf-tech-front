import { formatPrice } from "../../../utils/formatPrice";
import {
  PriceSection,
  OriginalPrice,
  CurrentPrice,
  InstallmentText,
} from "../../../styles/pages/product";

interface ProductPriceSectionProps {
  originalPrice: number;
  finalPrice: number;
  hasDiscount: boolean;
}

export function ProductPriceSection({
  originalPrice,
  finalPrice,
  hasDiscount,
}: ProductPriceSectionProps) {
  const installmentValue = finalPrice / 12;

  return (
    <PriceSection>
      {hasDiscount && originalPrice > finalPrice && (
        <OriginalPrice>De R$ {formatPrice(originalPrice)}</OriginalPrice>
      )}
      <CurrentPrice>Por R$ {formatPrice(finalPrice)}</CurrentPrice>
      <InstallmentText>
        ou 12x de R$ {formatPrice(installmentValue)} sem juros
      </InstallmentText>
    </PriceSection>
  );
}

