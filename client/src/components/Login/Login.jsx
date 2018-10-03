import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/login'
import {Button} from '@material-ui/core'

import '../../styles/styles.css'
import logo from '../../images/logo-4.png'

import Nav from '../Nav/Nav'

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
      <div className="login">
        <div className="header">
          <Link to='/'>
            <img className="pure-img logo" src={logo} />
          </Link>
          <div className='nav-bar'>
            <Nav />
          </div>
        </div>
        <div className="pure-img background-login"></div>
        {error ? <div className="toast-error">{error.message}</div> : null}

        <div className="container pure-u-1">
          <div className="pure-form pure-u-1">
            <h2>LOG IN</h2>
            {isLoggedIn ? <Redirect to="/profile" /> : null}
            <div>
              <input
                type="email"
                className="pure-input-rounded"
                placeholder="Email"
                name="email"
                margin="normal"
                value={this.state.email}
                onChange={this.handleChange} />
            </div>
            <div>
              <input
                type="password"
                className="pure-input-rounded"
                placeholder="Password"
                name="hash"
                margin="normal"
                value={this.state.hash}
                onChange={this.handleChange} />
            </div>
          </div>

          <div className="btn-group pure-u-1">
            <Button
              className='btn btn-primary'
              onClick={this.handleSubmit}
              disabled={this.state.disabled}>
              Go
            </Button>
          </div>

          <div className="register-group pure-u-1">
            <h4>Not a member? Create an
              <Link className='btn-link' to="/register"> <u>account</u></Link>
            </h4>
          </div>

        </div>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.currentUserReducer.isLoggedIn,
  error: state.currentUserReducer.error
})

export default connect(mapStateToProps)(Login)
