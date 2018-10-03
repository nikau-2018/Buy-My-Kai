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
      <div className="grower">
        <div className="container pure-u-1">
          {this.state.editForm ? <EditGrower />
            : <div className='profile'>

              <h2>Kia ora Grower</h2>

              <div className="pure-u-1">
                <h5>Thank you for registering with Buy My Kai</h5>
                <h5>We are excited to have you as part of our community!</h5>
                <h5>This is your profile page, here you'll find your registered details.<br/>
              Please make sure they are up to date as this is what
              eaters will be seeing when they search your area on the map.</h5>
              </div><br/>

              <div className="pure-form pure-u-1">
                {/* <Button onClick={this.handleEdit}>Edit</Button> */}
                <p><i className="fas fa-user"></i><span>{profile.name}</span></p>
                <p><i className="fas fa-envelope"></i><span>{profile.email}</span></p>
                <p><i className="fas fa-comment"></i><span>{profile.description}</span></p>
                <p><i className="fas fa-home"></i><span>{profile.address}</span>,<span>{profile.suburb}</span><span>{profile.city}</span></p>
                <p><i className="fas fa-clock"></i><span>{profile.hours}</span></p>
                <p><i className="fas fa-shopping-cart"></i></p>
                <p>
                  {this.props.product && this.props.product.map(product =>
                    <div key={product.id}>{product.product_name} / Price: {product.price} / Quantity: {product.quantity}<br/>
                      <button className='btn btn-forth' onClick={this.handleDelete} value={product.id}>Delete</button>
                    </div>
                  )}
                  <Button className='btn btn-third'
                    onClick={this.handleClick}>Add Products
                  </Button >
                </p>
              </div>
              <div className='add-product pure-u-1'>
                {this.state.showForm ? <Addproduct /> : <div></div>}
              </div>
            </div>

          }
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

export default connect(mapStateToProps)(Grower)
