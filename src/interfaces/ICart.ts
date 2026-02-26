export type CartItemType = {
  product_id: string;
  category_id?: string;
  sku?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  urlBanner?: string;
  price?: number;
  discount?: number;
  highlighted?: boolean;
  amount?: number;
};

export interface ICartContext {
  cartItems: CartItemType[];
  totalItemsCount: number;
  cartTotalPrice: string;
  cartTotalPriceWithoutDiscount: string;
  getTotalItems: (items: CartItemType[]) => number;
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleUpdateAmountProduct: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (product_id: string) => void;
  deleteItemFromCart: (product_id: string) => void;
  clearCart: () => void;
}

