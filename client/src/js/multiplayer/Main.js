import React, { Component } from 'react'

import settings from '../../icons/settings.svg'
import door from '../../icons/door.svg'
import create from '../../icons/create.svg'

export class Main extends Component {
  render() {
    return (
      <div className='MenuStyle'>
        <button className="MenuButton" onClick={() => this.props.changeScreen("create")}> <img src={create} alt="" className="SPIcon"/> {this.props.getText("createGame")} </button>
        <button className="MenuButton" onClick={() => this.props.changeScreen("join")}> <img src={door} alt="" className="SPIcon"/> {this.props.getText("joinGame")} </button>
        <button className="MenuButton MarginTop10" onClick={() => this.props.btnChangeScreen("menu")}> <img src={settings} alt="" className="SPIcon"/> {this.props.getText("mainMenu")} </button>
      </div>
    )
  }
}

export default Main
