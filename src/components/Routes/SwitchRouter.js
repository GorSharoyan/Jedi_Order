import React from "react";
import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router";

//pages
import Home from "../../pages/Home/Home";
import DarkSide from "../../pages/DarkSide/DarkSide";
import LightSide from "../../pages/LightSide/LightSide";
import ForceUserForm from "../ForceUserForm/ForceUserForm";
import ForceUserCard from "../ForceUserCard/ForceUserCard";

//components

export default function SwitchRouter() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/darkSide">
          <DarkSide />
        </Route>
        <Route exact path="/lightSide">
          <LightSide />
        </Route>
        <Route exact path="/register">
          <ForceUserForm />
        </Route>
        <Route exact path="/forceUser">
          <ForceUserCard />
        </Route>
      </Switch>
    </main>
  );
}
