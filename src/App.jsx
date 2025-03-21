// import React, { Component } from "react";
// import About from "./About";
// import ClassCom01 from "./life-cycle-method/ClassCom01";
// import FunUseState from "./functionComponent/FunUseState";
// import UseEffects from "./functionComponent/UseEffects";
// class Counter extends Component {
//   constructor() {
//     super();// call the parent class constructor
//     this.state = {
//       count: 0,
//     }
//   }
//   render() {
//     return (
//       <>
//         {/* <h1>Counter App</h1>
//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
//         <About title="About page props" countTitle="About" />
//         <About title="Contact Us page props" countTitle="contact" /> */}
//         {/* <ClassCom01 /> */}
//         {/* <FunUseState /> */}
//         <UseEffects />
//       </>
//     )
//   }
// }



// export default Counter;

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

import { useReducer } from "react";
import reducer from "./reducer/reducer";
import About from "./About";
import Home from "./Home";

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // console.log(state)
  return (
    <div>
      <h1>App Component</h1>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'ADD_ITEM' })}>Add Item</button>
      <button onClick={() => dispatch({ type: 'SUB_ITEM' })}>Sub Item</button>
      <button onClick={() => dispatch({ type: 'RESET_ITEM' })}>RESET Item</button>
      <About />
      <Home />
    </div>

  )
}

export default App
