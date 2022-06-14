import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './CallsList.module.scss'
import { Hat } from './hat/Hat'
import Avatar from '@mui/material/Avatar';
import {ToolBox} from './tools/ToolBox'


const timeFixer = (num) => {
  let result = null
  if (num < 10) {
    result = '0' + num
  } else {
    return num
  }
  return result
}

const NodeTime = (props) => {
  let time = props.time
  let b = Math.floor(time / 60)
  let c = time % 60
  if (b < 10) {
    b = '0' + b
  }
  if (c < 10) {
    c = '0' + c
  }
  let string = b + ':' + c
  return string
}

const PersonAvatar = (props) => {
  const avatarData = props.avatar
  return <Avatar sx={{width: '32px', height: '32px'}} src={avatarData} /> 
  //return <Avatar /> 
}

const Time = (props) => {
  const dateTime = new Date(props.dateTime)
  //let string = timeFixer(dateTime.getHours()) + ':' + timeFixer(dateTime.getMinutes()) + ':' + timeFixer(dateTime.getSeconds())
  let string = timeFixer(dateTime.getHours()) + ':' + timeFixer(dateTime.getMinutes())
  return <div>{string}</div>
}








// помошники InOut
const timeChecker = (time) => {
  if (time === 0) {
    return true
  }
  return false
}
//#EA1A4F
const InOut = (props) => {
  // ноль значит правдa значит красный
  const isZero = timeChecker(props.time)
  //const isZero = false
return  props.data ? 
    (<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5217 1.17704L11.3447 0L1.66957 9.67513V4.17391H0V12.5217H8.34783V10.8522H2.84661L12.5217 1.17704Z" fill= {isZero ? "#EA1A4F" : "#005FF8"}/>
</svg>) : 

(<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-1.04904e-05 11.3447L1.17703 12.5217L10.8522 2.8466L10.8522 8.34782H12.5217L12.5217 -1.04904e-05L4.1739 -1.04904e-05V1.66955L9.67512 1.66955L-1.04904e-05 11.3447Z" fill= {isZero ? "#EA1A4F" :"#28A879"}/>
</svg>
)
}










const Phone = (props) => {
  const codeCountry = '+' + props.phone.slice(0, 1)
  const codeProvider =  ' (' + props.phone.slice(1, 4) + ') '
  const number1 = props.phone.slice(4, 7)
  const number2 =  '-' + props.phone.slice(7, 9) + '-'
  const number3 = props.phone.slice(9, 11)
  const number = number1 + number2 + number3
  const normalizedPhone =  codeCountry + codeProvider + number
  return <div>{normalizedPhone}</div>
}









export const CallsList = (props) => {
  const dispatch = useDispatch()
  const calls = useSelector(state => state.response.results)
  console.log(calls)
  const strings = ['Тип', "Время", "Сотрудник", "Звонок", "Источник", "Оценка", "Длительность"]

  return (
    <div> 
    <ToolBox setCallType={props.setCallType}/>

    <div className={styles.callslist}>
     

      <div className={styles.table} border="1s">

            <div className={styles.table_header}>
                    <div className={styles.in_out_h}>Тип</div>
                    <div className={styles.date_h}>Время</div>
                    <div className={styles.person_avatar_h}>Сотрудник</div>
                    <div className={styles.phone_h}>Звонок</div>
                    <div className={styles.source_h}>Источник</div>
                    <div className={styles.rating_h}>Оценка</div>
                    <div className={styles.time_h}>Длительность</div>
            </div>

            {
                 calls.map((node, index) => {
                   return  <div className={styles.box}>
                    <div className={styles.raw}>
                                  <div className={styles.in_out}>  <InOut data={node.in_out} time={node.time}/>   </div>
                                  <div className={styles.date}>  <Time dateTime={node.date} />   </div>
                                  <div className={styles.person_avatar}>  <PersonAvatar avatar={node.person_avatar} />  </div>
                                  <div className={styles.phone}> <Phone phone={node.partner_data.phone} />   </div>
                                  <div className={styles.source}>{node.source}</div>
                                  <div className={styles.rating}></div>
                                  <div className={styles.time}>  <NodeTime time={node.time} />   </div>  
                            </div>
                      </div>
                    }
                 )
            }
       </div>







    </div>

    </div>
  )
}