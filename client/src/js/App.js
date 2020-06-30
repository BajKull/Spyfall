import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import TopBar from './topbar/TopBar.js'
import GameMenu from './menus/game/GameMenu.js'
import GamePlay from './game/GamePlay.js'
import OptionsMenu from './menus/options/OptionsMenu.js'
import MultiplayerMenu from './menus/multiplayer/MultiplayerMenu.js'
import Data from '../data.js'
import Languages from '../language.js'
import '../css/App.css'
import '../css/margins.css'

class App extends Component {
  state = {
    game: 'menu',
    players: 0,
    spies: 0,
    length: 0,
    places: Data,
    options: {
      screenSleep: false,
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

  getPlacesLength() {
    return this.state.places.map(place => place.roles.length)
  }

  getGameInfo() {
    const size = this.state.places.length
    const randomId = Math.floor(Math.random() * size)
    const place = this.state.places[randomId]
    return [place, this.state.players, this.state.spies]
  }

  getMultiGameInfo(data) {
    let info
    if(data.role === -1) 
      info = {
        place: this.getText("youAre"),
        role: this.getText("spy")
      }
    else 
      info = {
        place: this.state.places[data.place].name,
        role: this.state.places[data.place].roles[data.role]
      }
    return info
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

  setOptions(vol, lang, ss) {
    this.setState({
      options: {
        soundVolume: vol,
        language: lang,
        screenSleep: ss
      }
    })
  }

  showError(msg) {
    const element = document.getElementById("errorNotification")
    element.innerHTML = msg
    element.className = "show"
    setTimeout(() => {
      element.className = ""
    }, 3000)
  }

  tabEv(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('tabClass')

      window.removeEventListener('keydown', this.tabEv)
      window.addEventListener('mousedown', this.mouseEv)
    }
  }

  mouseEv() {
    document.body.classList.remove('tabClass')
  
    window.removeEventListener('mousedown', this.mouseEv)
    window.addEventListener('keydown', this.tabEv)
  }

  componentDidMount() {
    window.addEventListener('keydown', this.tabEv.bind(this))
  }

  render () {
    return (
      <div>
        <div className="bg"></div>
        <TopBar />
        {this.state.game === 'menu' && 
          <GameMenu btnChangeScreen={this.btnChangeScreen.bind(this)} 
            setGameInfo={this.setGameInfo.bind(this)} 
            getText={this.getText.bind(this)}/>}
        {this.state.game === 'game' && 
          <GamePlay btnChangeScreen={this.btnChangeScreen.bind(this)} 
            getGameLength={this.getGameLength.bind(this)} 
            getGameInfo={this.getGameInfo.bind(this)} 
            getText={this.getText.bind(this)}
            getOptions={this.getOptions.bind(this)}/>}
        {this.state.game === 'options' && 
          <OptionsMenu btnChangeScreen={this.btnChangeScreen.bind(this)} 
            getText={this.getText.bind(this)} 
            setOptions={this.setOptions.bind(this)} 
            getOptions={this.getOptions.bind(this)}/>}
        {this.state.game === 'multiplayer' && 
          <MultiplayerMenu btnChangeScreen={this.btnChangeScreen.bind(this)}  
            getText={this.getText.bind(this)} 
            getPlacesLength={this.getPlacesLength.bind(this)} 
            showError={this.showError.bind(this)} 
            getMultiGameInfo={this.getMultiGameInfo.bind(this)} 
            getOptions={this.getOptions.bind(this)} />}
            
        <div id="errorNotification"></div>
      </div>
    )
  }
  
}

export default App;
