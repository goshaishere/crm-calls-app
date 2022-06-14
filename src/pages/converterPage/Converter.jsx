import React, { useEffect } from "react"
import styles from './Converter.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getRates } from '../../actions/rates'
import { currencies } from "../../lib/Keeper"
import { setCurrencyTypeTo, setCurrencyTypeFrom, setConvertedValue, setMultiplexer, setValue } from '../../reducers/converterReducer'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import {currenciesPairs} from "../../lib/Keeper"

export const Converter = () => {
    

    return (
        <div className={styles.converter}>

            
        </div>
    )
}