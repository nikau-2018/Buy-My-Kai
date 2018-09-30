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
    const growersList = this.props.growersList || [];
    // console.log('jsx:', this.props.growersList)
    return (
      <div className='container'>
        <h1>Search For Growers</h1>
        <input type="text" name='suburb' value={this.state.suburb} placeholder='Suburb' onChange={this.handleChange} /><br />
        <button onClick={this.handleClick}>search</button>
        <div>{growersList.map(list =>
          <List key={list.id} list={list} />
        )}</div>

        <div className='map'>
          <Map center={[-36.848461, 174.763336]} zoom={12}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <div className='marker'>
              <Marker className='belmont' position={[-36.80506470, 174.78860850]}>
                <Popup><button>Belmont</button></Popup>
              </Marker>
              <Marker className='takapuna' position={[-36.78792290, 174.76882070]}>
                <Popup><button>Takapuna</button></Popup>
              </Marker>
              <Marker className='newmarket' position={[-36.86983670, 174.77758010]}>
                <Popup><button onClick={this.handleClick} value={this.state.suburb} onChange={this.handleChange}>New Market</button>
                </Popup>
              </Marker>
              <Marker className='ponsonby' position={[-36.84877790, 174.73806630]}>
                <Popup><button>Ponsonby</button></Popup>
              </Marker>
            </div>
          </Map>
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