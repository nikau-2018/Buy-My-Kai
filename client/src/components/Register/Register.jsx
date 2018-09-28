import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {postUser} from '../../actions/register'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        name: '',
        email: '',
        hash: '',
        isSeller: false,
        address: '',
        suburb: '',
        city: '',
        postcode: '',
        description: '',
        hours: '',
        success: false
    }
    this.handleSeller = this.handleSeller.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.sendUser = this.sendUser.bind(this)
  }

  handleSeller () {
    this.setState({
      isSeller: !this.state.isSeller
    })
  }

  handleClick () {
    return <Redirect to='/profile' />
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendUser () {
    this.setState({
      success: !this.state.success
    })
    this.props.dispatch(postUser(this.state))
  }

  render () {
    if (this.props.user) {
      return (
        <Redirect to='/product'/>
      )
    }

    return (
      <div>
        <h1>Register</h1>
          <input type="text" name='name' value={this.state.name} placeholder='Full Name' onChange={this.handleChange} /><br/>
          <input type="text" name='email' value={this.state.email} placeholder='Email' onChange={this.handleChange} /><br/>
          <input type="password" name='hash' value={this.state.hash} placeholder='Enter a password' onChange={this.handleChange} /><br/>
          <label>Are you you a seller?</label>
          <input type='checkbox' name='seller' value={this.state.isSeller} onClick={this.handleSeller} onChange={this.handleChange} /><br/>

          {this.state.isSeller
            ? <div>
              <input type="text" name='address' value={this.state.address} placeholder='Street address' onChange={this.handleChange} /><br/>
              <input type="text" name='suburb' value={this.state.suburb} placeholder='Suburb' onChange={this.handleChange} /><br/>
              <input type="text" name='city' value={this.state.city} placeholder='City' onChange={this.handleChange} /><br/>
              <input type="text" name='postcode' value={this.state.postcode} placeholder='Postcode' onChange={this.handleChange} /><br/>
              <input type="text" name='description' value={this.state.description} placeholder='Description' onChange={this.handleChange} /><br/>
              <input type="text" name='hours' value={this.state.hours} placeholder='Hours' onChange={this.handleChange} /><br/>

            </div>
            : <button onClick={this.sendUser}>Go</button>
          }
          <div>
            {this.state.isSeller ? <button onClick={this.sendUser}>Submit</button> : <div></div>}
          </div>
      </div>
    )
  }
}

export default connect()(Register)
