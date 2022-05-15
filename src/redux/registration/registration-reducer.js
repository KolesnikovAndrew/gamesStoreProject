const SET_BALANCE = "SET_BALANCE";
const ADD_POINTS = "ADD_POINTS";
const TAKE_POINTS = "TAKE_POINTS";

let initialState = {
  email: "",
  name: "",
  surname: "",
  age: 0,
  cardNumber: 0,
  fullName: "",
  dateOfExpire: 0,
  CVC: 0,
  tos: false,
};

const registrationReducer = (state = initialState, action) => {
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

export const getUserData = (state) => {
  return state;
};

export const setUserData = (data) => ({ type: ADD_POINTS, data });

export default registrationReducer;
