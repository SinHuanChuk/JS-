import React, { Component } from 'react';
import '../styles/Nav.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Nav extends Component {

  render() {
      return (
        <nav className = "navigation">
            <Link to = '/'>
              <span className = 'text'>About</span>
            </Link>
            <Link to = '/History'>
              <span className = 'text'>History</span>
            </Link>
            <Link to = '/Wonderland'>
              <span className = 'text'>Wonderland</span>
            </Link>
        </nav>
      )
  }
}