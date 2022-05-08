const SET_BALANCE = "SET_BALANCE";
const ADD_POINTS = "ADD_POINTS";
const TAKE_POINTS = "TAKE_POINTS";

let initialState = {
  balance: 5,
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BALANCE: {
      return {
        ...state,
        balance: action.balance,
      };
    }
    case ADD_POINTS: {
      return {
        ...state,
        balance: state.balance + action.pointsCount,
      };
    }
    case TAKE_POINTS: {
      return {
        ...state,
        balance: state.balance - action.pointsCount,
      };
    }

    default:
      return state;
  }
};

export const getBalance = (state) => {
  return state.balance.balance;
};

export const addPoints = (pointsCount) => ({ type: ADD_POINTS, pointsCount });

export const takePoints = (pointsCount) => ({ type: TAKE_POINTS, pointsCount });

export default balanceReducer;
