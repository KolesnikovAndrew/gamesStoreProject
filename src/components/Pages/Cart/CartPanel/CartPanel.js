import React from 'react'
import styles from './CartPanel.module.scss'
import {AiFillWindows} from 'react-icons/ai'
export const CartPanel = (props) => {
  let deleteEntry =() => {
    console.log(props.id);
    props.removeEntry(props.id)
  }
  return (
    <div className={styles.cartPanel}>
      <div className={styles.gameInfo}>
        <img className={styles.thumbnail} src={props.thumbnail}></img>
        <p>{props.title}</p>
        <p>{props.platforms == 'PC (Windows)'?  <span><AiFillWindows/></span>: ''}</p>
        <div className={styles.gamePrice}>
          <p>{props.price == 0.00? 'Free': props.price+' €'}</p>
          <button className={styles.deleteButton} onClick={deleteEntry}>delete</button>
        </div>
      </div>
    </div>
  )
}

export default CartPanel