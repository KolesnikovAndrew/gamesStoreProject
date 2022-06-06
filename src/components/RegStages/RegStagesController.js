import React, { useEffect, useState } from "react";
import RegBilling from "./RegBilling";
import RegChoise from "./RegChoise";
import RegConfirmation from "./RegConfirmation";
import RegContact from "./RegContact";

import styles from "./RegContact.module.scss";

export const RegStagesController = ({
  buyAllFromCart,
  userData,
  setAuth,
  setBuyWithoutReg,
}) => {
  const [regStage, setRegStage] = useState(0);

  const stages = [
    <RegChoise
      regStage={regStage}
      setRegStage={setRegStage}
      setBuyWithoutReg={setBuyWithoutReg}
      buyAllFromCart={buyAllFromCart}
    />,

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
  };
  return (
    <div className={styles.registrationFormContent}>
      <div>
        <form onSubmit={regFormSubmit}>{stages[regStage]}</form>
      </div>
    </div>
  );
};

export default RegStagesController;
