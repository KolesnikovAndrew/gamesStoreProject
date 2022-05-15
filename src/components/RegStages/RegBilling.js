import React from "react";

import styles from "./RegContact.module.scss";

export const RegBilling = () => {
  return (
    <div className={styles.regBilling}>
      <>
        <label>Card number</label>
        <input type="number"></input>
      </>
      <>
        <label>Full Name</label>
        <input type="text"></input>
      </>
      <>
        <label>Date of expire</label>
        <input type="text"></input>
      </>
      <>
        <label>CVC</label>
        <input type="number"></input>
      </>
    </div>
  );
};

export default RegBilling;
