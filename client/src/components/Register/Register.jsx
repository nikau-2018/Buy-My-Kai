import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {postUser} from '../../actions/register'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        name: '',
        email: '',
        hash: '',
        isSeller: false,
        address: '',
        suburb: '',
        city: '',
        postcode: '',
        description: '',
        hours: ''
      }
    }
    this.handleSeller = this.handleSeller.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleSeller () {
    this.setState({
      isSeller: !this.state.user.isSeller
    })
  }

  handleClick () {
    return <Redirect to='/profile' />
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      user: {
      [e.target.name]: e.target.value
      }
    })
  }

  sendUser () {
    this.props.dispatch(postUser(this.state.user))
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
        <input name='name' value={this.state.user.name} placeholder='Name' onChange={this.handleChange}></input><br/>
        <input name='email' value={this.state.user.email} placeholder='Email' onChange={this.handleChange}></input><br/>
        <input name='password' value={this.state.user.hash} placeholder='Enter a password' onChange={this.handleChange}></input><br/>
        <label>Are you you a seller?</label>
        <input type='checkbox' name='seller' value={this.state.user.isSeller} onClick={this.handleSeller} onChange={this.handleChange}></input><br/>

        {this.state.isSeller
          ? <div>
            <input name='address' value={this.state.user.address} placeholder='Street address' onChange={this.handleChange}></input><br/>
            <input name='suburb' value={this.state.user.suburb} placeholder='Suburb' onChange={this.handleChange}></input><br/>
            <input name='city' value={this.state.user.city} placeholder='City' onChange={this.handleChange}></input><br/>
            <input name='postcode' value={this.state.user.postcode} placeholder='Postcode' onChange={this.handleChange}></input><br/>
            <input name='description' value={this.state.user.description} placeholder='Description' onChange={this.handleChange}></input><br/>
            <input name='hours' value={this.state.user.hours} placeholder='Hours' onChange={this.handleChange}></input><br/>

          </div>
          : <button onClick={this.handleClick}>Go</button>
        }
        <div>
          {this.state.isSeller ? <button onClick={this.sendUser}>Submit</button> : <div></div>}
        </div>
      </div>
    )
  }
}

export default connect()(Register)
