import React from 'react'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'

import {logoutUser} from '../../actions/logout'

const Logout = (props) => {
  const {isLoggedIn} = props
  return (
    <div>
      <Button
        className="btn--fab"
        variant="extendedFab"
        onClick={props.logoutUser}
      >
        <i className="fas fa-sign-out-alt"></i>Log out
      </Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(Logout)
