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
      <p>User: <br/>
        {user && user.name}</p>
      <p>Email: <br/>
        {user && user.email} </p>
      <p>Bio: <br/>
        {user && user.description}</p>
      <p>Availability:<br/>
        {user && user.hours}</p>
      <Divider />
      <h3>Products</h3>
<<<<<<< HEAD
      <p>Item: <br/>
        {user && user.product_name}</p>
      <p>Description: <br/>
        {user && user.product_description}</p>
      <p>Price: <br/>
        {user && user.price}</p>
      <p>Quantity: <br/>
        {user && user.quantity}</p>
      <p>Organic: <br/>
        {user && user.organic ? 'Yea!' : 'No sorry'}</p>
=======
      <p>Item: {user && user.product_name}</p>
      <p>Description: {user && user.product_description}</p>
      <p>Price: {user && user.price}</p>
      <p>Quantity: {user && user.quantity}</p>
      <p>Organic: {user && user.organic ? 'Yes' : 'No'}</p>
>>>>>>> fabe16d81d7a127a374579db9b19165e90e29799
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
