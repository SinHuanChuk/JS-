import React from 'react'
import styles from '../Button/Button.module.css'

export default function Button({onToggle, label}) {
    return (
        <button className={styles.btn} onClick = {onToggle}>{label}</button>
    )
}
