import React from 'react'
import {ItemLink} from './item/Item'
//import styles from './Items.module.scss'
import TimelineIcon from '@mui/icons-material/Timeline';
import CallIcon from '@mui/icons-material/Call';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import CheckIcon from '@mui/icons-material/Check';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const tlIcon = () => {
  return <TimelineIcon />
}

const CckIcon = () => {
  return <CheckIcon />
}

const messageIcon = () => {
  return <EmailOutlinedIcon />
}

const callIcon = () => {
  return <CallIcon />
}

const contraIcon = () => {
  return <GroupOutlinedIcon />
}

const docIcon = () => {
  return <InsertDriveFileOutlinedIcon />
}

const executorIcon = () => {
  return <PermIdentityOutlinedIcon />
}

const reportIcon = () => {
  return <WorkOutlineOutlinedIcon />
}

const settingsIcon = () => {
  return <SettingsOutlinedIcon />
}

const awIcon = () => {
  return <AutoAwesomeIcon />
}



export const Items = () => {  
  return (
    <div>
      <ItemLink text='Итоги' icon={tlIcon} to='/results'></ItemLink>
      <ItemLink text='Заказы' icon={CckIcon} to='/orders'></ItemLink>
      <ItemLink text='Сообщения' icon={messageIcon} to='/messages'></ItemLink>
      <ItemLink text='Звонки' icon={callIcon} to='/calls'></ItemLink>
      <ItemLink text='Контрагенты' icon={contraIcon} to='/partners'></ItemLink>
      <ItemLink text='Документы' icon={docIcon} to='/documents'></ItemLink>
      <ItemLink text='Исполнители' icon={executorIcon} to='/executors'></ItemLink>
      <ItemLink text='Отчеты' icon={reportIcon} to='/reports'></ItemLink>
      <ItemLink text='База Знаний' icon={awIcon} to='/knowledge'></ItemLink>
      <ItemLink text='Настройки' icon={settingsIcon} to='/settings'></ItemLink>
    </div>   
  )
}
