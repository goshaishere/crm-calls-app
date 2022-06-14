import axios from 'axios'
import $ from 'jquery'

import {setIsFetching, setRates, setFetchError, setCalls, setEmpList} from "../reducers/responseReducer"
const API_KEY = "200f439a00e1477534fd4618"

export const getRates = (currencyTypeFrom, currencyTypeTo, value) => {

    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const response = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currencyTypeFrom}`)
            dispatch(setRates(response.data))
            //dispatch(setMultiplexer(response.data.conversion_rates[currencyTypeTo]))
            //dispatch(setConvertedValue(response.data.conversion_rates[currencyTypeTo] * value))
        } catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false))

            setTimeout( () => {
                dispatch(setFetchError(false))
            }, 2000)
        }
    }
}


export const getCalls = (date_start, date_end, in_out) => {
    //const correctURL = `https://api.skilla.ru/mango/getList?date_start=${date_start}&date_end=${date_end}&in_out=${in_out}`

    let ourUrl = `https://api.skilla.ru/mango/getList?date_start=${date_start}&date_end=${date_end}`
    if (in_out === 1 ){
        ourUrl = `https://api.skilla.ru/mango/getList?date_start=${date_start}&date_end=${date_end}&in_out=${in_out}`
    }
    if (in_out === 0){
        ourUrl = `https://api.skilla.ru/mango/getList?date_start=${date_start}&date_end=${date_end}&in_out=${in_out}`
    }

    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            let responseData = null
            $.ajax({
                url: ourUrl,
                type: 'POST',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer testtoken');
                },
                data: {},
                success: function (response) { 
                    console.log('Ajax sucsess')
                    let jsonStr = JSON.stringify(response)
                    let jsonData = JSON.parse(jsonStr)
                    responseData = jsonData
                    console.log(jsonData)
                    dispatch(setCalls(responseData))
                },
                error: function () {
                    console.log('Ajax error')
                 },
                });
                //dispatch(setCalls(responseData))
            //dispatch(setMultiplexer(response.data.conversion_rates[currencyTypeTo]))
            //dispatch(setConvertedValue(response.data.conversion_rates[currencyTypeTo] * value))
        } catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false))
            setTimeout( () => {
                dispatch(setFetchError(false))
            }, 2000)
        }
    }
}



export const getEmpList = () => {
    //const correctURL = `https://api.skilla.ru/mango/getList?date_start=${date_start}&date_end=${date_end}&in_out=${in_out}`
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            let responseData = null
            $.ajax({
                url: `https://api.skilla.ru/partnership/getPersonsList?accountant`,
                type: 'POST',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer testtoken');
                },
                data: {},
                success: function (response) { 
                    console.log('Ajax sucsess')
                    let jsonStr = JSON.stringify(response)
                    let jsonData = JSON.parse(jsonStr)
                    responseData = jsonData
                    console.log(jsonData)
                    dispatch(setEmpList(responseData))
                },
                error: function () {
                    console.log('Ajax error')
                 },
                });
                //dispatch(setCalls(responseData))
            //dispatch(setMultiplexer(response.data.conversion_rates[currencyTypeTo]))
            //dispatch(setConvertedValue(response.data.conversion_rates[currencyTypeTo] * value))
        } catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false))
            setTimeout( () => {
                dispatch(setFetchError(false))
            }, 2000)
        }
    }
}




export const getCallsOld = (date_start, date_end, in_out) => {
    console.log(date_start, date_end, in_out)
    console.log(`https://api.skilla.ru/mango/getList?date_start=${date_start}&date_end=${date_end}&in_out=${in_out}`, { authorization: 'testtoken' })
    const token = "testtoken"

    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            $.ajax({
                url: `https://api.skilla.ru/mango/getList?date_start=${date_start}&date_end=${date_end}&in_out=${in_out}`,
                type: 'POST',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer testtoken');
                },
                data: {},
                success: function (response) { 
                    console.log('Ajax sucsess')
                    let jsonStr = JSON.stringify(response)
                    let jsonData = JSON.parse(jsonStr)
                    console.log(jsonData)
                },
                error: function () {
                    console.log('Ajax error')
                 },
                });



        } catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false))
            setTimeout( () => {
                dispatch(setFetchError(false))
            }, 2000)
        }
    }
}

const headerParams = {'Authorization':'bearer token'};
async function postRequest(date_start, date_end, in_out) {
    console.log('try post request');
    let full_response = null;
    $.ajax({
        type: "POST",
        headers: headerParams,
        data: [],
        url: `https://api.skilla.ru/mango/getList?date_start=${date_start}&date_end=${date_end}&in_out=${in_out}`,
        async: true,
        success: function (response) {
            console.log('Ajax sucsess')
            let jsonStr = JSON.stringify(response)
            let jsonData = JSON.parse(jsonStr)
            full_response = jsonData
            console.log(jsonData)
        },
        failure: function (response) {
            console.log('Ajax fail')
            //let text = "failure:" + response
        },
        error: function (response) {
            console.log('Ajax error')
            //let text = "error:" + response
        }
    });
    //console.log('Ajax is OK -> return');
    return full_response;
}

async function testRequest(){
    $.ajax({
        url: 'https://api.sandbox.slcedu.org/api/rest/v1/students/test1',
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer t-7614f875-8423-4f20-a674-d7cf3096290e');
        },
        data: {},
        success: function () { },
        error: function () { },
        });
}