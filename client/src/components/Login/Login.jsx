import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/login'

import styles from './styles.css'
import logo from '../Home/Logo.png'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      hash: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.dispatch(loginUser(this.state.username, this.state.password))
  }

  render () {
    return (
      <div className="pure-img background">
        <div className="home-container pure-u-1-1 pure-u-md-1-2">
          <img className="pure-img logo" src={logo}/>
          
          <form>
            {this.props.isLoggedIn ? <Redirect to="/home"/> : null }
            <div className="row">
              <div className="input-field col s12">
                <input className="validate" type="text" name="email" value={this.state.username} onChange={this.handleChange}/>
                <label for="email">email</label><br />
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input className="validate" type="password" name="hash" value={this.state.password} onChange={this.handleChange}/>
                  <label for="password">password</label>
                </div>
              </div>
            </div>

            <div className="pure-u-1 pure-u-md-1-2">
              <button className=' pure-button pure-button-active login' onClick={this.handleSubmit}>Log in</button>
            </div>
            <div className="pure-u-1 pure-u-md-1-2">
              <Link to="/">
                <button className=' pure-button pure-button-active login'>Home</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLoggedIn: state.loginReducers.isLoggedIn

  }
}

export default connect(mapStateToProps)(Login)
