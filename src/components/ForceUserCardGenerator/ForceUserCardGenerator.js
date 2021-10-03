import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { generatePath } from "react-router";
import { useHistory } from "react-router";

//Lodash
import _ from "lodash";

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
  const history = useHistory();
  //my hooks
  const [forceUsers, setForceUsers] = useState([""]);
  const [forceUserSide, setForceUserSide] = useState("");
  const [click, setClick] = useState(0);

  function handleOnClick() {
    setClick(1);
  }

  useEffect(() => {
    switch (location) {
      case "/lightSide":
        getAllJedis().then((element) => {
          let jedis = Object.values(element);
          setForceUsers(jedis);
        });
        setForceUserSide("jedi");
        break;
      case "/darkSide":
        getAllSiths().then((element) => {
          let siths = Object.values(element);
          setForceUsers(siths);
        });
        setForceUserSide("sith");
        break;
    }
  }, []);

  return (
    <>
      {click === 0 ? (
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
                  handlePathGeneration={() => {
                    history.push(
                      generatePath("/forceUser/:id", {
                        id: element.Id,
                      })
                    );
                  }}
                />
              );
            })}
          </>
          <>
            <Card>
              <CardContent>
                <Button onClick={handleOnClick}>
                  <AddBoxIcon />
                </Button>
              </CardContent>
            </Card>
          </>
        </Grid>
      ) : (
        <CreateForceUser legacy={forceUserSide} />
      )}
    </>
  );
}
