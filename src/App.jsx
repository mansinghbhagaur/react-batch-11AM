import React, { Component } from "react";
import About from "./About";
import ClassCom01 from "./life-cycle-method/ClassCom01";
import FunUseState from "./functionComponent/FunUseState";
import UseEffects from "./functionComponent/UseEffects";
class Counter extends Component {
  constructor() {
    super();// call the parent class constructor
    this.state = {
      count: 0,
    }
  }
  render() {
    return (
      <>
        {/* <h1>Counter App</h1>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
        <About title="About page props" countTitle="About" />
        <About title="Contact Us page props" countTitle="contact" /> */}
        {/* <ClassCom01 /> */}
        {/* <FunUseState /> */}
        <UseEffects />
      </>
    )
  }
}

export default Counter;

// import { useState } from "react";
// function App() {
//   // const [currentState, updateValue] = useState(initialState)
//   const [count, setCount] = useState(0);
//   // let a = 25;

//   // console.log(a)
//   console.log(count)

//   return (
//     <>

//       {count}
//       < h1 > hello world</h1 >
//       <button onClick={() => setCount(count + 1)}>Click</button>
//     </>
//   )
// }

// export default App;