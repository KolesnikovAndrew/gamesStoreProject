import React from "react";

import styles from "./RegContact.module.scss";

export const RegContact = () => {
  return (
    <div className={styles.regContact}>
      <>
        <label>Email</label>
        <input type="email"></input>
      </>
      <>
        <label>Name</label>
        <input type="text"></input>
      </>
      <>
        <label>Surname</label>
        <input type="text"></input>
      </>
      <>
        <label>Age</label>
        <input type="number"></input>
      </>
    </div>
  );
};

export default RegContact;
