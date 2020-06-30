import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'

export class CreateGame extends Component {
  state = {
    name: ""
  }

  render() {
    return (
      <div className="MenuStyle">
        <div className="MenuWithLoading">
          <input className="NickName" placeholder={this.props.getText("yourName")} type="text" onChange={(e) => this.setState({name: e.target.value})} onKeyPress={e => e.key === 'Enter' ? this.props.createGame(this.state.name) : null} style={{marginBottom: '100px'}}/>
          {this.props.loading ? <Spinner animation="border" variant="info" className="LoadingIcon"/> : null}
        </div>
        <button className="MenuButton CreateConfirm" onClick={() => this.props.createGame(this.state.name)}> {this.props.getText("createGame")} </button>
        <button className="MenuButton" onClick={() => this.props.changeScreen("main")} > {this.props.getText("goBack")} </button>
      </div>
    )
  }
}

export default CreateGame
