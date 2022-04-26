import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
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
      <Popup
        onClick={onAddToCart}
        trigger={<button className="button">Add To Cart</button>}
      >
        <span> Add To Cart </span>
      </Popup>
    </div>
  );
};

export default AddToCart;
