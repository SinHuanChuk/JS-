import React from 'react'
import actions from '../../redux/actions/counterActions'
import { connect } from 'react-redux'

const Counter = ({counterValue, increment, decrement}) => {
    return (
        <div>
            <button onClick = {decrement}>decrement</button>
            <button onClick = {increment}>increment</button>
            <h1>count: {counterValue}</h1>
        </div>
    )
}


const mapStateToProps = state => {
    return {
      counterValue: state.counterValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(actions.incrementAction(2)),
        decrement: () => dispatch(actions.decrementAction(1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)