import { React, useState } from "react";
import { Formik } from "formik";
import { useLocation } from "react-router";

//lodash
import _ from "lodash";

//UI
import { makeStyles } from "@material-ui/core/styles";

//components
import ForceUserForm from "../ForceUserForm/ForceUserForm";
import ProfileStepper from "../ProfileStepper/ProfileStepper";
import ImageUpload from "../ImageUpload/ImageUpload";

//services
import { createJedi } from "../../services/firebaseServices/jedi.service";
import { createSith } from "../../services/firebaseServices/sith.service";

let useStyles = makeStyles({
  formik: {
    border: "3px solid green",
  },
});

export default function CreateForceUser() {
  let classes = useStyles();
  let location = useLocation().pathname;

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
            activeStepOne={
              <ForceUserForm
                handleBlur={props.handleBlur}
                handleChange={props.handleChange}
                values={props.values}
                errors={props.errors}
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
