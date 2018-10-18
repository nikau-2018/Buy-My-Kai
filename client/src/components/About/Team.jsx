import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/styles.css'

import logo from '../../images/logo-4.png'
import Nav from '../Nav/Nav'

class Team extends React.Component {
  render () {
    return (
      <div className="profile">
        <div className="header">
          <Link to='/'>
            <img className="pure-img logo" src={logo} />
          </Link>
          <div className='nav-bar'>
            <Nav />
          </div>
        </div>
        <div className='container pure-u-1'>
          <div className="pure-img background-profile"></div>
        </div>
        <div className='pure-u-1'>
          <a href="#top"><h4> Return to top <i className="fas fa-caret-up"></i></h4></a>
        </div>
      </div>
    )
  }
}

export default Team
