import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/login'
import { TextField, Button } from '@material-ui/core';

import styles from '../../styles/styles.css'
import logo from '../../images/Logo.png'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      hash: '',
      disabled: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    if (this.state.email && this.state.hash) {
      this.setState({
        disabled: false
      })
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.dispatch(loginUser(this.state.email, this.state.hash))
  }

  render () {
    const {error, isLoggedIn} = this.props
    return (
      <div className="pure-img background">
        { error ? <div className="toast-error">{ error.message }</div> : null }
        <div className="login-container pure-u-1-1 pure-u-md-1-2">
          <Link to='/'>
            <img className="pure-img logo" src={logo}/>
          </Link>
          <h2>Log in</h2>
          <div className="form-container pure-u-1">
            {isLoggedIn ? <Redirect to="/profile"/> : null }
            <TextField
              type="email"
              label="Email"
              name="email"
              margin="normal"
              value={this.state.email}
              onChange={this.handleChange} />

            <TextField
              type="password"
              label="Password"
              name="hash"
              margin="normal"
              value={this.state.hash}
              onChange={this.handleChange} />
          </div>

          <div>
            <Button 
              className='btn btn--primary' 
              onClick={this.handleSubmit}
              disabled={ this.state.disabled }>
                Go
            </Button><br />
            <Link to="/register">
              Not a member? Create an account.
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.currentUserReducer.isLoggedIn,
  error: state.currentUserReducer.error
})

export default connect(mapStateToProps)(Login)
