import React from 'react'
// import {Redirect} from 'react-router-dom'

export default class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      seller: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    return (
      <div>
        <h1>Register</h1>
        <input name='name' value={user.name} placeholder='Full Name'></input>
        <input name='email' value={user.email} placeholder='Email'></input>
        <input name='password' value={user.hash} placeholder='Enter a password'></input>
        <input type='checkbox' name='seller' value={this.state.seller}>I am a seller</input>
        <input name='address' value={user.address} placeholder='Street address'></input>
        <input name='suburb' value={user.suburb} placeholder='Suburb'></input>
        <input name='city' value={user.city} placeholder='City'></input>
        <input name='postcode' value={user.postcode} placeholder='City'></input>
        <input name='description' value={user.description} placeholder='City'></input>
        <input name='hours' value={user.hours} placeholder='Hours'></input>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}
