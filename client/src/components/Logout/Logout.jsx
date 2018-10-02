import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core'

import { logoutUser } from '../../actions/logout'

const Logout = (props) => {
console.log(props)
  return (
    <div>
      <Button
        className="btn--fab"
        variant="extendedFab"
        onClick={props.logoutUser}
      >
        <i className="fas fa-sign-out-alt"></i>Log out
      </Button>
      { <Redirect to="/" /> }
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(Logout)