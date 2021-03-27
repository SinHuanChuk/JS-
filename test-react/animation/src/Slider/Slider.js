import axios from 'axios'
import React, { Component } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styles from './Slider.module.css'

export default class Slider extends Component {
    state = {
        arr: [],
        count: 0
    }

    componentDidMount() {
        axios.get('https://pixabay.com/api/?key=19312549-a0ff2c4a175ff1a1853f83c49&q=cat')
        .then(({data}) => {
            this.setState({
                arr: [...data.hits]
            })
        })
    }

    prevValue = () => {
        if(this.state.count <= 0) {
            this.setState({
                count: 0
            })
        } else {
            this.setState((prevState) => ({
                count: prevState.count - 1
            }))
        }
    }

    nextValue = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        const { arr, count } = this.state

        return (
            <div className = {styles.container}>

                <div className = {styles.wrapper}>
                <button className = {styles.btn} onClick = {this.prevValue}>prev</button>
                <button className = {styles.btn} onClick = {this.nextValue}>next</button>
                </div>

                {arr.length > 0 &&
                <div>
                    <SwitchTransition>
                        <CSSTransition 
                        key = {count} 
                        timeout = {500} 
                        classNames = {'animationmysemen'}>
                            <img src = {arr[count].largeImageURL} className = {styles.image} width = {500} id = {count}/>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
                }
            </div>
        )
    }
}
