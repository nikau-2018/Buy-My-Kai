import React from 'react'
import {sendNeighbourhood} from '../../actions/area'
import {connect} from 'react-redux'
import List from './List'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

import './styles.css'

const DEFAULT_CENTER = [-36.848, 174.763]

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
    const growers = this.props.growersList || [] // short hand and checking if griwerList is undefinf we assined an empty array
    const center = growers.length ? [growers[0].lat, growers[0].long] : DEFAULT_CENTER

    return (
      <div className="pure-u-1">
        <h1>Search For Growers</h1>
        <input type="text" name='suburb' value={this.state.suburb} placeholder='Suburb' onChange={this.handleChange} /><br />
        <button onClick={this.handleClick}>search</button>
        <div>{growers.map(list =>
          <List key={list.id} list={list} />
        )}</div>
        <Map className="Leaflet" center={center} zoom={13}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {growers.length && growers.map(({
            id,
            lat,
            long,
            hours,
            name,
            description
          }) => (
            <Marker key={id} position={[lat, long]}>
              <Popup>
                <div>{name}</div>
                <div>{description}</div>
              </Popup>
            </Marker>
          ))}
        </Map>
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
