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
    <div>
      <h1>Grower Profile</h1>
      <p>{user && user.name}</p>
      <p>{user && user.email} </p>
      <p>{user && user.description}</p>
      <p>{user && user.hours}</p>
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
    user = state.areaReducer.growersList.find(grower => grower.id === id)
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

const StyledDrower = withStyles(styles)(MapDrawer)

export default connect(mapStateToProps, mapDispatchToProps)(StyledDrower)