import React from 'react'
import { useCustomContextHook } from './context/Store'
// import { Store } from './context/Store'
// import { useContext } from 'react';

const Home = () => {
      const { data } = useCustomContextHook();
      // const { data } = useContext(Store);
      return (
            <div>
                  <h1>Home Page</h1>
                  <h1>{data.name}</h1>
            </div>
      )
}

export default Home
