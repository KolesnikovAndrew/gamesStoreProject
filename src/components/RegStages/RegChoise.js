import React from "react";

import styles from "./RegChoise.module.scss";
function RegChoise({
  setBuyWithoutReg,
  buyAllFromCart,
  setRegStage,
  regStage,
}) {
  return (
    <div className={styles.registrationFormContent}>
      <h1>Would you like to register?</h1>
      <div className={styles.registrationChoise}>
        <div
          onClick={() => {
            setRegStage(3);
          }}
          className={styles.regChoiseButton}
        >
          NO
        </div>
        <div className={styles.choiseSeparator}></div>
        <div
          className={styles.regChoiseButton}
          onClick={() => {
            setRegStage(regStage + 1);
          }}
        >
          YES
        </div>
      </div>
    </div>
  );
}

export default RegChoise;
