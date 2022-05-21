import React, { useEffect, useState } from "react";
import Validator from "../Validator/Validator";
import RegBilling from "./RegBilling";
import RegConfirmation from "./RegConfirmation";
import RegContact from "./RegContact";

import styles from "./RegContact.module.scss";

export const RegStagesController = ({ buyAllFromCart, userData, setAuth }) => {
  const [userDataLocal, setUserDataLocal] = useState({});

  const [regStage, setRegStage] = useState(0);

  const stages = [
    <RegContact
      userData={userData}
      regStage={regStage}
      setRegStage={setRegStage}
    />,
    <RegBilling
      userData={userData}
      regStage={regStage}
      setRegStage={setRegStage}
    />,
    <RegConfirmation />,
  ];

  const regFormSubmit = () => {
    buyAllFromCart();
    setAuth(true);
    console.log(userDataLocal);
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
      </div>
    </div>
  );
};

export default RegStagesController;
