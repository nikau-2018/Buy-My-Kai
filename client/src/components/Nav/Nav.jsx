import React from 'react'
// import { Link } from 'react-router-dom'
// import logo-simple from '../../images/favicon.ico'

export default function Nav (props) {
  return (
    <div className="pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list">
        <li className="pure-menu-item"><a href="/" className="pure-menu-link "><button>HOME</button></a></li>
        <li className="pure-menu-item"><a href="/profile" className="pure-menu-link"><button>PROFILE</button></a></li>
        <li className="pure-menu-item"><a href="/neighbourhood" className="pure-menu-link"><button>MAP</button></a></li>
      </ul>
    </div>
  )
}
