import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

import '../../styles/styles.css'
import logo from '../../images/logo-4.png'

export default function Home (props) {
  return (
    <div className="home">
      <div className="pure-img background"></div>
      <div className="container pure-u-1-1 pure-u-md-1-2">
        <img className="pure-img logo" src={logo} />
        <h3>WELCOME !</h3>
        <p>Buy My Kai connects people <br />
          through the food we grow <br />
          in our backyard </p>
        <div className="btn-group pure-u-1">
          <Link to="/login">
            <Button
              className='btn btn--primary'>
              <i className="fas fa-sign-in-alt"></i>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              className='btn btn--secondary'>
              <i className="fas fa-user-plus"></i>
              Register
            </Button>
          </Link>
        </div>
        <div className='footer pure-u-1'>
          <p>Copyright © Buy My Kai 2018 Nikau</p>
        </div>
      </div>
    </div>
  )
}
