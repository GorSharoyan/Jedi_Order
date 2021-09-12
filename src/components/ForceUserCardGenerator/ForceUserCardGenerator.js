import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

//UI
import { Button, Card, CardContent } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

//components
import ForceUserMiniCard from "../ForceUserMiniCard/ForceUserMiniCard";
import CreateForceUser from "../CreateForceUser/CreateForceUser";

//services
import { getAllJedis } from "../../services/firebaseServices/jedi.service";
import { getAllSiths } from "../../services/firebaseServices/sith.service";
import { ForceUserSideInfo } from "../../services/context.service.js/forceUser.side.service";
import Context from "../../services/context.service.js/context";

export const pathLocation = String(
  window.location.href.split("http://localhost:3000")
);

export default function ForceUserCardGenerator() {
  const location = useLocation().pathname;
  const [forceUsers, setForceUsers] = useState([""]);
  const [forceUserSide, setForceUserSide] = useState("");
  let history = useHistory();

  function handleOnClick() {
    history.push("/register");
  }
  console.log(location);

  useEffect(() => {
    if (location === "/lightSide") {
      getAllJedis().then((element) => {
        let jedis = Object.values(element);
        setForceUsers(jedis);
        setForceUserSide("jedi");
      });
    } else if (location === "/darkSide") {
      getAllSiths().then((element) => {
        let siths = Object.values(element);
        setForceUsers(siths);
        setForceUserSide("sith");
      });
    }
  }, []);

  return (
    <Context.Provider value={forceUserSide}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="baseline"
      >
        <>
          {forceUsers.map((element) => {
            return (
              <ForceUserMiniCard
                name={element.name}
                rank={element.rank}
                bio={element.bio}
              />
            );
          })}
        </>
        <>
          <Card>
            <p>Join the {location}</p>
            <CardContent>
              {/* <CreateForceUser /> */}
              <Button onClick={handleOnClick}>
                {/* <Link to="/register"> */}
                <AddBoxIcon />
                {/* </Link> */}
              </Button>
            </CardContent>
          </Card>
        </>
      </Grid>
    </Context.Provider>
  );
}
