import React, { Component } from 'react';
import '../styles/Wonderland.css';
import {Link} from 'react-router-dom';
import axios from 'axios'

export default class App extends Component {

  state = {
    mass: [],
    url: this.props.match.url
  }
 componentDidMount() {
   axios('https://fortnite-api.theapinetwork.com/store/get')
   .then(({data}) => {
     this.setState({
       mass: data.data
     })
   })
 }

  render() {
    const {mass, url} = this.state
      return (
        <ul className = 'list'>
          {mass.map(el => {
            return (
              <li className = 'items' key = {`${el.itemId}`}>
                <Link to = {`${url}/${el.itemId}`}>
                  <span className = 'description'>
                    name: {el.item.name}
                  </span>
                </Link>
              </li>
              )
          })}
        </ul>
      )
  }
}