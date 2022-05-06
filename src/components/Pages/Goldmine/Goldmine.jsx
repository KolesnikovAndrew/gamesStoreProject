import React from 'react'
import Tetris from '../../MineGames/Tetris/Tetris'
import styles from './Goldmine.module.scss'
export const Goldmine = ({addPoints}) => {

  return (
    <div className={styles.goldmine}>
      <div className={styles.goldmineInfo}>
        <h1>Welcome to the Goldmine!</h1>
        <p>Here in Goldmine you can earn Gold coins to spend them on games in shop!</p>
      </div>
      <div className={styles.mineGames}>
        <Tetris addPoints={addPoints}/>
      </div>
    </div>
  )
}
export default Goldmine
