import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

//lodash
import _ from "lodash";

//UI
import { Grid, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SchoolIcon from "@material-ui/icons/School";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import VisibilityIcon from "@material-ui/icons/Visibility";

//services
import { createJedi } from "../../services/FirebaseServices/jedi.service";
import { createSith } from "../../services/FirebaseServices/sith.service";

let useStyles = makeStyles({
  formField: {
    display: "flex",
    flexDirection: "row",
    textAlign: "baseline",
    padding: "3px",
    justifyContent: "",
    width: "1500px",
  },
  textField: {
    padding: "10px",
  },
});

export default function ForceUserForm() {
  let classes = useStyles();
  let location = useLocation().pathname;

  return (
    <Formik
      initialValues={{
        name: "",
        rank: "",
        age: "",
        race: "",
        combat_style: "",
        bio: "",
      }}
      onSubmit={(values) => {
        if (location === "/lightSide") {
          createJedi(values, _.uniqueId("@jedi"));
          console.log("Jedi is created");
          console.log(location);
        } else if (location === "/darkSide") {
          createSith(values, _.uniqueId("@sith"));
          console.log("Sith is created");
        }
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <div className={classes.formField}>
              <AssignmentIndIcon fontSize="large" />
              <TextField
                className={classes.textField}
                label="name"
                id="outlined-basic"
                type="text"
                variant="outlined"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
            </div>
            <div className={classes.formField}>
              <SchoolIcon fontSize="large" />
              <TextField
                className={classes.textField}
                label="rank"
                id="outlined-basic"
                type="text"
                variant="outlined"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.rank}
                name="rank"
              />
              {props.errors.rank && (
                <div id="feedback">{props.errors.rank}</div>
              )}
            </div>
            <div className={classes.formField}>
              <ChildCareIcon fontSize="large" />
              <TextField
                className={classes.textField}
                label="age"
                id="outlined-basic"
                type="text"
                variant="outlined"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.age}
                name="age"
              />
              {props.errors.age && <div id="feedback">{props.errors.age}</div>}
            </div>
            <div className={classes.formField}>
              <FingerprintIcon fontSize="large" />
              <TextField
                className={classes.textField}
                label="race"
                id="outlined-basic"
                type="text"
                variant="outlined"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.race}
                name="race"
              />
              {props.errors.race && (
                <div id="feedback">{props.errors.race}</div>
              )}
            </div>
            <div className={classes.formField}>
              <SportsHandballIcon fontSize="large" />
              <TextField
                className={classes.textField}
                label="combat style"
                id="outlined-basic"
                type="text"
                variant="outlined"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.combat_style}
                name="combat_style"
              />
              {props.errors.combat_style && (
                <div id="feedback">{props.errors.combat_style}</div>
              )}
            </div>
            <div className={classes.formField}>
              <VisibilityIcon fontSize="large" />
              <TextField
                className={classes.textField}
                label="The Great Power in you,I sense"
                id="outlined-basic"
                type="text"
                variant="outlined"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.bio}
                name="bio"
                rows={14}
              />
              {props.errors.bio && <div id="feedback">{props.errors.bio}</div>}
            </div>
            <div className={classes.formField}>
              <Button
                variant="contained"
                color="primary"
                onClick={props.handleSubmit}
              >
                <Link to="/">Create the Force User</Link>
              </Button>
            </div>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
