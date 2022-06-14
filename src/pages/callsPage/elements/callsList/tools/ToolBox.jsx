import React, {useEffect, useState} from 'react'
import styles from './ToolBox.module.scss'
import {SearchInput} from './searchInput/SearchInput'
import {SearchLogo} from './searchLogo/SearchLogo'
import {Filters} from './filters/Filters'
import { ClearFilter } from './clearFilter/ClearFiler'


export const ToolBox = (props) => {

  const [isClearBtnVisible, setIsClearBtnVisible] = useState(false)

  useEffect(() => {

  }, [isClearBtnVisible])


  const setIsVisibleFunc = () => {
    setIsClearBtnVisible(true)
}

  return (
    <div className={styles.toolbox}>
      <div className={styles.searchbox}>
      
        <SearchLogo />
        <SearchInput className={styles.searchinput} />

        <ClearFilter isClearBtnVisible={isClearBtnVisible}/>
        <Filters className={styles.filers} setCallType={props.setCallType} setIsVisibleFunc={setIsVisibleFunc}/>
      </div>

    </div>
  )
}
