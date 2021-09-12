import { React, useState } from "react";
import { Formik } from "formik";
// import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";

//lodash
import _ from "lodash";

//UI
import { makeStyles } from "@material-ui/core/styles";

//components
import ForceUserForm from "../ForceUserForm/ForceUserForm";
import ProfileStepper from "../ProfileStepper/ProfileStepper";
import ImageUpload from "../ImageUpload/ImageUpload";
import RatingBar from "../RatingBar/RatingBar";

//services
import { createJedi } from "../../services/firebaseServices/jedi.service";
import { createSith } from "../../services/firebaseServices/sith.service";

import { pathLocation } from "../ForceUserCardGenerator/ForceUserCardGenerator";

let useStyles = makeStyles({
  formik: {
    border: "3px solid green",
  },
});

export default function CreateForceUser() {
  let forceUserId = _.uniqueId("@");
  let history = useHistory();
  let classes = useStyles();

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
        console.log(pathLocation);
        if (pathLocation === ",/lightSide") {
          createJedi(values, forceUserId);
          console.log("Jedi is created");
          history.push("/");
        } else if (pathLocation === ",/darkSide") {
          createSith(values, forceUserId);
          console.log("Sith is created");
          history.push("/");
        }
      }}
    >
      {(props) => (
        <form className={classes.formik} onSubmit={props.handleSubmit}>
          <ProfileStepper
            activeStepOne={
              <ForceUserForm
                handleBlur={props.handleBlur}
                handleChange={props.handleChange}
                values={props.values}
                errors={props.errors}
              />
            }
            activeStepTwo={<ImageUpload />}
            activeStepThree={<RatingBar />}
            handleFormSubmit={props.handleSubmit}
          />
        </form>
      )}
    </Formik>
  );
}
