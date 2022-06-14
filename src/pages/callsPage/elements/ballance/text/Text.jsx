import React from 'react'
import styles from './Text.module.scss'

export const Text = () => {
  return (
    <div style={{display: 'inline-block'}}>
        <div className={styles.text}>Балланс: </div>
        <div className={styles.number}>272 р</div>
    </div>
  )
}
