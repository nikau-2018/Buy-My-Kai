import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {postUser} from '../../actions/register'
import {TextField, Button, Checkbox} from '@material-ui/core'

import styles from '../../styles/styles.css'
import logo from '../../images/Logo.png'

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
      isClicked: false
    }
    this.handleSeller = this.handleSeller.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.sendUser = this.sendUser.bind(this)
  }

  handleSeller () {
    this.setState({
      isSeller: !this.state.isSeller,
      isClicked: !this.state.isClicked
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
      .then(this.setState({
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
        isClicked: false
      }))
  }

  render () {
    return (
      <div className="pure-img background">
        <div className="register-container pure-u-1-1 pure-u-md-1-2">
          <img className="pure-img logo" src={logo}/>
          <h2>Sign up</h2>

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
            <Checkbox type='checkbox'
              checked={this.state.isClicked}
              name='seller'
              onClick={this.handleSeller}
              onChange={this.handleChange} />
            <span>Are you a seller?</span>

            {this.state.isSeller
              ? <Button
                className='btn btn--primary'
                onClick={this.sendUser}>Complete Sign Up</Button>

              : <Button
                className="btn btn--primary"
                onClick={this.sendUser}>Go</Button>
            }
            {this.state.success && <Redirect to="/neighbourhood"/>}
          </div>

        </div>
      </div>
    )
  }
}

export default connect()(Register)
