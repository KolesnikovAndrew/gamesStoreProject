import React from 'react'
import { useSelector } from 'react-redux';
import CartPanel from './CartPanel/CartPanel';

export const Cart = (props) => {
  const cart = props.cart
  console.log(cart.length);
  
  return (
  <div>
    {cart.length == 0? 'Your cart is empty!' : <CartPanel/>}
   </div>
  )
}

export default Cart