

import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import './app.css'
<<<<<<< HEAD
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import AreaScreen from '../AreaScreen'
import Area from '../Area'
import Profile from '../Profile'
import AddProduct from '../Product'
=======
import Home from '../Home/Home'
>>>>>>> 8fb2fdf0c3e21a2e83b5598f7eb6f7f79ef27740

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/neighbourhood' component={AreaScreen} />
        <Route path='/neighbourhood/?query' component={Area} />
        <Route path='/profile/:id' component={Profile} />
        <Route path='/profile/:id/addProduct' component={AddProduct}/>
      </div>
    )
  }
}