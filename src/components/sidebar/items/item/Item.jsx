import React from 'react'
import styles from './Item.module.scss'
import { Link, useMatch } from 'react-router-dom'
import TimelineIcon from '@mui/icons-material/Timeline';

export const ItemLink = (props) => {
    const match = useMatch(props.to)
    return (

        <Link to={props.to} style={{
            color: match ? '#FFFFFF' : '#D8E4FB52',
            height: '52px',
            textDecoration: "none",
            width: "240px",
            height: "100%"
        }}>
            <div style={{
                backgroundColor: match ? 'rgba(216, 228, 251, 0.32)' : '#091336',
                width: "240px",
                height: "52px"
            }}>

            <div className={styles.icon}>{props.icon()}</div>
            <div className={styles.text}>{props.text}</div>
            </div>
        </Link>








    )
}



