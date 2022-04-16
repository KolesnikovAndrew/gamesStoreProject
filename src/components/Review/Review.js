import React from "react";
import { AiFillLike } from "react-icons/ai";

import styles from "./Review.module.scss";

export const Review = () => {
  return (
    <div className={styles.review}>
      <span className={styles.like}>
        <AiFillLike />
      </span>
      <h1>Recommend</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum
        consequat nisl vel.
      </p>
      <hr />
      <p>Was this review helpful?</p>

      <span>
        <AiFillLike />
        Yes
      </span>
      <span>
        <AiFillLike />
        No
      </span>
    </div>
  );
};

export default Review;
