import React, { Component } from 'react';

export default class Btn extends Component {
    handleClick = ({target}) => {
        this.props.handleClick(target)
    }

    render() {
        return(
            <div>
                <h3>please leave feedback</h3>
                <button type = 'button' name = 'Good' value = {this.props.Good} onClick = {this.handleClick}>Good</button>
                <button type = 'button' name = 'Neutral' value = {this.props.Neutral} onClick = {this.handleClick}>Neutral</button>
                <button type = 'button' name = 'Bad' value = {this.props.Bad} onClick = {this.handleClick}>Bad</button>
            </div>
        )
    }
}