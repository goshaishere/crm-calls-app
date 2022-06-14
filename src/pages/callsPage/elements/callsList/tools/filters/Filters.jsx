import React from 'react'
import styles from './Filters.module.scss'
import { TypeFilter } from './elements/typeFilter/TypeFilter'
import {EmployeesFilter} from './elements/employeesFilter/EmployeesFilter'
import { ErrorFilter } from './elements/errorFilter/ErrorFilter'

export const Filters = (props) => {
  return (
    <div className={styles.filters}>
      <TypeFilter className={styles.type} setCallType={props.setCallType} setIsVisibleFunc={props.setIsVisibleFunc}/>
      <EmployeesFilter className={styles.employees} />
      <ErrorFilter/>
    </div>
  )
}
