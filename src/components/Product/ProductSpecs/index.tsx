import {
  SpecsGrid,
  SpecItem,
  SpecLabel,
  SpecValue,
} from "../../../styles/pages/product";

interface ProductSpec {
  label: string;
  value: string;
}

interface ProductSpecsProps {
  specs: ProductSpec[];
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <SpecsGrid>
      {specs.map((spec, index) => (
        <SpecItem key={index}>
          <SpecLabel>{spec.label}</SpecLabel>
          <SpecValue>{spec.value}</SpecValue>
        </SpecItem>
      ))}
    </SpecsGrid>
  );
}

