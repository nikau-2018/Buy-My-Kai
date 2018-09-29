import React from 'react'
// import {Redirect} from 'react-router-dom'
import {sendNeighbourhood} from '../../actions/area'
import {connect} from 'react-redux'

class Area extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      suburb: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.sendNeighbourhood(this.state.suburb)
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendNeighbourhood () {
    this.setState({
      suburb: this.state.suburb
    })
    this.props.dispatch(sendNeighbourhood(this.state))
  }

  render () {
    return (
      <div>
        <h1>Search For Growers</h1>
        <input type="text" name='suburb' value={this.state.suburb} placeholder='Suburb' onChange={this.handleChange}/><br/>
        <button onClick={this.handleClick}>search</button>
        <p></p>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    suburb: state.suburb
  }
}

export default connect(mapStateToProps)(Area)
