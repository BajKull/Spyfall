import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'

export class CreateGame extends Component {
  state = {
    name: "",
    code: ""
  }

  render() {
    return (
      <div className="MenuStyle">
        <div className="MenuWithLoading">
          <input className="NickName" placeholder={this.props.getText("yourName")} type="text" onChange={(e) => this.setState({name: e.target.value})} onKeyPress={e => e.key === 'Enter' ? document.getElementsByClassName("rCode")[0].focus() : null}/>
          <input className="NickName rCode" placeholder={this.props.getText("roomCode")} type="text" onChange={(e) => this.setState({code: e.target.value})} onKeyPress={e => e.key === 'Enter' ? this.props.joinGame(this.state.name, this.state.code) : null} style={{marginBottom: '100px'}}/>
          {this.props.loading ? <Spinner animation="border" variant="info" className="LoadingIcon"/> : null}
        </div>
        <button className="MenuButton" onClick={() => this.props.joinGame(this.state.name, this.state.code)}> {this.props.getText("joinGame")} </button>
        <button className="MenuButton" onClick={() => this.props.changeScreen("main")}> {this.props.getText("goBack")} </button>
      </div>
    )
  }
}

export default CreateGame
