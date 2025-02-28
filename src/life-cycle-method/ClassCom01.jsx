import React, { Component } from "react";

class ClassCom01 extends Component {
      constructor() {
            super();
            this.state = { count: 0 }
            console.log("constructor Called");
      }

      componentDidMount() {
            console.log("componentDidMount Called");
      }

      componentDidUpdate() {
            console.log("componentDidUpdate Called");
      }

      componentWillUnmount() {
            console.log("componentWillUnmount Called");
      }

      render() {
            console.log("render method called")
            return (
                  <>
                        <h1>Class com 01 {this.state.count}</h1>
                        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
                  </>
            )
      }
}

export default ClassCom01;