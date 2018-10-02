import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import mapDraw from '../../actions/mapDraw';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const MapDrawer = ({ classes, isOpen }) => (
  <Drawer open={isOpen}>
    <div>
      <h1>Hi, I'm Drawer :3</h1>
      <Button onClick={() => this.toggleDrawer(false)}>
        Close
    </Button>
    </div>
  </Drawer>
)

MapDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
  return {
    isOpen: state.mapDrawReducer.isOpen
  }
}

const StyledDrower = withStyles(styles)(MapDrawer);

export default connect(mapStateToProps)(StyledDrower);