import React from "react";
import { Link } from "react-router-dom";
//UI
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

//components
import CopyRightBar from "../CopyRightBar/CopyRightBar";

//constants
import {
  fbLink,
  linkedInLink,
  gitHubLink,
  instagramLink,
} from "../../constants/userConstants";

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
        <Link to={fbLink}>
          <FacebookIcon className={classes.element} />
        </Link>
        <Link to={linkedInLink}>
          <LinkedInIcon className={classes.element} />
        </Link>
        <Link to={instagramLink}>
          <InstagramIcon className={classes.element} />
        </Link>
        <Link to={gitHubLink}>
          <GitHubIcon className={classes.element} />
        </Link>
      </div>
      <div>
        <CopyRightBar className={classes.element} />
      </div>
    </div>
  );
}
