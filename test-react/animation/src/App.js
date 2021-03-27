import React, { Component } from 'react'
import { CSSTransition, Transition } from 'react-transition-group';
import './index.css';
import Nav from './Nav/Nav'
import Button from './Button/Button'
import Container from './Container/Container'
import Slider from './Slider/Slider'
import AnimationStyles from './Animation/AnimationApp.module.css';
import CreateRandomItem from './RandomItem/CreateRandomItem/CreateRandomItem'

export default class App extends Component {
  state = {
    visible: false,
    showButton: true
  }

  onToggle = () => {
    this.setState(state => ({visible: !state.visible, showButton: !state.showButton}))
  }

  render() {
    const {visible, showButton} = this.state

    return (
      <div className = {'container'}>
          <Nav/>
          <Slider/>
          {showButton && <Button onToggle = {this.onToggle} label = {visible === true ? 'show' : 'hide'}/>}
          <CSSTransition
          classNames = {AnimationStyles}
          in = {visible}
          timeout = {500}
          unmountOnExit>
            <Container onToggle = {this.onToggle} label = {'show button'}/>
          </CSSTransition>
          <CreateRandomItem />
      </div>
    )
  }
}

