import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../styles/styles.css'

import Grower from './Grower'
import Eater from './Eater'

import logo from '../../images/logo-4.png'
import Nav from '../Nav/Nav'

class Profile extends React.Component {
  render () {
    const profile = this.props.user || ''
    return (
      <div className='container pure-u-1'>

        <div className="pure-img background-profile"></div>
        <Link to='/'>
          <img className="pure-img logo-small" src={logo} />
        </Link>
        <div className='nav-bar'>
          <Nav />
        </div>

        <div className='grower-eater'>
          {profile.isSeller
            ? <Grower />
            : <Eater />
          }
        </div>
        <div className='backtotop pure-u-1'>
          <a href="#top"><h5> Return to top <i className="fas fa-caret-up"></i></h5></a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.currentUserReducer.user,
  pending: state.currentUserReducer.pending
})

export default connect(mapStateToProps)(Profile)
