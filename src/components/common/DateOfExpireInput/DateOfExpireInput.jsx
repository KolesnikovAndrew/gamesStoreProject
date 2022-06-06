import React, { useState } from "react";

import styles from "./DateOfExpireInput.module.scss";

const DateOfExpireInput = ({ regBillingData, setRegBillingData, error }) => {
  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };
  const [expireMonth, setExpireMonth] = useState("00");
  const [expireYear, setExpireYear] = useState("00");

  const onMonthChange = (e) => {
    setExpireMonth(e.target.value);
    setRegBillingData({
      ...regBillingData,
      dateofExpire: [e.target.value, expireYear],
    });
  };
  const onYearChange = (e) => {
    setExpireYear(e.target.value);
    setRegBillingData({
      ...regBillingData,
      dateofExpire: [expireMonth, e.target.value],
    });
  };

  const preventPasteNegative = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = parseFloat(clipboardData.getData("text"));

    if (pastedData < 0) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.regInputContainer}>
      <label>Date of expire</label>
      <div className={styles.inputs}>
        <input
          type="text"
          name="monthOfExpire"
          onChange={onMonthChange}
          min="0"
          maxlength="2"
          onPaste={preventPasteNegative}
          onKeyPress={preventMinus}
          max="12"
        ></input>
        <input
          type="text"
          name="yearOfExpire"
          onChange={onYearChange}
          min="0"
          maxlength="2"
          onPaste={preventPasteNegative}
          onKeyPress={preventMinus}
        ></input>
      </div>

      <div
        className={error["dateofExpire"] ? styles.activeError : styles.noError}
      >
        Your card has expired.
      </div>
    </div>
  );
};

export default DateOfExpireInput;
