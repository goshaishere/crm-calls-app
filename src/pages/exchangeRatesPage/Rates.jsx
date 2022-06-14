import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getRates } from '../../actions/rates'
import styles from './Rates.module.scss'
import { currencies } from "../../lib/Keeper"
import { currenciesObj } from "../../lib/Keeper"
import { setCurrencyType } from '../../reducers/exchangeRatesReducer'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {currenciesPairs} from "../../lib/Keeper"



export const Rates = () => {

    return (
        <div className={styles.rates}>

           
        </div>
    )
}