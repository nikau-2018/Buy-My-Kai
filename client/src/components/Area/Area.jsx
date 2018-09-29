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
      .then(res => this.setState({
        suburb: res.data.result
      }))
  }

  render () {
    return (
      <div>
        <h1>Search For Growers</h1>
        <input type="text" name='suburb' value={this.state.suburb} placeholder='Suburb' onChange={this.handleChange}/><br/>
        <button onClick={this.handleClick}>search</button>
        {/* <div>{this.props.suburb.map((item, i) => {
          return (
            <p key={i}>{item}</p>
          )
        })}
        </div> */}
      </div>

    )
  }
}

const mapStateToProps = (state, props) => {
  console.log('props', props)
  return {
    suburb: state.suburb
  }
}

export default connect(mapStateToProps)(Area)
