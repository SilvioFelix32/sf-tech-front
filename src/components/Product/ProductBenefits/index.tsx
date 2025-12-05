import { BsTruck, BsShieldCheck, BsCreditCard } from "react-icons/bs";
import { BenefitsSection, BenefitItem } from "../../../styles/pages/product";

export function ProductBenefits() {
  return (
    <BenefitsSection>
      <BenefitItem>
        <BsTruck style={{ color: "#33C1B3", fontSize: "1.25rem" }} />
        <span>Frete grátis para todo o Brasil</span>
      </BenefitItem>
      <BenefitItem>
        <BsShieldCheck style={{ color: "#33C1B3", fontSize: "1.25rem" }} />
        <span>Garantia de 12 meses</span>
      </BenefitItem>
      <BenefitItem>
        <BsCreditCard style={{ color: "#33C1B3", fontSize: "1.25rem" }} />
        <span>Parcele em até 12x sem juros</span>
      </BenefitItem>
    </BenefitsSection>
  );
}

