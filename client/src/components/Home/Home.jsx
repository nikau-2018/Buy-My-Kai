import React from 'react'
import {Link} from 'react-router-dom'

export default function Home (props) {
  return (
    <div>
      <h1>Hello</h1>
      <span>Have you been here before?</span>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <a>New member? Register!</a>
      </Link>
    </div>
  )
}
