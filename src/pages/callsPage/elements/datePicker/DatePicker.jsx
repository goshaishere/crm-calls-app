import React, { useState, useEffect } from 'react'
//import styles from '../../CallsPage.module.scss'
import styles from './DatePicker.module.scss'


import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ColorButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#005FF8',
  },
}));

const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#005FF8',
  },
}));

const StyledArrowForwardIosIcon = styled(ArrowForwardIosIcon)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#005FF8',
  },
}));



const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
    color:
      '#899CB1',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },

  },
  '& .MuiMenuItem-root': {
    '&:hover': {
      color: "#122945",
      background: 'rgba(0, 95, 248, 0.13)',
    },
  },
}));






export const DatePicker = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen, setIsOpen] = useState(false)

  const [days, setDays] = useState(3)

  const dayText = `${days} Дня`
  const week = 'Неделя'
  const month = 'Месяц'
  const year = 'Год'
  const manualInput = 'Указать даты'


  const [buttonText, setButtonText] = useState(dayText)

  useEffect(() => {
}, [days, buttonText])

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false)
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(!isOpen)
  };

  const dayClick = (event) => {
    setButtonText(dayText)
    props.setDate(days)
    handleClose()
  }

  const monthClick = (event) => {
    setButtonText(month)
    props.setDate(30)
    handleClose()
  }

  const manualInputClick = (event) => {
    setButtonText(manualInput)
    handleClose()
  }

  const yearClick = (event) => {
    setButtonText(year)
    props.setDate(365)
    handleClose()
  }

  const weekClick = (event) => {
    setButtonText(week)
    props.setDate(7)
    handleClose()
  }


  const increment = () => {
    setDays(days + 1)
    setButtonText(`${days + 1} Дня`)

  }

  const decrement = () => {
    setDays(days - 1)
    setButtonText(`${days - 1} Дня`)
  }


  return (
    <div className={styles.datepicker}>
      <StyledArrowBackIosIcon   onClick={decrement}      sx={{
          color: '#5E7793', fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '148%',
          textTransform: 'none',

        }} />
      <ColorButton
        id="demo-customized-button"
        aria-haspopup="true"
        variant="text"
        disableElevation
        onClick={handleClick}
        sx={{
          color: '#5E7793', fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '148%',
          textTransform: 'none',

        }}
      >
        {buttonText}
      </ColorButton>
      <StyledArrowForwardIosIcon  onClick={increment}       sx={{
          color: '#5E7793', fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '148%',
          textTransform: 'none',

        }}/>
      <StyledMenu

        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
      >
        <MenuItem onClick={dayClick} disableRipple>{dayText}</MenuItem>
        <MenuItem onClick={weekClick} disableRipple>{week}</MenuItem>
        <MenuItem onClick={monthClick} disableRipple>{month}</MenuItem>
        <MenuItem onClick={yearClick} disableRipple>{year}</MenuItem>
        <MenuItem onClick={manualInputClick} disableRipple>{manualInput}</MenuItem>
      </StyledMenu>

    </div>
  )
}
