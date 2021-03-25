import React from "react";
import { Nav } from "./Constant";

export const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
  const [state, setState] = React.useState({
    canvas: null,
    nav: Nav.IMAGE,
    background: null,
    gameId: null,
    dragItem: {},
    width: 800,
    height: 600,
    data: null,
    showHelper: false
  });

  return (
    <Context.Provider value={{ state, setState }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
