import React from 'react'
import { huex } from '../Button/Button'
import ToolBar from '../ToolBar/Toolbar'

function Context() {
    return (
        <huex.Provider value = 'light'>
            <div>
                <ToolBar/>
            </div>
        </huex.Provider>
    )
}

export default Context