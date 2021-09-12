import React, { Children } from "react";

//services
import Context from "./context";

//component for wrapping all the elements that should inherit the necessary props
export function ForceUserSideInfo({ values, children }) {
  return <Context.Provider value={values}>{children}</Context.Provider>;
}
