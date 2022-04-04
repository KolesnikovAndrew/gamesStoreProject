import { shopAPI } from "../../Api/api";

const REMOVE_ENTRY = 'REMOVE_ENTRY'
const ADD_ENTRY = 'ADD_ENTRY'
const SET_CARTLIST = 'SET_CARTLIST'
let initialState = {
  cartList: [],
  
  
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARTLIST: {
      return {
        ...state,
        cartList: action.cartList,
      };
    }
    case REMOVE_ENTRY: {
      return {
        ...state,
        cartList: state.cartList.filter((item, index) => index !=  action.id)
      };
    }
    case ADD_ENTRY: {
      
      return {
        ...state,
        cartList: state.cartList.concat([action.gameData])
      }
    }
    default:
      return state;
  }
};

export const setCartList = (cartList) => ({ type: SET_CARTLIST, cartList });


export const getCart = (state) => {
  return state.cart.cartList;
};

export const removeEntry = (id) => ({ type: REMOVE_ENTRY, id })
export const addEntry = (gameData) => ({type: ADD_ENTRY, gameData})

export default cartReducer;
