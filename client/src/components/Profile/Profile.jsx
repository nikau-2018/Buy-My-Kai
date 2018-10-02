import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styles from '../../styles/styles.css'


import Addproduct from '../Product/Addproduct'
import {getProfile} from '../../actions/profile'

import Nav from '../Nav/Nav'
import logo from '../../images/logo-4.png'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  componentDidMount () {
    this.props.dispatch(getProfile())
  }

  render () {
    const profile = this.props.user || {}
    return (
      <div className='profile'>
        <div className="pure-img background"></div>
        <div className='container pure-u-1-1 pure-u-md-1-2'>
        <Link to='/'>
            <img className="pure-img logo-small" src={logo} />
          </Link>
        <div className='nav-bar'>
            <Nav />
          </div>
          <div className='profile-info pure-u-1-1 pure-u-md-1-2'>
            <h3>Kia ora Grower</h3>
            <h5>Thank you for registering with Buy My Kai <br />
              to share your fruit and veg with your community!</h5>
            <p>Here you will find your registered details, <br />
              please make sure they are up to date as this is what<br />
              Eaters will be seeing when they search your area</p>
            <ul className="profile-info pure-u-1">
              {profile.isSeller
                ? <div>
                  <li><p><strong>Seller Information:</strong><br /> {profile.description}</p></li>
                  <li><p><strong>Address:</strong> {profile.address}</p></li>
                  <li><p><strong>Suburb:</strong> {profile.suburb}</p></li>
                  <li><p><strong>City:</strong> {profile.city}</p></li>
                  <li><p><strong>Postcode:</strong> {profile.postcode}</p></li>
                  <li><p><strong>Availability:</strong> {profile.hours}</p></li>
                  <Button
                    className="btn--fab"
                    variant="extendedFab">
                    <i className="fas fa-plus"></i>
                  </Button >
                </div>
                : <div>
                  <li><p><strong>Email:</strong> {profile.email}</p></li>
                  <li>
                    <Button
                      onClick={this.handleClick}
                      className="btn--fab"
                      variant="extendedFab"
                    >
                      <i className="fas fa-user-check"></i>
                    </Button>
                    <span className="fab-label--right">$$tart your own side hustle - Become a $eller today!</span>
                  </li>
                </div>
              }
            </ul>
            <div>
              {this.state.showForm ? <Addproduct /> : <div></div>}
            </div>
            :
          </div>
          <div className='backtotop  pure-u-1'>
            <a href="#top">Return to top</a>
          </div>
          <div className='nav-bar'>
            <Nav />
          </div>
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
