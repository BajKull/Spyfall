import React, { Component } from 'react'
import Player from '../components/Player.js'
import '../../css/Roles.css'

export class ShowRoles extends Component {

  componentDidMount() {
    this.gameInit()
  }

  gameInit() {
    const [a, b, c] = this.props.getGameInfo()
    this.setState({
      place: a,
      players: b,
      maxPlayers: b,
      spies: c,
      currentPlayer: 0
    })
    const aPleyrs = b
    const roles = a.roles
    const aSpies = c
    let playersWithRoles = {}
    //create players, set roles
    for(let i = 0; i < aPleyrs; i++) {
      playersWithRoles[i] = {
        player: i,
        role: roles[Math.floor(Math.random() * roles.length)]
      }
    }
    let temp = Array.from(Array(aPleyrs).keys())
    let spies = []
    // randomize spy positions
    for(let i = 0; i < aSpies; i++) {
      const spy = Math.floor(Math.random() * temp.length)
      spies.push(temp[spy])
      temp.splice(spy, 1)
    }
    //set spies
    const sLen = spies.length
    for(let i = 0; i < sLen; i++) {
      playersWithRoles[spies[i]].role = 'Spy'
    }

    this.setState({
      players: playersWithRoles,
    })
  }

  getPlayerInfo() {
    const cP = this.state.currentPlayer
    const p = this.state.players
    this.setState(({currentPlayer}) => ({
      currentPlayer: currentPlayer + 1
    }))
    if(p[cP].role === 'Spy')
      return ['You are', 'Spy']
    else
      return [this.state.place.name, p[cP].role]
  }

  nextPlayer() {
    this.setState(({currentPlayer}) => ({
      currentPlayer: currentPlayer + 1
    }))
  }
  
  getMaxPlayers() {
    return this.state.maxPlayers
  }

  render() {
    return (
      <div className="Roles">
        <Player btnChangeScreen={this.props.btnChangeScreen} gameInit={this.gameInit.bind(this)} newGame={this.props.newGame} startGame={this.props.startGame} getMaxPlayers={this.getMaxPlayers.bind(this)} getPlayerInfo={this.getPlayerInfo.bind(this)} nextPlayer={this.nextPlayer.bind(this)} getText={this.props.getText}/>
      </div>
    )
  }
}

export default ShowRoles
