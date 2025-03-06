import React, { useEffect, useState } from 'react'

const UseEffects = () => {
      // useEffect(() => {
      //       console.log("useEffect is called");
      //       return () => {
      //             console.log("useEffect is cleaned up");
      //       }
      // }, [])

      const [count, setCount] = React.useState(0);

      const [data, setData] = useState([]);

      React.useEffect(() => {
            document.title = `You clicked ${count} times`;
            console.log(`called ${count}`)
      }, [count]);


      const FetchData = async () => {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
            console.log(result)
      }

      useEffect(() => {
            FetchData();
            return () => {
                  console.log("cleaned up");
            }
      }, [])

      return (
            <div>
                  <h1>use Effect hook{count}</h1>
                  <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
      )
}

export default UseEffects
