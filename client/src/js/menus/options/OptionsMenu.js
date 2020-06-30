import React, { Component } from 'react'
import './OptionsMenu.css'

export class OptionsMenu extends Component {

  constructor(props) {
    super(props)
    const {soundVolume, language, screenSleep} = this.props.getOptions()
    this.state = {
      sliderVal: soundVolume,
      lang: language,
      screenSleep: screenSleep
    }
  }

  updateSlider = (s) => {
    this.setState({
      sliderVal: s.target.value
    })
  }

  goBack() {
    this.props.setOptions(this.state.sliderVal, this.state.lang, this.state.screenSleep)
    this.props.btnChangeScreen("menu")
  }

  changeLang(int) {
    const languages = ["english", "polski"]
    const index = languages.indexOf(this.state.lang)
    if(index + int < 0)
      this.setState({
        lang: languages[languages.length - 1]
      })
    else
      this.setState({
        lang: languages[(index + int) % languages.length]
      })
  }

  changeSleep() {
    this.setState(({screenSleep}) => ({
      screenSleep: !screenSleep
    }))
  }

  componentDidMount() {
    if(this.state.screenSleep)
      document.getElementsByClassName("changeSleepBox")[0].checked = true
  }

  render() {
    return (
      <div className="OptionsMenu">
        <label className="Switch">
          <p> {this.props.getText("preventScreenSleep")} </p>
          <input className="changeSleepBox" type="checkbox" onClick={() => this.changeSleep()}/>
          <span className="SliderCircle" />
        </label>
        
        <div className="SoundVal">
          <p> {this.props.getText("sound")} </p>
          <input id='1' type="range" min={0} max={10} value={this.state.sliderVal} className="OptionSlider" onChange={this.updateSlider} style={{boxShadow: `inset ${this.state.sliderVal * 3.6}vw 0px 0px -1px rgba(103, 89, 116, 0.8)`}}/>
        </div>
        <div className="Language">
          <p> {this.props.getText("language")} </p>
          <button className="ArrowButton" onClick={() => this.changeLang(1)}> &gt; </button>
          <p style={{float: 'right', marginLeft: '25px', marginRight: '25px'}}> {this.state.lang} </p>
          <button className="ArrowButton" onClick={() => this.changeLang(-1)}> &lt; </button>
        </div >
        <button className="MenuButton" onClick={this.goBack.bind(this)} style={{position: 'absolute', bottom: '75px', minWidth: '40%'}}> {this.props.getText("goBack")} </button>
      </div>
    )
  }
}

export default OptionsMenu
