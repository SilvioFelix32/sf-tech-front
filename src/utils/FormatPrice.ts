const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(price / 100);
};

export default FormatPrice;
