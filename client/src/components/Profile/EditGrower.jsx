import React from 'react'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'
// import {Link} from 'react-router-dom'
import '../../styles/styles.css'
import {editUser, getProfile} from '../../actions/profile'

class Grower extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showForm: false,
      name: '',
      email: '',
      hash: '',
      isSeller: false,
      address: '',
      suburb: '',
      city: '',
      description: '',
      hours: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick () {
    this.props.dispatch(editUser(this.state))
  }

  componentDidMount () {
    this.props.dispatch(getProfile())
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
    // Navigation
      <div className="container pure-u-1">
        <h2>Edit Grower Profile</h2>

        <div className="pure-form pure-u-1">
          <div className='name'>
            <input
              type="text"
              className="pure-input-rounded"
              placeholder={this.props.user.name}
              name="name"
              margin="normal"
              value={this.state.name}
              onChange={this.handleChange} />
          </div>

          <div className='street-address'>
            <input
              type="text"
              className="pure-input-rounded"
              placeholder={this.props.user.address}
              name='address'
              margin="normal"
              value={this.state.address}
              onChange={this.handleChange} />
          </div>

          <div className='suburb'>
            <input
              type="text"
              className="pure-input-rounded"
              placeholder={this.props.user.suburb}
              name='suburb'
              margin="normal"
              value={this.state.suburb}
              onChange={this.handleChange} />
          </div>

          <div className='city'>
            <input
              type="text"
              className="pure-input-rounded"
              placeholder={this.props.user.city}
              name='city'
              margin="normal"
              onChange={this.handleChange} />
          </div>

          <div className='description'>
            <input
              type="text"
              className="pure-input-rounded"
              placeholder={this.props.user.description}
              name='description'
              margin="normal"
              value={this.state.description}
              onChange={this.handleChange} />
          </div>

          <div className='hours'>
            <input
              type="text"
              className="pure-input-rounded"
              placeholder={this.props.user.hours}
              name='hours'
              margin="normal"
              value={this.state.hours}
              onChange={this.handleChange} />
          </div>

        </div>

        <Button
          onClick={this.handleClick}
          className='btn btn-third'>Submit
        </Button >

      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.currentUserReducer.user,
  pending: state.currentUserReducer.pending,
  product: state.addproductReducer.product
})

export default connect(mapStateToProps)(Grower)
