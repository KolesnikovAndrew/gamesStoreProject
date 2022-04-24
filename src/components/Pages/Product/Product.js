import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

import Review from "../../Review/Review";
import AddToCart from "../../utils/AddToCart/AddToCart";
import { PLATFORMS } from "../../utils/constants";

import styles from "./Product.module.scss";

export const Product = ({ addEntry, product }) => {
  const [about, setAbout] = useState(true);

  return (
    <div className={styles.product}>
      <div className={styles.gameinfo}>
        <img src={product.thumbnail}></img>
        <div className={styles.gameInfoText}>
          <h1>{product.title}</h1>
          <p>Publisher: {product.publisher}</p>
          <p>Realease date: {product.release_date}</p>
          <hr />
          <p>{product.short_description}</p>
          <hr />
          <p>Genres: {product.genre}</p>
          <p>
            Platfroms:
            {product.platform == PLATFORMS.PC_WINDOWS
              ? " Windows"
              : " Platforms"}
          </p>
        </div>
      </div>
      <div className={styles.addToCart}>
        <div className={styles.addToCartText}>
          <p>Buy {product.title.toUpperCase()}</p>
          <p>{product.price} €</p>
        </div>

        <div className={styles.addToCartButton}>
          {
            <AddToCart
              price={product.price}
              title={product.title}
              platform={product.platform}
              thumbnail={product.thumbnail}
              addEntry={addEntry}
            />
          }
        </div>
      </div>
      <div className={styles.aboutGame}>
        <div className={styles.aboutHeader} onClick={() => setAbout(!about)}>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
            nibh ipsum consequat nisl vel. At risus viverra adipiscing at.
            Habitant morbi tristique senectus et. Pretium nibh ipsum consequat
            nisl vel pretium lectus. Luctus venenatis lectus magna fringilla
            urna.
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
            condimentum mattis pellentesque. Vitae auctor eu augue ut lectus
            arcu bibendum. Nisl purus in mollis nunc sed id semper. Diam sit
            amet nisl suscipit. Dignissim suspendisse in est ante in nibh mauris
            cursus mattis. Egestas erat imperdiet sed euismod nisi. Nisl pretium
            fusce id velit ut tortor pretium. Orci phasellus egestas tellus
            rutrum tellus pellentesque eu.
            <br />
            <hr />
            Sit amet risus nullam eget felis eget. Dolor morbi non arcu risus
            quis. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
            Pellentesque massa placerat duis ultricies. Lobortis elementum nibh
            tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed. Et
            netus et malesuada fames ac turpis egestas. Eget dolor morbi non
            arcu. Non odio euismod lacinia at quis risus sed vulputate. Erat nam
            at lectus urna. In nibh mauris cursus mattis molestie a iaculis.
            Turpis egestas maecenas pharetra convallis posuere morbi leo urna.
            Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Morbi
            quis commodo odio aenean sed adipiscing.
          </p>
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
  );
};

export default Product;
