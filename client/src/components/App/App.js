import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './app.css'
import Home from '../Home'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Area from '../Area/Area'
import Profile from '../Profile'
import Addproduct from '../Product/Addproduct'

export default class App extends Component {
  render () {
    return (
      <div className="app pure-g">
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/neighbourhood' component={Area} />
        <Route path='/addproducts' component={Addproduct}/>
        <Route path='/profile' component={Profile} />
      </div>
    )
  }
}
