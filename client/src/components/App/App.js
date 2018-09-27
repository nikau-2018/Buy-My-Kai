
import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import './app.css'
import Home from '../Home'
import Login from '../Login/Login'
import Register from '../Register/Register'
import AreaScreen from '../Area/AreaScreen'
import Area from '../Area/Area'
import Profile from '../Profile'
import AddProduct from '../Product'

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/neighbourhood' component={AreaScreen} />
        <Route path='/neighbourhood/?query' component={Area} />
        <Route path='/profile/:id' component={Profile} />
        <Route path='/profile/:id/addProduct' component={AddProduct}/> */}
      </div>
    )
  }
}
