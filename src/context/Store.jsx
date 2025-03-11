import { createContext, useContext } from "react";

export const Store = createContext();

export const useCustomContextHook = () => {
      return useContext(Store);
}