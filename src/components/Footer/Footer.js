import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
// import "./Footer.css";
//UI
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

//components
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#aaa",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    border: "solid green",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Your custom footer
      <div className={classes.container}>
        <div>
          <ul>
            <li>
              <LocationOnIcon />
              AnyWare,Yerevan,Armenia
            </li>
            <li>
              <PhoneIcon />
              +374 95 01 02 48
            </li>
            <li>
              <MailIcon />
              gor.sharoyan95@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <SocialMediaBar />
        </div>
      </div>
    </div>
  );
}
