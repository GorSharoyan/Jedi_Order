import React from "react";

//UI
import { Grid } from "@material-ui/core";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SchoolIcon from "@material-ui/icons/School";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core";

//components
import FormField from "../FormField/FormField";

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
  errorMessage,
}) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <FormField
        name="name"
        label="Name"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        error={errors.name}
      >
        <AssignmentIndIcon fontSize="large" />
      </FormField>
      <FormField
        name="rank"
        label="Rank"
        type="Text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rank}
        error={errors.rank}
      >
        <SchoolIcon fontSize="large" />
      </FormField>
      <FormField
        name="age"
        label="Age"
        type="Number"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.age}
        error={errors.age}
      >
        <ChildCareIcon fontSize="large" />
      </FormField>
      <FormField
        name="race"
        label="Race"
        type="Text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.race}
        error={errors.race}
      >
        <FingerprintIcon fontSize="large" />
      </FormField>
      <FormField
        name="combat_style"
        label="combat_style"
        type="Text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.combat_style}
        error={errors.combat_style}
      >
        <SportsHandballIcon fontSize="large" />
      </FormField>
      <FormField
        name="bio"
        label="Bio"
        type="Text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.bio}
        error={errors.bio}
      >
        <VisibilityIcon fontSize="large" />
      </FormField>
      <div>{errorMessage}</div>
    </Grid>
  );
}
