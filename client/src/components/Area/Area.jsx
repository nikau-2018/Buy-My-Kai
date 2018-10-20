import {Button} from '@material-ui/core'
import React from 'react'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {sendNeighbourhood} from '../../actions/area'
import {mapDraw} from '../../actions/mapDraw'

import MapDrawer from '../MapDrawer/MapDrawer'
import Nav from '../Nav/Nav'
import {selectUser} from '../../actions/userprofile'

import logo from '../../images/logo-4.png'
import '../../styles/styles.css'

import './styles.css'

// const customMarker = L.icon({iconUrl: require('../ShowMap/marker-images/marker-icon-2x-vege.png')})

const DEFAULT_CENTER = [-36.848, 174.763]

class Area extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      suburb: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.openDrawer = this.openDrawer.bind(this)
  }

  handleClick () {
    this.sendNeighbourhood(this.state.suburb)
    this.setState({
      suburb: ''
    })
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendNeighbourhood () {
    this.props.dispatch(sendNeighbourhood(this.state.suburb))
  }

  openDrawer () {
    this.props.dispatch(mapDraw())
  }

  handleUser (id) {
    this.props.dispatch(selectUser(id))
  }

  render () {
    const growers = this.props.growersList || []
    const center = growers.length ? [growers[0].lat, growers[0].long] : DEFAULT_CENTER

    return (
      <div className="area">
        <MapDrawer />
        <div className="header">
          <Link to='/'>
            <img className="pure-img area-logo" src={logo} />
          </Link>
          <div className="nav-bar">
            <Nav />
          </div>
        </div>
        <div className="container pure-u-1">
          <div className="pure-img background-profile"></div>
          <div className="pure-form pure-u-1">
            <h2>Search For Growers</h2>
            <div className="pure-form pure-u-1">
              <input
                type="text"
                className="pure-input-rounded"
                placeholder="Suburb e.g. Belmont"
                name='suburb'
                margin="normal"
                value={this.state.suburb}
                onChange={this.handleChange} />
              <button className="btn btn-primary" onClick={this.handleClick}>SEARCH</button>
            </div></div>
          <div className="map">
            <Map className="Leaflet" center={center} zoom={13}>
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {growers.length && growers.map(({
                user_id,
                lat,
                long,
                hours,
                name,
                description,
                email,
                category,
                product_name
              }) => (
                <Marker onClick={() => this.handleUser(user_id)} key={user_id} position={[lat, long]}>
                  <Popup className="popupMap">
                    <Button className="popupButton" value={user_id} onClick={this.openDrawer}>{product_name}</Button>
                  </Popup>
                </Marker>
              ))}
            </Map>
          </div>
          <div className='backtotop  pure-u-1'>
            <a href="#top"><h5> Return to top <i className="fas fa-caret-up"></i></h5></a>
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
