import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";

//UI
import { Card } from "@material-ui/core";

//components
import ForceUserCard from "../ForceUserCard/ForceUserCard";

//services
import { getAllJedis } from "../../services/FirebaseServices/jedi.service";
import { getAllSiths } from "../../services/FirebaseServices/sith.service";

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

        // console.log(forceUser);
      });
    }
  }, []);

  return forceUsers.map((element) => {
    return (
      <ForceUserCard
        name={element.name}
        rank={element.rank}
        bio={element.bio}
      />
    );
  });
}
