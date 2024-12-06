import { InfoText, PriceDetailWrapper } from "./styles";

interface PriceDetailProps {
  label: string;
  value: string;
  strikeThrough?: boolean;
}

export const PriceDetail = ({
  label,
  value,
  strikeThrough,
}: PriceDetailProps) => (
  <PriceDetailWrapper>
    <InfoText weight={600}>{label}</InfoText>
    <InfoText
      weight={600}
      style={strikeThrough ? { textDecoration: "line-through" } : {}}
    >
      {value}
    </InfoText>
  </PriceDetailWrapper>
);
