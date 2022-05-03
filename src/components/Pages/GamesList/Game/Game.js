import React from "react";
import { AiFillWindows } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import AddToCart from "../../../utils/AddToCart/AddToCart";
import Gold from "../../../../assets/Gold.png";
import styles from "./Game.module.scss";

export const Game = ({
  id,
  thumbnail,
  title,
  description,
  genre,
  platform,
  price,
  setProduct,
  addEntry,
}) => {
  function onProductClick() {
    setProduct(id);
  }

  return (
    <div className={styles.gameCard} onClick={onProductClick}>
      <NavLink to={"/product/" + id}>
        <img className={styles.thumbnail} src={thumbnail}></img>
      </NavLink>
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
      <p>Genre: {genre}</p>
      <p className={styles.priceTag}>
        {price}
        <img src={Gold} alt="gold coin" className={styles.goldCoin}></img>
      </p>
      <p>
        {platform === "PC (Windows)" ? (
          <span>
            <AiFillWindows />
          </span>
        ) : (
          "Platforms"
        )}
      </p>

      <div className={styles.addToCartButton}>
        {
          <AddToCart
            price={price}
            title={title}
            platform={platform}
            thumbnail={thumbnail}
            addEntry={addEntry}
          />
        }
      </div>
    </div>
  );
};

export default Game;
