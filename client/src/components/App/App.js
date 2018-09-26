import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import './app.css'
import LogInScreen from '../LogInScreen'
import RegisterScreen from '../RegisterScreen'
import AreaScreen from '../AreaScreen'
import Area from '../Area'

import {Registration, Update} from '../GrowerForm'
import ProfileScreen from '../ProfileScreen'

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <Route exact path='/' component={LogInScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/neighbourhood' component={AreaScreen} />
        <Route path='/neighbourhood/?query' component={Area} />

        {/* Routes for growers list */}
        {/* Routes for loading images */}
        <Route path='/images' component={Registration} />
        <Route path='/profile/:id' component={ProfileScreen} />
        <Route path='/update' component={Update} />
      </div>
    )
  }
}
