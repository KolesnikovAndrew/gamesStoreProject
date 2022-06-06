import React from "react";

import styles from "./RegInput.module.scss";

const RegInput = ({
  regBillingData,
  setRegBillingData,
  inputName,
  inputType,
  error,
}) => {
  const onChangeHandle = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setRegBillingData(() => ({
      ...regBillingData,
      [e.target.name]: e.target.value,
    }));
  };

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
          maxlength={inputName == "dateofExpire" ? "2" : "999"}
          onPaste={inputType == "number" ? preventPasteNegative : false}
          onKeyPress={inputType == "number" ? preventMinus : false}
        ></input>
        {inputName === "dateofExpire" ? (
          <input
            type="text"
            name="yearOfExpire"
            onChange={onChangeHandle}
            min="0"
            maxlength="2"
            onPaste={inputType == "number" ? preventPasteNegative : false}
            onKeyPress={inputType == "number" ? preventMinus : false}
          ></input>
        ) : (
          false
        )}
      </div>

      <div className={error[inputName] ? styles.activeError : styles.noError}>
        Please provide correct {inputName}.
      </div>
    </div>
  );
};

export default RegInput;
