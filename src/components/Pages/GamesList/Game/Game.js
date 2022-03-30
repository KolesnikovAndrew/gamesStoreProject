import React from "react";
import styles from "./Game.module.scss";
import {AiFillWindows} from 'react-icons/ai'
import { Link } from "react-router-dom";

export const Game = (props) => {
  return (
    <div className={styles.gameCard}>
      <Link to='/1'><img src={props.thumbnail}></img></Link>
      <h1>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      <p>Genres: {props.genre}</p>
      <p>{props.platform == 'PC (Windows)'?  <div><AiFillWindows/></div>: ''}</p>
    </div>
  );
};

export default Game;
