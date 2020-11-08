import React, { Component } from 'react';

export default class LogicAct extends Component {

    render() {
        const {Good, Neutral, Bad} = this.props.props

        return (
            <div>
                <h3>Statistics</h3>
                    {Good > 0 || Neutral > 0 || Bad > 0 ? (
                    <div>
                        <span>Good: {Good}</span>
                        <br/>
                        <span>Neutral: {Neutral}</span>
                        <br/>
                        <span>Bad: {Bad}</span>
                        <br/>
                        <span>Total: {Good + Neutral + Bad}</span>
                        <br/>
                        <span> Positive feedback: {Math.round(Good / (Good + Bad + Neutral) * 100)}%</span>
                    </div>
                    ) : (
                    <span>we dont have feedback</span>
                    )}
            </div>
        )
    }
}