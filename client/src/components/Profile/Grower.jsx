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
                <h5>Thank you for registering with Buy My Kai<br/>
                We are excited to have you as part of our community !</h5>
                {/* <h5>This is your profile page, here you will find your registered details.<br/>
              Please make sure they are up to date as this is what
              eaters will be seeing when they search your area on the map.</h5> */}
              </div><br/>

              <div className="pure-u-1">
                <Button className='btn btn-third' onClick={this.handleEdit}>Edit</Button>
                <h5><i className="fas fa-user fa-2x"></i><br/><br/><span>{profile.name}</span></h5><br/>
                <h5><i className="fas fa-envelope fa-2x"></i><br/><br/><span>{profile.email}</span></h5><br/>
                <h5><i className="far fa-smile fa-2x"></i><br/><br/><span>{profile.description}</span></h5><br/>
                <h5><i className="fas fa-home fa-2x"></i><br/><br/><span>{profile.address}</span><br/><span>{profile.suburb}</span><br/><span>{profile.city}</span><br/></h5><br/>
                <h5><i className="fas fa-clock fa-2x"></i><br/><br/><span>{profile.hours}</span></h5><br/>
                <h5><i className="fas fa-shopping-cart fa-2x"></i>
                  <div>
                    {this.props.product && this.props.product.map(product =>
                      <div key={product.id}><li><b>{product.product_name}</b><br/>Price: {product.price}<br/>Quantity: {product.quantity}</li>
                        <Button className='btn btn-forth' onClick={this.handleDelete} value={product.id}>Delete</Button>
                      </div>
                    )}
                  </div></h5>
                <Button className='btn btn-third'
                  onClick={this.handleClick}><i className="fas fa-plus"></i>Add Products
                </Button >
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
