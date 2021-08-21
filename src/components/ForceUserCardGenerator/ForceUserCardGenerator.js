import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";

//UI
import { Button, Card, CardContent } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

//components
import ForceUserMiniCard from "../ForceUserMiniCard/ForceUserMiniCard";

//services
import { getAllJedis } from "../../services/firebaseServices/jedi.service";
import { getAllSiths } from "../../services/firebaseServices/sith.service";
import { Link } from "react-router-dom";

export default function ForceUserCardGenerator() {
  const location = useLocation().pathname;
  const [forceUsers, setForceUsers] = useState([""]);

  useEffect(() => {
    if (location === "/lightSide") {
      getAllJedis().then((element) => {
        let jedis = Object.values(element);
        setForceUsers(jedis);
      });
    } else if (location === "/darkSide") {
      getAllSiths().then((element) => {
        let siths = Object.values(element);
        setForceUsers(siths);
      });
    }
  }, []);

  return (
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
            <Button>
              <Link to="/register">
                <AddBoxIcon />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </>
    </Grid>
  );
}
