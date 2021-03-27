import React from 'react'
import styles from './GetRandomItem.module.css'

export default function GetRandomItem({getRandomText, deleteAll}) {
    return (
        <div>
            <button className = {styles.btn} onClick={getRandomText}>get random text</button>
            <button className = {styles.btn} onClick={deleteAll}>delete all have item</button>
        </div>
    )
}
