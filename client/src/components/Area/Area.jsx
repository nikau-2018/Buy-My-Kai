import React from 'react'
// import {Redirect} from 'react-router-dom'
import {sendNeighbourhood} from '../../actions/'

class Area extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      neighbourhood: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress (target) {
    if (target.charCode === 13) {
      this.sendNeighbourhood()
    }
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendNeighbourhood () {
    this.setState({
      neighbourhood: this.state.neighbourhood
    })
    this.props.dispatch(sendNeighbourhood(this.state))
  }

  render () {
    return (
      <div>
        <h1>Search For Growers</h1>
        <input type="text" name='neighbourhood' value={this.state.neighbourhood} placeholder='Suburb' onChange={this.handleChange} onKeyPress={this.handleKeyPress}/><br/>
      </div>
    )
  }
}

export default Area
