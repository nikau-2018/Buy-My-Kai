import React from 'react'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'

class Profile extends React.Component {
  render () {
    const profile = this.props.user && this.props.user
    return (
      <div className='profile-container pure-u-1'>
        <h2>Welcome, {profile.name}</h2>
        <h3>Profile Information</h3>
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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user
})

export default connect(mapStateToProps)(Profile)
