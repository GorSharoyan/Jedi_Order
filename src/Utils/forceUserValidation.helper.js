import * as Yup from "yup";

//forceUservalidation Yup schema

export const forceUserValidationSchema = Yup.object({
  name: Yup.string().required("Required"),
  rank: Yup.string().required("Required"),
  age: Yup.string().required("Required"),
  race: Yup.string().required("Required"),
  combat_style: Yup.string().required("Required"),
  bio: Yup.string().min(15).max(200).required("Required"),
});

//forceUserValidation function
const forceUserValidation = (values) => {
  const errors = {};
  const iterableValues = Object.keys(values);
  for (let i = 0; i < iterableValues.length; i++) {
    console.log(iterableValues[i]);
    if (iterableValues[i] === "") {
      errors.iterableValues[i] = "required";
    }
    return errors;
  }
};
export default forceUserValidation;
