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
    const profile = this.props.user && this.props.user
    return (
      <div className='profile-container pure-u-1'>
        <h2>Kia ora Grower</h2>
        <h3>Thank you for registering with Buy My Kai to share your fruit and veg with your community!</h3>
        <p>Here you will find your registered details, please make sure they are up to date as this is what
          Eaters will be seeing when they search your area</p>
        <ul className="profile-info pure-u-1">
          <div>
            <li><p><strong>Description:</strong><br /> {profile.description}</p></li>
            <li><p><strong>Address:</strong> {profile.address}</p></li>
            <li><p><strong>Suburb:</strong> {profile.suburb}</p></li>
            <li><p><strong>City:</strong> {profile.city}</p></li>
            <li><p><strong>Availability:</strong> {profile.hours}</p></li>
          </div>
          <div>
            <li>
              <Button
                onClick={this.handleClick} className="btn--fab"
                variant="extendedFab">Add Products</Button>
            </li>
          </div>
        </ul>
        <div>
          {this.state.showForm ? <Addproduct /> : <div></div>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUserReducer.user,
  pending: state.currentUserReducer.pending
})

export default connect(mapStateToProps)(Profile)
