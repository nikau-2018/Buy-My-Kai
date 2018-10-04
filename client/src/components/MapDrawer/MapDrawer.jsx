import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import {Button} from '@material-ui/core'
import {mapDraw} from '../../actions/mapDraw'

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}

const MapDrawer = ({isOpen, toggleDrawer, user}) => (
  <Drawer open={isOpen}>
    <div className="mapDraw">
      <h1>Grower Profile</h1>
      <p>User: {user && user.name}</p>
      <p>Email: {user && user.email} </p>
      <p>Bio: {user && user.description}</p>
      <p>Availability: {user && user.hours}</p>
      <Divider />
      <h3>Products</h3>
      <p>Item: {user && user.product_name}</p>
      <p>Description: {user && user.product_description}</p>
      <p>Price: {user && user.price}</p>
      <p>Quantity: {user && user.quantity}</p>
      <p>Organic: {user && user.organic ? 'Yes' : 'No'}</p>
      <Divider/>
      <Button onClick={() => toggleDrawer()}>
        Close
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

// const StyledDrower = withStyles(styles)(MapDrawer)

export default connect(mapStateToProps, mapDispatchToProps)(MapDrawer)
