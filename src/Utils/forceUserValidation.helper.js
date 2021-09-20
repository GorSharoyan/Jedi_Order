import * as Yup from "yup";

//forceUservalidation Yup schema

export const forceUserValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, "The Name is too short")
    .max(15, "The Name is too long")
    .required("Required"),
  rank: Yup.string().required("Required"),
  age: Yup.string().required("Required"),
  race: Yup.string().required("Required"),
  combat_style: Yup.string().required("Required"),
  bio: Yup.string()
    .min(15, "Bio Must be at least 15 characters long")
    .max(200, "Bio Should not exceed 200 characters ")
    .required("Required"),
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
