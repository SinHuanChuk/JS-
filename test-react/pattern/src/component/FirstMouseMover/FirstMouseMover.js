import React from 'react'
import { hocMouseMove }from '../HOC/HocMouseMove'

function FirstMouseMover({state, focusedOnObj, unFocusedOnObj}) {
    return (
        <div onMouseEnter = {focusedOnObj} onMouseLeave = {unFocusedOnObj}>
            <h1>{state}</h1>
        </div>
    )
}

export default hocMouseMove(FirstMouseMover)
