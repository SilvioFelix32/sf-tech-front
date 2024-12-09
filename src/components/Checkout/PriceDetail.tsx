import { InfoText, PriceDetailWrapper } from "./styles";

interface PriceDetailProps {
  label: string;
  value: string;
  strikeThrough?: boolean;
  style?: React.CSSProperties;
}

export const PriceDetail = ({
  label,
  value,
  strikeThrough,
  style,
}: PriceDetailProps) => (
  <PriceDetailWrapper style={style}>
    <InfoText weight={600}>{label}</InfoText>
    <InfoText
      weight={600}
      style={strikeThrough ? { textDecoration: "line-through" } : {}}
    >
      {value}
    </InfoText>
  </PriceDetailWrapper>
);
