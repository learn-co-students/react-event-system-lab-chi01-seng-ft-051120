import React, { Component } from "react";

class EyesOnMe extends Component {
  handleBlur = (event) => {
    console.log("Hey! Eyes on me!");
  };

  handleFocus = (event) => {
    console.log("Good!");
  };

  render() {
    return (
      <div>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
      </div>
    );
  }
}

export default EyesOnMe;
