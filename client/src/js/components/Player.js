import React, { Component } from 'react'

export class Player extends Component {
  state = {
    nextPhase: false,
    nextPlayer: false,
    player: 0,
    place: '?',
    role: '?',
  }
  
  updateInfo() {
    const [place, role] = this.props.getPlayerInfo()
    this.setState(({nextPlayer}) => ({
      nextPlayer: !nextPlayer,
      place: place,
      role: role
    }))
  }

  changeButton() {
    this.setState(({nextPlayer, player}) => ({
      nextPlayer: !nextPlayer,
      player: player + 1,
      place: '?',
      role: '?'
    }))
    if(this.state.player === this.props.getMaxPlayers() - 1) {
      this.setState({
        nextPhase: true
      })
    }
  }

  resetGame() {
    this.setState({
      nextPhase: false,
      nextPlayer: false,
      player: 0,
      place: '?',
      role: '?'
    })
    this.props.gameInit()
  }

  render() {
    return (
      <div className="Roles">
        
        {this.state.nextPhase ? 
          <div className="Roles">
            <h1 className="MarginTop1"> {this.props.getText("rolesAsigned")} </h1>
            <button className="LightButton2" onClick={this.props.startGame}> {this.props.getText("startGame")} </button>
          </div> :
          <div className="Roles">
            <h4 className="MarginTop1"> {this.props.getText("player")}: { this.state.player + 1 } </h4>
            <h1 className="PlaceBorder"> { this.state.place } </h1>
            <h2 className="RoleBorder"> { this.state.role } </h2>
            {this.state.nextPlayer ? 
              <button className="LightButton"  onClick={this.changeButton.bind(this)} > {this.props.getText("ok")} </button> :
              <button className="LightButton"  onClick={this.updateInfo.bind(this)} > {this.props.getText("showInfo")} </button>
            }
          </div>
          
        }
        <button className="DarkButton" onClick={this.resetGame.bind(this)}> {this.props.getText("newGame")} </button>
        <button className="DarkButton" onClick={() => this.props.btnChangeScreen("menu")}> {this.props.getText("mainMenu")} </button>
        
      </div>
    )
  }
}

export default Player