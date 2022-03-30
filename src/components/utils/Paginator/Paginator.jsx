import React, { useState, useEffect } from "react";
import styles from "./Paginator.module.scss";

export const Paginator = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.paginator}>
      <span className={styles.showMore} onClick={() => paginate()}>
        Show More
      </span>
    </div>
  );
};
export default Paginator;