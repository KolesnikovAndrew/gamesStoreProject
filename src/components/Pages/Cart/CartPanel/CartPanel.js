import React from 'react'
import styles from './CartPanel.module.scss'
export const CartPanel = () => {
  return (
    <div>
      <div className={styles.gameInfo}>
        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Rhuj5QZ2cKSYlN61iquqzgHaEa%26pid%3DApi&f=1'></img>
        <p>Game Name</p>
        <p>Plarform</p>
        <div className={styles.gamePrice}>
          <p>15.99$</p>
          <p>delete</p>
        </div>
      </div>
    </div>
  )
}

export default CartPanel