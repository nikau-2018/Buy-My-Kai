import React from 'react'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'

import Addproduct from '../Product/Addproduct'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showForm: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render () {
    const profile = this.props.user || {}
    return (
      <div className='profile-container pure-u-1'>
        <h2>Kia ora Grower</h2>
        <h3>Thank you for registering with Buy My Kai to share your fruit and veg with your community!</h3>
        <p>Here you will find your registered details, please make sure they are up to date as this is what
          Eaters will be seeing when they search your area</p>
        <ul className="profile-info pure-u-1">
          { profile.isSeller
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
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUserReducer.user,
  pending: state.currentUserReducer.pending
})

export default connect(mapStateToProps)(Profile)
