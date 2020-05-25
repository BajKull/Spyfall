import React, { Component } from 'react'
import Timer from '../components/Timer.js'
import ShowRoles from './ShowRoles.js'
import '../../css/Gameplay.css'

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
          <Timer btnChangeScreen={this.props.btnChangeScreen} newGame={this.newGame.bind(this)} getGameLength={this.props.getGameLength} getText={this.props.getText}/> :
          <ShowRoles btnChangeScreen={this.props.btnChangeScreen} newGame={this.newGame.bind(this)} startGame={this.startGame.bind(this)} getGameInfo={this.props.getGameInfo} getText={this.props.getText}/>
        }
      </div>
    )
  }
}

export default GamePlay
