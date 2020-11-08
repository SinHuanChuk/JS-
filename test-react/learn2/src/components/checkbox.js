import React, {Component} from 'react';

export default class Checkbox extends Component {

    state = {
        agreed: false
    }

    handelSubmit = (e) => {
        const {checked} = e.target

        this.setState({
            agreed: checked
        })
    }

    render() {
        const {agreed} = this.state

        return(
            <div>
                <input type = 'checkbox' onChange = {this.handelSubmit}></input>                           
                <button disabled = {!agreed}>logining</button>
            </div>
        )
    }
}