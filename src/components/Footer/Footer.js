import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import "./Footer.css";

/*Icons*/
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#aaa",
  },
  container: {
    flexDirection: "row",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        Your custom footer
        <div className={classes.container}>
          <ul>
            <li>
              <LocationOnIcon />
            </li>
            <li>
              <PhoneIcon />
            </li>
            <li>
              <MailIcon />
            </li>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <GitHubIcon />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
