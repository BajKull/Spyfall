import React, { Component } from 'react'


export class Avatar extends Component {
  render() {
    return (
      <div className="Avatar">
        <p className="AvatarName" style={{color: `${this.props.user.color}`}}> {this.props.user.name} </p>
        {this.props.user.ready ? <p className="AvatarReady"> {this.props.getText("ready")} </p> : <p className="AvatarReady2"> {this.props.getText("notReady")} </p>}
        {this.props.user.promoted ? <p className="AvatarPromoted">⋆</p> : null}
      </div>
    )
  }
}

export default Avatar
