import React from 'react';
import {  NavLink } from 'react-router-dom';
import { IoMdCart } from 'react-icons/io'

import Gold from "../../assets/Gold.png";
import styles from "./Header.module.scss"
export const Header = ({balance}) => {
  return (
    <div className={styles.header}>
      <NavLink className={styles.logo} to={'/'}><>SHOP</></NavLink>
      <NavLink className={styles.logo} to={'/goldmine'}><>GOLDMINE</></NavLink>
      <span>
          {balance}
          <img src={Gold} alt="goldCoin" width='24px' height='24px'></img>
      </span>
      <NavLink className={styles.cartIcon} to="/cart">
        <span>   
          <IoMdCart />
        </span>
      </NavLink>
    </div>
  );
};

export default Header;

