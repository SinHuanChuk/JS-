import React from 'react';
import styles from './Transactions.module.css'

const TransactionHistory = ({items}) => (
    <table className={styles.transactionHistory}>
        <thead className = {styles.thead}>
            <tr>
                <th className = {styles.th}>Type</th>
                <th className = {styles.th}>Amount</th>
                <th className = {styles.th}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(el => (
                <tr key = {el.id} className = {styles.tr}>
                    <td className = {styles.td}>{el.type}</td>
                    <td className = {styles.td}>{el.amount}</td>
                    <td className = {styles.td}>{el.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default TransactionHistory