import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/login'

class Login extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        username: '',
        password: ''
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
        <div>
          <h1>
            Log into <br />
            Buy-My-Kai
          </h1>
          <form>
            {this.props.isLoggedIn ? <Redirect to="/home"/> : null }
            <p>
              Username:<br /><input type="text" name="username"  value={this.state.username} onChange={this.handleChange} placeholder="Enter your username..." /><br />
              Password:<br /><input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter your password..." />
            </p>
            <button onClick={this.handleSubmit}>Log in</button>
            <Link to="/">
              <button>Home</button>
            </Link>
          </form>
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