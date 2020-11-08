import React from 'react';
import styles from './Profile.module.css'

const Profile = ({name, tag, location, avatar, stats}) => (
    <div className = {styles.wrapperer}>
        <div className = {styles.wrapper}>
            <div className = {styles.container}>
                <img
                src={avatar}
                alt="user avatar"
                className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <ul className = {styles.list}>
                <li className = {styles.item}>
                    <span className={styles.label}>followers</span>
                    <span className={styles.quantity}>{stats.followers}</span>
                </li>
                <li className = {styles.item}>
                    <span className={styles.label}>views</span>
                    <span className={styles.quantity}>{stats.views}</span>
                </li>
                <li className = {styles.item}>
                    <span className={styles.label}>likes</span>
                    <span className={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>  
    </div>
)

export default Profile