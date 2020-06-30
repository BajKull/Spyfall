import React, { Component } from 'react'
import UIfx from 'uifx'
import TimerEnd from './TimerEnd.mp3'
import NoSleep from 'nosleep.js'

const sound = new UIfx(
  TimerEnd,
  {
    volume: 0.4
  }
)

const noSleep = new NoSleep()

export class Timer extends Component {
  state = {
    minutes: 0,
    seconds: 0,
  }


  componentDidMount() {
    const l = this.props.getGameLength()
    const options = this.props.getOptions()
    if(options.screenScleep)
      noSleep.disable()
      
    sound.setVolume(options.soundVolume / 10)
    this.setState({
      minutes: l
    })
    this.myInterval = setInterval(() => {
      const { minutes, seconds } = this.state
      if(seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if(seconds === 0) {
        if(minutes === 0) {
          clearInterval(this.myInterval)
          sound.play()
          this.setState({
            minutes: 0,
            seconds: 0
          })
        }     
        else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    return (
      <div className="GamePlay">
        <h3 className="MarginTop5"> {this.props.getText("discussion")}: </h3>
        {(this.state.minutes === 0 && this.state.seconds === 0) ?
          <h1 className="Timer"> {this.props.getText("over")} </h1> :
          <h1 className="Timer"> { this.state.minutes }:{ this.state.seconds < 10 ? ('0' + this.state.seconds) : this.state.seconds}</h1>
        }
      </div>
    )
  }
}

export default Timer
