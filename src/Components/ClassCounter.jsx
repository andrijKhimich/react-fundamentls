import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1})
    // console.log(number);
  }

  decrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.decrementCount}>-</button>
        <button onClick={this.incrementCount}>+</button>
        <hr />
      </div>
    )
  }
}

export default ClassCounter;