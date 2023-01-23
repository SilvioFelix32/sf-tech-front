import { IProduct } from "../types";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem: IProduct) => curElem.value);
      let maxPrice = Math.max(...priceArr);
      let minPrice = Math.min(...priceArr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice, minPrice },
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      const filteredProducts = action.payload.products.filter(
        (prod: IProduct) => prod.value <= value
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
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem: IProduct) => {
          return curElem.title.toLowerCase().includes(text);
        });
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem: IProduct) => curElem.value == price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem: IProduct) => curElem.value <= price
        );
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      let priceArray = action.payload.map((curElem: IProduct) => curElem.value);
      let prodMaxPrice = Math.max(...priceArray);
      console.log(prodMaxPrice);
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
