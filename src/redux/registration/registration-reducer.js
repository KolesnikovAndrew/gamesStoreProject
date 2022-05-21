let initialState = {
  email: "",
  name: "",
  surname: "",
  age: 0,
  cardNumber: 0,
  fullName: "",
  dateOfExpire: 0,
  CVC: 0,
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getUserData = (state) => {
  return state.userData;
};

export default registrationReducer;
