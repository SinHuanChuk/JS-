import React, {Component} from 'react';

export default class MyClassComponent extends Component {

    handelClick = (e) => {
        console.log(e.target)
    }


    render() {

        return <button className = 'btn' onClick = {this.handelClick}>Click Me!</button>
    }
  }