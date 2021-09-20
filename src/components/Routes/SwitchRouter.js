import React from "react";
import { Switch, Route } from "react-router-dom";

//UI
import { makeStyles } from "@material-ui/core";

//pages
import Home from "../../pages/Home/Home";
import DarkSide from "../../pages/DarkSide/DarkSide";
import LightSide from "../../pages/LightSide/LightSide";

//components
import ForceUserCard from "../ForceUserCard/ForceUserCard";
import CreateForceUser from "../CreateForceUser/CreateForceUser";

// const useStyles = makeStyles({
//   pages: {
//     height: "850px",
//   },
// });

export default function SwitchRouter() {
  // const classes = useStyles();
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
        <Route exact path="/forceUser/id">
          <ForceUserCard />
        </Route>
      </Switch>
    </main>
  );
}
