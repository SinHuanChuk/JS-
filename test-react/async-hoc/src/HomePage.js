import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class HomePage extends Component {

    render() {
        return(
            <div>
                <h1>home page</h1>
                <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvu5jHAFiTRoHYurlhg4WVSekrA1X0ZwXbTLlvKsNmh_os_mKd'></img>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
        )
    }
}