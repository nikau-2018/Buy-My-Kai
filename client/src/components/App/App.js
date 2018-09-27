import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'

import './app.css'
import Home from '../Home'
import Login from '../Login'
import RegisterScreen from '../RegisterScreen'
import AreaScreen from '../AreaScreen'
import Area from '../Area'
import ProfileScreen from '../ProfileScreen'

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className="app">
          <Route exact path='/' component={Home} />
          <Route exact path='/Login' component={Login} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/neighbourhood' component={AreaScreen} />
          <Route path='/neighbourhood/?query' component={Area} />
          <Route path='/profile/:id' component={ProfileScreen} />
        </div>
        <Footer />
      </div>
    )
  }
}
