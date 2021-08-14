import React from "react";
import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router";

//pages
import Home from "../../pages/Home/Home";

//components

export default function SwitchRouter() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}
