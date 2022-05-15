import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

import styles from "./Popup.module.scss";
function Popup(props) {
  return props.trigger ? (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <>
          <button
            className={styles.closeBtn}
            onClick={() => props.setButtonPopup(false)}
          >
            <AiOutlineCloseSquare />
          </button>
        </>
        <div className={styles.popupContent}>
          <div className={styles.popupIcon}>{props.popupIcon}</div>
          <>{props.children}</>
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup;
