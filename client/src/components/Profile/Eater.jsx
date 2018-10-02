import React from 'react'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import '../../styles/styles.css'

import {getProfile} from '../../actions/profile'

import Nav from '../Nav/Nav'

class Eater extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showForm: false
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      showForm: !this.state.showForm
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
      <div className='profile'>
        <div className="pure-img background"></div>
        <div className='container pure-u-1-1 pure-u-md-1-2'>
          <div className="btn--nav">
            <Link to="/profile">
              <Button>
                <i className="far fa-user fa-3x"></i>
              </Button>
            </Link>
            <Link to="/neighbourhood">
              <Button>
                <i className="far fa-map fa-3x"></i>
              </Button>
            </Link>

            {/* Eater Information */}
          </div>
          <div className='profile-info pure-u-1-1 pure-u-md-1-2'>
            <h3>Kia ora Eater</h3>
            <h5>Thank you for registering with Buy My Kai <br />
              we are excited to have you as part of our community!</h5>
            <p>How to use the App</p>
            <div className="profile-info pure-u-1">
              <div>
                <h5>email</h5><p>{profile.email}</p>
                <Button
                  className="btn--fab"
                  variant="extendedFab"
                >
                  <i className="fas fa-user-check"></i>
                </Button>
                <span className="fab-label--right">Wanna become a grower? Click here</span>
              </div></div>
            {/* // Another Navigation */}
            <div className='backtotop  pure-u-1'>
              <a href="#top">Return to top</a>
            </div>
            <div className='nav-bar'>
              <Nav />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.currentUserReducer.user,
  pending: state.currentUserReducer.pending
})

export default connect(mapStateToProps)(Eater)
