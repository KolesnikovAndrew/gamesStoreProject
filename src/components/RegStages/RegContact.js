import React, { useState } from "react";

import Validator from "../Validator/Validator";
import RegInput from "../common/RegInput/RegInput";
import styles from "./RegContact.module.scss";

export const RegContact = ({ setRegStage, regStage }) => {
  const [regContactData, setRegContactData] = useState({
    email: "",
    name: "",
    surname: "",
    age: "",
  });
  const [error, setError] = useState({
    email: false,
    name: false,
    surname: false,
    age: false,
  });

  const onChangeHandle = (e) => {
    setRegContactData(() => ({
      ...regContactData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateContact = () => {
    setError({
      email: false,
      name: false,
      surname: false,
      age: false,
    });
    const entries = Object.entries(regContactData);
    for (let [name, value] of entries) {
      Validator(name, value) ? (error[name] = false) : (error[name] = true);
    }
    setError({
      email: error.email,
      name: error.name,
      surname: error.surname,
      age: error.age,
    });
    const noErrors = Object.values(error).every((value) => value === false);

    if (noErrors) {
      setRegStage(regStage + 1);
    }
  };

  return (
    <div className={styles.regContact}>
      <RegInput
        inputName={"email"}
        inputType={"email"}
        onChangeHandle={onChangeHandle}
        error={error}
      />
      <RegInput
        inputName={"name"}
        inputType={"text"}
        onChangeHandle={onChangeHandle}
        error={error}
      />

      <RegInput
        inputName={"surname"}
        inputType={"text"}
        onChangeHandle={onChangeHandle}
        error={error}
      />
      <RegInput
        inputName={"age"}
        inputType={"number"}
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
          onClick={validateContact}
          className={styles.stageControllerButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RegContact;
