import React, {Component} from 'react';

export default class Vod extends Component {

    state = {
        value: ''
    }

    handelChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    
    render() {
        const {value} = this.state

       return (
           <div>
               <input onChange = {this.handelChange}></input>
               <span>{value}</span>
           </div>
       )
    }  
}