import React from "react";
import { useSelector } from "react-redux";
import AddToCart from "../../utils/AddToCart/AddToCart";

import styles from "./Product.module.scss";

export const Product = ({ addEntry, count }) => {
  let price = (Math.random() * 100).toFixed(2);
  let selectedGame = [];
  const games = useSelector((state) => state.shop.games);
  for (let i = 0; i < games.length; i++) {
    if (games[i].id == count) {
      selectedGame = games[i];
      console.log(selectedGame);
    }
  }

  return (
    <div className={styles.product}>
      <img src={selectedGame.thumbnail}></img>
      <h1>{selectedGame.title}</h1>
      <p>Publisher:{selectedGame.publisher}</p>
      <p>Realease date:{selectedGame.release_date}</p>
      <p>{selectedGame.short_description}</p>
      <p>Genres: {selectedGame.genre}</p>
      <p>{selectedGame.platform == "PC (Windows)" ? "Windows" : "Platforms"}</p>
      <p>{price}</p>
      {
        <AddToCart
          price={price}
          title={selectedGame.title}
          platform={selectedGame.platform}
          thumbnail={selectedGame.thumbnail}
          addEntry={addEntry}
        />
      }
    </div>
  );
};

export default Product;
