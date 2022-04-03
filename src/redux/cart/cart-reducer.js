import { shopAPI } from "../../Api/api";

let initialState = {
  cartList: '1'
};

const cartReducer = (state = initialState, action) => {
  return state
};

export const getCart = (state) => {
  return state.cart.cartList;
};

export default cartReducer;
