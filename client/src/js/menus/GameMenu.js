import React, { Component } from 'react'
import MainMenu from './MainMenu.js'
import ConfigMenu from './ConfigMenu.js'
import '../../css/GameMenu.css'
import '../../css/Button.css'

export class GameMenu extends Component {
  state = {
    main: true
  }
  
  btnNewGame() {
    this.setState({main: !this.state.main})
  }
  btnPrevious() {
    this.setState({main: !this.state.main})
  }

  render() {
    return (
      <div className="GameMenu">
        {this.state.main ?  
          <MainMenu btnChangeScreen = {this.props.btnChangeScreen} btnNewGame = {this.btnNewGame.bind(this)} getText={this.props.getText}/> : 
          <ConfigMenu  btnPrevious = {this.btnPrevious.bind(this)} btnChangeScreen = {this.props.btnChangeScreen} setGameInfo={this.props.setGameInfo} getText={this.props.getText}/>
        }
      </div>
    )
  }
}



export default GameMenu
