import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Nav';
import Loading from './Loading';
import Loadable from 'react-loadable';

const AsyncHomePage = Loadable({
  loader: () => import('./HomePage'),
  loading: Loading
});

const AsyncShowOurComponent = Loadable({
  loader: () => import('./ShowOurComponent'),
  loading: Loading
})

const AsyncClick = Loadable({
  loader: () => import('./Click'),
  loading: Loading
})

const AsyncProfile = Loadable({
  loader: () => import('./Profile'),
  loading: Loading
})

const AsyncPosts = Loadable({
  loader: () => import('./Posts'),
  loading: Loading
})

export default class App extends Component {

  render() {
    return(
      <div>
        <Nav />
        <Switch>
            <Route path = '/' exact component = {AsyncClick}/>
            <Route path = '/HomePage' exact component = {AsyncHomePage}/>
            <Route path = '/Profile' excat component = {AsyncProfile}/>
            <Route path = '/Posts' exact component = {AsyncPosts}/>
            <Route path = '/ShowOurComponent' component = {AsyncShowOurComponent}/>
        </Switch>
      </div>
    )
  }
}
