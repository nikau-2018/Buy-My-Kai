import React from 'react'
// import {Redirect} from 'react-router-dom'
import { sendNeighbourhood } from '../../actions/area'
import { connect } from 'react-redux'
import List from './List'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import './styles.css';

class Area extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      suburb: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.sendNeighbourhood(this.state.suburb)
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendNeighbourhood() {
    this.props.dispatch(sendNeighbourhood(this.state))
    // .then(setTimeout(this.setState({
    //   ready: true
    // }), 5500
    // ))
  }

  render() {
    // console.log('jsx:', this.props.growersList)
    return (
      <div>
        <h1>Search For Growers</h1>
        <input type="text" name='suburb' value={this.state.suburb} placeholder='Suburb' onChange={this.handleChange} /><br />
        <button onClick={this.handleClick}>search</button>
        <div>{this.props.growersList && this.props.growersList.map(list =>
          <List key={list.id} list={list} />

        )}</div>
        <Map className="Leaflet" style={{ position: 'absolute' }} center={[-36.848461, 174.763336]} zoom={15}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-36.848461, 174.763336]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          </Marker>
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