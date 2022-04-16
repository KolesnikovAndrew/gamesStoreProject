import React, { useEffect, useState } from "react";
import { AiFillWindows } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import styles from "./Game.module.scss";

export const Game = ({
  setCount,
  id,
  thumbnail,
  title,
  description,
  genre,
  platform,
}) => {
  function onProductClick() {
    setCount(id);
  }

  return (
    <div className={styles.gameCard} onClick={onProductClick}>
      <NavLink to={"/product/" + id}>
        <img className={styles.thumbnail} src={thumbnail}></img>{" "}
      </NavLink>
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
      <p>Genre: {genre}</p>

      <p>
        {platform == "PC (Windows)" ? (
          <span>
            <AiFillWindows />
          </span>
        ) : (
          "Platforms"
        )}
      </p>
    </div>
  );
};

export default Game;
