import React from "react";

//UI
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/core";

let useStyles = makeStyles((theme) => ({
  button: {
    border: "3px solid green",
  },
}));

export default function StepperButtons({
  steps,
  activeStep,
  handleNext,
  handleFormSubmit,
}) {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {activeStep === steps.lenth - 1 ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
            onSubmit={handleFormSubmit}
          >
            Finish
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            <NavigateNextIcon />
          </Button>
        )}
      </Grid>
    </div>
  );
}
