import React from 'react'
import {Link} from 'react-router-dom'

import styles from './styles.css'
import logo from './Logo.png'

export default function Home (props) {
  return (
    <div className="pure-img background">
      <div className="home-container pure-u-1-1 pure-u-md-1-2">
        <img className="pure-img logo" src={logo}/>
        <h2>Welcome!</h2>
        <p>Buy My Kai connects people <br/>
        through the food we grow in our backyard.</p>
        <div>
          <Link to="/login" className="pure-u-1 pure-u-md-1-2">
            <button className=' pure-button pure-button-active'><i className="fas fa-user"></i>  Login</button>
          </Link>
          <Link to="/register" className="pure-u-1 pure-u-md-1-2">
            <button className=' pure-button pure-button-active'> Register</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
