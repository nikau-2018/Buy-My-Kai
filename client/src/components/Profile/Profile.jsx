import React from 'react'
import {connect} from 'react-redux'
import '../../styles/styles.css'

import Grower from './Grower'
import Eater from './Eater'

class Profile extends React.Component {
  render () {
    const profile = this.props.user || ''
    return (
      <div>
        {profile.isSeller
          ? <Grower />
          : <Eater />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.currentUserReducer.user,
  pending: state.currentUserReducer.pending
})

export default connect(mapStateToProps)(Profile)
