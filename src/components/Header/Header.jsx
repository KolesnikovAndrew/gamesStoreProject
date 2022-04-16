import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdCart } from 'react-icons/io'

import Balance from '../utils/Balance/Balance';
import styles from "./Header.module.scss"
export const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink className={styles.logo} to={'/'}><h1>Ponchy Shop</h1></NavLink>
      < NavLink className={styles.cartIcon} to="/cart"><span><IoMdCart /></span></NavLink>
    </div>
  );
};

export default Header;

