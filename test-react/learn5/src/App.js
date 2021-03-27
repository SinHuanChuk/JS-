import React, { Component } from 'react';
import axios from 'axios';
import Spinner from "react-loader-spinner";

export default class App extends Component {
  state = {
    loader: true,
    articles: []
  }

  componentDidMount() {
    axios
    .get('https://hn.algolia.com/api/v1/search?query=react')
    .then(response => this.setState({loader: false, articles: response.data.hits}))
  }

  render() {
    const {articles, loader} = this.state

    return (
      <ul>
        {loader && <Spinner type = 'circle'/>}
        {articles.map(({title}) => {return <li>{title}</li>})}
      </ul>
    )
  }
}