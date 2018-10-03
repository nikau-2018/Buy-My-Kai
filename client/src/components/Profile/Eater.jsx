import React from 'react'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'
// import {Link} from 'react-router-dom'
import '../../styles/styles.css'
import BecomeGrower from './BecomeGrower'

import {getProfile} from '../../actions/profile'

class Eater extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showForm: false,
      isSeller: this.props.isSeller
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      showForm: !this.state.showForm,
      isSeller: !this.state.isSeller
    })
  }

  componentDidMount () {
    this.props.dispatch(getProfile())
  }

  render () {
    // this.props.dispatch(getProducts())
    const profile = this.props.user || {}
    return (
    // Navigation
      <div>
        {this.state.showForm ? <BecomeGrower />

          : <div className='profile'>
            <h3>Kia ora Eater</h3>
            {/* <h5>Thank you for registering with Buy My Kai <br />
              we are excited to have you as part of our community!</h5>
            <p>How to use the App</p> */}
            <div className="profile-info pure-u-1">
              <div>
                <h5>email</h5><p>{profile.email}</p>
                {/* <Button
                className="btn--fab"
                variant="extendedFab">
                <i className="fas fa-user-check"></i>
              </Button> */}
                <span className="pure-u-1">
                  <h5>Wanna become a grower? <Button onClick={this.handleClick}>Click here</Button></h5></span>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.currentUserReducer.user,
  pending: state.currentUserReducer.pending
})

export default connect(mapStateToProps)(Eater)
