import { React, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

//Formik
import { Formik } from "formik";
import { useFormik } from "formik";

// import { useLocation } from "react-router";

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
import { forceUserValidationSchema } from "../../Utils/forceUserValidation.helper";

let useStyles = makeStyles({
  // formik: {
  //   border: "3px solid green",
  // },
});

export default function CreateForceUser({ legacy }) {
  let history = useHistory();
  let classes = useStyles();
  let [errorMessage, setErrorMessage] = useState(true);
  // let [error, setError] = useState(false);

  let generateForceUserId = (n) => {
    return _.uniqueId(`@${n}`);
  };
  // const handleErrorMessage = (values) => {
  //   let valuesImported = Object.values(values).includes("");
  //   console.log(valuesImported);
  //   if (valuesImported) {
  //     setErrorMessage(true);
  //   }
  //   if (!valuesImported) {
  //     setErrorMessage(false);
  //   }
  // };
  return (
    <Formik
      initialValues={{
        Id: "",
        forceSide: legacy,
        name: "",
        rank: "",
        age: "",
        race: "",
        combat_style: "",
        bio: "",
        profileImage: "",
      }}
      validationSchema={forceUserValidationSchema}
      onSubmit={(values) => {
        if (legacy === "jedi") {
          values.Id = generateForceUserId("jedi");
          createJedi(values, generateForceUserId("jedi"));
          history.push("/");
        } else if (legacy === "sith") {
          values.Id = generateForceUserId("sith");
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
                errorMessage={errorMessage}
              />
            }
            activeStepTwo={<ImageUpload legacy={legacy} />}
            activeStepThree={<RatingBar legacy={legacy} />}
            handleFormSubmit={props.handleFormSubmit}
          />
        </form>
      )}
    </Formik>
  );
}
