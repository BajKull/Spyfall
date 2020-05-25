import React, { Component } from 'react'

export class Main extends Component {
  render() {
    return (
      <div className='MenuStyle'>
        <button className="MenuButton" onClick={() => this.props.changeScreen("create")}> {this.props.getText("createGame")} </button>
        <button className="MenuButton" onClick={() => this.props.changeScreen("join")}> {this.props.getText("joinGame")} </button>
        <button className="MenuButton" onClick={() => this.props.btnChangeScreen("menu")}> {this.props.getText("mainMenu")} </button>
      </div>
    )
  }
}

export default Main
