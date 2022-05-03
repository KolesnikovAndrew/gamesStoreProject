import React from "react";

import CartPanel from "./CartPanel/CartPanel";
import styles from "./Cart.module.scss";

export const Cart = ({ cart, removeEntry }) => {
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
        return "-";
    }
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
          <span>Total cost: {sumPrices()} Coins</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
