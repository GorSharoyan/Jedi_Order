import React from "react";
import { useFormik, Formik } from "formik";
import { Link } from "react-router-dom";

//UI
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default function ForceUserForm() {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <div>
            <h4>Name</h4>
            <TextField
              // label={country}
              id="outlined-basic"
              type="text"
              variant="outlined"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.description}
              name="position"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          </div>
          <div>
            <h4>Rank</h4>
            <TextField
              // label={country}
              id="outlined-basic"
              type="text"
              variant="outlined"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.description}
              name="position"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          </div>
          <div>
            <h4>Age</h4>
            <TextField
              // label={country}
              id="outlined-basic"
              type="text"
              variant="outlined"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.description}
              name="position"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          </div>
          <div>
            <h4>Race</h4>
            <TextField
              // label={country}
              id="outlined-basic"
              type="text"
              variant="outlined"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.description}
              name="position"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          </div>
          <div>
            <h4>Combat Style</h4>
            <TextField
              // label={country}
              id="outlined-basic"
              type="text"
              variant="outlined"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.description}
              name="position"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          </div>
          <div>
            <h4>Bio</h4>
            <TextField
              // label={country}
              id="outlined-basic"
              type="text"
              variant="outlined"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.description}
              name="position"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={props.handleSubmit}
            >
              <Link to="/">Submit</Link>
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}
