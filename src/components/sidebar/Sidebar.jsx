import React from 'react'
import styles from './Sidebar.module.scss'
import {Logo} from './logo/Logo'
import {Items} from './items/Items'
export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <Items/>
      
    </div>
  )
}
