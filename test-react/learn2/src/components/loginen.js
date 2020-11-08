import React, {Component} from 'react';
import shortid from 'shortid'

export default class Login extends Component {

    state = {
        login: ''
    }

    handelChange = (e) => {
        this.setState({
            login: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const {login} = this.state

        return(
            <div id = {shortid.generate()}>
                <h3 id = {shortid.generate()}>Login Name</h3>
                <form id = {shortid.generate()} onSubmit = {this.handelSubmit}>
                    <input id = {shortid.generate()} 
                    type = 'text' 
                    onChange = {this.handelChange}
                    placeholder = 'enter your login'></input>

                    <button id = {shortid.generate()} type = 'submit'>sign up as {login}</button>
                </form>
            </div>
        )
    }
}