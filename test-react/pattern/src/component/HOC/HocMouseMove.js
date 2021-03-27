import React from 'react'

function hocMouseMove(Component) {
    return class HocMouseMove extends React.Component {
        state = {
            isFocused: 'false'
        }

        focusedOnObj = () => {
            this.setState({
                isFocused: 'true'
            })
        }

        unFocusedOnObj = () => {
            this.setState({
                isFocused: 'false'
            })
        }

        showSomething = () => {
            alert('VOVA')
        }

        render() {
            const {isFocused} = this.state

            return(
                <Component showSomething = {this.showSomething} state = {isFocused} focusedOnObj = {this.focusedOnObj} unFocusedOnObj = {this.unFocusedOnObj}/>
            )
        }
    }
}

export {hocMouseMove}