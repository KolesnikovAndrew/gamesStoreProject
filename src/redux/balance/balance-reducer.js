const SET_BALANCE = "SET_BALANCE";
let initialState = {
  balance: 1000,
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BALANCE: {
      return {
        ...state,
        balance: action.balance,
      };
    }

    default:
      return state;
  }
};

export const setCartList = (balance) => ({ type: SET_BALANCE, balance });

export const getBalance = (state) => {
  return state.balance;
};

export default balanceReducer;
