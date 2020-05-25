import React, { Component } from 'react'

import Message from './Message.js'
import User from './User.js'

export class Chat extends Component {
  state = {
    message: ""
  }

  send = (event) => {
    event.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({
      message: ""
    })
  }

  render() {
    return (
      <div className="Chat">
        <div className="UserList">
          {this.props.users.map((user, i) => <div key={i} className="Username"> <User user={user} /> </div>)}
        </div>
        <div className="MessageList">
          {this.props.messages.map((msg, i) => <Message key={i} message={msg} name={"Message" + i % 2}/>)}
        </div>
        <form className="UserMessage">
          <input type="text" placeholder={this.props.getText("typeMessage")} value={this.state.message} onChange={(e) => this.setState({message: e.target.value})} onKeyPress={e => e.key === 'Enter' ? this.send(e) : null}/>
          <button onClick={e => this.send(e)}> {this.props.getText("send")} </button>
        </form>
      </div>
    )
  }
}

export default Chat
