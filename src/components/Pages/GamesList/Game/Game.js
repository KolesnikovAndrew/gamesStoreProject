import React, { useEffect, useState } from "react";
import styles from "./Game.module.scss";
import {AiFillWindows} from 'react-icons/ai'
import { NavLink } from "react-router-dom";
import { setProduct } from "../../../../redux/shop/shop-reducer";


export const Game = (props) => {
  function onProductClick(){
    
    setProduct(props.id)
  }
  return (
    <div className={styles.gameCard}>
      <NavLink to={'/product/'+props.id} onClick={onProductClick}><img src={props.thumbnail}></img></NavLink>
      <h1>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      <p>Genres: {props.genre}</p>
      <p>{props.platform == 'PC (Windows)'?  <div><AiFillWindows/></div>: ''}</p>
    </div>
  );
};

export default Game;
