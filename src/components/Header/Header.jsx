import React from 'react';
import {  NavLink } from 'react-router-dom';
import { IoMdCart } from 'react-icons/io'

import styles from "./Header.module.scss"
export const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink className={styles.logo} to={'/'}><h1>Shop</h1></NavLink>
      <NavLink className={styles.logo} to={'/goldmine'}><h1>Goldmine</h1></NavLink>
      <NavLink className={styles.cartIcon} to="/cart">
        <span>
          <IoMdCart />
          
        </span>
        
      </NavLink>
      
    </div>
  );
};

export default Header;

