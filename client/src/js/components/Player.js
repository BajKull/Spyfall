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
          <div className="Roles" style={{marginBottom: '5%'}}>
            <h3 style={{marginBottom: '2%'}}> {this.props.getText("rolesAsigned")} </h3>
            <button className="LightButton" onClick={this.props.startGame}> {this.props.getText("startGame")} </button>
          </div> :
          <div className="Roles">
            <h6> {this.props.getText("player")}: { this.state.player + 1 } </h6>
            <h3> { this.state.place } </h3>
            <h5> { this.state.role } </h5>
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