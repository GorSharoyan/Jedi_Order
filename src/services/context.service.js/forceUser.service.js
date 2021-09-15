import React, { createContext, useContext, useState } from "react";

//1 Creating Context.
export const ForceUserContext = createContext();

//2 Creating  hook for accessing Context.
export const useForceUserSideContext = () => {
  return useContext(ForceUserContext);
};

//3 Creating custom hook for further use in ForceUSerContext.Provider.
export const useForceUserSide = () => {
  const [forceUserSide, setForceUserSide] = useState("");
  let location = window.location.href.split("http://localhost:3000");

  if (location === "/lightSide") {
    setForceUserSide("jedi");
  } else if (location === "/darkSide") {
    setForceUserSide("sith");
  }
};

//4 Creating custom component that wil wrap all the children
//and give them custome hook we have written.

export default function ForceUserSideHookParent({ children }) {
  let legacy = useForceUserSide();
  return (
    <ForceUserContext.Provider value={legacy}>
      {children}
    </ForceUserContext.Provider>
  );
}
