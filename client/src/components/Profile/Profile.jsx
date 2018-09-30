import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getProfile} from '../../actions/profile'
import {addProduct} from '../../actions/profile'

class Profile extends React.Component {

  render() {
    const profile = this.props.user && this.props.user
    return (
      <div className='profile pure-u-1'>
        <h3>Welcome, {profile.name}</h3>
        <ul>
          <li><p>Email: {profile.email}</p></li>
          <li><p>Description: {profile.description}</p></li>
          <li><p>Address: {profile.address}</p></li>
          <li><p>Suburb: {profile.suburb}</p></li>
          <li><p>City: {profile.city}</p></li>
          <li><p>Postcode: {profile.postcode}</p></li>
          <li><p>Availability: {profile.hours}</p></li>
        </ul>
  
        <button className='addproduct'>
          <Link to={'/profile/:id/addproduct'}>Add Product</Link>
        </button >
  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.loginReducers.user
    // user: state.registerReducer.user
  }
}

export default connect(mapStateToProps)(Profile)
