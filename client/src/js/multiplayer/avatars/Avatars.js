import React, { Component } from 'react'

import Avatar from './Avatar.js'
import './Avatar.css'

export class Avatars extends Component {
  render() {
    return (
      <div className="Avatars">
        {this.props.users.map((user, i) => <Avatar key={i} user={user} getText={this.props.getText}/>)}
        <p></p>
      </div>
    )
  }
}

export default Avatars
