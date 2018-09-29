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
    this.props.dispatch(sendNeighbourhood(this.state))
  }

  render () {
    console.log('jsx:', this.props.details)
    return (
      <div>
        <h1>Search For Growers</h1>
        <input type="text" name='suburb' value={this.state.suburb} placeholder='Suburb' onChange={this.handleChange}/><br/>
        <button onClick={this.handleClick}>search</button>
        <div>{this.props.details.map(suburbData =>
          <div key={suburbData.id}>{suburbData.name}</div>
        )}
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  console.log('statejsx', state)
  return {
    details: state.details
  }
}

export default connect(mapStateToProps)(Area)
