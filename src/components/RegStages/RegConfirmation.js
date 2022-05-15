import React from "react";

import styles from "./RegContact.module.scss";

export const RegConfirmation = ({ buyAllFromCart }) => {
  return (
    <div>
      <>
        <label>I agree to the terms of service</label>
        <input type="checkbox"></input>
        <button className={styles.stageContollerButton} type="submit">
          Submit
        </button>
      </>
    </div>
  );
};

export default RegConfirmation;
