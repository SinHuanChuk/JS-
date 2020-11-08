import React from 'react';
import styles from './Statistic.module.css'

const Statistic = ({title, stat}) => (
    <div className = {styles.container}>
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>

            <ul className={styles.list}>
                {stat.map(el => (
                <li key = {el.id} className = {styles.item}>
                    <span className = {styles.label}>{el.label}</span>
                    <span className = 'percentage'>{el.percentage}</span>
                </li>
                ))}
            </ul>
        </section>
    </div>
)

export default Statistic