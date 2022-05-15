import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Popup from "../Popup/Popup";

import RegContact from "../RegStages/RegContact";
import RegStagesController from "../RegStages/RegStagesController";
import { RegStagesControllerContainer } from "../RegStages/RegStagesControllerContainer";

import styles from "./RegistrationModal.module.scss";
function RegistrationForm({
  setBuyWithoutReg,
  buyAllFromCart,
  setRegChoiceTrigger,
  setRegPhaze,
  setPopupText,
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
              <RegStagesControllerContainer buyAllFromCart={buyAllFromCart} />
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
