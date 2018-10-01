import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postUser } from '../../actions/register'
import { TextField, Button, Checkbox } from '@material-ui/core'

import styles from '../../styles/styles.css'
import logo from '../../images/logo-4.png'

class Register extends React.Component {
  constructor(props) {
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
      success: false,
      isClicked: false,
      disabled: true
    }
    this.handleSeller = this.handleSeller.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sendUser = this.sendUser.bind(this)
  }

  handleSeller() {
    this.setState({
      isSeller: !this.state.isSeller,
      isClicked: !this.state.isClicked
    })
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
    if (this.state.name && this.state.email && this.state.hash) {
      this.setState({
        disabled: false
      })
    }
  }

  sendUser() {
    this.props.dispatch(postUser(this.state))
      .then(
        this.setState({
          success: !this.state.success
        })
      )
  }

  render() {
    return (
      <div className="home">
        <div className="pure-img background"></div>
        <div className="container pure-u-1-1 pure-u-md-1-2">
          <Link to='/'>
            <img className="pure-img logo" src={logo} />
          </Link>
          <h3>SIGN UP</h3>
          <p>We just need to get a few details<br />
            from you to get you sign up <br />
            to the service.</p>
          <div className="pure-form pure-u-1">
            <div className='name'>
              <input
                type="text"
                class="pure-input-rounded"
                placeholder="Name"
                name="name"
                margin="normal"
                value={this.state.name}
                onChange={this.handleChange} />
            </div>
            <div className='email'>
              <input
                type="email"
                class="pure-input-rounded"
                placeholder="Email"
                name="email"
                margin="normal"
                value={this.state.email}
                onChange={this.handleChange} />
            </div>
            <div className='password'>
              <input
                type="password"
                class="pure-input-rounded"
                placeholder="Password"
                name="hash"
                margin="password"
                value={this.state.hash}
                onChange={this.handleChange} />
            </div>
            {
              this.state.isSeller
                ? <div className="pure-form-register pure-u-1">
                  <div className='street-address'>
                    <input
                      type="text"
                      class="pure-input-rounded"
                      placeholder="Street Address"
                      multiline
                      rowsMax="4"
                      name='address'
                      margin="normal"
                      value={this.state.address}
                      onChange={this.handleChange} />
                  </div>
                  <div className='suburb'>
                    <input
                      type="text"
                      class="pure-input-rounded"
                      placeholder="Suburb"
                      margin="normal"
                      value={this.state.suburb}
                      onChange={this.handleChange} />
                  </div>
                  <div className='city'>
                    <input
                      type="text"
                      class="pure-input-rounded"
                      placeholder="city"
                      margin="normal"
                      value={this.state.city}
                      onChange={this.handleChange} />
                  </div>
                  <div className='postcode'>
                    <input
                      type="text"
                      class="pure-input-rounded"
                      placeholder="postcode"
                      margin="normal"
                      value={this.state.postcode}
                      onChange={this.handleChange} />
                  </div>
                  <div className='description'>
                    <input
                      type="text"
                      class="pure-input-rounded"
                      placeholder="Description"
                      margin="normal"
                      value={this.state.description}
                      onChange={this.handleChange} />
                  </div>
                  <div className='hours'>
                    <input
                      type="text"
                      class="pure-input-rounded"
                      placeholder="Hours"
                      margin="normal"
                      value={this.state.hours}
                      onChange={this.handleChange} />
                  </div>

                </div>
                : <div></div>
            }
            <div className="checkbox pure-u-1">
              <h5>Are you a seller?
              <Checkbox
                  type='checkbox'
                  checked={this.state.isClicked}
                  name='seller'
                  onClick={this.handleSeller}
                  onChange={this.handleChange} />
                <label htmlFor="seller"></label></h5>
            </div>
            <div className="btn-group pure-u-1">
              <Button
                className='btn btn--primary'
                disabled={this.state.disabled}
                onClick={this.sendUser}>
                Go
              </Button>
              {this.state.success && <Redirect to="/profile" />}
              <div className="register-group pure-u-1">
                <p>Already a member?
                  <Link className='btn-link' to="/login"> <u>Login</u></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Register)
