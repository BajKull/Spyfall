import React, { Component } from 'react'
import question from '../../icons/question.svg'
import UIfx from 'uifx'
import TimerEnd from '../../TimerEnd.mp3'

const sound = new UIfx(
  TimerEnd,
  {
    volume: 0.4
  }
)

export class Timer extends Component {
  state = {
    minutes: 0,
    seconds: 0,
  }


  componentDidMount() {
    const l = this.props.getGameLength()
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
        <h3> {this.props.getText("discussion")}: </h3>
        {(this.state.minutes === 0 && this.state.seconds === 0) ?
          <h1> {this.props.getText("over")} </h1> :
          <h1> { this.state.minutes }:{ this.state.seconds < 10 ? ('0' + this.state.seconds) : this.state.seconds}</h1>
        }
        
        <button className="MenuButton" style={{marginTop: '20vmin'}}onClick={this.props.newGame}> {this.props.getText("newGame")} </button>
        <button className="MenuButton" onClick={() => this.props.btnChangeScreen("menu")}> {this.props.getText("mainMenu")} </button>
        <img src={question} className="QuestionIcon" alt="?"></img>
      </div>
    )
  }
}

export default Timer
