import { IProduct } from "../../interfaces";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      const priceArr = action.payload.map((curElem: IProduct) => curElem.price);
      const maxPrice = Math.max(...priceArr);
      const minPrice = Math.min(...priceArr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice, minPrice },
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      const filteredProducts = action.payload.products.filter(
        (prod: IProduct) => prod.price <= value
      );

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
        all_products: filteredProducts,
      };

    case "FILTER_PRODUCTS":
      const { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem: IProduct) => {
          return curElem.title.toLowerCase().includes(text);
        });
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem: IProduct) => curElem.price == price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem: IProduct) => curElem.price <= price
        );
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      const priceArray = action.payload.map(
        (curElem: IProduct) => curElem.price
      );
      const prodMaxPrice = Math.max(...priceArray);

      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          minPrice: state.filters.minPrice,
          maxPrice: prodMaxPrice,
          price: prodMaxPrice,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
