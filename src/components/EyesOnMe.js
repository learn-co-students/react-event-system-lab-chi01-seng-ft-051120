// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    sayGood = () => {
        console.log('Good!')
    }

    scold = () => {
        console.log('Hey! Eyes on me!')
    }
    
    render() {
        return (<button 
            onFocus={this.sayGood}
            onBlur={this.scold}>
            </button>)
    }
}