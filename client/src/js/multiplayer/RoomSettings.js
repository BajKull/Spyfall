import React, { Component } from 'react'

export class RoomSettings extends Component {
  state = {
    spies: 1,
    time: 7
  }

  incSpy() {
    this.setState(({spies}) => ({
      spies: spies + 1
    }))
  }
  decSpy() {
    this.setState(({spies}) => ({
      spies: spies - 1
    }))
  }

  incTime() {
    this.setState(({time}) => ({
      time: time + 1
    }))
  }
  decTime() {
    this.setState(({time}) => ({
      time: time - 1
    }))
  }

  rdyBtn = (e) => {
    this.props.playerReady()
    if(e.target.className === "MultiReady") {
      e.target.className = "MultiNotReady"
      e.target.innerHTML = `${this.props.getText("notReady")}`
    }
    else {
      e.target.className = "MultiReady"
      e.target.innerHTML = `${this.props.getText("ready")}`
    }
  }

  render() {
    return (
      <div className="RoomSettings">
        <p className="MultiCode"> {this.props.getText("roomCode")}: {this.props.room}</p>
        <div className="MultiOption">
          <p> {this.props.getText("spies")} </p>
          <button className="MultiBtnVal" onClick={this.incSpy.bind(this)}> + </button>
          <p style={{float: 'right'}}> {this.state.spies} </p>
          <button className="MultiBtnVal" onClick={this.decSpy.bind(this)}> - </button>
        </div>
        <div className="MultiOption">
          <p> {this.props.getText("gameLength")} </p>
          <button className="MultiBtnVal" onClick={this.incTime.bind(this)}> + </button>
          <p style={{float: 'right'}}> {this.state.time} </p>
          <button className="MultiBtnVal" onClick={this.decTime.bind(this)}> - </button>
        </div>
        <button onClick={this.rdyBtn} className="MultiReady"> {this.props.getText("ready")} </button>
      </div>
    )
  }
}

export default RoomSettings
