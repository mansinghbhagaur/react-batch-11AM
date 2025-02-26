import React, { Component } from "react";
import { Home } from "./Home";
import About from "./About";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <>
        <h1>hello world</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>click</button>
        <Home title="posts" id={7} name='man singh' />
        <Home title="posts" id={8} name='man ' />
        <Home title="posts" id={9} name='ram ' />
        <About name="about page information" />
      </>
    )
  }
}

export default App;


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