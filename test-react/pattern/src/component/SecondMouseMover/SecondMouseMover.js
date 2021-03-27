import React from 'react'
import { hocMouseMove } from '../HOC/HocMouseMove'

function SecondMouseMover({state, focusedOnObj, unFocusedOnObj, showSomething}) {

    return (
        <div onMouseEnter = {focusedOnObj} onMouseLeave = {unFocusedOnObj} onClick = {showSomething}>
            <h1>{state}</h1>
        </div>
    )
}

export default hocMouseMove(SecondMouseMover)