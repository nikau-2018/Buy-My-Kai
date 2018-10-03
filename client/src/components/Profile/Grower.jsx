import React from 'react'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'
// import {Link} from 'react-router-dom'
import '../../styles/styles.css'

import Addproduct from '../Product/Addproduct'
import {getProfile} from '../../actions/profile'
import {deleteProduct} from '../../actions/products'

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
    this.handleDelete = this.handleDelete.bind(this)
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

  handleDelete (e) {
    console.log(e.target.value)
    this.props.dispatch(deleteProduct(e.target.value))
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

            <ul className="profile-info pure-u-1">
            <div className="pure-u-1">
              <h5>Thank you for registering with Buy My Kai <br />
              we are excited to have you as part of our community!</h5>
              <h5>This is your profile page, here you'll find your registered details.<br/><br/>
              Please make sure they are up to date as this is what
              eaters will be seeing when they search your area on the map.</h5>
            </div><br/>
            <div className="pure-u-1-2">
              <Button onClick={this.handleEdit}>Edit</Button>
              <h5>Name</h5><p>{profile.name}</p>
              <h5>Email</h5><p>{profile.email}</p>
              <h5>Description</h5><p>{profile.description}</p>
              <h5>Address</h5><p>{profile.address}</p>
              <h5>Suburb</h5><p>{profile.suburb}</p>
              <h5>City</h5><p>{profile.city}</p>
              <h5>Availability</h5><p>{profile.hours}</p>
              </div>
              <div className="pure-u-1-2">
              <h5>My products</h5>
              <p>{this.props.product && this.props.product.map(product =>
                <div key={product.id}>{product.product_name} / Price: {product.price} / Quantity: {product.quantity}<button onClick={this.handleDelete} value={product.id}>Delete</button>
                </div>
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
