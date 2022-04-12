import React from "react";
import { AiFillWindows } from "react-icons/ai";

import styles from "./CartPanel.module.scss";

export const CartPanel = (props) => {
  const deleteEntry = () => {
    props.removeEntry(props.id);
  };
  return (
    <div className={styles.cartPanel}>
      <div className={styles.gameInfo}>
        <img className={styles.thumbnail} src={props.thumbnail}></img>
        <p>{props.title}</p>
        <p>
          {props.platforms == "PC (Windows)" ? (
            <span>
              <AiFillWindows />
            </span>
          ) : (
            ""
          )}
        </p>
        <div className={styles.gamePrice}>
          <p>{props.price == 0.0 ? "Free" : `${props.price} €`}</p>
          <button className={styles.deleteButton} onClick={deleteEntry}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPanel;
