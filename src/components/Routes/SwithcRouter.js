import React from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from "react-router";
import Home from "../../pages/Home/Home";

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
