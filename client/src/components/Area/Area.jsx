import React from 'react'
import { sendNeighbourhood } from '../../actions/area'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import List from './List'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import '../../styles/styles.css'
import './styles.css'

import Nav from '../Nav/Nav'
import logo from '../../images/logo-4.png'

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
      <div className="home">
        <div className="pure-img background"></div>
        <div className="container pure-u-1">
          <Link to='/'>
            <img className="pure-img logo-small" src={logo} />
          </Link>
          <div className='nav-bar'>
            <Nav />
          </div>
          <h3>Search For Growers</h3>
          <div className="pure-form pure-u-1">
            <input
              type="text"
              className="pure-input-rounded"
              placeholder="Suburb"
              name='suburb'
              margin="normal"
              value={this.state.suburb}
              onChange={this.handleChange} /><br/>
            <button className="btn btn-secondary" onClick={this.handleClick}>SEARCH</button>
            <div>{growers.map(list =>
              <List key={list.id} list={list} />
            )}</div>
          </div>
          <div className="map">
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
          <div className='backtotop  pure-u-1'>
            <a href="#top">Return to top</a>
          </div>
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
