import { useState, useContext } from "react";
import { Store } from "./context/Store";

const About = ({ title, countTitle }) => {
      const { data, setData } = useContext(Store);
      // console.log(title, "props")
      console.log(data)
      const [count, setCount] = useState({ count: 0 });
      return (
            <>
                  <h1>Title Name Page: {title}</h1>
                  <h1>Counter {countTitle}: {count.count}</h1>
                  <button onClick={() => setCount({ count: count.count + 1 })}>Click About Page</button>
                  <button onClick={() => setData({ name: 'man', mobile: 9999999999 })}>Click About Page set Data</button>
            </>
      )
}


export default About;