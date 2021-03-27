import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Nav extends Component {

    render() {
        return(
            <ul className = 'nav'>
                <Link to = '/'><li className = 'item'><h2>Show our component</h2></li></Link>
                <Link to = 'HomePage'><li className = 'item'><h2>Home page</h2></li></Link>
                <Link to = 'Posts'><li className = 'item'><h2>Posts</h2></li></Link>
                <Link to = 'Profile'><li className = 'item'><h2>Profile</h2></li></Link>
            </ul>
        )
    }
}