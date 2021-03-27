import React, { Component } from 'react'
import styles from './Nav.module.css'
import { CSSTransition, Transition } from 'react-transition-group';
import '../index.css';
import Img from './Img'

export default class Nav extends Component {
    render() {
        return (
        <CSSTransition
        in = {true}
        appear = {true}
        timeout = {600}
        classNames = {'Nav'}
        unmountOnExit>
                <div className = {styles.container}>
                    <div className = {styles.list}>
                        <Img />
                        <div><span className = {styles.text}>home</span></div>
                        <div><span className = {styles.text}>comments</span></div>
                        <div><span className = {styles.text}>info</span></div>
                    </div>
                </div>
        </CSSTransition>
        )
    }
}
