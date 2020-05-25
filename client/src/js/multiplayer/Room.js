import React, { Component } from 'react'
import RoomSettings from './RoomSettings.js'
import Chat from './chat/Chat.js'
import Avatars from './avatars/Avatars.js'

export class Room extends Component {

  render() {
    return (
      <div className="Room">
        <div className="Room1">
          <RoomSettings playerReady={this.props.playerReady} room={this.props.room} getText={this.props.getText}/>
          <Chat sendMessage={this.props.sendMessage} messages={this.props.messages} users={this.props.users} getText={this.props.getText}/>
        </div>
        <Avatars users={this.props.users} getText={this.props.getText}/>
      </div>
    )
  }
}

export default Room
