import React, { Component } from 'react';
import LogicAct from './components/logicAct'
import Btn from './components/Btn'

export default class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0
  }
  
  handleClick = (elem) => {
    const {name, value} = elem

    this.setState({
       [name]: Number(value) + 1
    })
  }

  render() {

    return(
    <div>
      <Btn handleClick = {this.handleClick} Good = {this.state.Good} Neutral = {this.state.Neutral} Bad = {this.state.Bad}/>
      <LogicAct props = {this.state} />
    </div> 
    )
  }
}