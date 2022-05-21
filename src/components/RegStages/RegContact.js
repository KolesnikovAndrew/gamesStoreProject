import React, { useEffect, useState } from "react";
import Validator from "../Validator/Validator";

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
    } else {
    }
  };

  return (
    <div className={styles.regContact}>
      <>
        <label>Email</label>
        <input type="email" name="email" onChange={onChangeHandle}></input>

        <div className={error.email ? styles.activeError : styles.noError}>
          Please provide correct Email.
        </div>
      </>
      <>
        <label>Name</label>
        <input type="text" name="name" onChange={onChangeHandle}></input>
        <div className={error.name ? styles.activeError : styles.noError}>
          Please provide correct Name.
        </div>
      </>
      <>
        <label>Surname</label>
        <input type="text" name="surname" onChange={onChangeHandle}></input>
        <div className={error.surname ? styles.activeError : styles.noError}>
          Please provide correct Surname.
        </div>
      </>
      <>
        <label>Age</label>
        <input type="number" name="age" onChange={onChangeHandle}></input>
        <div className={error.age ? styles.activeError : styles.noError}>
          Please provide correct Age.
        </div>
      </>
      <button
        type="button"
        onClick={validateContact}
        className={styles.stageContollerButton}
      >
        Next
      </button>
    </div>
  );
};

export default RegContact;
