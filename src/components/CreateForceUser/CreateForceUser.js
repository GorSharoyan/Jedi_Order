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
import { pathLocation } from "../ForceUserCardGenerator/ForceUserCardGenerator";
import Context from "../../services/context.service.js/context";

let useStyles = makeStyles({
  formik: {
    border: "3px solid green",
  },
});

export default function CreateForceUser() {
  let history = useHistory();
  let classes = useStyles();
  let legacy = useContext(Context);

  let generateForceUserId = (n) => {
    return _.uniqueId(`@${n}`);
  };

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
        if (legacy === "jedi") {
          console.log("ilav");
          createJedi(values, generateForceUserId("jedi"));
          history.push("/");
        } else if (legacy === "sith") {
          console.log("ilav");
          createSith(values, generateForceUserId("sith"));
          history.push("/");
        }
        // console.log(pathLocation);
        // if (pathLocation === ",/lightSide") {
        //   createJedi(values, forceUserId);
        //   console.log("Jedi is created");
        //   history.push("/");
        // } else if (pathLocation === ",/darkSide") {
        //   createSith(values, forceUserId);
        //   console.log("Sith is created");
        //   history.push("/");
        // }
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
