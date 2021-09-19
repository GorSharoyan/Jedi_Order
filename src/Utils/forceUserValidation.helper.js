const forceUserValidation = (values) => {
  const errors = {};
  const iterableValues = Object.values(values);
  for (let i = 0; i < iterableValues.length; i++) {
    console.log(iterableValues[i]);
    if (iterableValues[i] === "") {
      errors.iterableValues[i] = "required";
    }
    return errors;
  }
};
export default forceUserValidation;
