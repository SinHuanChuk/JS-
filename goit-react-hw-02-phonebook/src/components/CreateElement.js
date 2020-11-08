import React, { Component } from 'react';

export default class CreateElement extends Component {


    handleChangeName = (e) => {
        e.preventDefault()

        this.props.handleChangeName(e.target.value)
    }


    handleChangeNumber = (e) => {
        e.preventDefault()

        this.props.handleChangeNumber(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.handleSubmit(this.props.name, this.props.number)
    }


    render() {
        return(
            <div>
                <h3>Phonebook</h3>
                <form onSubmit = {this.handleSubmit}>
                    <input type = 'text' required  placeholder = 'enter your name' onChange = {this.handleChangeName} value = {this.props.name}></input>
                    <br/>
                    <input type = 'text' required  placeholder = 'enter your number' onChange = {this.handleChangeNumber} value = {this.props.number}></input>
                    <br/>
                    <button type = 'submit'>Add app</button>
                </form>
            </div>
        )
    }
}