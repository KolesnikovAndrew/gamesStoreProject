import React from "react";

import styles from "./AddToCart.module.scss";

export const AddToCart = ({ price, title, platform, thumbnail, addEntry }) => {
  const onAddToCart = () => {
    let gameData = {
      title: title,
      thumbnail: thumbnail,
      price: parseFloat(price),
      platform: platform,
    };
    addEntry(gameData);
  };
  return (
    <div className={styles.addToCartButton}>
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  );
};

export default AddToCart;
