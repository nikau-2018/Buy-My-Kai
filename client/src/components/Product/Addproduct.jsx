import React from 'react'
// import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {sendProduct} from '../../actions/products'

export class Addproduct extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      productName: '',
      price: '',
      quantity: '',
      productDescription: '',
      organic: false,
      freerange: false,
      productSubmitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleOrganic = this.handleOrganic.bind(this)
    this.handleFreerange = this.handleFreerange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOrganic (e) {
    this.setState({
      organic: !this.state.organic
    })
  }

  handleFreerange (e) {
    this.setState({
      freerange: !this.state.freerange
    })
  }

  handleSubmit () {
    this.props.dispatch(sendProduct(this.state))
    this.setState({
      productSubmitted: !this.state.productSubmitted
    })
  }

  render () {
    return (
      <div className='container pure-u-1'>
        {/* <h5>Add a Product</h5> */}
        <div className="pure-form pure-u-1">
          <div className='productname'>
            <input
              type="text"
              className="pure-input-rounded"
              name='productName'
              value={this.state.productName}
              placeholder='Product name'
              onChange={this.handleChange}></input>
          </div>
          <div className='price'>
            <input
              type="text"
              className="pure-input-rounded"
              name='price'
              value={this.state.price}
              placeholder='Price'
              onChange={this.handleChange}></input>
          </div>
          <div className='price'>
            <input
              name='quantity'
              className="pure-input-rounded"
              value={this.state.quantity}
              placeholder='Quantity'
              onChange={this.handleChange}></input>
          </div>
          <div className='price'>
            <input
              name='productDescription'
              className="pure-input-rounded"
              value={this.state.description}
              placeholder='Description'
              onChange={this.handleChange}></input>
          </div>
          <div className="organic">
            <h5>Organic</h5>
            <input
              className="checkbox pure-input-rounded pure-u-1"
              type='checkbox'
              name='organic'
              value={this.state.organic}
              onClick={this.handleOrganic}></input>
          </div>

          <button className='btn btn-third' onClick={this.handleSubmit}>Add</button>
          <div>{this.state.productSubmitted ? <h5>Successfully added</h5> : <div></div>}</div>
        </div>
      </div>
    )
  }
}

export default connect()(Addproduct)
