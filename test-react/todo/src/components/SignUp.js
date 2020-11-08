import React, {Component} from 'react';

export default class SignUp extends Component {
    state = {
        email: '',
        name: '',
        password: '',
        agree: false,
        Gender: ''
    }

    onChangeMethoid = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitMethoid = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    onCheckedMethod = (e) => {
        this.setState({
            agree: e.target.checked
        })
    }


    render() {
        const {name, email, password, agree, Gender} = this.state


        return(
            <div>
                <form onSubmit = {this.onSubmitMethoid}>
                    <input
                    type = 'text'
                    name = 'email'
                    value = {email} 
                    onChange = {this.onChangeMethoid} 
                    placeholder = 'enter'>                       
                    </input>
                    <input
                    type = 'text'
                    name = "name"
                    value = {name} 
                    onChange = {this.onChangeMethoid} 
                    placeholder = 'enter'>                       
                    </input>
                    <input
                    type = 'password'
                    name = 'password'
                    value = {password}
                    onChange = {this.onChangeMethoid}
                    placeholder = 'password'>
                    </input>
                    <div>
                        <label htmlFor = '1'>You agreeed with this</label>
                        <input
                        type = "checkbox"
                        id = '1'
                        checked = {agree}
                        onChange = {this.onCheckedMethod}></input>
                    </div>
                    <div>
                        <h3>Gender</h3>
                        <div>
                            <label>Male</label>
                            <input type = 'radio' name = "Gender" value = 'Male' onChange = {this.onChangeMethoid}></input>
                        </div>
                        <div>
                            <label>Female</label>
                            <input type = 'radio' name = "Gender" value = 'Female' onChange = {this.onChangeMethoid}></input>
                        </div>
                    </div>
                    <button type = 'submit'>submit</button>
                </form>
            </div>
        )
    }
}