import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import shopReducer from "./shop-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  shop: shopReducer,
});

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhansers(applyMiddleware(thunkMiddleware))
);

window.__store__ = store;
export default store;
