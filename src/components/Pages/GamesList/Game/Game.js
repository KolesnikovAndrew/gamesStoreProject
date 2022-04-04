import React, { useEffect, useState } from "react";
import styles from "./Game.module.scss";
import {AiFillWindows} from 'react-icons/ai'
import { NavLink } from "react-router-dom";

export const Game = (props) => {
   function onProductClick(){
    props.setCount(props.id)
  }

  return (
    
    <div className={styles.gameCard} onClick={onProductClick}>
    <img className={styles.thumbnail} src={props.thumbnail}></img>
      <h1>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      <p>Genres: {props.genre}</p>
      <p>{props.platform == 'PC (Windows)'?  <span><AiFillWindows/></span>: 'Platforms'}</p>
    </div>
  );
};

export default Game;
