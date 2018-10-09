import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import {Button} from '@material-ui/core'
import {mapDraw} from '../../actions/mapDraw'

const MapDrawer = ({isOpen, toggleDrawer, user}) => (
  <Drawer open={isOpen}>
    <div className="mapDraw">
      <h1><i className="fas fa-user fa-1x"></i></h1>
      <p>{user && user.name}</p>
      <p>{user && user.email} </p>
      <p>{user && user.description}</p>
      <p>Available on {user && user.hours}</p>
      <h1><i className="fas fa-shopping-cart fa-1x"></i></h1>
      <p>{user && user.product_name}</p>
      <p>{user && user.product_description}</p>
      <p>Price: {user && user.price}</p>
      <p>Quantity: {user && user.quantity}</p>
      <p>Organic: {user && user.organic ? 'Yep!' : 'No'}</p>
      <Divider/>
      <Button onClick={() => toggleDrawer()}>
        Back To Map
      </Button>
    </div>
  </Drawer>
)

const mapStateToProps = (state) => {
  const id = state.selectedUser
  let user = null
  if (id) {
    user = state.areaReducer.growersList.find(grower => grower.user_id === id)
  }
  return {
    isOpen: state.mapDrawer.isOpen,
    user
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    toggleDrawer: mapDraw
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MapDrawer)
