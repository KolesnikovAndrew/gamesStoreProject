import React from "react";
import { AiFillWindows } from "react-icons/ai";

import styles from "./CartPanel.module.scss";
import Gold from "../../../../assets/Gold.png";
export const CartPanel = ({
  id,
  thumbnail,
  title,
  platforms,
  price,
  removeEntry,
}) => {
  const deleteEntry = () => {
    removeEntry(id);
  };
  return (
    <div className={styles.cartPanel}>
      <div className={styles.cartContent}>
        <img className={styles.thumbnail} src={thumbnail}></img>
        <p>{title}</p>
        <p>
          {platforms == "PC (Windows)" ? (
            <span>
              <AiFillWindows />
            </span>
          ) : (
            ""
          )}
        </p>
        <div className={styles.gamePrice}>
          <p>
            {price == 0.0 ? "Free" : `${price}  `}
            <img src={Gold} alt="goldCoin" width="28px" height="28px"></img>
          </p>
          <button className={styles.deleteButton} onClick={deleteEntry}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPanel;
