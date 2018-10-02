import React from 'react'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import '../../styles/styles.css'

import Addproduct from '../Product/Addproduct'
import {getProfile} from '../../actions/profile'
import {getProducts} from '../../actions/products'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showForm: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  componentDidMount () {
    this.props.dispatch(getProfile())
    this.props.dispatch(getProducts())
  }

  render () {
    const profile = this.props.user || {}
    return (
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
          </div>

          <div className='profile-info pure-u-1-1 pure-u-md-1-2'>
            <h3>Kia ora Grower</h3>
            <h5>Thank you for registering with Buy My Kai <br />
              to share your fruit and veg with your community!</h5>
            <p>Here you will find your registered details, <br />
              please make sure they are up to date as this is what<br />
              Eaters will be seeing when they search your area</p>
            <ul className="profile-info pure-u-1">
              {profile.isSeller
                ? <div>
                  <p>{profile.description}</p>
                  <p>{profile.address}</p>
                  <p>{profile.suburb}</p>
                  <p>{profile.city}</p>
                  <p>{profile.postcode}</p>
                  <p>{profile.hours}</p>
                  <p><strong>My Products:</strong><br/><br/>{this.props.product && this.props.product.map(product =>
                    <p key={product.id}>{product.product_name}</p>
                  )}</p>
                  <Button
                    onClick={this.handleClick}
                    className="btn--fab"
                    variant="extendedFab">
                    <i className="fas fa-plus"></i>
                  </Button >
                </div>
                : <div>
                  <li><p><strong>Email:</strong> {profile.email}</p></li>
                  <li>
                    <Button
                      className="btn--fab"
                      variant="extendedFab"
                    >
                      <i className="fas fa-user-check"></i>
                    </Button>
                    <span className="fab-label--right">$$tart your own side hustle - Become a $eller today!</span>
                  </li>
                </div>
              }
            </ul>
            <div>
              {this.state.showForm ? <Addproduct /> : <div></div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.currentUserReducer.user,
  pending: state.currentUserReducer.pending,
  product: state.addproductReducer.product
})

export default connect(mapStateToProps)(Profile)
