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
          label="name"
          id="outlined-basic"
          type="text"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          error={errors.name}
          name="name"
        />
        {errors.name && <div id="feedback">{errors.name}</div>}
      </div>
      <div className={classes.formField}>
        <SchoolIcon fontSize="large" />
        <TextField
          className={classes.textField}
          label="rank"
          id="outlined-basic"
          type="text"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.rank}
          name="rank"
        />
        {errors.rank && <div id="feedback">{errors.rank}</div>}
      </div>
      <div className={classes.formField}>
        <ChildCareIcon fontSize="large" />
        <TextField
          className={classes.textField}
          label="age"
          id="outlined-basic"
          type="text"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
          name="age"
        />
        {errors.age && <div id="feedback">{errors.age}</div>}
      </div>
      <div className={classes.formField}>
        <FingerprintIcon fontSize="large" />
        <TextField
          className={classes.textField}
          label="race"
          id="outlined-basic"
          type="text"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.race}
          name="race"
        />
        {errors.race && <div id="feedback">{errors.race}</div>}
      </div>
      <div className={classes.formField}>
        <SportsHandballIcon fontSize="large" />
        <TextField
          className={classes.textField}
          label="combat style"
          id="outlined-basic"
          type="text"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.combat_style}
          name="combat_style"
        />
        {errors.combat_style && <div id="feedback">{errors.combat_style}</div>}
      </div>
      <div className={classes.formField}>
        <VisibilityIcon fontSize="large" />
        <TextField
          className={classes.textField}
          label="The Great Power in you,I sense"
          id="outlined-basic"
          type="text"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.bio}
          name="bio"
          rows={14}
        />
        {errors.bio && <div id="feedback">{errors.bio}</div>}
      </div>
    </Grid>
  );
}
