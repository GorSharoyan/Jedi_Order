import React from "react";

//UI
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

//components
import CopyRightBar from "../CopyRightBar/CopyRightBar";

//ReactRouter
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
  },
  element: {
    padding: "3px",
  },
});

export default function SocialMediaBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <FacebookIcon className={classes.element} />
        <LinkedInIcon className={classes.element} />
        <TwitterIcon className={classes.element} />
        <GitHubIcon className={classes.element} />
      </div>
      <div>
        <CopyRightBar className={classes.element} />
      </div>
    </div>
  );
}
