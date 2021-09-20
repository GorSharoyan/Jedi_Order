import React from "react";

//UI
import { Grid, TextField } from "@material-ui/core";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SchoolIcon from "@material-ui/icons/School";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core";

let useStyles = makeStyles({
  formField: {
    display: "flex",
    flexDirection: "row",
    textAlign: "baseline",
    padding: "3px",
    justifyContent: "",
  },
  textField: {
    padding: "10px",
  },
  formik: {
    border: "3px solid green",
  },
});

export default function ForceUserForm({
  handleChange,
  handleBlur,
  values,
  errors,
}) {
  const classes = useStyles();

  return (
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
          name="name"
          label="Name"
          id="outlined-basic"
          type="text"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          error={errors.name}
        />
      </div>
      <div className={classes.formField}>
        <SchoolIcon fontSize="large" />
        <TextField
          className={classes.textField}
          name="rank"
          label="Rank"
          id="outlined-basic"
          type="text"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.rank}
          error={errors.rank}
        />
      </div>
      <div className={classes.formField}>
        <ChildCareIcon fontSize="large" />
        <TextField
          className={classes.textField}
          name="age"
          label="Age"
          id="outlined-basic"
          type="text"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
          error={errors.age}
        />
      </div>
      <div className={classes.formField}>
        <FingerprintIcon fontSize="large" />
        <TextField
          className={classes.textField}
          name="race"
          label="Race"
          id="outlined-basic"
          type="text"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.race}
          error={errors.race}
        />
      </div>
      <div className={classes.formField}>
        <SportsHandballIcon fontSize="large" />
        <TextField
          className={classes.textField}
          name="combat_style"
          label="Combat Style"
          id="outlined-basic"
          type="text"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.combat_style}
          error={errors.combat_style}
        />
      </div>
      <div className={classes.formField}>
        <VisibilityIcon fontSize="large" />
        <TextField
          className={classes.textField}
          name="bio"
          label="Great Power in You I Sense"
          id="outlined-basic"
          type="text"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.bio}
          error={errors.bio}
          rows={14}
        />
      </div>
    </Grid>
  );
}
