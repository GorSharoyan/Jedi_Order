import React from "react";

//UI
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

//components
import StepperButtons from "../StepperButtons/StepperButtons";

const useStyles = makeStyles((theme) => ({
  step: {
    padding: "15px",
  },
  button: {
    // marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function ProfileStepper({
  activeStepOne,
  activeStepTwo,
  activeStepThree,
  handleFormSubmit,
}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  let steps = getSteps();

  function getSteps() {
    return ["Create Force User", "Upload an Image", "Rate US"];
  }

  console.log("active Step", activeStep);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            <ArrowBackIosIcon />
          </Button>
          <Typography className={classes.step}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {activeStep === 0
                ? activeStepOne
                : activeStep === 1
                ? activeStepTwo
                : activeStepThree}
            </Grid>
          </Typography>
          <StepperButtons
            steps={steps}
            activeStep={activeStep}
            handleNext={handleNext}
            handleFormSubmit={handleFormSubmit}
          />
        </Grid>
      </div>
    </div>
  );
}
