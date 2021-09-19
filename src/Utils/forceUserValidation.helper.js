export default validateForceUser = (values) => {
  const errors = {};
  if (values.name === "") {
    errors.name = "required";
  }
  if (values.rank === "") {
    errors.rank = "required";
  }
  if (values.age === "") {
    errors.age = "required";
  }
  if (values.race === "") {
    errors.race = "required";
  }
  if (values.combat_style === "") {
    errors.combat_style = "required";
  }
  if (values.bio === "") {
    errors.bio = "required";
  }
};
