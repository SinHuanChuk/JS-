import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Click extends Component {
    render() {
        return(
            <Link to = '/ShowOurComponent'><button>Click me to show our component</button></Link>
        )
    }
}