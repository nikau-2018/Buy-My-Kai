import React from 'react'
import {Link} from 'react-router-dom'

export default function Home (props) {
  return (
    <div>
      <h1>Welcome to Buy My Kai</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  )
}
