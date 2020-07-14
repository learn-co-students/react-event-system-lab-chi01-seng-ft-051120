import React, {Component} from 'react'

export default class Keypad extends Component {
    enteringPassword = () => {
      console.log("Entering password...")
    }

    render() {
      return (<input 
        onKeyUp={this.enteringPassword}
        type="password"/>)
    }

} 