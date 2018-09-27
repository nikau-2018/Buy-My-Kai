import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import './app.css'
import Home from '../Home/Home'

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/login' component={Login} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/neighbourhood' component={AreaScreen} />
        <Route path='/neighbourhood/?query' component={Area} />
        <Route path='/profile/:id' component={ProfileScreen} /> */}
      </div>
    )
  }
}
