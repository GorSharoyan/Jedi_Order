import { React, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

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
  //imported hooks
  let history = useHistory();
  let classes = useStyles();
  //my hooks
  const [errorMessage, setErrorMessage] = useState(true);
  const [forceUserId, setForceUserId] = useState("");

  console.log(forceUserId);

  // let [error, setError] = useState(false);
  // console.log(legacy);
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

  let generateForceUserId = (n) => {
    return _.uniqueId(`@${n}`);
  };

  useEffect(() => {
    switch (legacy) {
      case "jedi":
        setForceUserId(generateForceUserId("jedi"));
        break;
      case "sith":
        setForceUserId(generateForceUserId("sith"));
        break;
    }
  }, []);

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
        switch (legacy) {
          case "jedi":
            values.Id = forceUserId;
            createJedi(values, forceUserId);
            break;
          case "sith":
            values.Id = forceUserId;
            createSith(values, forceUserId);
            break;
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
            activeStepTwo={
              <ImageUpload
                forceUserId={forceUserId}
                legacy={legacy}
                profileImage={props.values.profileImage}
              />
            }
            activeStepThree={<RatingBar legacy={legacy} />}
            handleFormSubmit={props.handleSubmit}
          />
        </form>
      )}
    </Formik>
  );
}
