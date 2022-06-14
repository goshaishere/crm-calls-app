import React, {useState} from 'react'
//import styles from './TypeFilter.module.scss'

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const ColorButton = styled(Button)(({ theme }) => ({
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


export const ErrorFilter = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpen, setIsOpen] = useState(false)
    //const open = Boolean(anchorEl);
    const defaultText = 'Все ошибки'
    const greeting = 'Приветствие'
    const name = 'Имя'
    const price = 'Цена'
    const sale = 'Скидка'
    const preorder = 'Предзаказ'
    const gratitude = 'Благодарность'
    const stopWords = 'Стоп слова'

    const [buttonText, setButtonText] = useState(defaultText)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setIsOpen(!isOpen)
    };

    const handleClose = () => {
        setAnchorEl(null);
        setIsOpen(false)
    };

    const greetingClick = (event) => {
        setButtonText(greeting)
        handleClose()
    }

    const nameClick = (event) => {
        setButtonText(name)
        handleClose()
    }


    const priceClick = (event) => {
        setButtonText(price)
        handleClose()
    }

    const preorderClick = (event) => {
        setButtonText(preorder)
        handleClose()
    }

    const gratitudeClick = (event) => {
        setButtonText(gratitude)
        handleClose()
    }

    const saleClick = (event) => {
        setButtonText(sale)
        handleClose()
    }

    const stopWordsClick = (event) => {
        setButtonText(stopWords)
        handleClose()
    }




    return (
        <div><ColorButton
            id="demo-customized-button"
            aria-controls={isOpen ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? 'true' : undefined}
            variant="text"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
                color: '#5E7793', fontFamily: 'SF Pro Display',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '148%',
                textTransform: 'none'
            }}
        >
           {buttonText}
        </ColorButton>
            <StyledMenu

                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
            >
                <MenuItem onClick={greetingClick} disableRipple>{greeting}</MenuItem>
                <MenuItem onClick={nameClick} disableRipple>{name}</MenuItem>
                <MenuItem onClick={priceClick} disableRipple>{price}</MenuItem>
                <MenuItem onClick={preorderClick} disableRipple>{preorder}</MenuItem>
                <MenuItem onClick={gratitudeClick} disableRipple>{gratitude}</MenuItem>
                <MenuItem onClick={saleClick} disableRipple>{sale}</MenuItem>
                <MenuItem onClick={stopWordsClick} disableRipple>{stopWords}</MenuItem>

            </StyledMenu></div>
    )
}
