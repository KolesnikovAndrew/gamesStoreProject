import React, { useState, useEffect } from "react";
import Validator from "../Validator/Validator";

import styles from "./RegContact.module.scss";

export const RegBilling = ({
  userData,
  validateLocalData,
  setRegStage,
  regStage,
}) => {
  const [regBillingData, setRegBillingData] = useState({
    cardNumber: "",
    fullName: "",
    dateofExpire: "",
    CVC: "",
  });
  const [error, setError] = useState({
    cardNumber: false,
    fullName: false,
    dateofExpire: false,
    CVC: false,
  });

  const onChangeHandle = (e) => {
    setRegBillingData(() => ({
      ...regBillingData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateBilling = () => {
    setError({
      cardNumber: false,
      fullName: false,
      dateofExpire: false,
      CVC: false,
    });
    const entries = Object.entries(regBillingData);
    for (let [name, value] of entries) {
      Validator(name, value) ? (error[name] = false) : (error[name] = true);
    }
    setError({
      cardNumber: error.cardNumber,
      fullName: error.fullName,
      dateofExpire: error.dateofExpire,
      CVC: error.CVC,
    });
    const noErrors = Object.values(error).every((value) => value === false);

    if (noErrors) {
      setRegStage(regStage + 1);
    } else {
    }
  };
  return (
    <div className={styles.regBilling}>
      <>
        <label>Card number</label>
        <input
          type="number"
          onChange={onChangeHandle}
          name="cardNumber"
        ></input>
        <div className={error.cardNumber ? styles.activeError : styles.noError}>
          Please provide correct Card number.
        </div>
      </>
      <>
        <label>Full Name</label>
        <input type="text" name="fullName" onChange={onChangeHandle}></input>
        <div className={error.fullName ? styles.activeError : styles.noError}>
          Please provide correct Full name.
        </div>
      </>
      <>
        <label>Date of expire</label>
        <input
          type="text"
          name="dateofExpire"
          onChange={onChangeHandle}
        ></input>
        <div
          className={error.dateofExpire ? styles.activeError : styles.noError}
        >
          Please provide correct Date of expire.
        </div>
      </>
      <>
        <label>CVC</label>
        <input type="number" name="CVC" onChange={onChangeHandle}></input>
        <div className={error.CVC ? styles.activeError : styles.noError}>
          Please provide correct CVC.
        </div>
      </>
      <button
        type="button"
        onClick={validateBilling}
        className={styles.stageContollerButton}
      >
        Next
      </button>
    </div>
  );
};

export default RegBilling;
