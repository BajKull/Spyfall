import React, { Component } from 'react'

import './ShowRole.css'

export class ShowRole extends Component {
  rdyBtn = (e) => {
    this.props.playerReady()
    if(e.target.className === "MultiReady2") {
      e.target.className = "MultiNotReady2"
      e.target.innerHTML = `${this.props.getText("notReady")}`
    }
    else {
      e.target.className = "MultiReady2"
      e.target.innerHTML = `${this.props.getText("ready")}`
    }
  }

  render() {
    return (
      <div className="MultiRole">
        <h1 className="PlaceBorder"> {this.props.place} </h1>
        <h2 className="RoleBorder"> {this.props.role} </h2>
        <button onClick={this.rdyBtn} className="MultiReady2"> {this.props.getText("ready")} </button>
      </div>
    )
  }
}

export default ShowRole
