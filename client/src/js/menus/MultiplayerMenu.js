import React, { Component } from 'react'
import CreateGame from '../multiplayer/CreateGame.js'
import JoinGame from '../multiplayer/JoinGame.js'
import Main from '../multiplayer/Main.js'
import Room from '../multiplayer/Room.js'
import '../../css/Room.css'
import io from "socket.io-client"

let socket;


export class MultiplayerMenu extends Component {
  state = {
    name: '',
    room: '',
    endpoint: "https://spyfall-react-server.herokuapp.com/",
    // endpoint: "localhost:5000",
    screen: 'main',
    messages: [],
    users: [],
  }

  componentDidMount() {
    socket = io(this.state.endpoint)
    socket.on("message", message => {
      const localMessages = this.state.messages
      localMessages.push(message)
      this.setState({
        messages: localMessages
      })
      const messageBox = document.getElementsByClassName("MessageList")[0]
      if(messageBox)
        messageBox.scrollTop = messageBox.scrollHeight
    })

    socket.on("setUserList", userList => {
      const localUsers = []
      userList.forEach(e => localUsers.push(e))
      this.setState({
        users: userList
      })
    })

    socket.on("ready", player => {
      const users = this.state.users
      const index = users.indexOf(users.find(user => user.id === player))
      users[index].ready = !users[index].ready
      this.setState({
        users: users
      })
    })
  }

  changeScreen(str) {
    this.setState({
      screen: str
    })
  }

  createGame(name) {
    const error = this.checkName(name)
    if(error)
      this.showError(error)
    else
      socket.emit("createRoom", { admin: name }, (error, code) => {
        if(error)
          this.showError(error)
        else {
          this.setState({
            room: code,
            screen: "game"
          })
          this.joinGame(name, code)
        }
          
      })
  }

  joinGame(name, room) {
    const error = this.checkName(name)
    if(error)
      this.showError(error)
    else
      socket.emit("joinRoom", { name, room }, (error) => {
        if(error)
        this.showError(error)
        else
          this.setState({
            room: room.toUpperCase(),
            screen: "game"
          })
      })
  }

  sendMessage(message) {
    if(message !== "")
      socket.emit("sendMessage", message, (error) => {
        if(error)
          this.showError(error)
      })
  }

  playerReady() {
    socket.emit("playerReady")
  }

  checkName(name) {
    if(name === "")
      return(this.props.getText("errNameEmpty"))
    else if(name.length > 32)
      return(this.props.getText("errNameLong"))
  }

  showError(msg) {
    const element = document.getElementById("errorNotification")
    element.innerHTML = msg
    element.className = "show"
    setTimeout(() => {
      element.className = ""
    }, 3000)
  }



  render() {
    return (
      <div>
        {this.state.screen === "main" && <Main changeScreen={this.changeScreen.bind(this)} btnChangeScreen={this.props.btnChangeScreen} getText={this.props.getText}/>}
        {this.state.screen === "create" && <CreateGame changeScreen={this.changeScreen.bind(this)} createGame={this.createGame.bind(this)} getText={this.props.getText}/>}
        {this.state.screen === "join" && <JoinGame changeScreen={this.changeScreen.bind(this)} joinGame={this.joinGame.bind(this)} getText={this.props.getText}/>}
        {this.state.screen === "game" && <Room room={this.state.room} messages={this.state.messages} users={this.state.users} sendMessage={this.sendMessage.bind(this)} playerReady={this.playerReady.bind(this)} getText={this.props.getText}/>}
        <div id="errorNotification"></div>
      </div>
    )
  }
}

export default MultiplayerMenu
