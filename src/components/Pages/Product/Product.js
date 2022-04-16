import React from "react";
import { useSelector } from "react-redux";

import Review from "../../Review/Review";
import AddToCart from "../../utils/AddToCart/AddToCart";
import { PLATFORMS } from "../../utils/constants";

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
      <div className={styles.gameinfo}>
        <h1>{selectedGame.title}</h1>
        <p>Publisher: {selectedGame.publisher}</p>
        <p>Realease date: {selectedGame.release_date}</p>
        <hr />
        <p>{selectedGame.short_description}</p>
        <hr />
        <p>Genres: {selectedGame.genre}</p>
        <p>
          Platfroms:
          {selectedGame.platform == PLATFORMS.PC_WINDOWS
            ? " Windows"
            : " Platforms"}
        </p>
      </div>
      <div className={styles.addtocart}>
        <div className={styles.addToCartText}>
          <p>Buy {selectedGame.title.toUpperCase()}</p>
          <p>{price} €</p>
        </div>

        <div className={styles.addToCartButton}>
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
      </div>
      <div className={styles.aboutGame}>
        <h1>About this game:</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
          nibh ipsum consequat nisl vel. At risus viverra adipiscing at.
          Habitant morbi tristique senectus et. Pretium nibh ipsum consequat
          nisl vel pretium lectus. Luctus venenatis lectus magna fringilla urna.
          <br />
          <hr />
          Bibendum neque egestas congue quisque. Vitae sapien pellentesque
          habitant morbi tristique senectus et. Magna ac placerat vestibulum
          lectus mauris ultrices eros in cursus. Mi eget mauris pharetra et
          ultrices. Aliquam malesuada bibendum arcu vitae elementum curabitur
          vitae nunc sed. Magnis dis parturient montes nascetur ridiculus mus.
          <br />
          <hr />
          Egestas sed sed risus pretium quam vulputate. Duis at tellus at urna
          condimentum mattis pellentesque. Vitae auctor eu augue ut lectus arcu
          bibendum. Nisl purus in mollis nunc sed id semper. Diam sit amet nisl
          suscipit. Dignissim suspendisse in est ante in nibh mauris cursus
          mattis. Egestas erat imperdiet sed euismod nisi. Nisl pretium fusce id
          velit ut tortor pretium. Orci phasellus egestas tellus rutrum tellus
          pellentesque eu.
          <br />
          <hr />
          Sit amet risus nullam eget felis eget. Dolor morbi non arcu risus
          quis. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
          Pellentesque massa placerat duis ultricies. Lobortis elementum nibh
          tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed. Et
          netus et malesuada fames ac turpis egestas. Eget dolor morbi non arcu.
          Non odio euismod lacinia at quis risus sed vulputate. Erat nam at
          lectus urna. In nibh mauris cursus mattis molestie a iaculis. Turpis
          egestas maecenas pharetra convallis posuere morbi leo urna. Cras
          fermentum odio eu feugiat pretium nibh ipsum consequat. Morbi quis
          commodo odio aenean sed adipiscing.
        </p>
      </div>
      <div>
        <h2>Rewievs:</h2>
        <div>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Product;
