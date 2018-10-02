import React from 'react'
import { sendNeighbourhood } from '../../actions/area'
import { connect } from 'react-redux'
import List from './List'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Button } from '@material-ui/core';
import { mapDraw } from '../../actions/mapDraw';
import '../../styles/styles.css';
import './styles.css';

import Nav from '../Nav/Nav';
import MapDrawer from '../MapDrawer/MapDrawer'

const DEFAULT_CENTER = [-36.848, 174.763]

class Area extends React.Component {
  state = {
    suburb: ''
  }

  handleClick = () => {
    this.sendNeighbourhood(this.state.suburb)
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendNeighbourhood() {
    this.props.dispatch(sendNeighbourhood(this.state.suburb))
  }

  openDrawer = () => {
    this.props.dispatch(mapDraw())
  }

  render() {
    const growers = this.props.growersList || [] // short hand and chmapDrowif griwerList is undefinf we assined an empty array
    const center = growers.length ? [growers[0].lat, growers[0].long] : DEFAULT_CENTER

    return (
      <div className="home">
        <MapDrawer />
        <div className="pure-img background"></div>
        <div className="container pure-u-1-1 pure-u-md-1-2">
          <h3>Search For Growers</h3>
          <div className="pure-form pure-u-1">
            <input
              type="text"
              className="pure-input-rounded"
              placeholder="Suburb"
              name='suburb'
              margin="normal"
              value={this.state.suburb}
              placeholder='Suburb'
              onChange={this.handleChange} /><br />
            <button className="btn btn--primary" onClick={this.handleClick}>search</button>
            <div>{growers.map(list =>
              <List key={list.id} list={list} />
            )}</div>
          </div>
          <div className="map pure-u-1-1 pure-u-md-1-2">
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
                      <Button onClick={this.openDrawer}>More info</Button>
                    </Popup>
                  </Marker>
                ))}
            </Map>
          </div>
          <div className='backtotop  pure-u-1'>
            <a href="#top">Return to top</a>
          </div>
          <div className='nav-bar'>
            <Nav />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    growersList: state.areaReducer.growersList,
  }
}
export default connect(mapStateToProps)(Area)
