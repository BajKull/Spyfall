import React, { Component } from 'react'

import Avatar from './Avatar.js'

export class Avatars extends Component {
  render() {
    return (
      <div className="Avatars">
        {this.props.users.map((user, i) => <Avatar key={i} user={user} />)}
      </div>
    )
  }
}

export default Avatars
