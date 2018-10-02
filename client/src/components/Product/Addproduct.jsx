import React from 'react'
// import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {sendProduct} from '../../actions/products'

class Addproduct extends React.Component {
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
      <div>
        <h1>Add a Product</h1>
        <input name='productName'value={this.state.productName} placeholder='product name' onChange={this.handleChange}></input>
        <input name='price'value={this.state.price} placeholder='price' onChange={this.handleChange}></input>
        <input name='quantity'value={this.state.quantity} placeholder='quantity' onChange={this.handleChange}></input>
        <input name='productDescription'value={this.state.description} placeholder='description' onChange={this.handleChange}></input><br />
        <label>Organic</label>
        <input type='checkbox' name='organic' value={this.state.organic} onClick={this.handleOrganic}></input><br/>
        <label>Free-Range</label>
        <input type='checkbox' name='freerange' value={this.state.freerange} onClick={this.handleFreerange}></input><br/>
        <button onClick={this.handleSubmit}>Add</button>
        <div>{this.state.productSubmitted ? <p>Successfully added</p> : <div></div>}</div>

      </div>
    )
  }
}

export default connect()(Addproduct)
