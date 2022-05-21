import React from "react";
import RegStagesController from "../RegStages/RegStagesController";

import styles from "./RegistrationModal.module.scss";
function RegistrationForm({
  setBuyWithoutReg,
  buyAllFromCart,
  setPopupText,
  userData,
  setAuth,
}) {
  return (
    <div className={styles.registrationFormContent}>
      <h1>Would you like to register?</h1>
      <div className={styles.registrationChoise}>
        <div
          onClick={() => {
            setBuyWithoutReg(true);
            buyAllFromCart();
          }}
          className={styles.regChoiseButton}
        >
          NO
        </div>
        <div className={styles.choiseSeparator}></div>
        <div
          className={styles.regChoiseButton}
          onClick={() => {
            setPopupText(
              <RegStagesController
                buyAllFromCart={buyAllFromCart}
                userData={userData}
                setAuth={setAuth}
              />
            );
          }}
        >
          YES
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
