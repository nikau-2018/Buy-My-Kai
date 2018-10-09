import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

import '../../styles/styles.css'
import logo from '../../images/logo-4.png'

export default function Home (props) {
  return (
    <div className="home">
      <div className="header">
        <Link to='/'>
          <img className="pure-img logo" src={logo} />
        </Link>
      </div>
      <div className="pure-img background-home"></div>
      <div className="container pure-u-1">
        <h2>Kia ora!</h2>
        <h5>Thank you for visiting us, we are a group of foodies who wanted to create a platform for humans in our community to buy, sell and trade the fruit and veg in their backyard.</h5>
        <h5>Wanna get involved? Head to the registration page to get setup</h5>
        <div className="btn-group pure-u-1">
          <Link to="/login">
            <Button
              className='btn btn-primary'>
              <i className="fas fa-sign-in-alt"></i>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              className='btn btn-secondary'>
              <i className="fas fa-user-plus"></i>
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
