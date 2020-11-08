import React from 'react';
import styles from './Friends.module.css'

const Friends = ({friends}) => {

    const elements = friends.map(el => {
        const {avatar, name, isOnline, id} = el

        const divClass = isOnline ? styles.active : styles.disabled;

        return(
            <li key = {id} className = {styles.item}>
                <div className = {divClass}></div>
                <img className={styles.avatar} src={avatar} alt="" width="96" />
                <p className={styles.name}>{name}</p>
            </li>
        )
    })

    return(
        <ul className = {styles.list}>
            {elements}
        </ul>
    )
}

export default Friends