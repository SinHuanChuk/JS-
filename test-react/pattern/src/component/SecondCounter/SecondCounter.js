import hocCounter from '../HOC/HocCounter'
import React from 'react'

function SecondCounter({decrement, increment, count}) {
    return (
        <div>
            <button onClick = {decrement}>decrement</button>
            <span>{count}</span>
            <button onClick = {increment}>increment</button>
        </div>
    )
}

export default hocCounter(SecondCounter)