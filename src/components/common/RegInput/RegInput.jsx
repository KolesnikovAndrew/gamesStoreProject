import React from "react";

import styles from "./RegInput.module.scss";

const RegInput = ({ inputName, inputType, error, onChangeHandle }) => {
  let inputNameLabel = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
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
      <label>{inputNameLabel}</label>
      <div className={styles.inputs}>
        <input
          type={inputType}
          name={inputName}
          onChange={onChangeHandle}
          min="0"
          maxlength={inputName === "CVC" ? "3" : "999"}
          onPaste={inputType === "number" ? preventPasteNegative : false}
          onKeyPress={inputType === "number" ? preventMinus : false}
        ></input>
      </div>

      <div className={error[inputName] ? styles.activeError : styles.noError}>
        Please provide correct {inputName}.
      </div>
    </div>
  );
};

export default RegInput;
