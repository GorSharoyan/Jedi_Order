import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
  },
  child: {
    padding: "5px",
  },
  textField: {
    width: "270px",
    height: "35px",
    borderRadius: "13px",
  },
  errorMessage: {
    color: "red",
  },
  formField: {
    dislay: "flex",
    flexDirection: "column",
  },
});

export default function FormField({
  name,
  label,
  type,
  onChange,
  onBlur,
  value,
  error,
  children,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.child}>{children}</div>
      <div className={classes.formField}>
        <input
          className={classes.textField}
          name={name}
          placeholder={label}
          id="outlined-basic"
          type={type}
          variant="outlined"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          error={error}
        />
        <div className={classes.errorMessage}>
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
}
