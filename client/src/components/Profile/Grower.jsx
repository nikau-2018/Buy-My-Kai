import React from 'react'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'
// import {Link} from 'react-router-dom'
import '../../styles/styles.css'

import Addproduct from '../Product/Addproduct'
import {getProfile} from '../../actions/profile'

import EditGrower from '../Profile/EditGrower'

class Grower extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showForm: false,
      editForm: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleClick () {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  handleEdit () {
    this.setState({
      editForm: !this.state.editForm
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
        {this.state.editForm ? <EditGrower />
          : <div className='profile'>

            <h3>Kia ora Grower</h3>
            {/* <h5>Thank you for registering with Buy My Kai <br />
              we are excited to have you as part of our community!</h5>
            <p>This is your profile page, here you'll find your registered details.<br/><br/>
              Please make sure they are up to date as this is what
              eaters will be seeing when they search your area on the map.</p> */}
            <ul className="profile-info pure-u-1">
              <div>
                {/* <Button onClick={this.handleEdit}>Edit</Button> */}
                <h5>name</h5><p>{profile.name}</p>
                <h5>email</h5><p>{profile.email}</p>
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
            </ul>

            {/* Add Products Component Render */}
            <div className='add-product pure-u-1'>
              {this.state.showForm ? <Addproduct /> : <div></div>}
            </div>

          </div>
        }
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
