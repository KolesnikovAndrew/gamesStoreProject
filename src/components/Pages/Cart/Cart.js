import React from 'react'
import { useSelector } from 'react-redux';
import CartPanel from './CartPanel/CartPanel';
import styles from './Cart.module.scss'
export const Cart = (props) => {
  
  const cart = props.cart
  console.log(cart);
  const runCallback = (cb) => {
    return cb();
  };
  
  const sumPrices = () => {
    const sumRow = []
    if (cart.length > 0) {
      for (var id = 0; id < cart.length; id++) {
        sumRow.push(cart[id][2])
      }
      return((sumRow.reduce((a,b)=> a +b)).toFixed(2))
    } else {
      return '-'
    }
   
  } 

  return (<>
    <div className={styles.cart}>
      {cart.length == 0? 'Your cart is empty!' : 
      runCallback(() => {
        const row = [];
        for (var id = 0; id < cart.length; id++) {
          row.push(<CartPanel title={cart[id][0]} thumbnail={cart[id][1]} price={cart[id][2]} platforms={cart[id][3]} id={id} removeEntry={props.removeEntry}/>);
        }
        return row;
      })}
    </div>
    <div>
      <p>Total cost: {sumPrices()} €</p>
    </div>
   </>
  )
}

export default Cart