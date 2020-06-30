import React, { Component } from 'react'

import pencil from '../../../icons/pencil.svg'
import './RoomSettings.css'

export class RoomSettings extends Component {

  incSpy() {
    this.props.changeSpies(1)
  }
  decSpy() {
    this.props.changeSpies(-1)
  }

  incTime() {
    this.props.changeTime(1)
  }
  decTime() {
    this.props.changeTime(-1)
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

  copyToClipboard() {
    const para = document.getElementsByClassName("MultiCode")[0]
    const oldText = para.innerHTML
    const text = para.innerHTML.substring(para.innerHTML.length - 4)
    navigator.clipboard.writeText(text)
    para.innerHTML = `${this.props.getText("copied")}`
    para.disabled = true
    setTimeout(() => {
      para.innerHTML = oldText
      para.disabled = false
    }, 2000)
  }

  render() {
    return (
      <div className="RoomSettings">
        <button className="MultiCode" onClick={this.copyToClipboard.bind(this)}> <img src={pencil} alt=""/> {this.props.getText("code")}: {this.props.room}</button>
        <div className="MultiOption MarginTop30">
          <p> {this.props.getText("spies")} </p>
          <div className="RightOption">
            { this.props.isAdmin && <button className="MultiBtnVal ValUp" onClick={this.incSpy.bind(this)}> + </button> }
            <p className="MultiSpies"> {this.props.spies} </p>
            { this.props.isAdmin && <button className="MultiBtnVal ValDown" onClick={this.decSpy.bind(this)}> - </button> }
          </div>
        </div>
        <div className="MultiOption">
          <p> {this.props.getText("gameLength")} </p>
          <div className="RightOption">
            { this.props.isAdmin && <button className="MultiBtnVal ValUp" onClick={this.incTime.bind(this)}> + </button> }
            <p className="MultiTime"> {this.props.time} </p>
            { this.props.isAdmin && <button className="MultiBtnVal ValDown" onClick={this.decTime.bind(this)}> - </button> }
          </div>
        </div>
        <button onClick={this.rdyBtn} className="MultiReady"> {this.props.getText("ready")} </button>
      </div>
    )
  }
}

export default RoomSettings
