import React, { Component } from 'react'

export class CreateGame extends Component {
  state = {
    name: "",
    code: ""
  }

  render() {
    return (
      <div className="MenuStyle">
        <input className="NickName" placeholder={this.props.getText("yourName")} type="text" onChange={(e) => this.setState({name: e.target.value})}/>
        <input className="NickName" placeholder={this.props.getText("roomCode")} type="text" onChange={(e) => this.setState({code: e.target.value})} style={{marginBottom: '100px'}}/>
        <button className="MenuButton" onClick={() => this.props.joinGame(this.state.name, this.state.code)}> {this.props.getText("joinGame")} </button>
        <button className="MenuButton" onClick={() => this.props.changeScreen("main")}> {this.props.getText("goBack")} </button>
      </div>
    )
  }
}

export default CreateGame
