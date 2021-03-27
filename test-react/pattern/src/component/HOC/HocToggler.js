import { Component } from 'react'

export default class HocToggler extends Component {
    state = {
        bool: false,
        isOpen: ''
    }

    onToggle = () => {
        const {bool} = this.state
        
        if (bool === false) {
            this.setState({
                bool: true,
                isOpen: 'isOpen'
            })
        } else if (bool === true) {
            this.setState({
                bool: false,
                isOpen: 'isClosed'
            })
        }
    }

    render() {
        const {bool, isOpen} = this.state
        return this.props.children({
            bool,
            isOpen,
            onToggle: this.onToggle
        })
    }
}

export {HocToggler}
