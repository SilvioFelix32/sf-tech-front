export function formatPrice(value: number | string): string {
  const numericValue = typeof value === "string" ? parseFloat(value) : value;

  let formatedPrice = numericValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  formatedPrice = formatedPrice.replace(/,00$/, ",0").replace(/,0$/, ",00");

  return formatedPrice;
}
