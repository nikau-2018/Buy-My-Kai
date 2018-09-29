import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core'

import styles from '../../styles/styles.css'
import logo from '../../images/Logo.png'

export default function Home (props) {
  return (
    <div className="pure-img background">
      <div className="home-container pure-u-1-1 pure-u-md-1-2">
        <img className="pure-img logo" src={logo}/>
        <h2>Welcome!</h2>
        <p>Buy My Kai connects people <br/>
        through the food we grow in our backyard.</p>
        <Link to="/login" className='btn btn--primary mdc-button'>
          <button>
            <i className="fas fa-sign-in-alt"></i>Login
          </button>
        </Link>
        <Link to="/register" className='btn btn--secondary mdc-button'>
          <button>
            <i className="fas fa-user-plus"></i>Register
          </button>
        </Link>
      </div>
    </div>
  )
}
