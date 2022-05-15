import React, { useState } from "react";
import RegBilling from "./RegBilling";
import RegConfirmation from "./RegConfirmation";
import RegContact from "./RegContact";

import styles from "./RegContact.module.scss";

export const RegStagesController = ({ buyAllFromCart, userData }) => {
  const [regContent, setRegContent] = useState("ABOBA");
  const [regStage, setRegStage] = useState(0);
  const stages = [
    <RegContact />,
    <RegBilling />,
    <RegConfirmation buyAllFromCart={buyAllFromCart} />,
  ];

  const regFormSubmit = () => {
    buyAllFromCart();
  };
  return (
    <div className={styles.registrationFormContent}>
      <div>
        <form onSubmit={regFormSubmit}>{stages[regStage]}</form>
      </div>

      <div className={styles.stageController}>
        <div
          className={styles.stageContollerButton}
          onClick={() => {
            setRegStage(regStage - 1);
          }}
        >
          BACK
        </div>
        <div className={styles.choiseSeparator}></div>
        {regStage < 2 ? (
          <div
            onClick={() => {
              if (regStage < 2) {
                setRegStage(regStage + 1);
              }
            }}
            className={styles.stageContollerButton}
          >
            Next
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RegStagesController;
