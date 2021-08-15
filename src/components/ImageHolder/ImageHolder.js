import React from "react";
import { useState } from "react";
import { useEffect } from "react";
//services
import { getSithImage } from "../../services/FirebaseServices/sith.service";

export default function ImageHolder() {
  const [section, setSecton] = useState("");

  useEffect(getSithImage, []);

  return <div></div>;
}
