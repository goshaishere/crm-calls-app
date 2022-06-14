import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './CallsList.module.scss'
import { Hat } from './hat/Hat'
import Avatar from '@mui/material/Avatar';
import { ToolBox } from './tools/ToolBox'

import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

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
  return <div className={styles.nodetime}>{string}</div>
}

const NodeTimeAlter = (props) => {
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
  return <div>{string}</div>
}

const PersonAvatar = (props) => {
  const avatarData = props.avatar
  return <Avatar sx={{ width: '32px', height: '32px' }} src={avatarData} />
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
  return props.data ?
    (<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5217 1.17704L11.3447 0L1.66957 9.67513V4.17391H0V12.5217H8.34783V10.8522H2.84661L12.5217 1.17704Z" fill={isZero ? "#EA1A4F" : "#005FF8"} />
    </svg>) :

    (<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-1.04904e-05 11.3447L1.17703 12.5217L10.8522 2.8466L10.8522 8.34782H12.5217L12.5217 -1.04904e-05L4.1739 -1.04904e-05V1.66955L9.67512 1.66955L-1.04904e-05 11.3447Z" fill={isZero ? "#EA1A4F" : "#28A879"} />
    </svg>
    )
}










const Phone = (props) => {
  const codeCountry = '+' + props.phone.slice(0, 1)
  const codeProvider = ' (' + props.phone.slice(1, 4) + ') '
  const number1 = props.phone.slice(4, 7)
  const number2 = '-' + props.phone.slice(7, 9) + '-'
  const number3 = props.phone.slice(9, 11)
  const number = number1 + number2 + number3
  const normalizedPhone = codeCountry + codeProvider + number
  return <div >
      <div style={{width: '350px', height: '18px'}}>{normalizedPhone}</div>
      <div style={{ fontFamily: 'SF Pro Display', fontStyle: 'normal', fontSeight: '400', fontSize: '15px', lineHeight: '140%', color: '#5E7793', width: '350px', height: '18px'}}>{props.name}</div>
  </div>
}


const Source = (props) => {
  return <div style={{ fontFamily: 'SF Pro Display', fontStyle: 'normal', fontSeight: '400', fontSize: '15px', lineHeight: '140%', color: '#5E7793' }}> {props.source}</div>
}


const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#0000F4' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto #0000F4',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#0000F4' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? '#0000F4' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  
  backgroundColor: '#0000F4',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#0000F4',
  },
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        color: '#0000F4',
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

const AudioPlayer = (props) => {
  return <div className={styles.audioplayer}>
    <NodeTimeAlter time={props.time}/>
    <p>плеер</p>
    </div>

}



export const CallsList = (props) => {
  const dispatch = useDispatch()
  const calls = useSelector(state => state.response.results)
  console.log(calls)
  const strings = ['Тип', "Время", "Сотрудник", "Звонок", "Источник", "Оценка", "Длительность"]

  return (
    <div>
      <ToolBox setCallType={props.setCallType} />

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
              return <div className={styles.box}>
                <div className={styles.raw}>
                  <div className={styles.checkbox}> <BpCheckbox/> </div>
                  <div className={styles.in_out}>  <InOut data={node.in_out} time={node.time} />   </div>
                  <div className={styles.date}>  <Time dateTime={node.date} />   </div>
                  <div className={styles.person_avatar}>  <PersonAvatar avatar={node.person_avatar} />  </div>
                  <div className={styles.phone}> <Phone phone={node.partner_data.phone} name={node.partner_data.name} />   </div>
                  <div className={styles.source} ><Source source={node.source} /></div>
                  <div className={styles.rating}></div>
                  
                  <div className={styles.time}>  <NodeTime time={node.time}/>  <AudioPlayer time={node.time} />    </div>
                  
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