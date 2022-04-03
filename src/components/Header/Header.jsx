import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from "./Header.module.scss"
import { IoMdCart } from 'react-icons/io'
export const Header = () => {
  return <div className={styles.header}>
    <h1>Ponchy Shop</h1>
    <NavLink className={styles.cartIcon} to={'/cart'}><span><IoMdCart /></span></NavLink>
  </div>;
};

export default Header;

