import React from 'react'
import { Store } from './context/Store'
import { useContext } from 'react';

const Home = () => {
      const { data } = useContext(Store);
      return (
            <div>
                  <h1>{data.name}</h1>
            </div>
      )
}

export default Home
