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
  }

  render () {
    this.props.dispatch(getProducts())
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
              we are excited to have you as part of our community!</h5>
            <p>This is your profile page, here you'll find your registered details.<br/><br/>
              Please make sure they are up to date as this is what
              eaters will be seeing when they search your area on the map.</p>
            <ul className="profile-info pure-u-1">
              {profile.isSeller
                ? <div>
                  <h5>description</h5><p>{profile.description}</p>
                  <h5>address</h5><p>{profile.address}</p>
                  <h5>suburb</h5><p>{profile.suburb}</p>
                  <h5>city</h5><p>{profile.city}</p>
                  <h5>availability</h5><p>{profile.hours}</p>
                  <h5>my products</h5>
                  <p>{this.props.product && this.props.product.map(product =>
                    <p key={product.id}>{product.product_name}<br/>{product.price}: {product.quantity}</p>
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
