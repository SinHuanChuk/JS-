import React, { Component } from 'react'
import RenderRandomItem from '../RenderRandomItem/RenderRandomItem'
import GetRandomItem from '../GetRandomItem/GetRandomItem'
import { CSSTransition, Transition } from 'react-transition-group';
import './CreateRandomItem.css'
import { loremIpsum } from "lorem-ipsum";

const uniqid = require('uniqid')

export default class CreateRandomItem extends Component {
    
    state = {
        arr: [{
            id: uniqid(),
            name: loremIpsum()
        },
        {
            id: uniqid(),
            name: loremIpsum()
        },
        {
            id: uniqid(),
            name: loremIpsum()
        },
        {
            id: uniqid(),
            name: loremIpsum()
        }]
    }

    getRandomText = () => {
        const item = loremIpsum()

        this.setState(prevState => ({
            arr: [{id: uniqid(), name: item}, ...prevState.arr]
        }))
    }

    deleteItem = (value) => {
        const { arr } = this.state

        arr.map((el, index, arr) => {
            if(el.id === value) {
                arr.splice(index, 1)
            }
        })

        this.setState({
            arr: [...arr]
        })
    }

    deleteAll = () => {
        this.setState({
            arr: []
        })
    }

    render() {
        const { arr } = this.state

        return (
            <div className = {"container"}>
                <GetRandomItem getRandomText = {this.getRandomText} deleteAll = {this.deleteAll}/>
                <CSSTransition
                in = {true}
                appear = {true}
                timeout = {500}
                classNames = {'cum'}
                unmountOnExit>
                    <RenderRandomItem deleteItem = {this.deleteItem} arr = {arr}/>
                </CSSTransition>
            </div>
        )
    }
}