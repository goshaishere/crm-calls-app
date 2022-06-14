import React from 'react'
import styles from './SearchInput.module.scss'

export const SearchInput = () => {
  return (
    <div className={styles.searchBox}>
      <input placeholder="Поиск по звонкам" autoComplete='off' styles={{}}/>
      </div>
  )
}