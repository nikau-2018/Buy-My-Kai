import React from 'react'
import {Redirect} from 'react-router-dom'

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seller: false
    }
    this.handleClick = this.handleClick.bind(this)

    render () {
      return (
        <div>
        <h1>Register</h1>
        <div className="form">
        <input name='name' value={this.state.name} placeholder='Full Name'></input>
        <input name='email' value={this.state.email} placeholder='Email'></input>
        <input name='password' value={this.state.hash} placeholder='Enter a password'></input>

        <input name='address' value={this.state.name} placeholder='Email'></input>
        <input name='name' value={this.state.name} placeholder='Email'></input>
        
        
        
        </div>
        </div>
      )
    }






  }

  const mapStateToProps = (state) => {
    return {

    }
  }