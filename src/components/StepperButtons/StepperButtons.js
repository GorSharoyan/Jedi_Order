import React from "react";
import { useHistory } from "react-router";

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
  //imported hooks
  const classes = useStyles();
  const history = useHistory();
  console.log(activeStep);

  async function handleSubmitFormData() {
    await handleFormSubmit();
    await handleNext();
  }

  function handleForceUserCreation() {
    history.push("/");
  }

  switch (activeStep) {
    case 0:
      return (
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitFormData}
              className={classes.button}
            >
              <NavigateNextIcon />
            </Button>
          </>
        </Grid>
      );
    case 1:
      return (
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              <NavigateNextIcon />
            </Button>
          </>
        </Grid>
      );
    case 2:
      return (
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
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleForceUserCreation}
            >
              Finish
            </Button>
          </>
        </Grid>
      );
  }
}

// return (

//     <Grid
//       container
//       direction="row"
//       justifyContent="space-between"
//       alignItems="center"
//     >
//       <>
//         <Button
//           variant="contained"
//           color="primary"
//           disabled={activeStep === 0}
//           onClick={handleBack}
//           className={classes.button}
//         >
//           <ArrowBackIosIcon />
//         </Button>
//       </>
//       <div className={classes.buttons}>{children}</div>
//       <>
//         {activeStep === 2 ? (
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.button}
//             onClick={handleFormSubmit}
//           >
//             Finish
//           </Button>
//         ) : activeStep === 1 ? (
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={submitFormData}
//             className={classes.button}
//           >
//             <NavigateNextIcon />
//           </Button>
//         ) : (
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleNext}
//             className={classes.button}
//           >
//             <NavigateNextIcon />
//           </Button>
//         )}
//       </>
//     </Grid>
//   </div>
// );
