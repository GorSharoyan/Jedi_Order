import React from "react";

//UI
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

let useStyles = makeStyles((theme) => ({
  buttons: {
    padding: "50px",
  },
}));

export default function StepperButtons({
  steps,
  activeStep,
  handleNext,
  handleFormSubmit,
  handleBack,
  children,
}) {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <>
          <Button
            variant="contained"
            color="primary"
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            <ArrowBackIosIcon />
          </Button>
        </>
        <div className={classes.buttons}>{children}</div>
        <>
          {activeStep === 2 ? (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleFormSubmit}
            >
              Finish
            </Button>
          ) : activeStep === 1 ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              <NavigateNextIcon />
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={(handleFormSubmit, handleNext)}
              className={classes.button}
            >
              <NavigateNextIcon />
            </Button>
          )}
        </>
      </Grid>
    </div>
  );
}
// {activeStep === 0 ? (
//   <>
//     <Button
//       variant="contained"
//       color="primary"
//       disabled={activeStep === 0}
//       onClick={handleBack}
//       className={classes.button}
//     >
//       <ArrowBackIosIcon />
//     </Button>
//   </>
// ) : activeStep === 1 ? (
//   <Button
//     variant="contained"
//     color="primary"
//     onClick={handleNext}
//     className={classes.button}
//   >
//     <NavigateNextIcon />
//   </Button>
// ) : activeStep === 2 ? (
//   <Button
//     variant="contained"
//     color="primary"
//     className={classes.button}
//     onClick={handleFormSubmit}
//   >
//     Finish
//   </Button>
// ) : (
//   <></>
// )}
