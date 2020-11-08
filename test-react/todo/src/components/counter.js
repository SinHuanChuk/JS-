import React, {Component} from 'react';

export default class Counter extends Component {

    state = {
        value: 0
    }

    onButtonIncrement = () => {
       this.setState((prevState) => {
            return({value: prevState.value + 1})
       }) 
    }

    onButtondecrement = () => {
        this.setState((prevState) => {
            return({value: prevState.value - 1})
       }) 
    }

    render() {
        const { value } = this.state

        return(
            <div>
                <button onClick = {this.onButtonIncrement} type = 'button'>increment</button>
                <button onClick = {this.onButtondecrement} type = 'button'>decrement</button>
                <span>{value}</span>
            </div>
        )
    }
}