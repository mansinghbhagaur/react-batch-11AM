import { Store } from "./Store";
import { useState } from "react";

export const TheContextProvider = ({ children }) => {
      const [data, setData] = useState({});
      return (
            <Store.Provider value={{ data, setData }}>
                  {children}
            </Store.Provider>
      )
}