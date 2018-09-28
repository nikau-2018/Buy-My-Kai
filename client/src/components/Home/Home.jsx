import React from 'react'
import {Link} from 'react-router-dom'

import styles from './styles.css'

export default function Home (props) {
  return (
    <div className="home-container pure-u-1-1 pure-u-md-1-2">
      <h1>Welcome to Buy My Kai</h1>
      <div className="pure-g">
        <Link to="/login" className="pure-u-1 pure-u-md-1-2 button-xl pure-button pure-button-primary">
          <button>Login</button>
        </Link>
        <Link to="/register" className="pure-u-1 pure-u-md-1-2 button-xl pure-button pure-button-secondary">
          <button>Register</button>
        </Link>
      </div>
    </div>
  )
}
