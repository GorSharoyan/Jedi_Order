import React from "react";

//components
import ForceUserCardGenerator from "../../components/ForceUserCardGenerator/ForceUserCardGenerator";
import ForceUserForm from "../../components/ForceUserForm/ForceUserForm";

export default function LightSide() {
  return (
    <div>
      Jedis are here
      <ForceUserForm />
      <ForceUserCardGenerator />
    </div>
  );
}
