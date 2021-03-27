import {Component} from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './RenderRandomItem.css'

export default class RenderRandomItem extends Component {

    deleteItem = (e) => {
        const target = e.target.closest('div')
        this.props.deleteItem(target.id)
    }
    
    render() {
        const {arr} = this.props

        return (
            <TransitionGroup className = {'container'}>
                {arr.map(el => {
                    return (
                        <CSSTransition
                        timeout = {500}
                        key = {el.id}
                        classNames = {'fade-item'}>
                            <div className = {'wrapper'} id = {el.id}>
                                <p className = {'text'}>
                                    {el.name}
                                </p>
                                <button onClick = {this.deleteItem} className = {'btn'}>delete this Item</button>
                            </div>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        )
    }
}

