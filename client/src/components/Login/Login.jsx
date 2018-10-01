import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/login'
import {TextField, Button} from '@material-ui/core'

import '../../styles/styles.css'
import logo from '../../images/logo-4.png'

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
        <div className="pure-img background"></div>
        { error ? <div className="toast-error">{ error.message }</div> : null }
        <div className="container pure-u-1-1 pure-u-md-1-2">
          <Link to='/'>
            <img className="pure-img logo" src={logo} />
          </Link>
          <h3>LOG IN</h3>
          <div className="form-container pure-u-1">
            {isLoggedIn ? <Redirect to="/profile"/> : null }
            <TextField className="form-field"
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

          <div className="btn-group pure-u-1">
            <Button
              className='btn btn--primary'
              onClick={this.handleSubmit}
              disabled={this.state.disabled}>
              Go
            </Button><br />

            <div className="register-group pure-u-1">
              <p>Not a member? Create an
                <Link className='btn-link' to="/register"> <u>account</u></Link>
              </p>
            </div>

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
