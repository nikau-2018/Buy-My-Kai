import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {postUser} from '../../actions/register'

// import styles from './styles.css'
import logo from '../Home/Logo.png'

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
  }

  render () {
    return (
      <div className="pure-img background">
        <div className="home-container pure-u-1-1 pure-u-md-1-2">
          <img className="pure-img logo" src={logo}/>

          <div className="row">
            <div className="input-field col s12">
              <input type="text" name='name' value={this.state.name} onChange={this.handleChange} />
              <label htmlFor="name">name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input type="text" name='email' value={this.state.email} onChange={this.handleChange} />
              <label htmlFor="email">email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input type="password" name='hash' value={this.state.hash} onChange={this.handleChange} />
              <label htmlFor="password">password</label>
            </div>
          </div>

          <div className="row">
            <div>
              <label>
                <input type='checkbox' name='seller' value={this.state.isSeller} onClick={this.handleSeller} onChange={this.handleChange} />
                <span>Are you a seller?</span>
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              {this.state.isSeller
                ? <div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input type="text" name='address' value={this.state.address} onChange={this.handleChange} />
                      <label htmlFor="password">street</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input type="text" name='suburb' value={this.state.suburb} onChange={this.handleChange} />
                      <label htmlFor="password">suburb</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input type="text" name='city' value={this.state.city} onChange={this.handleChange} />
                      <label htmlFor="password">city</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input type="text" name='postcode' value={this.state.postcode} onChange={this.handleChange} />
                      <label htmlFor="password">postcode</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input type="text" name='description' value={this.state.description} onChange={this.handleChange} />
                      <label htmlFor="password">description</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input type="text" name='hours' value={this.state.hours} onChange={this.handleChange} />
                      <label htmlFor="password">hours</label>
                    </div>
                  </div>

                </div>
                : <button className=' pure-button pure-button-active register' onClick={this.sendUser}>Go</button>
              }
              {this.state.success && <Redirect to="/neighbourhood"/>}
            </div>
          </div>
          {this.state.isSeller ? <button className=' pure-button pure-button-active register' onClick={this.sendUser}>Submit</button> : <div></div>}
        </div>
      </div>

    )
  }
}

export default connect()(Register)
