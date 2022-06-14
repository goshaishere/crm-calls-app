import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import styles from './CallsPage.module.scss'
import {Ballance} from './elements/ballance/Ballance'
//import {FiltersSearch} from './elements/filtersSearch/FiltersSearch'
import { DatePicker } from "./elements/datePicker/DatePicker"
import { CallsList } from "./elements/callsList/CallsList"


import {getCalls, getEmpList} from '../../actions/rates'

export const CallsPage = () => {
    const dispatch = useDispatch()
    const response = useSelector(state => state.response.response)


    const [dateStart, set_date_start] = useState('2020-08-11')
    const [dateEnd, seDateEnd] = useState('2020-09-22')
    const [inOutAll, seInOutAll] = useState(-1)

    useEffect(() => {
        fetchData()
    }, [inOutAll, dateStart, dateEnd])

    const fetchData = () => {
        console.log('do request')
        dispatch(getCalls(dateStart, dateEnd, inOutAll))
        //dispatch(getEmpList())

        console.log(response)
    }

    const setCallType = (val) => {
        seInOutAll(val)
    }

    const setDate = (days) => {
        let date = new Date().toISOString()
        console.log(date)
        let todayDate = date.slice(0,10)
        console.log(todayDate)
        let todayDays = todayDate.slice(8, 10)
        let slice = todayDate.slice(0, 8)
        let secondDay = parseInt(todayDays, 10) - days
        let secondDate = slice + secondDay
        console.log(secondDate)

        set_date_start(secondDate)
        seDateEnd(todayDate)


    }

    return (
        <div className={styles.calls}>
            <Ballance />
            <DatePicker setDate={setDate} /> 
            <CallsList className={styles.callsList} setCallType={setCallType}/>
        </div>
    )
}