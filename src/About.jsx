import { useState } from "react";

const About = ({ title, countTitle }) => {
      console.log(title, "props")
      const [count, setCount] = useState({ count: 0 });
      return (
            <>
                  <h1>Title Name Page: {title}</h1>
                  <h1>Counter {countTitle}: {count.count}</h1>
                  <button onClick={() => setCount({ count: count.count + 1 })}>Click About Page</button>
            </>
      )
}


export default About;