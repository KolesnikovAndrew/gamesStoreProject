import React from "react";

import CartPanel from "./CartPanel/CartPanel";
import styles from "./Cart.module.scss";
import Gold from "../../../assets/Gold.png";

export const Cart = ({ cart, removeEntry, clearCart, balance, takePoints }) => {
  const sumPrices = () => {
    switch (true) {
      case cart.length > 1:
        let result = cart.reduce((total, item) => item.price + total, 0);

        return result;
      case cart.length === 1:
        return cart[0].price;
      case cart.length < 1:
        return 0;
    }
  };

  const totalCost = sumPrices();

  const buyAllFromCart = () => {
    if (balance >= totalCost) {
      takePoints(totalCost);
      clearCart();
    } else if (balance < totalCost) {
      alert("You don't have enough tokens to buy these products!");
    } else {
      alert("Unexpected error");
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
          <span>
            Total cost: {totalCost}
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
