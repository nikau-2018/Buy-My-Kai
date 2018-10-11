import React from 'react'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'
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
    const profile = this.props.user || {}
    return (
      <div className="container pure-u-1">
        {this.state.editForm ? <EditGrower />
          : <div className="profile">

            <h2>Kia ora Grower</h2>

            <div className="pure-u-1">
              <h5>Thank you for registering with Buy My Kai<br/>
                We are excited to have you as part of our community!</h5>
              <h5>This is your profile page. Where you can edit your details and add products.
                    Please make sure they are up to date as this is what
                    Eaters will be seeing when they search your area on the map. If you scroll down you'll see the Add Products button. Once you're happy with your profile click on Map in the navigation bar to see who else is growing in your area.
              </h5>
            </div><br/>

            <div className="pure-u-1">
              <Button className='btn btn-third' onClick={this.handleEdit}>Edit</Button>
              <h5><i className="fas fa-user fa-2x"></i><br/><br/><span>{profile.name}</span></h5><br/>
              <h5><i className="fas fa-envelope fa-2x"></i><br/><br/><span>{profile.email}</span></h5><br/>
              <h5><i className="far fa-smile fa-2x" ></i><br/><br/><span className="desc-grower">{profile.description}</span></h5><br/>
              <h5><i className="fas fa-home fa-2x"></i><br/><br/><span>{profile.address}</span><br/><span>{profile.suburb}</span><br/><span>{profile.city}</span><br/></h5><br/>
              <h5><i className="fas fa-clock fa-2x"></i><br/><br/><span>{profile.hours}</span></h5><br/>
              <h5><i className="fas fa-shopping-cart fa-2x"></i><br/><br />
                <div>
                  {this.props.product && this.props.product.map(product =>
                    <div className = "products" key={product.id}>{product.product_name}<br/>Price: {product.price}<br/>Quantity: {product.quantity}<br/><br />
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
    )
  }
}

const mapStateToProps = state => ({
  user: state.currentUserReducer.user,
  pending: state.currentUserReducer.pending,
  product: state.addproductReducer.product
})

export default connect(mapStateToProps)(Grower)
