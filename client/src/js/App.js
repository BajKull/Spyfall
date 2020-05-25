import React, { Component } from 'react'
import MenuBar from './menus/MenuBar.js'
import GameMenu from './menus/GameMenu.js'
import GamePlay from './game/GamePlay.js'
import OptionsMenu from './menus/OptionsMenu.js'
import MultiplayerMenu from './menus/MultiplayerMenu.js'
import Data from '../data.js'
import Languages from '../language.js'
import '../css/App.css'

class App extends Component {
  state = {
    game: 'menu',
    players: 0,
    spies: 0,
    length: 0,
    places: Data,
    options: {
      soundVolume: 5,
      language: 'polski'
    },
    text: Languages, 
  }

  btnChangeScreen(screen) {
    this.setState({
      game: screen
    })
  }

  setGameInfo(p, s, l) {
    this.setState({
      players: p,
      spies: s,
      length: l
    })
  }

  getGameLength() {
    return this.state.length
  }

  getGameInfo() {
    const size = this.state.places.length
    const randomId = Math.floor(Math.random() * size)
    const place = this.state.places[randomId]
    return [place, this.state.players, this.state.spies]
  }

  getText(string) {
    const temp = this.state.text
    const lang = this.state.options["language"]
    if(lang === "english")
      return temp[string][0]
    if(lang === "polski")
      return temp[string][1]
  }

  getOptions() {
    return this.state.options
  }

  setOptions(vol, lang) {
    this.setState({
      options: {
        soundVolume: vol,
        language: lang
      }
    })
  }

  render () {
    return (
      <div>
        <MenuBar />
        {this.state.game === 'menu' && <GameMenu btnChangeScreen={this.btnChangeScreen.bind(this)} setGameInfo={this.setGameInfo.bind(this)} getText={this.getText.bind(this)}/>}
        {this.state.game === 'game' && <GamePlay btnChangeScreen={this.btnChangeScreen.bind(this)} getGameLength={this.getGameLength.bind(this)} getGameInfo={this.getGameInfo.bind(this)}  getText={this.getText.bind(this)}/>}
        {this.state.game === 'options' && <OptionsMenu btnChangeScreen={this.btnChangeScreen.bind(this)}  getText={this.getText.bind(this)} setOptions={this.setOptions.bind(this)} getOptions={this.getOptions.bind(this)}/>}
        {this.state.game === 'multiplayer' && <MultiplayerMenu btnChangeScreen={this.btnChangeScreen.bind(this)}  getText={this.getText.bind(this)}/>}
      </div>
    )
  }
  
}

export default App;
