import React from 'react'
import {sendNeighbourhood} from '../../actions/area'
import {connect} from 'react-redux'
import List from './List'

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
    return (
      <div>
        <h1>Search For Growers</h1>
        <input type="text" name='suburb' value={this.state.suburb} placeholder='Suburb' onChange={this.handleChange}/><br/>
        <button onClick={this.handleClick}>search</button>
        <div>{this.props.growersList && this.props.growersList.map(list =>
          <List key={list.id} list={list}/>
        )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    growersList: state.areaReducer.growersList
  }
}

export default connect(mapStateToProps)(Area)
