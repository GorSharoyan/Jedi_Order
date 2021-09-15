import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
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

export default function ForceUserCardGenerator() {
  //imported hooks
  const location = useLocation().pathname;
  let history = useHistory();
  //my hooks
  const [forceUsers, setForceUsers] = useState([""]);
  const [forceUserSide, setForceUserSide] = useState("");
  const [click, setClick] = useState(0);

  function handleOnClick() {
    setClick(1);
    // history.push(`/register`);
  }

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
    // <ForceUserSideHookParent>
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
          {/* <p>Join the {location}</p> */}
          <CardContent>
            {/* <CreateForceUser /> */}
            <Button onClick={handleOnClick}>
              {click === 0 ? (
                <AddBoxIcon />
              ) : click === 1 ? (
                <CreateForceUser legacy={forceUserSide} />
              ) : (
                <>.</>
              )}
            </Button>
          </CardContent>
        </Card>
      </>
    </Grid>
    // {/* </ForceUserSideHookParent> */}
  );
}
