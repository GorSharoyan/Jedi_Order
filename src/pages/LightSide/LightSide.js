import React from "react";
import ForceUserCardGenerator from "../../components/ForceUserCardGenerator/ForceUserCardgGenerator";
//comonents
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
