import { useState } from 'react'

const FunUseState = () => {
      const [count, setCount] = useState(0);
      console.log(count);

      return (
            <div>
                  <h1>useState hook</h1>
                  <h1>Count: {count}</h1>

                  <button onClick={() => setCount(count + 1)}>InCrement</button>
                  <button onClick={() => setCount(count - 1)}>DeCrement</button>
                  <button onClick={() => setCount(0)}>reset</button>
            </div>
      )
}

export default FunUseState
