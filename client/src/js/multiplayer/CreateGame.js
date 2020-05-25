import React, { Component } from 'react'

export class CreateGame extends Component {
  state = {
    name: ""
  }



  render() {
    return (
      <div className="MenuStyle">
        <input className="NickName" placeholder={this.props.getText("yourName")} type="text" onChange={(e) => this.setState({name: e.target.value})} style={{marginBottom: '100px'}}/>
        <button className="MenuButton" onClick={() => this.props.createGame(this.state.name)}> {this.props.getText("createGame")} </button>
        <button className="MenuButton" onClick={() => this.props.changeScreen("main")}> {this.props.getText("goBack")} </button>
      </div>
    )
  }
}

export default CreateGame
