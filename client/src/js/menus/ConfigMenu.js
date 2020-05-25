import React, { Component } from 'react'
import '../../css/ConfigMenu.css'

export class ConfigMenu extends Component {

  state = {
    sliders: [
      {
        id: 1,
        value: 5
      },
      {
        id: 2,
        value: 1
      },
      {
        id: 3,
        value: 7
      }
    ]
  }

  updateSlider = (s) => {
    let newSliders = this.state.sliders
    newSliders.filter(which => (which.id === parseInt(s.target.id)))[0].value = parseInt(s.target.value)
    if(newSliders[1].value >= newSliders[0].value)
      newSliders[1].value = newSliders[0].value - 1
    this.setState({
      sliders: newSliders
    })
  }

  start = () => {
    const [p, s, l] = this.state.sliders.map(x => x.value)
    this.props.btnChangeScreen("game")
    this.props.setGameInfo(p, s, l)
  }

  render() {
    return (
      <div className="ConfigMenu">
          {this.props.getText("players")}: {this.state.sliders[0].value}
          <input id='1' type="range" min={3} max={20} value={this.state.sliders[0].value} className="ConfigSlider" onChange={this.updateSlider} />
          {this.props.getText("spies")}: {this.state.sliders[1].value}
          <input id='2' type="range" min="1" max="5" value={this.state.sliders[1].value} className="ConfigSlider" onChange={this.updateSlider} />
          {this.props.getText("gameLength")}: {this.state.sliders[2].value}
          <input id='3' type="range" min="3" max="20" value={this.state.sliders[2].value} className="ConfigSlider" onChange={this.updateSlider} />
        <div className="Arrows">
          <button className="MenuButton" style={{float: 'left', minWidth: '30%', maxWidth: '30%'}} onClick={this.props.btnPrevious}> &lt; </button>
          <button className="MenuButton" style={{float: 'right', minWidth: '30%', maxWidth: '30%'}} onClick={this.start}> &gt; </button>
        </div>
      </div>
    )
  }
}


export default ConfigMenu
