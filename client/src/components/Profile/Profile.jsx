import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getProfile} from '../../actions/profile'
import {addProduct} from '../../actions/profile'

class Profile extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.dispatch(getProfile())
  }

  render () {
    const profile = this.props
    return (
      <div className='profile' >
        <div className='name'>
          <h3>Welcome,{profile.name}</h3>
        </div>

        <div className='email'>
          {profile.email}
        </div>

        <div className='description'>
          {profile.description}
        </div>

        <div className='address'>
          {profile.address}
        </div>

        <div className='suburb'>
          {profile.suburb}
        </div>

        <div className='city'>
          {profile.city}
        </div>

        <div className='postcode'>
          {profile.postcode}
        </div>

        <div className='hours'>
          {profile.hours}
        </div>

        <button className='addproduct'>
          <Link to={'/profile/:id/addproduct'}>Add Product</Link>
        </button >

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(Profile)
