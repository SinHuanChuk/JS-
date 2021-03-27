import React, { Component } from 'react';
import Nav from '../pages/Nav'
import Loadable from 'react-loadable';
import Reviews from '../pages/Reviews'
import Loading from '../pages/Loading'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
      return (
        <div>
          <Nav/>
          <Switch>
            <Route path = '/' exact component = {Loadable({
              loader: () => import('../pages/About'),
              loading: Loading
            })}/>
            <Route path = '/History' component = {Loadable({
              loader: () => import('../pages/History'),
              loading: Loading
            })}/>
            <Route path = '/Wonderland' exact component = {Loadable({
              loader: () => import('../pages/Wonderland'),
              loading: Loading
            })}/>
            <Route path = '/Wonderland/:id' component = {Loadable({
              loader: () => import('../pages/Items'),
              loading: Loading
            })}/>
            <Route component = {Loadable({
              loader: () => import('../pages/NotFound'),
              loading: Loading
            })}/>
          </Switch>
        </div>
      )
  }
}