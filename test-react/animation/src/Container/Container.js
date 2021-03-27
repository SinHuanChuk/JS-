import React from 'react'
import Button from '../Button/Button'
import containerStyles from '../Container/Container.module.css'

export default function Container({onToggle, label}) {
    return (
        <div className = {containerStyles.container}>
            <span className = {containerStyles.content}>Some Text</span>
            <br/>
            <Button onToggle = {onToggle} label = {label}/>
        </div>
    )
}
