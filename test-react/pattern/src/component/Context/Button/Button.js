import React, { createContext } from 'react'

const huex = createContext()

function Button({label}) {
    return (
        <huex.Consumer>
            {(value) => (
                <div>
                    <button>{label} {value}</button>
                </div>
            )}
        </huex.Consumer>
    )
}

export {huex, Button}