import React from "react";

import CartPanel from "./CartPanel/CartPanel";
import styles from "./Cart.module.scss";
import Gold from "../../../assets/Gold.png";

export const Cart = ({ cart, removeEntry, clearCart }) => {
  const sumPrices = () => {
    switch (true) {
      case cart.length > 1:
        let result = cart.reduce((total, arr) => {
          return total.price + arr.price;
        });
        return result;
      case cart.length === 1:
        return cart[0].price;
      case cart.length < 1:
        return 0;
    }
  };

  const buyAllFromCart = () => {
    clearCart();
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cart}>
        <div className={styles.cartPanel}>
          {cart.length ? (
            cart.map((game, id) => {
              return (
                <CartPanel
                  title={game.title}
                  thumbnail={game.thumbnail}
                  price={game.price}
                  platforms={game.platforms}
                  id={id}
                  removeEntry={removeEntry}
                />
              );
            })
          ) : (
            <p className={styles.emptyCarText}>Your cart is empty!</p>
          )}
        </div>

        <div className={styles.totalCost}>
          <span>
            Total cost: {sumPrices()}
            <img src={Gold} alt="goldCoin" width="24px" height="24px"></img>
          </span>
        </div>

        <div className={styles.buyButton}>
          <button onClick={buyAllFromCart}>BUY</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
