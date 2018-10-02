import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import { mapDraw } from '../../actions/mapDraw';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const MapDrawer = ({ isOpen, toggleDrawer }) => (
  <Drawer open={isOpen}>
    <div>
      <h1>Hi, I'm Drawer :3</h1>
      <Button onClick={() => toggleDrawer()}>
        Close
    </Button>
    </div>
  </Drawer>
)

const mapStateToProps = (state) => ({
  isOpen: state.mapDrawer.isOpen,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    toggleDrawer: mapDraw,
  }, dispatch)
);

const StyledDrower = withStyles(styles)(MapDrawer);

export default connect(mapStateToProps, mapDispatchToProps)(StyledDrower);