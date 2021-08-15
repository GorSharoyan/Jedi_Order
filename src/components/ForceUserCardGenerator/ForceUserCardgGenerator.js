import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";

//UI
import { Card } from "@material-ui/core";

//service
import { getAllJedis } from "../../services/FirebaseServices/jedi.service";
import { getAllSiths } from "../../services/FirebaseServices/sith.service";

export default function ForceUserCardGenerator() {
  const location = useLocation().pathname;
  const [forceUser, setForceUser] = useState([""]);

  useEffect(() => {
    if (location === "/lightSide") {
      getAllJedis().then((element) => {
        let jedis = Object.values(element);
        setForceUser(jedis);
      });
    } else if (location === "/darkSide") {
      getAllSiths().then((element) => {
        let siths = Object.values(element);
        setForceUser(siths);

        // console.log(forceUser);
      });
    }
  }, []);

  return (
    <Card>
      <p>Feel the force within you </p>
    </Card>
  );
}
