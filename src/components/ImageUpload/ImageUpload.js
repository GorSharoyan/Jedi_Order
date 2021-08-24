import React from "react";
import { useState } from "react";
import styles from "./ImageUpload.css";

//UI
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

//services
import { uploadJediImage } from "../../services/firebaseServices/jedi.service";
import { getJediUserImageUrl } from "../../services/firebaseServices/jedi.service";
import { updateJediProfileInfo } from "../../services/firebaseServices/jedi.service";
import { uploadSithImage } from "../../services/firebaseServices/sith.service";
import { getSithUserImageUrl } from "../../services/firebaseServices/sith.service";
import { updateSithProfileInfo } from "../../services/firebaseServices/sith.service";

let useStyles = makeStyles({
  root: {
    border: "5px solid green",
  },
});

export default function ImageUpload() {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);

  const handleImageInput = async ({ target: { files } }) => {
    let img = files[0];
    await setImage(img);
    await setImageUrl(await getJediUserImageUrl(image));
  };

  const handleImageUpload = async () => {
    try {
      await uploadJediImage(image);
      updateJediProfileInfo("@jedi1", "profileImage", imageUrl);
      console.log(imageUrl);
    } catch {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <label for="upload">
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
          onClick={handleImageUpload}
        >
          Upload
        </Button>
      </label>
      <input
        accept="image/*"
        id="upload"
        type="file"
        onChange={handleImageInput}
      />
    </div>
  );
}
