import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import shopReducer from "./shop/shop-reducer";
import thunkMiddleware from "redux-thunk";
import cartReducer from "./cart/cart-reducer";

let reducers = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
});

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
);

window.__store__ = store;
export default store;
