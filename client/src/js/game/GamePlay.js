import React, { Component } from 'react'
import Timer from '../components/Timer.js'
import ShowRoles from './ShowRoles.js'
import './Gameplay.css'

export class GamePlay extends Component {
  state = {
    discussion: false
  }

  startGame() {
    this.setState({
      discussion: true
    })
  }

  newGame() {
    this.setState({
      discussion: false
    })
  }
  

  render() {
    return (
      <div className="GamePlay">
        {this.state.discussion ?  
          <div className="GamePlay">
            <Timer getGameLength={this.props.getGameLength} 
              getText={this.props.getText}
              getOptions={this.props.getOptions}/>
              <button className="MenuButton MarginTop10" onClick={() => this.newGame()}> {this.props.getText("newGame")} </button>
              <button className="MenuButton" onClick={() => this.props.btnChangeScreen("menu")}> {this.props.getText("mainMenu")} </button>
          </div> 
          :
          <ShowRoles btnChangeScreen={this.props.btnChangeScreen} 
            newGame={this.newGame.bind(this)} 
            startGame={this.startGame.bind(this)}
            getGameInfo={this.props.getGameInfo}
            getText={this.props.getText}/>
        }
      </div>
    )
  }
}

export default GamePlay
