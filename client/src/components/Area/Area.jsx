import React from 'react'
import {sendNeighbourhood} from '../../actions/area'
import {connect} from 'react-redux'
import List from './List'
import {Map, TileLayer} from 'react-leaflet'

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
    const growersList = this.props.growersList || []
    // console.log('jsx:', this.props.growersList)

    return (
      <div>
        <div>
          <h1>Search For Growers</h1>
          <input type="text" name='suburb' value={this.state.suburb} placeholder='Suburb' onChange={this.handleChange} /><br />
          <button onClick={this.handleClick}>search</button>
          <div>{growersList.map(list =>
            <List key={list.id} list={list} />
          )}
          </div>

          <div className='leaflet-container'>
            <Map center={[-36.848461, 174.763336]} zoom={15}>
              <TileLayer
                url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                maxZoom='18'
                id='mapbox.streets'
                accessToken='pk.eyJ1IjoiYnJvbmJ1cmd1bmR5IiwiYSI6ImNqanJ3N3hlYzhvb2sza2xmdGZocmwzMHgifQ.W5lq17kl4kLbi4qmQ1DNrg'
              />
              {/* <div className='marker'>
              {growersList.map(x => console.log(x, 33) ||
            <Marker position={[x.id]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
              )
              }
            </div> */}
            </Map>
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
