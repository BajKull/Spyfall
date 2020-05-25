import React, { Component } from 'react'

export class MenuBar extends Component {
  render() {
    return (
      <div>
        <h1 style={menuBarStyle}> Spyfall </h1>
      </div>
    )
  }
}

const menuBarStyle = {
  textAlign: 'center',
  backgroundColor: 'rgb(25, 25, 25)',
  color: 'white'
}

export default MenuBar
