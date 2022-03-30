import { shopAPI } from "../../Api/api";

const SET_GAMES = "SET_GAMES";

let initialState = {
  games: [],
  initialized: false,
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
    default:
      return state;
  }
};

export const setGames = (games) => ({ type: SET_GAMES, games });

export const getGames = (state) => {
  return state.shop.games;
};

export const requestGames = () => {
  return async (dispatch) => {
    let data = await shopAPI.getGames();
    dispatch(setGames(data));
  };
};

export default shopReducer;
