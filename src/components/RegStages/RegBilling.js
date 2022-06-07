import React, { useState, useEffect } from "react";
import DateOfExpireInput from "../common/DateOfExpireInput/DateOfExpireInput";
import RegInput from "../common/RegInput/RegInput";
import Validator from "../Validator/Validator";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import styles from "./RegContact.module.scss";
export const RegBilling = ({ setRegStage, regStage }) => {
  const [expireMonth, setExpireMonth] = useState("00");
  const [expireYear, setExpireYear] = useState("00");
  const [regBillingData, setRegBillingData] = useState({
    cardNumber: "",
    fullName: "",
    dateofExpire: "",
    CVC: "",
  });
  const [cardType, setCardType] = useState(null);

  const onChangeHandle = (e) => {
    setRegBillingData(() => ({
      ...regBillingData,
      [e.target.name]: e.target.value,
    }));
  };

  const [error, setError] = useState({
    cardNumber: false,
    fullName: false,
    dateofExpire: false,
    CVC: false,
  });

  const validateBilling = () => {
    console.log(regBillingData);
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
    }
  };

  useEffect(() => {
    setCardType(null);
    let tests = { visa: /^4[0-9]/, mastercard: /^5[1-5]/ };

    for (const test in tests) {
      console.log(tests[test].test(regBillingData.cardNumber.slice(0, 2)));
      if (tests[test].test(regBillingData.cardNumber.slice(0, 2)) === true) {
        setCardType(test);
      }
    }
  }, [regBillingData]);

  return (
    <div className={styles.regBilling}>
      <RegInput
        inputName={"cardNumber"}
        inputType={"number"}
        onChangeHandle={onChangeHandle}
        error={error}
      />

      <div className={styles.creditCardIcons}>
        <FaCcVisa
          className={
            cardType == "visa" ? styles.cardActive : styles.cardUnactive
          }
        />
        <FaCcMastercard
          className={
            cardType == "mastercard" ? styles.cardActive : styles.cardUnactive
          }
        />
      </div>

      <RegInput
        inputName={"fullName"}
        inputType={"text"}
        onChangeHandle={onChangeHandle}
        error={error}
      />
      <DateOfExpireInput
        error={error}
        className={styles.dateofExpireInput}
        regBillingData={regBillingData}
        setRegBillingData={setRegBillingData}
        expireMonth={expireMonth}
        setExpireMonth={setExpireMonth}
        expireYear={expireYear}
        setExpireYear={setExpireYear}
      />
      <RegInput
        inputName={"CVC"}
        inputType={"text"}
        onChangeHandle={onChangeHandle}
        error={error}
      />
      <div className={styles.stageController}>
        <button
          className={styles.stageControllerButton}
          onClick={() => {
            setRegStage(regStage - 1);
          }}
        >
          Back
        </button>
        <button
          type="button"
          onClick={validateBilling}
          className={styles.stageControllerButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RegBilling;
