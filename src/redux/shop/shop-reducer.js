import { shopAPI } from "../../Api/api";

const SET_GAMES = "SET_GAMES";
const SET_PRODUCT = "SET_PRODUCT";

let initialState = {
  games: [],
  initialized: false,
  product: '10',
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES: {
      return {
        ...state,
        games: action.games,
        initialized: true,
      };
    }
    case SET_PRODUCT: {
      return {
        ...state,
        product: action.product,
      };
    }
    default:
      return state;
  }
};

export const setGames = (games) => ({ type: SET_GAMES, games });

export const getGames = (state) => {
  //console.log("Get Games:"+state);
  return state.shop.games;
};
export const setProduct = (product) => ({type: SET_PRODUCT, product})
export const getProduct = (state) => {
  //console.log("Get product"+state);
  return state.shop.product;
};

export const requestGames = () => {
  return async (dispatch) => {
    let data = await shopAPI.getGames();
    dispatch(setGames(data));
  };
};

export const requestGame = (gameId) => {
  return async (dispatch) => {
    let data = await shopAPI.getGame(gameId);
    dispatch(setGames(data));
  };
}

export default shopReducer;
