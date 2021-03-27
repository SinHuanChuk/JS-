import hocCounter from '../HOC/HocCounter'
import React from 'react'

function FirstCounter({decrement, increment, count}) {
    return (
        <div>
            <button onClick = {decrement}>decrement</button>
            <span>{count}</span>
            <button onClick = {increment}>increment</button>
        </div>
    )
}

export default hocCounter(FirstCounter)
