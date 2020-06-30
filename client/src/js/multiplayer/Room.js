import React, { Component } from 'react'
import RoomSettings from './settings/RoomSettings.js'
import Chat from './chat/Chat.js'
import Avatars from './avatars/Avatars.js'
import ShowRole from './role/ShowRole.js'
import Timer from '../components/Timer.js'
import QuitIcon from '../../icons/door.svg'

export class Room extends Component {

  getGameLength() {
    return this.props.time
  }

  render() {
    return (
      <div className="Room">
        {this.props.screen === "game" && 
          <div className="Room1">
            <Chat sendMessage={this.props.sendMessage} 
              messages={this.props.messages} 
              users={this.props.users} 
              getText={this.props.getText}/>
            <RoomSettings playerReady={this.props.playerReady} 
              room={this.props.room} 
              getText={this.props.getText} 
              isAdmin={this.props.isAdmin} 
              playerAmount={this.props.users} 
              changeSpies={this.props.changeSpies} 
              changeTime={this.props.changeTime} 
              time={this.props.time} 
              spies={this.props.spies} />
          </div>
        }
        {this.props.screen === "roles" &&
          <ShowRole place={this.props.place}
            role={this.props.role} 
            playerReady={this.props.playerReady} 
            getText={this.props.getText} />}
        {this.props.screen === "timer" && 
          <div className="RoomTimer">
            <Chat sendMessage={this.props.sendMessage} 
              messages={this.props.messages} 
              users={this.props.users} 
              getText={this.props.getText}/>
            <div className="RoomTimerRight">
              <Timer 
                getGameLength={this.getGameLength.bind(this)} 
                getText={this.props.getText} 
                getOptions={this.props.getOptions}/>
            </div>
          </div>}
        <Avatars users={this.props.users} getText={this.props.getText} />
        <button className="QuitLobby" onClick={() => this.props.quitLobby()}> <img src={QuitIcon} alt="QUIT"/> </button>
      </div>
    )
  }
}

export default Room
