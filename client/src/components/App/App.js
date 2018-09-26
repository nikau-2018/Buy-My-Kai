import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './app.css'
import LoginScreen from '../LoginScreen'
import RegisterScreen from '../RegisterScreen'
import AreaScreen from '../AreaScreen'
import Area from '../Area'
import ProfileScreen from '../ProfileScreen'

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <Route exact path='/' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/neighbourhood' component={AreaScreen} />
        <Route path='/neighbourhood/?query' component={Area} />
        <Route path='/profile/:id' component={ProfileScreen} />
      </div>
    )
  }
}
