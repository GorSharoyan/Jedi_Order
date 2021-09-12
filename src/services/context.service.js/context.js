import React, { createContext } from "react";

const Context = createContext();

export default Context;

//Force User Side encapsulation function

export function forceUserSide(forceUserSide) {
  return <Context.Provider value={forceUserSide}></Context.Provider>;
}
