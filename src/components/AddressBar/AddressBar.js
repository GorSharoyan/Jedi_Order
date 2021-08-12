import React from "react";

//UI
import { makeStyles } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
  },
  line: {
    display: "flex",
    flexDirection: "row",
    padding: "3px",
    textAlign: "center",
  },
  element: {
    padding: "2px",
  },
}));

export default function AddressBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ul>
        <li className={classes.line}>
          <LocationOnIcon className={classes.element} />
          AnyWare,Yerevan,Armenia
        </li>
        <li className={classes.line}>
          <PhoneIcon className={classes.element} />
          +374 95 01 02 48
        </li>
        <li className={classes.line}>
          <MailIcon className={classes.element} />
          gor.sharoyan95@gmail.com
        </li>
      </ul>
    </div>
  );
}
