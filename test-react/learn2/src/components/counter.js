import React, {Component} from 'react';

export default class Counter extends Component {
    
    state = {
        isOpen: ''
    }

    Yes = () => {
        this.setState({
            isOpen: 'Yes'
        })
    }

    No = () => {
        this.setState({
            isOpen: 'No'
        })
    }

    render() {
        const {isOpen} = this.state

        return(
            <div>
                <span>{isOpen}</span>
                <button onClick = {this.Yes}>tag YES</button>
                <button onClick = {this.No}>tag NO</button>
            </div>
        )
    }
}