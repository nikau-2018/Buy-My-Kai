import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {postUser} from '../../actions/register'
import {TextField, Button, Checkbox} from '@material-ui/core'

import styles from '../../styles/styles.css'
import logo from '../../images/logo-4.png'

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
      success: false,
      isClicked: false,
      disabled: true
    }
    this.handleSeller = this.handleSeller.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sendUser = this.sendUser.bind(this)
  }

  handleSeller () {
    this.setState({
      isSeller: !this.state.isSeller,
      isClicked: !this.state.isClicked
    })
  }

  handleChange (e) {
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

  sendUser () {
    this.props.dispatch(postUser(this.state))
      .then(
        this.setState({
          success: !this.state.success
        })
      )
  }

  render () {
    return (
      <div className="home">
        <div className="pure-img background"></div>
        <div className="container pure-u-1-1 pure-u-md-1-2">
          <Link to='/'>
            <img className="pure-img logo" src={logo} />
          </Link>
          <h3>SIGN UP</h3>
          <p>We just need to get a few details<br/>
            from you to get you sign up <br/>
            to the service.</p>
          <div className="pure-u-1">
            <TextField
              type="text"
              label="Name"
              name='name'
              margin="normal"
              value={this.state.name}
              onChange={this.handleChange} /><br />

            <TextField
              type="email"
              label="Email Address"
              name='email'
              margin="normal"
              value={this.state.email}
              onChange={this.handleChange} /><br />

            <TextField
              type="password"
              label="Password"
              name='hash'
              margin="normal"
              value={this.state.hash}
              onChange={this.handleChange} /><br />

            {
              this.state.isSeller
                ? <div>
                  <TextField
                    type="text"
                    label="Street Address"
                    multiline
                    rowsMax="4"
                    name='address'
                    margin="normal"
                    value={this.state.address}
                    onChange={this.handleChange} /><br />

                  <TextField
                    type="text"
                    name='suburb'
                    label="Suburb"
                    margin="normal"
                    value={this.state.suburb}
                    onChange={this.handleChange} /><br />

                  <TextField
                    type="text"
                    name='city'
                    label="City"
                    margin="normal"
                    value={this.state.city}
                    onChange={this.handleChange} /><br />

                  <TextField
                    type="text"
                    name='postcode'
                    label="Post Code"
                    margin="normal"
                    value={this.state.postcode}
                    onChange={this.handleChange} /><br />

                  <TextField
                    type="text"
                    name='description'
                    multiline
                    rowsMax="8"
                    label="Description"
                    margin="normal"
                    value={this.state.description}
                    onChange={this.handleChange} /><br />

                  <TextField
                    type="text"
                    name='hours'
                    label="Hours"
                    margin="normal"
                    value={this.state.hours}
                    onChange={this.handleChange} /><br />

                </div>
                : <div></div>
            }
            <div>
              <Checkbox
                type='checkbox'
                checked={this.state.isClicked}
                name='seller'
                onClick={this.handleSeller}
                onChange={this.handleChange} />
              <label htmlFor="seller">Are you a seller?</label>
              <br />
              <Button
                className='btn btn--primary'
                disabled={this.state.disabled}
                onClick={this.sendUser}>
                Go
              </Button><br />

              {this.state.success && <Redirect to="/profile" />}
              <div className="register-group pure-u-1">
                <p>Already a member?
                  <Link className='btn-link' to="/login"> <u>Login</u></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default connect()(Register)
