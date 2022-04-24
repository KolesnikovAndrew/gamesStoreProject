import { shopAPI } from "../../Api/api";

const SET_GAMES = "SET_GAMES";
const SET_PRODUCT = "SET_PRODUCT";

let initialState = {
  games: [],
  initialized: false,
  product: localStorage.getItem("product") || "",
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES: {
      let gamesWithAddedPrice = action.games.map((game) => ({
        ...game,
        price: (Math.random() * 100).toFixed(2),
      }));
      return {
        ...state,
        games: gamesWithAddedPrice,
        initialized: true,
      };
    }
    case SET_PRODUCT: {
      let selectetByIdProduct = state.games.find(
        (product) => product.id == action.product
      );

      return {
        ...state,
        product: selectetByIdProduct,
      };
    }
    default:
      return state;
  }
};

export const setGames = (games) => ({ type: SET_GAMES, games });

export const getGames = (state) => {
  return state.shop.games;
};

export const getFilteredGames = (state, filter) => {
  return state.shop.games;
};
export const setProduct = (product) => ({ type: SET_PRODUCT, product });
export const getProduct = (state) => {
  return state.shop.product;
};

export const requestGames = () => {
  return async (dispatch) => {
    let data = await shopAPI.getGames();
    dispatch(setGames(data));
  };
};

export default shopReducer;
