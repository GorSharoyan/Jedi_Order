import React from "react";
import { Switch, Route } from "react-router-dom";

//pages
import Home from "../../pages/Home/Home";
import DarkSide from "../../pages/DarkSide/DarkSide";
import LightSide from "../../pages/LightSide/LightSide";

//components
import ForceUserCard from "../ForceUserCard/ForceUserCard";
import CreateForceUser from "../CreateForceUser/CreateForceUser";

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
          <CreateForceUser />
        </Route>
        <Route exact path="/forceUser">
          <ForceUserCard />
        </Route>
      </Switch>
    </main>
  );
}
