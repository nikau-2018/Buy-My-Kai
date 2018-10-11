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
          : <div className="eater">
            <div className="container pure-u-1">
              <h2>Kia ora Eater</h2>
              <div className="pure-u-1">
                <p>Thank you for registering with Buy My Kai<br/>
                We are excited to have you as part of our community!</p>
                <p>This is your profile page. Because you've signed up as an Eater you won't see much on your profile. Head to the map in your menu and check out some Growers in your area.</p>
                <h5>How to use the map</h5>
                <p>When you see a product you're keen on, click the marker and then product in the popup, this will pull up their profile on the left of your screen. Best way to contact Growers is through their email address which you'll find on their profile. Enjoy!
                </p></div>
              <span className="pure-u-1">
                <p>Wanna become a Grower? It's super easy! Just click the button below</p>
                <Button className='btn btn-third' onClick={this.handleClick}>Become a Grower</Button></span>
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
