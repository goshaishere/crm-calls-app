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
        console.log(days, 'days')
        var unixNow = Date.now();
        let date = new Date(unixNow).toISOString()
        console.log(unixNow, date)
        let todayDate = date.slice(0,10)
        console.log(todayDate)
        let daysInSec = days * 86400000
        console.log(daysInSec)
        var unixBefore = parseInt(unixNow, 10) - daysInSec
        console.log(unixBefore)
        let dateBeforeRaw = new Date(unixBefore).toISOString()
        console.log(dateBeforeRaw)
        let dateBefore = dateBeforeRaw.slice(0,10)
        console.log(dateBefore)
        set_date_start(dateBefore)
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