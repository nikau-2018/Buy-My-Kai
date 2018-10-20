import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/styles.css'

import logo from '../../images/logo-4.png'

class Team extends React.Component {
  render () {
    return (
      <div className="about">
        <div className="header">
          <Link to='/'>
            <img className="pure-img logo-about" src={logo} />
          </Link>
        </div>
        <div className='container pure-u-1'>
          <div className="pure-img background-about"></div>
          <h2>The Team</h2>
        </div>
      </div>
    )
  }
}

export default Team
