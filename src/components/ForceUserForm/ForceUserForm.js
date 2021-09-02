import { React, useState } from "react";
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

//components
import StepperButtons from "../StepperButtons/StepperButtons";
import CreateForceUser from "../CreateForceUser/CreateForceUser";
import ImageUpload from "../ImageUpload/ImageUpload";

//services
import {
  createJedi,
  getJediUserImageUrl,
} from "../../services/firebaseServices/jedi.service";
import { createSith } from "../../services/firebaseServices/sith.service";
import { uploadJediImage } from "../../services/firebaseServices/jedi.service";
import { uploadSithImage } from "../../services/firebaseServices/sith.service";
import ProfileStepper from "../ProfileStepper/ProfileStepper";

let useStyles = makeStyles({
  formField: {
    display: "flex",
    flexDirection: "row",
    textAlign: "baseline",
    padding: "3px",
    justifyContent: "",
    // width: "10px",
  },
  textField: {
    padding: "10px",
  },
  formik: {
    border: "3px solid green",
  },
});

export default function ForceUserForm() {
  let classes = useStyles();
  let location = useLocation().pathname;
  let steps = getSteps();

  function getSteps() {
    return ["Create Force User", "Upload an Image", "Rate US"];
  }

  return (
    <Formik
      initialValues={{
        name: "",
        rank: "",
        age: "",
        race: "",
        combat_style: "",
        bio: "",
        profileImage: "",
      }}
      onSubmit={(values) => {
        if (location === "/lightSide") {
          createJedi(values, _.uniqueId("@jedi"));
          console.log("Jedi is created");
        } else if (location === "/darkSide") {
          createSith(values, _.uniqueId("@sith"));
          console.log("Sith is created");
        }
      }}
    >
      {(props) => (
        <form className={classes.formik} onSubmit={props.handleSubmit}>
          <ProfileStepper
            steps={steps}
            activeStepOne={
              <CreateForceUser
                handleBlur={props.handleBlur}
                handleChange={props.handleChange}
                name={props.values.name}
                rank={props.values.rank}
                combat_style={props.values.combat_style}
                bio={props.values.bio}
                race={props.values.race}
              />
            }
            activeStepTwo={<ImageUpload />}
            handleFormSubmit={props.handleSubmit}
          />
        </form>
      )}
    </Formik>
  );
}
