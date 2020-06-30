import React, { Component } from 'react'
import CreateGame from '../../multiplayer/CreateGame.js'
import JoinGame from '../../multiplayer/JoinGame.js'
import Main from '../../multiplayer/Main.js'
import Room from '../../multiplayer/Room.js'
import './Room.css'
import io from "socket.io-client"

let socket;


export class MultiplayerMenu extends Component {
  state = {
    name: '',
    room: '',
    loading: false,
    endpoint: "https://spyfall-react-server.herokuapp.com/",
    // endpoint: "localhost:5000",
    screen: 'main',
    messages: [],
    users: [],
    admin: false,
    spies: 1,
    time: 7,
    place: '',
    role: '',
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
      if(localUsers.find(user => user.id === socket.id).promoted)
        this.setState({
          admin: true
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

    socket.on("updateTime", amount => {
      if(!this.state.admin)
        this.setState(({time}) => ({
          time: time + amount
        }))
    })

    socket.on("updateSpies", amount => {
      if(!this.state.admin)
        this.setState(({spies}) => ({
          spies: spies + amount
        }))
    })

    socket.on("settings", settings => {
      this.setState({
        time: settings.time,
        spies: settings.spies
      })
    })

    socket.on("start", (info) => {
      const players = this.state.users
      players.forEach(player => player.ready = false)
      if(this.state.screen === "game") {
        const data = this.props.getMultiGameInfo(info)
        this.setState({
          screen: "roles",
          users: players,
          place: data.place,
          role: data.role
        })
        
      }
      else
        this.setState({
          screen: "timer",
          users: players
        })
    })

    socket.on("abort", () => {
      this.changeScreen("main")
    })

    socket.on("connect_error", (error) => {
      this.props.showError(this.props.getText("errConnection"))
      socket.disconnect()
      this.props.btnChangeScreen("menu")
    })

  }

  changeScreen(str) {
    this.setState({
      screen: str
    })
  }

  createGame(name) {
    const error = this.checkName(name)
    this.setState({
      loading: true
    })
    document.getElementsByClassName("CreateConfirm")[0].disabled = "true"
    if(error) {
      this.props.showError(error)
      this.setState({
        loading: false
      })
    }
    else
      socket.emit("createRoom", (this.props.getPlacesLength()), (error, code) => {
        if(error)
          this.props.showError(error)
        else {
          this.setState({
            room: code,
            screen: "game"
          })
          this.joinGame(name, code)
        }
        this.setState({
          loading: false
        })
          
      })
  }

  joinGame(name, room) {
    const error = this.checkName(name)
    this.setState({
      loading: true
    })
    if(error) {
      this.props.showError(error)
      this.setState({
        loading: false
      })
    }
    else
      socket.emit("joinRoom", { name, room }, (error) => {
        if(error) {
          this.props.showError(this.props.getText(error))
        }
        else
          this.setState({
            room: room.toUpperCase(),
            screen: "game"
          })
        this.setState({
          loading: false
        })
      })
  }

  sendMessage(message) {
    if(message !== "")
      socket.emit("sendMessage", message, (error) => {
        if(error)
          this.props.showError(error)
      })
  }

  playerReady() {
    socket.emit("playerReady")
  }

  checkName(name) {
    if(name === "")
      return(this.props.getText("errNameEmpty"))
    else if(name.length > 12)
      return(this.props.getText("errNameLong"))
  }

  

  changeTime(amount) {
    const tempTime = this.state.time
    if(tempTime + amount > 2 && tempTime + amount < 21) {
      this.setState(({time}) => ({
        time: time + amount
      }))
      socket.emit("changeTime", amount, (error) => {
        if(error)
          this.props.showError(error)
      })
    }
  }

  changeSpies(amount) {
    const tempSpies = this.state.spies
    if(tempSpies + amount > 0 && tempSpies + amount < this.state.users.length) {
      this.setState(({spies}) => ({
        spies: spies + amount
      }))
      socket.emit("changeSpies", amount, (error) => {
        if(error)
          this.props.showError(error)
      })
    }
  }

  quitLobby() {
    socket.disconnect()
    this.props.btnChangeScreen("menu")
  }

  render() {
    return (
      <div>
        {this.state.screen === "main" && 
          <Main changeScreen={this.changeScreen.bind(this)} 
            btnChangeScreen={this.props.btnChangeScreen} 
            getText={this.props.getText}/>}
        {this.state.screen === "create" && 
          <CreateGame changeScreen={this.changeScreen.bind(this)} 
            createGame={this.createGame.bind(this)} 
            getText={this.props.getText} 
            loading={this.state.loading}/>}
        {this.state.screen === "join" && 
          <JoinGame changeScreen={this.changeScreen.bind(this)} 
            joinGame={this.joinGame.bind(this)} 
            getText={this.props.getText} 
            loading={this.state.loading}/>}
        {(this.state.screen === "game" || this.state.screen === "roles" || this.state.screen === "timer") && 
          <Room quitLobby={this.quitLobby.bind(this)} 
            sendMessage={this.sendMessage.bind(this)} 
            playerReady={this.playerReady.bind(this)} 
            changeSpies={this.changeSpies.bind(this)} 
            changeTime={this.changeTime.bind(this)}  
            getOptions={this.props.getOptions}
            getText={this.props.getText} 
            room={this.state.room} 
            messages={this.state.messages} 
            users={this.state.users} 
            isAdmin={this.state.admin} 
            place={this.state.place} 
            role={this.state.role} 
            time={this.state.time} 
            spies={this.state.spies} 
            screen={this.state.screen}/>}
      </div>
    )
  }
}

export default MultiplayerMenu
