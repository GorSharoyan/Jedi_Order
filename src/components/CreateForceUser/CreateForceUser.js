import { React, useState, useContext } from "react";
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

//utils
import forceUserValidation from "../../Utils/forceUserValidation.helper";

let useStyles = makeStyles({
  // formik: {
  //   border: "3px solid green",
  // },
});

export default function CreateForceUser({ legacy }) {
  let history = useHistory();
  let classes = useStyles();

  let generateForceUserId = (n) => {
    return _.uniqueId(`@${n}`);
  };

  return (
    <Formik
      initialValues={{
        forceSide: legacy,
        name: "",
        rank: "",
        age: "",
        race: "",
        combat_style: "",
        bio: "",
        profileImage: "",
      }}
      validate={(values) => {
        return forceUserValidation(values);
      }}
      onSubmit={(values) => {
        if (legacy === "jedi") {
          createJedi(values, generateForceUserId("jedi"));
          history.push("/");
        } else if (legacy === "sith") {
          createSith(values, generateForceUserId("sith"));
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
            activeStepThree={<RatingBar legacy={legacy} />}
            handleFormSubmit={props.handleSubmit}
          />
        </form>
      )}
    </Formik>
  );
}
