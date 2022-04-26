import React from "react";
import styles from "./CartPopup.module.scss";
export const CartPopup = () => {
  return (
    <div className={styles.cartPopup}>
      <h1>Hey!</h1>
      <p>You added a product to the cart!</p>
    </div>
  );
};

export default CartPopup;
