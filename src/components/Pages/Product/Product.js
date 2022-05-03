import React, { useState } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

import Review from "../../Review/Review";
import AddToCart from "../../utils/AddToCart/AddToCart";
import { PLATFORMS } from "../../utils/constants";

import styles from "./Product.module.scss";

import shopAPI from "../../../api/api";

export const Product = ({ addEntry, id }) => {
  const [about, setAbout] = useState(true);

  const [productFromAPI, setProductFromAPI] = useState(null);

  const loadGame = () => {
    setTimeout(async () => {
      const response = await shopAPI.getGame(id);
      let userData = await response;
      setProductFromAPI(userData);
    });
  };

  productFromAPI ? console.log("") : loadGame();

  return (
    <>
      {productFromAPI ? (
        <div className={styles.product}>
          <div className={styles.gameinfo}>
            <img src={productFromAPI.thumbnail}></img>
            <div className={styles.gameInfoText}>
              <h1>{productFromAPI.title}</h1>
              <span>Publisher: {productFromAPI.publisher}</span>
              <span>Realease date: {productFromAPI.release_date}</span>
              <hr />
              <span>{productFromAPI.short_description}</span>
              <hr />
              <span>Genres: {productFromAPI.genre}</span>
              <span>
                Platfroms:
                {productFromAPI.platform == PLATFORMS.PC_WINDOWS
                  ? " Windows"
                  : " Platforms"}
              </span>
            </div>
          </div>
          <div className={styles.addToCart}>
            <div className={styles.addToCartText}>
              <p>Buy {productFromAPI.title.toUpperCase()}</p>
              <p>{productFromAPI.price} €</p>
            </div>

            <div className={styles.addToCartButton}>
              {
                <AddToCart
                  price={productFromAPI.price}
                  title={productFromAPI.title}
                  platform={productFromAPI.platform}
                  thumbnail={productFromAPI.thumbnail}
                  addEntry={addEntry}
                />
              }
            </div>
          </div>
          <div className={styles.aboutGame}>
            <div
              className={styles.aboutHeader}
              onClick={() => setAbout(!about)}
            >
              <h1>About this game:</h1>
              <span className={styles.toggleAbout}>
                {!about ? (
                  <BsChevronCompactDown size={50} />
                ) : (
                  <BsChevronCompactUp size={50} />
                )}
              </span>
            </div>

            {about ? (
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium nibh ipsum consequat nisl vel. At risus viverra
                adipiscing at. Habitant morbi tristique senectus et. Pretium
                nibh ipsum consequat nisl vel pretium lectus. Luctus venenatis
                lectus magna fringilla urna.
                <br />
                <hr />
                Bibendum neque egestas congue quisque. Vitae sapien pellentesque
                habitant morbi tristique senectus et. Magna ac placerat
                vestibulum lectus mauris ultrices eros in cursus. Mi eget mauris
                pharetra et ultrices. Aliquam malesuada bibendum arcu vitae
                elementum curabitur vitae nunc sed. Magnis dis parturient montes
                nascetur ridiculus mus.
                <br />
                <hr />
                Egestas sed sed risus pretium quam vulputate. Duis at tellus at
                urna condimentum mattis pellentesque. Vitae auctor eu augue ut
                lectus arcu bibendum. Nisl purus in mollis nunc sed id semper.
                Diam sit amet nisl suscipit. Dignissim suspendisse in est ante
                in nibh mauris cursus mattis. Egestas erat imperdiet sed euismod
                nisi. Nisl pretium fusce id velit ut tortor pretium. Orci
                phasellus egestas tellus rutrum tellus pellentesque eu.
                <br />
                <hr />
                Sit amet risus nullam eget felis eget. Dolor morbi non arcu
                risus quis. Dolor sed viverra ipsum nunc aliquet bibendum enim
                facilisis. Pellentesque massa placerat duis ultricies. Lobortis
                elementum nibh tellus molestie. Faucibus ornare suspendisse sed
                nisi lacus sed. Et netus et malesuada fames ac turpis egestas.
                Eget dolor morbi non arcu. Non odio euismod lacinia at quis
                risus sed vulputate. Erat nam at lectus urna. In nibh mauris
                cursus mattis molestie a iaculis. Turpis egestas maecenas
                pharetra convallis posuere morbi leo urna. Cras fermentum odio
                eu feugiat pretium nibh ipsum consequat. Morbi quis commodo odio
                aenean sed adipiscing.
              </div>
            ) : null}
          </div>
          <div>
            <h2>Rewievs:</h2>
            <div className={styles.reviews}>
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default Product;
